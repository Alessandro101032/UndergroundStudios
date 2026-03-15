const MUSCLES = {
  front: [
    { id: 'chest',     name: 'Piept' },
    { id: 'shoulders', name: 'Umeri' },
    { id: 'biceps',    name: 'Biceps' },
    { id: 'abs',       name: 'Abdomen' },
    { id: 'quads',     name: 'Cvadriceps' },
    { id: 'calves',    name: 'Gambă' },
  ],
  back: [
    { id: 'traps',      name: 'Trapez' },
    { id: 'shoulders',  name: 'Umeri' },
    { id: 'back',       name: 'Spate' },
    { id: 'triceps',    name: 'Triceps' },
    { id: 'glutes',     name: 'Fese' },
    { id: 'hamstrings', name: 'Ischiori' },
    { id: 'calves',     name: 'Gambă' },
  ]
};

const ALL_MUSCLES = {
  chest:      { name: 'Piept' },
  shoulders:  { name: 'Umeri' },
  biceps:     { name: 'Biceps' },
  triceps:    { name: 'Triceps' },
  abs:        { name: 'Abdomen' },
  back:       { name: 'Spate' },
  traps:      { name: 'Trapez' },
  quads:      { name: 'Cvadriceps' },
  hamstrings: { name: 'Ischiori' },
  glutes:     { name: 'Fese' },
  calves:     { name: 'Gambă' },
};

