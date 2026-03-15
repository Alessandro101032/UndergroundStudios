(function(){
  const K = window.UXAuth.storageKeys;
  const sessionEmail = window.UXAuth.sessionEmail();
  if(!sessionEmail){
    // protect page
    window.location.href = './login.html';
    return;
  }

  function byId(id){ return document.getElementById(id); }
  function readProfile(){
    try{ return JSON.parse(localStorage.getItem(K.profile(sessionEmail))) || {}; }catch(e){ return {}; }
  }
  function saveProfile(p){ localStorage.setItem(K.profile(sessionEmail), JSON.stringify(p)); }

  // unit conversions
  function lbToKg(lb){ return lb * 0.45359237; }
  function kgToLb(kg){ return kg / 0.45359237; }
  function inToCm(i){ return i * 2.54; }
  function cmToIn(cm){ return cm / 2.54; }

  // UI units state and helpers
  let currUnits = { weight: 'kg', height: 'cm' };
  function setUnitLabels(){
    const w1 = document.getElementById('unitWeightLabel');
    const w2 = document.getElementById('unitWeightLabel2');
    const h1 = document.getElementById('unitHeightLabel');
    if(w1) w1.textContent = currUnits.weight;
    if(w2) w2.textContent = currUnits.weight;
    if(h1) h1.textContent = currUnits.height;
  }
  function convertValue(v, fromU, toU, kind){
    if(!Number.isFinite(v) || fromU===toU) return v;
    if(kind==='weight'){
      return toU==='kg' ? lbToKg(v) : kgToLb(v);
    } else if(kind==='height'){
      return toU==='cm' ? inToCm(v) : cmToIn(v);
    }
    return v;
  }

  function activityFactor(a){
    return {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    }[a] || 1.2;
  }

  function calcBMR({sex, weightKg, heightCm, age}){
    if(!(sex && weightKg>0 && heightCm>0 && age>0)) return 0;
    if(sex==='male') return Math.round(10*weightKg + 6.25*heightCm - 5*age + 5);
    return Math.round(10*weightKg + 6.25*heightCm - 5*age - 161);
  }

  function calcTarget({tdee, goal, custom}){
    if(!tdee) return 0;
    let target = tdee;
    if(goal==='cut') target -= 500;
    else if(goal==='bulk') target += 400; // default bulk
    if(Number.isFinite(custom) && custom!==0){ target = tdee + custom; }
    return Math.max(1000, Math.round(target));
  }

  function renderProfile(){
    const p = readProfile();
    byId('sex').value = p.sex || 'male';
    byId('age').value = p.age || '';

    const uW = (p.units && p.units.weight) || 'kg';
    const uH = (p.units && p.units.height) || 'cm';
    byId('unitsWeight').value = uW;
    byId('unitsHeight').value = uH;
    currUnits = { weight: uW, height: uH };
    setUnitLabels();

    let w = p.weightKg || 0; let h = p.heightCm || 0;
    if(uW==='lb' && w){ w = kgToLb(w); }
    if(uH==='in' && h){ h = cmToIn(h); }
    byId('weight').value = w ? w.toFixed(1) : '';
    byId('height').value = h ? h.toFixed(1) : '';

    byId('activity').value = p.activity || 'sedentary';
    byId('goal').value = p.goal || 'maintain';
    byId('kcalCustom').value = p.kcalCustom || '';

    // recalc
    recalcOutputs();
    renderLogs();
    renderMacros();
    drawChart();
  }

  function readInputsToProfile(){
    const sex = byId('sex').value;
    const age = parseInt(byId('age').value,10);
    const unitsWeight = byId('unitsWeight').value;
    const unitsHeight = byId('unitsHeight').value;
    let weight = parseFloat(byId('weight').value);
    let height = parseFloat(byId('height').value);
    if(unitsWeight==='lb' && Number.isFinite(weight)) weight = lbToKg(weight);
    if(unitsHeight==='in' && Number.isFinite(height)) height = inToCm(height);
    const activity = byId('activity').value;
    const goal = byId('goal').value;
    const kcalCustom = parseInt(byId('kcalCustom').value,10);

    const prev = readProfile();
    const p = Object.assign({}, prev, {
      sex, age,
      weightKg: Number.isFinite(weight) ? weight : prev.weightKg,
      heightCm: Number.isFinite(height) ? height : prev.heightCm,
      units: { weight: unitsWeight, height: unitsHeight },
      activity, goal,
      kcalCustom: Number.isFinite(kcalCustom) ? kcalCustom : undefined,
    });
    return p;
  }

  function recalcOutputs(){
    const p = readProfile();
    const bmr = calcBMR({ sex: p.sex, weightKg: p.weightKg, heightCm: p.heightCm, age: p.age });
    const tdee = Math.round(bmr * activityFactor(p.activity));
    const target = calcTarget({ tdee, goal: p.goal, custom: p.kcalCustom });
    byId('bmr').textContent = bmr || '-';
    byId('tdee').textContent = tdee || '-';
    byId('target').textContent = target || '-';
    // store calculated so macros can use
    const merged = Object.assign({}, p, { bmr, tdee, target });
    saveProfile(merged);
  }

  function renderLogs(){
    const p = readProfile();
    const logsEl = byId('logs');
    logsEl.innerHTML = '';
    const items = [];
    (p.weightHistory||[]).forEach(it=>{ items.push({dateISO: it.dateISO, text: `Greutate: ${it.weightKg.toFixed(1)} kg`}); });
    (p.kcalLogs||[]).forEach(it=>{ items.push({dateISO: it.dateISO, text: `Kcal: ${it.kcal} kcal`}); });
    items.sort((a,b)=> a.dateISO.localeCompare(b.dateISO));
    items.forEach(i=>{
      const div = document.createElement('div');
      div.className = 'log-item';
      div.textContent = `${i.dateISO}: ${i.text}`;
      logsEl.appendChild(div);
    });
  }

  function drawChart(){
    const p = readProfile();
    const data = (p.weightHistory||[]).slice().sort((a,b)=> a.dateISO.localeCompare(b.dateISO));
    const cv = byId('weightChart'); if(!cv) return; const ctx = cv.getContext('2d');
    ctx.clearRect(0,0,cv.width,cv.height);
    if(data.length < 2){
      ctx.fillStyle = '#666';
      ctx.fillText('Adaugă cel puțin două înregistrări de greutate pentru grafic.', 10, 20);
      return;
    }
    const padding = 40;
    const w = cv.width - padding*2;
    const h = cv.height - padding*2;
    const minW = Math.min(...data.map(d=>d.weightKg));
    const maxW = Math.max(...data.map(d=>d.weightKg));
    const range = Math.max(0.1, maxW - minW);

    // x mapping by index
    ctx.strokeStyle = '#e0e0e0';
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, padding+h);
    ctx.lineTo(padding+w, padding+h);
    ctx.stroke();

    ctx.strokeStyle = '#0077ff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    data.forEach((d, i)=>{
      const x = padding + (i/(data.length-1))*w;
      const y = padding + (1 - (d.weightKg - minW)/range) * h;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    });
    ctx.stroke();

    ctx.fillStyle = '#0077ff';
    data.forEach((d, i)=>{
      const x = padding + (i/(data.length-1))*w;
      const y = padding + (1 - (d.weightKg - minW)/range) * h;
      ctx.beginPath();
      ctx.arc(x,y,3,0,Math.PI*2);
      ctx.fill();
    });
  }

  // events
  document.addEventListener('DOMContentLoaded', ()=>{
    // ensure session present; navbar handled by auth.js
    renderProfile();

    // default log date today for convenience
    const ld = byId('logDate');
    if(ld && !ld.value){ ld.value = new Date().toISOString().slice(0,10); }

    // react to unit changes: update labels and convert visible inputs
    const uw = byId('unitsWeight');
    const uh = byId('unitsHeight');
    if(uw){
      uw.addEventListener('change', ()=>{
        const newU = uw.value;
        if(newU!==currUnits.weight){
          // convert visible inputs preserving meaning
          const wEl = byId('weight');
          const lwEl = byId('logWeight');
          const wVal = parseFloat(wEl.value);
          const lwVal = parseFloat(lwEl.value);
          if(Number.isFinite(wVal)) wEl.value = convertValue(wVal, currUnits.weight, newU, 'weight').toFixed(1);
          if(Number.isFinite(lwVal)) lwEl.value = convertValue(lwVal, currUnits.weight, newU, 'weight').toFixed(1);
          currUnits.weight = newU;
          setUnitLabels();
          // persist units selection
          const p = readProfile(); p.units = p.units||{}; p.units.weight = newU; saveProfile(p);
        }
      });
    }
    if(uh){
      uh.addEventListener('change', ()=>{
        const newU = uh.value;
        if(newU!==currUnits.height){
          const hEl = byId('height');
          const hVal = parseFloat(hEl.value);
          if(Number.isFinite(hVal)) hEl.value = convertValue(hVal, currUnits.height, newU, 'height').toFixed(1);
          currUnits.height = newU;
          setUnitLabels();
          const p = readProfile(); p.units = p.units||{}; p.units.height = newU; saveProfile(p);
        }
      });
    }

    byId('profileForm').addEventListener('submit', (e)=>{
      e.preventDefault();
      const p = readInputsToProfile();
      saveProfile(p);
      recalcOutputs();
      renderMacros();
      alert('Profil salvat');
    });

    byId('logForm').addEventListener('submit', (e)=>{
      e.preventDefault();
      const dateISO = byId('logDate').value || new Date().toISOString().slice(0,10);
      const wIn = byId('logWeight').value;
      const kIn = byId('logKcal').value;
      const prof = readProfile();
      prof.weightHistory = prof.weightHistory || [];
      prof.kcalLogs = prof.kcalLogs || [];
      if(wIn){
        let w = parseFloat(wIn);
        // convert to kg if UI in lb
        const uiW = byId('unitsWeight').value;
        if(uiW==='lb') w = lbToKg(w);
        prof.weightHistory.push({dateISO, weightKg: w});
        prof.weightKg = w; // update current
      }
      if(kIn){ prof.kcalLogs.push({dateISO, kcal: parseInt(kIn,10)}); }
      saveProfile(prof);
      recalcOutputs();
      renderLogs();
      drawChart();
      byId('logForm').reset();
    });

    byId('recalcMacros').addEventListener('click', ()=>{
      const p = readProfile();
      const proteinPerKg = parseFloat(byId('proteinPerKg').value) || 2;
      const fatPercent = parseFloat(byId('fatPercent').value) || 30;
      p.macros = { proteinPerKg, fatPercent };
      saveProfile(p);
      renderMacros();
    });

    byId('exportBtn').addEventListener('click', ()=>{
      const p = readProfile();
      const blob = new Blob([JSON.stringify(p, null, 2)], {type:'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `performx-profile-${sessionEmail}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });

    byId('importInput').addEventListener('change', (e)=>{
      const file = e.target.files && e.target.files[0];
      if(!file) return;
      const fr = new FileReader();
      fr.onload = ()=>{
        try{
          const data = JSON.parse(fr.result);
          // minimal validation
          if(typeof data !== 'object') throw new Error('Invalid JSON');
          saveProfile(data);
          renderProfile();
          alert('Profil importat');
        }catch(ex){ alert('Import invalid: '+ex.message); }
      };
      fr.readAsText(file);
    });
  });

  function renderMacros(){
    const p = readProfile();
    const target = p.target || 0;
    const weightKg = p.weightKg || 0;
    const proteinPerKg = (p.macros && p.macros.proteinPerKg) || parseFloat(byId('proteinPerKg').value) || 2;
    const fatPercent = (p.macros && p.macros.fatPercent) || parseFloat(byId('fatPercent').value) || 30;

    const proteinG = Math.round(Math.max(0, weightKg * proteinPerKg));
    const fatKcal = Math.round(target * (fatPercent/100));
    const fatG = Math.round(fatKcal / 9);
    const remainingKcal = Math.max(0, target - (proteinG*4 + fatG*9));
    const carbG = Math.round(remainingKcal / 4);

    byId('proteinG').textContent = isFinite(proteinG) ? proteinG : '-';
    byId('fatG').textContent = isFinite(fatG) ? fatG : '-';
    byId('carbG').textContent = isFinite(carbG) ? carbG : '-';
  }
})();