const EXERCISES = {
  chest: [
    { name: 'Flotări clasice', icon: '🤸', diff: 'Începător', sets: '3', reps: '10–15', rest: '60s',
      desc: 'Exercițiu fundamental pentru piept. Palmele la lățimea umerilor, corpul drept ca o scândură.',
      tips: ['Coboară pieptul până aproape de sol', 'Menține abdomenul contractat tot timpul', 'Privește înainte, nu în jos', 'Expiră la împingere'] },
    { name: 'Flotări cu picioarele sus', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '8–12', rest: '90s',
      desc: 'Varianta inclinată care activează mai mult partea superioară a pieptului. Pune picioarele pe un scaun sau pat.',
      tips: ['Cu cât picioarele sunt mai sus, cu atât lucrezi mai mult umerii', 'Păstrează spatele drept', 'Mișcare controlată la coborâre'] },
    { name: 'Flotări cu mâinile apropiate', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '8–12', rest: '90s',
      desc: 'Mâinile sub piept, aproape una de alta. Activează intens tricepsul și pieptul interior.',
      tips: ['Nu lăsa coatele să iasă lateral', 'Coboară lent — 3 secunde', 'Ideal dacă vrei să progresezi spre flotări pe un braț'] },
    { name: 'Flotări archer', icon: '🤸', diff: 'Avansat', sets: '3', reps: '5–8/parte', rest: '120s',
      desc: 'Un braț împinge, celălalt se întinde lateral. Pregătire excelentă pentru flotarea pe un braț.',
      tips: ['Începe cu mișcare amplă și progresează spre extensie completă', 'Menține șoldurile paralele cu solul', 'Mișcare lentă și controlată'] },
    { name: 'Flotări explosive (clap)', icon: '🤸', diff: 'Avansat', sets: '3', reps: '5–8', rest: '120s',
      desc: 'Împinge suficient de puternic pentru a ridica mâinile de pe sol și a bate din palme.',
      tips: ['Aterizează moale, cu coatele ușor îndoite', 'Nu încerca fără o bază solidă de flotări clasice', 'Antrenează putere explozivă'] },
    { name: 'Flotări pe un braț (asistate)', icon: '🤸', diff: 'Avansat', sets: '3', reps: '3–6/parte', rest: '120s',
      desc: 'Sprijin ușor cu celălalt braț pe genunchi pentru a reduce greutatea.',
      tips: ['Construiește progresiv din archer push-ups', 'Corpul drept, nu răsucit', 'Controlează coborârea — este la fel de importantă'] },
  ],
  shoulders: [
    { name: 'Pike Push-up', icon: '🤸', diff: 'Începător', sets: '3', reps: '8–12', rest: '60s',
      desc: 'Poziție de V inversat, coboară capul între mâini. Cel mai bun exercițiu de bază pentru umeri fără echipament.',
      tips: ['Fesele sus, formezi un V cu corpul', 'Coatele se duc ușor în afară', 'Privește spre picioare'] },
    { name: 'Pike Push-up cu picioarele sus', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '6–10', rest: '90s',
      desc: 'Picioarele pe o suprafață înălțată, corpul mai vertical. Tranziție spre handstand push-up.',
      tips: ['Cu cât suprafața e mai înaltă, cu atât e mai dificil', 'Menține corpul drept', 'Mișcare lentă la coborâre'] },
    { name: 'Handstand Hold (perete)', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '20–40s', rest: '90s',
      desc: 'Stai în mâini sprijinit de perete. Construiește forța și stabilitatea umerilor.',
      tips: ['Burtă spre perete pentru siguranță la început', 'Contractă tot corpul', 'Privește spre sol'] },
    { name: 'Handstand Push-up (perete)', icon: '🤸', diff: 'Avansat', sets: '3', reps: '3–8', rest: '120s',
      desc: 'Flotare în mâini cu picioarele pe perete. Exercițiu complet pentru deltoid.',
      tips: ['Pornește din handstand hold consolidat', 'Coboară lent, capul între mâini', 'Nu ceda brusc la coborâre'] },
    { name: 'Lateral raise improvizat', icon: '🤸', diff: 'Începător', sets: '3', reps: '15–20', rest: '45s',
      desc: 'Ridică brațele lateral ținând sticle de apă pline sau orice obiect ușor de acasă.',
      tips: ['Dacă nu ai nimic, execută cu rezistență imaginară — contracție maximă', 'Menține coatele ușor îndoite', 'Mișcare lentă'] },
  ],
  biceps: [
    { name: 'Chin-up (bară sau ușă)', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '5–10', rest: '90s',
      desc: 'Tracțiuni cu priza supinată (palmele spre tine). Cel mai bun exercițiu calisthenics pentru biceps.',
      tips: ['Poți folosi tocul ușii sau o bară improvizată', 'Coboară complet la fiecare repetare', 'Nu balansa corpul'] },
    { name: 'Bodyweight curl (sub masă)', icon: '🤸', diff: 'Începător', sets: '3', reps: '10–15', rest: '60s',
      desc: 'Stai sub o masă solidă, prinde marginea și ridică-ți corpul cu brațele îndoite (palmele spre tine).',
      tips: ['Cu cât corpul e mai orizontal, cu atât e mai dificil', 'Masă sau birou solid care nu se mișcă', 'Contracție maximă sus'] },
    { name: 'Isometric bicep hold', icon: '🤸', diff: 'Începător', sets: '3', reps: '30–45s', rest: '45s',
      desc: 'Împinge cu palma în sus sub o suprafață fixă (masă) creând tensiune izometrică în biceps.',
      tips: ['Forță maximă, fără mișcare', 'Respiră normal pe tot parcursul', 'Eficient surprinzător fără niciun echipament'] },
    { name: 'Towel curl', icon: '🤸', diff: 'Începător', sets: '3', reps: '12–15', rest: '60s',
      desc: 'Prinde un prosop în jurul piciorului unui scaun (așezat) și execută mișcarea de curl.',
      tips: ['Reglează rezistența apropiind sau depărtând scaunul', 'Menține coatele fixe pe lângă corp', 'Mișcare completă'] },
  ],
  triceps: [
    { name: 'Tricep dip (scaun)', icon: '🤸', diff: 'Începător', sets: '3', reps: '10–15', rest: '60s',
      desc: 'Mâinile pe marginea unui scaun, coboară și ridică corpul îndoind coatele înapoi.',
      tips: ['Coatele se duc direct înapoi, nu lateral', 'Spatele aproape de scaun', 'Picioarele întinse = mai dificil'] },
    { name: 'Flotări cu mâinile apropiate', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '10–15', rest: '90s',
      desc: 'Mâinile sub piept activează puternic tricepsul. Dublu beneficiu: piept + triceps.',
      tips: ['Degetele formează un triunghi (diamond push-up)', 'Coatele se duc înapoi, nu lateral', 'Controlează coborârea'] },
    { name: 'Overhead tricep extension (prosop)', icon: '🤸', diff: 'Începător', sets: '3', reps: '12–15', rest: '60s',
      desc: 'Ține un prosop deasupra capului cu ambele mâini și îndoaie coatele spre spate.',
      tips: ['Coatele fixe lângă cap', 'Mișcare completă de extensie', 'Rezistența o creezi tu — contractă puternic'] },
    { name: 'Pike push-up narrow', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '8–12', rest: '90s',
      desc: 'Varianta pike cu mâinile apropiate. Activează mai mult tricepsul față de varianta standard.',
      tips: ['V-ul corpului rămâne același', 'Coatele merg înapoi la coborâre', 'Mers lent = mai dificil'] },
  ],
  abs: [
    { name: 'Crunch', icon: '🤸', diff: 'Începător', sets: '3', reps: '15–20', rest: '45s',
      desc: 'Exercițiu clasic pentru abdomenul superior. Ridică umerii de pe sol contractând abdominalii.',
      tips: ['Nu trage de gât cu mâinile', 'Mișcare scurtă și controlată', 'Expiră la contracție'] },
    { name: 'Leg raises', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '10–15', rest: '60s',
      desc: 'Culcat pe spate, ridică picioarele drepte la 90° și coboară-le fără să atingă solul.',
      tips: ['Spatele lipit de sol tot timpul', 'Mișcare lentă la coborâre', 'Dacă e prea greu, îndoaie ușor genunchii'] },
    { name: 'Plank', icon: '🤸', diff: 'Începător', sets: '3', reps: '30–60s', rest: '45s',
      desc: 'Poziție statică pe antebrațe. Lucrează întregul core și stabilizatorii coloanei.',
      tips: ['Corp drept ca o scândură', 'Nu ridica fesele', 'Respiră constant, nu reții aerul'] },
    { name: 'Mountain climbers', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '20–30', rest: '60s',
      desc: 'Din poziție de flotare, aduce genunchii alternativ spre piept rapid. Cardio + abs.',
      tips: ['Șoldurile jos, nu ridicate', 'Ritmul poate fi crescut progresiv', 'Excelent și pentru cardio'] },
    { name: 'Bicycle crunch', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '20–30', rest: '60s',
      desc: 'Cot la genunchiul opus în mișcare alternativă. Activează oblicii și dreptul abdominal.',
      tips: ['Mișcare completă de rotație', 'Nu grăbi ritmul în detrimentul formei', 'Spatele jos pe sol'] },
    { name: 'L-sit (pe podea)', icon: '🤸', diff: 'Avansat', sets: '3', reps: '10–20s', rest: '90s',
      desc: 'Mâinile pe sol, ridică tot corpul cu picioarele drepte și orizontale. Forță extremă de core.',
      tips: ['Începe cu genunchii îndoiți', 'Progresează spre picioare întinse în timp', 'Umerii jos, nu ridicați'] },
    { name: 'Dragon flag (asistat)', icon: '🤸', diff: 'Avansat', sets: '3', reps: '5–8', rest: '120s',
      desc: 'Culcat pe spate, ridică corpul drept sprijinit pe umeri. Exercițiu de bază al lui Bruce Lee.',
      tips: ['Începe cu genunchii îndoiți', 'Mișcare extrem de lentă și controlată', 'Nu ceda brusc — coboară controlat'] },
    { name: 'Russian twist', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '20–30', rest: '60s',
      desc: 'Șezut cu picioarele ridicate ușor, rotații stânga-dreapta cu mâinile împreunate.',
      tips: ['Spatele la 45° față de sol', 'Picioarele pot fi pe sol dacă e prea greu', 'Rotație completă la fiecare parte'] },
  ],
  back: [
    { name: 'Pull-up (bară sau tocul ușii)', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '5–10', rest: '90s',
      desc: 'Tracțiune cu priza pronată (palmele depărtate). Exercițiu rege pentru spate.',
      tips: ['Coboară complet între repetări', 'Nu balansa — mișcare strictă', 'Scapulele jos la tragere'] },
    { name: 'Inverted row (sub masă)', icon: '🤸', diff: 'Începător', sets: '3', reps: '8–15', rest: '60s',
      desc: 'Sub o masă solidă, prinde marginea și trage pieptul spre ea. Varianta accesibilă a tracțiunii.',
      tips: ['Cu cât corpul e mai orizontal, cu atât e mai dificil', 'Pieptul atinge marginea mesei', 'Menține corpul drept'] },
    { name: 'Superman hold', icon: '🤸', diff: 'Începător', sets: '3', reps: '12–15', rest: '60s',
      desc: 'Culcat pe burtă, ridică brațele și picioarele simultan. Activează erectorii spinali.',
      tips: ['Privești spre sol, nu ridica capul forțat', 'Menține contracția 2s sus', 'Respiră normal'] },
    { name: 'Hyperextension improvizată', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '12–15', rest: '60s',
      desc: 'Coapsele pe marginea patului, cineva ține picioarele, coboară și ridică trunchiul.',
      tips: ['Mișcare la nivelul șoldului, nu al taliei', 'Nu ridica prea sus', 'Ideal cu un partener'] },
    { name: 'Archer row', icon: '🤸', diff: 'Avansat', sets: '3', reps: '6–10/parte', rest: '90s',
      desc: 'Inverted row cu un singur braț — celălalt se întinde lateral. Pregătire pentru one-arm pull-up.',
      tips: ['Din poziție de inverted row normal', 'Extinde progresiv un braț', 'Menține corpul drept'] },
  ],
  traps: [
    { name: 'Shrug cu rucsac', icon: '🤸', diff: 'Începător', sets: '3', reps: '15–20', rest: '45s',
      desc: 'Ține un rucsac plin în mâini și ridică umerii spre urechi. Simplu și eficient.',
      tips: ['Menține contracția 2s sus', 'Nu roti umerii — mișcare strictă sus-jos', 'Poți folosi orice obiect greu'] },
    { name: 'Farmer walk improvizat', icon: '🚶', diff: 'Intermediar', sets: '3', reps: '30–60s mers', rest: '60s',
      desc: 'Cară ceva greu (bidoane de apă, rucsac) în timp ce mergi. Activează trapezul și tot corpul.',
      tips: ['Spatele drept tot timpul', 'Pași controlați', 'Gâtul neutru — nu ridica umerii exagerat'] },
    { name: 'Face pull cu elastic/prosop', icon: '🤸', diff: 'Începător', sets: '3', reps: '15–20', rest: '45s',
      desc: 'Dacă ai un elastic sau prosop în jurul unui stâlp fix, trage spre față cu coatele sus.',
      tips: ['Coatele la nivelul umerilor sau mai sus', 'Mișcare completă spre față', 'Excelent pentru sănătatea umerilor'] },
  ],
  quads: [
    { name: 'Squat cu greutatea corpului', icon: '🤸', diff: 'Începător', sets: '3', reps: '15–20', rest: '60s',
      desc: 'Squat clasic fără greutăți. Baza oricărui program calisthenics pentru picioare.',
      tips: ['Genunchii urmează direcția degetelor', 'Coboară până coapsele sunt paralele cu solul', 'Călcâiele nu se ridică'] },
    { name: 'Bulgarian split squat', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '10–12/picior', rest: '90s',
      desc: 'Piciorul din spate pe scaun, coboară pe cel din față. Excelent pentru cvadriceps și echilibru.',
      tips: ['Genunchiul față nu depășește degetele', 'Trunchiul ușor aplecat înainte', 'Coboară controlat'] },
    { name: 'Squat jump', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '10–15', rest: '60s',
      desc: 'Squat cu săritură explozivă. Combină forța cvadricepsului cu puterea explozivă.',
      tips: ['Aterizare moale pe vârfuri apoi călcâie', 'Coboară direct în squat la aterizare', 'Nu bate genunchii la aterizare'] },
    { name: 'Pistol squat (asistat)', icon: '🤸', diff: 'Avansat', sets: '3', reps: '5–8/picior', rest: '120s',
      desc: 'Squat pe un picior. Ținând de un perete sau ușă pentru echilibru la început.',
      tips: ['Piciorul liber drept în față', 'Coboară cât poți fără să pierzi echilibrul', 'Progresia: asistat → liber'] },
    { name: 'Wall sit', icon: '🤸', diff: 'Începător', sets: '3', reps: '30–60s', rest: '60s',
      desc: 'Spatele pe perete, coapse paralele cu solul, ține poziția. Arde cvadricepsul intens.',
      tips: ['Genunchii la 90°', 'Spatele complet lipit de perete', 'Respiră regulat — nu reține aerul'] },
    { name: 'Step-up (scaun sau trepte)', icon: '🤸', diff: 'Începător', sets: '3', reps: '12–15/picior', rest: '60s',
      desc: 'Urcă și coboară un scaun sau treaptă alternând picioarele. Simplu dar eficient.',
      tips: ['Piciorul complet pe suprafață', 'Nu te împinge din piciorul de jos', 'Alternează sau lucrează fiecare picior separat'] },
  ],
  hamstrings: [
    { name: 'Nordic curl (asistat)', icon: '🤸', diff: 'Avansat', sets: '3', reps: '3–8', rest: '120s',
      desc: 'Genunchii pe sol, picioarele fixate sub o canapea. Coboară cu corpul drept cât poți.',
      tips: ['Cel mai eficient exercițiu pentru ischiori fără echipament', 'Folosește mâinile pentru a te opri la coborâre', 'Construiește progresiv'] },
    { name: 'Glute bridge cu accent ischiori', icon: '🤸', diff: 'Începător', sets: '3', reps: '15–20', rest: '60s',
      desc: 'Culcat pe spate, picioare mai depărtate. Contractă ischiorii la ridicare.',
      tips: ['Picioarele mai departe de corp activează mai mult ischiorii', 'Ridică lent — 2s sus, 2s jos', 'Menține contracția 1s sus'] },
    { name: 'Single leg deadlift (fără greutăți)', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '10–12/picior', rest: '60s',
      desc: 'Stai pe un picior și aplecă trunchiul înainte cu spatele drept. Activează ischiorii și fesele.',
      tips: ['Piciorul din spate drept și paralel cu solul', 'Spatele complet drept — nu rotunjit', 'Mergi lent pentru echilibru'] },
    { name: 'Good morning (fără bară)', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '15–20', rest: '60s',
      desc: 'Mâinile la ceafă, aplecare înainte din șold cu spatele drept. Activează ischiorii și lombarul.',
      tips: ['Genunchii ușor îndoiți', 'Mișcare din șold, nu din talie', 'Nu apleca prea jos inițial'] },
  ],
  glutes: [
    { name: 'Hip thrust (umerii pe canapea)', icon: '🤸', diff: 'Începător', sets: '3', reps: '15–20', rest: '60s',
      desc: 'Umerii pe marginea canapelei/patului, ridică șoldurile sus. Cel mai bun exercițiu pentru fese.',
      tips: ['Menține contracția 2s sus', 'Bărbia în piept — nu căuta tavanul', 'Picioarele la 90° față de șold sus'] },
    { name: 'Donkey kicks', icon: '🤸', diff: 'Începător', sets: '3', reps: '15–20/fesă', rest: '45s',
      desc: 'În patru labe, ridică un genunchi înapoi și sus. Izolat și eficient pentru fese.',
      tips: ['Spatele drept — nu se rotunjește', 'Menține contracția sus', 'Poți adăuga rezistență cu un elastic'] },
    { name: 'Glute bridge single leg', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '12–15/parte', rest: '60s',
      desc: 'Varianta pe un picior a hip thrust-ului clasic. Intensifică munca fiecărei fese separat.',
      tips: ['Piciorul celălalt ridicat drept', 'Șoldurile paralele la ridicare', 'Mișcare completă jos-sus'] },
    { name: 'Curtsy lunge', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '12–15/parte', rest: '60s',
      desc: 'Lunge în diagonală spre spate, ca la o plecăciune. Activează fesele medii mai mult ca lungeul clasic.',
      tips: ['Genunchiul din față la 90°', 'Spatele drept', 'Poți ține ceva greu în mâini pentru dificultate extra'] },
    { name: 'Fire hydrant', icon: '🤸', diff: 'Începător', sets: '3', reps: '15–20/parte', rest: '45s',
      desc: 'În patru labe, ridică genunchiul lateral. Activează abductorii și fesele.',
      tips: ['Nu roti șoldul — mișcare pură laterală', 'Menține contracția sus', 'Combină cu donkey kicks pentru circuit complet'] },
  ],
  calves: [
    { name: 'Calf raise (pe o treaptă)', icon: '🤸', diff: 'Începător', sets: '3', reps: '20–25', rest: '45s',
      desc: 'Stai cu jumătatea piciorului pe o treaptă și ridică-te pe vârfuri, lăsând călcâiul să coboare sub nivel.',
      tips: ['Amplitudine completă — sus și jos', 'Ține 1s în vârf pentru contracție maximă', 'Pe un picior = mult mai dificil'] },
    { name: 'Single leg calf raise', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '15–20/picior', rest: '60s',
      desc: 'Calf raise pe un singur picior. Dublu mai dificil decât varianta bilaterală.',
      tips: ['Sprijin ușor de perete pentru echilibru', 'Mișcare completă de amplitudine', 'Progresează spre varianta fără sprijin'] },
    { name: 'Jump rope imaginar', icon: '🤸', diff: 'Începător', sets: '3', reps: '60–90s', rest: '45s',
      desc: 'Simulează săriturile cu coarda fără coardă. Activează gambele și ridică pulsul.',
      tips: ['Ritmul poate fi crescut progresiv', 'Aterizare moale, pe vârfuri', 'Excelent ca încălzire sau finalizare'] },
    { name: 'Wall calf raise (cu presiune)', icon: '🤸', diff: 'Intermediar', sets: '3', reps: '20–30', rest: '60s',
      desc: 'Stai cu fața la perete, împinge-te cu degetele pe perete și ridică-te pe vârfuri.',
      tips: ['Forță mai mare contra peretelui = mai dificil', 'Controlează coborârea — 3 secunde', 'Poți merge până la eșec'] },
  ],
};

const S = '#1e1630', SS = '#4a3a6a', SC = '#252238', SCS = '#3d3560';

function frontSVG() {
  return `<svg width="200" height="430" viewBox="0 0 200 430" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="100" cy="36" rx="24" ry="28" fill="${SC}" stroke="${SCS}" stroke-width="1.2"/>
<rect x="92" y="60" width="16" height="14" rx="3" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<g class="mz" id="f-shoulders" data-id="shoulders" data-name="Umeri">
  <ellipse cx="61" cy="92" rx="19" ry="20" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
  <ellipse cx="139" cy="92" rx="19" ry="20" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
</g>
<path d="M70 74 Q52 82 49 122 L47 182 Q49 212 63 218 L80 220 L86 292 L99 292 L100 220 L101 292 L114 292 L120 220 L137 218 Q151 212 153 182 L151 122 Q148 82 130 74 Z" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<g class="mz" id="f-chest" data-id="chest" data-name="Piept">
  <path d="M76 82 Q100 77 124 82 Q130 100 127 118 Q113 124 100 122 Q87 124 73 118 Q70 100 76 82Z" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
  <line x1="100" y1="77" x2="100" y2="122" stroke="${SS}" stroke-width="0.8"/>
</g>
<g class="mz" id="f-abs" data-id="abs" data-name="Abdomen">
  <rect x="83" y="125" width="13" height="18" rx="4" fill="${S}" stroke="${SS}" stroke-width="1"/>
  <rect x="104" y="125" width="13" height="18" rx="4" fill="${S}" stroke="${SS}" stroke-width="1"/>
  <rect x="83" y="148" width="13" height="18" rx="4" fill="${S}" stroke="${SS}" stroke-width="1"/>
  <rect x="104" y="148" width="13" height="18" rx="4" fill="${S}" stroke="${SS}" stroke-width="1"/>
  <rect x="83" y="171" width="13" height="16" rx="4" fill="${S}" stroke="${SS}" stroke-width="1"/>
  <rect x="104" y="171" width="13" height="16" rx="4" fill="${S}" stroke="${SS}" stroke-width="1"/>
</g>
<g class="mz" id="f-biceps" data-id="biceps" data-name="Biceps">
  <ellipse cx="46" cy="136" rx="11" ry="23" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
  <ellipse cx="154" cy="136" rx="11" ry="23" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
</g>
<ellipse cx="34" cy="226" rx="9" ry="12" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<ellipse cx="166" cy="226" rx="9" ry="12" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<path d="M63 218 Q100 228 137 218 L134 292 L100 296 L66 292Z" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<g class="mz" id="f-quads" data-id="quads" data-name="Cvadriceps">
  <path d="M65 294 Q55 308 54 342 Q56 364 66 370 Q76 362 80 334 Q82 312 80 294Z" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
  <path d="M135 294 Q145 308 146 342 Q144 364 134 370 Q124 362 120 334 Q118 312 120 294Z" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
  <path d="M84 295 Q80 316 78 348 Q80 368 86 372 Q93 364 96 344 Q98 318 96 295Z" fill="${S}" stroke="${SS}" stroke-width="1"/>
  <path d="M116 295 Q120 316 122 348 Q120 368 114 372 Q107 364 104 344 Q102 318 104 295Z" fill="${S}" stroke="${SS}" stroke-width="1"/>
</g>
<ellipse cx="71" cy="378" rx="13" ry="9" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<ellipse cx="129" cy="378" rx="13" ry="9" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<rect x="58" y="387" width="26" height="28" rx="6" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<rect x="116" y="387" width="26" height="28" rx="6" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<g class="mz" id="f-calves" data-id="calves" data-name="Gambă">
  <ellipse cx="71" cy="398" rx="13" ry="22" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
  <ellipse cx="129" cy="398" rx="13" ry="22" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
</g>
<ellipse cx="71" cy="422" rx="17" ry="8" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<ellipse cx="129" cy="422" rx="17" ry="8" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
</svg>`;
}

function backSVG() {
  return `<svg width="200" height="430" viewBox="0 0 200 430" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="100" cy="36" rx="24" ry="28" fill="${SC}" stroke="${SCS}" stroke-width="1.2"/>
<rect x="92" y="60" width="16" height="14" rx="3" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<g class="mz" id="b-shoulders" data-id="shoulders" data-name="Umeri">
  <ellipse cx="61" cy="92" rx="19" ry="20" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
  <ellipse cx="139" cy="92" rx="19" ry="20" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
</g>
<path d="M70 74 Q52 82 49 122 L47 182 Q49 212 63 218 L80 220 L86 292 L99 292 L100 220 L101 292 L114 292 L120 220 L137 218 Q151 212 153 182 L151 122 Q148 82 130 74 Z" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<g class="mz" id="b-traps" data-id="traps" data-name="Trapez">
  <path d="M82 74 Q100 64 118 74 Q112 92 100 96 Q88 92 82 74Z" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
</g>
<g class="mz" id="b-back" data-id="back" data-name="Spate">
  <path d="M80 100 Q64 114 60 144 Q60 174 70 192 Q82 200 94 198 L94 124Z" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
  <path d="M120 100 Q136 114 140 144 Q140 174 130 192 Q118 200 106 198 L106 124Z" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
  <rect x="94" y="100" width="12" height="98" rx="4" fill="${S}" stroke="${SS}" stroke-width="1"/>
</g>
<g class="mz" id="b-triceps" data-id="triceps" data-name="Triceps">
  <ellipse cx="46" cy="136" rx="11" ry="23" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
  <ellipse cx="154" cy="136" rx="11" ry="23" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
</g>
<ellipse cx="34" cy="226" rx="9" ry="12" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<ellipse cx="166" cy="226" rx="9" ry="12" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<path d="M63 218 Q100 228 137 218 L134 292 L100 296 L66 292Z" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<g class="mz" id="b-glutes" data-id="glutes" data-name="Fese">
  <path d="M63 220 Q51 238 51 262 Q55 284 70 284 Q86 282 90 260 Q92 238 86 220Z" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
  <path d="M137 220 Q149 238 149 262 Q145 284 130 284 Q114 282 110 260 Q108 238 114 220Z" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
</g>
<g class="mz" id="b-hamstrings" data-id="hamstrings" data-name="Ischiori">
  <path d="M62 286 Q53 304 55 336 Q60 348 70 346 Q80 336 82 298Z" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
  <path d="M138 286 Q147 304 145 336 Q140 348 130 346 Q120 336 118 298Z" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
  <path d="M84 284 Q80 304 80 336 Q84 348 92 346 Q98 336 100 284Z" fill="${S}" stroke="${SS}" stroke-width="1"/>
  <path d="M116 284 Q120 304 120 336 Q116 348 108 346 Q102 336 100 284Z" fill="${S}" stroke="${SS}" stroke-width="1"/>
</g>
<ellipse cx="71" cy="352" rx="13" ry="8" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<ellipse cx="129" cy="352" rx="13" ry="8" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<rect x="58" y="360" width="26" height="22" rx="6" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<rect x="116" y="360" width="26" height="22" rx="6" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<g class="mz" id="b-calves" data-id="calves" data-name="Gambă">
  <ellipse cx="71" cy="398" rx="13" ry="22" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
  <ellipse cx="129" cy="398" rx="13" ry="22" fill="${S}" stroke="${SS}" stroke-width="1.2"/>
</g>
<ellipse cx="71" cy="422" rx="17" ry="8" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
<ellipse cx="129" cy="422" rx="17" ry="8" fill="${SC}" stroke="${SCS}" stroke-width="1"/>
</svg>`;
}

let view = 'front', selected = new Set(), activeFilter = 'all';

function init() { buildMuscleList(); setView('front'); }

function buildMuscleList() {
  const list = document.getElementById('muscle-list');
  list.innerHTML = '';
  const seen = new Set();
  MUSCLES[view].forEach(m => {
    if (seen.has(m.id)) return; seen.add(m.id);
    const btn = document.createElement('button');
    btn.className = 'muscle-btn' + (selected.has(m.id) ? ' active' : '');
    btn.id = 'mbtn-' + m.id; btn.onclick = () => toggleMuscle(m.id);
    btn.innerHTML = `<span class="dot"></span>${m.name}<span class="count">${EXERCISES[m.id]?.length || 0}</span>`;
    list.appendChild(btn);
  });
}

function setView(v) {
  view = v;
  document.getElementById('btn-front').className = 'vbtn' + (v === 'front' ? ' active' : '');
  document.getElementById('btn-back').className  = 'vbtn' + (v === 'back'  ? ' active' : '');
  document.getElementById('body-container').innerHTML = `
    <div class="body-figure">
      <div class="figure-label">${v === 'front' ? 'FAȚĂ' : 'SPATE'}</div>
      ${v === 'front' ? frontSVG() : backSVG()}
    </div>`;
  reapplySelected(); attachEvents(); buildMuscleList();
}

function reapplySelected() {
  selected.forEach(id => {
    const el = document.getElementById((view === 'front' ? 'f-' : 'b-') + id);
    if (el) el.classList.add('selected');
  });
}

function attachEvents() {
  const tt = document.getElementById('tooltip');
  document.querySelectorAll('.mz').forEach(z => {
    z.addEventListener('mouseenter', () => { tt.textContent = z.dataset.name; tt.classList.add('show'); });
    z.addEventListener('mousemove', e => { tt.style.left = (e.clientX + 14) + 'px'; tt.style.top = (e.clientY - 28) + 'px'; });
    z.addEventListener('mouseleave', () => tt.classList.remove('show'));
    z.addEventListener('click', () => toggleMuscle(z.dataset.id));
  });
}

function toggleMuscle(id) {
  selected.has(id) ? selected.delete(id) : selected.add(id);
  ['f-', 'b-'].forEach(p => { const el = document.getElementById(p + id); if (el) el.classList.toggle('selected', selected.has(id)); });
  const btn = document.getElementById('mbtn-' + id); if (btn) btn.classList.toggle('active', selected.has(id));
  renderChips(); renderExercises();
}

function resetAll() {
  selected.clear();
  document.querySelectorAll('.mz').forEach(z => z.classList.remove('selected'));
  document.querySelectorAll('.muscle-btn').forEach(b => b.classList.remove('active'));
  renderChips(); renderExercises();
}

function renderChips() {
  const wrap = document.getElementById('chips');
  if (selected.size === 0) { wrap.innerHTML = '<span class="empty-chips">Nicio grupă selectată</span>'; return; }
  wrap.innerHTML = '';
  selected.forEach(id => {
    const m = ALL_MUSCLES[id]; if (!m) return;
    const c = document.createElement('div'); c.className = 'chip';
    c.innerHTML = `${m.name}<span class="rm" onclick="toggleMuscle('${id}')">×</span>`;
    wrap.appendChild(c);
  });
}

function renderExercises() {
  const container = document.getElementById('ex-container');
  const header    = document.getElementById('rp-title');
  const sub       = document.getElementById('rp-sub');
  const filters   = document.getElementById('rp-filters');
  const genBtn    = document.getElementById('gen-btn');
  genBtn.disabled = selected.size === 0;
  if (selected.size === 0) {
    filters.style.display = 'none'; header.textContent = 'Exerciții'; sub.textContent = 'Selectează o grupă din corp';
    container.innerHTML = `<div class="rp-empty"><div class="big-icon">🤸</div><p>Apasă pe o grupă musculară pentru exerciții calisthenics gratuite</p></div>`;
    return;
  }
  filters.style.display = 'flex';
  let all = [];
  selected.forEach(id => (EXERCISES[id] || []).forEach(ex => all.push({ ...ex, muscleId: id, muscleName: ALL_MUSCLES[id]?.name })));
  const filtered = activeFilter === 'all' ? all : all.filter(e => e.diff === activeFilter);
  header.textContent = `${filtered.length} exerciții`;
  sub.textContent = [...selected].map(id => ALL_MUSCLES[id]?.name).filter(Boolean).join(', ');
  if (filtered.length === 0) { container.innerHTML = `<div class="rp-empty"><div class="big-icon">🔍</div><p>Niciun exercițiu pentru filtrul selectat</p></div>`; return; }
  container.innerHTML = '';
  filtered.forEach(ex => {
    const dc = ex.diff === 'Începător' ? 'diff-beg' : ex.diff === 'Intermediar' ? 'diff-int' : 'diff-adv';
    const div = document.createElement('div'); div.className = 'ex-item';
    div.innerHTML = `<div class="ex-icon">${ex.icon}</div><div class="ex-info"><div class="ex-name">${ex.name}</div><div class="ex-desc">${ex.desc.substring(0, 80)}${ex.desc.length > 80 ? '…' : ''}</div><div class="ex-tags"><span class="tag muscle">${ex.muscleName}</span><span class="tag sets">${ex.sets} × ${ex.reps}</span><span class="tag ${dc}">${ex.diff}</span></div></div><span class="ex-arrow">›</span>`;
    div.onclick = () => openModal(ex);
    container.appendChild(div);
  });
}

function openModal(ex) {
  const dc = ex.diff === 'Începător' ? '#4ade80' : ex.diff === 'Intermediar' ? '#fbbf24' : '#f87171';
  document.getElementById('m-icon').textContent   = ex.icon;
  document.getElementById('m-name').textContent   = ex.name;
  document.getElementById('m-muscle').textContent = ex.muscleName;
  document.getElementById('m-desc').textContent   = ex.desc;
  document.getElementById('m-sets').textContent   = ex.sets + ' serii';
  document.getElementById('m-reps').textContent   = ex.reps + ' rep';
  document.getElementById('m-rest').textContent   = ex.rest;
  document.getElementById('m-diff').innerHTML     = `<span style="color:${dc}">${ex.diff}</span>`;
  document.getElementById('m-tips').innerHTML     = ex.tips.map(t => `<li>${t}</li>`).join('');
  document.getElementById('modal-overlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) { if (e.target === document.getElementById('modal-overlay')) closeModalDirect(); }
function closeModalDirect() { document.getElementById('modal-overlay').classList.remove('show'); document.body.style.overflow = ''; }

function setFilter(f, btn) {
  activeFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active'); renderExercises();
}

function generatePlan() {
  const names = [...selected].map(id => ALL_MUSCLES[id]?.name).filter(Boolean);
  const all = [];
  selected.forEach(id => (EXERCISES[id] || []).forEach(ex => all.push({ ...ex, muscleName: ALL_MUSCLES[id]?.name })));
  const beg = all.filter(e => e.diff === 'Începător');
  const int = all.filter(e => e.diff === 'Intermediar');
  const adv = all.filter(e => e.diff === 'Avansat');
  let plan = `PLAN CALISTHENICS — ${names.join(', ').toUpperCase()}\n${'─'.repeat(40)}\n\n`;
  if (beg.length) { plan += `EXERCIȚII ÎNCEPĂTOR:\n`; beg.forEach((e, i) => plan += `${i+1}. ${e.name} — ${e.sets} × ${e.reps} (pauză ${e.rest})\n`); plan += '\n'; }
  if (int.length) { plan += `EXERCIȚII INTERMEDIAR:\n`; int.forEach((e, i) => plan += `${i+1}. ${e.name} — ${e.sets} × ${e.reps} (pauză ${e.rest})\n`); plan += '\n'; }
  if (adv.length) { plan += `EXERCIȚII AVANSAT:\n`; adv.forEach((e, i) => plan += `${i+1}. ${e.name} — ${e.sets} × ${e.reps} (pauză ${e.rest})\n`); }
  plan += `\n${'─'.repeat(40)}\nTotal: ${all.length} exerciții | Fără echipament | PerformX Calisthenics`;
  alert(plan);
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalDirect(); });
init();