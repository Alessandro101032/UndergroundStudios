(function(){
  const STORAGE_KEYS = {
    users: 'ux_users',
    session: 'ux_session',
    profile: (email)=>`ux_profile:${email}`,
  };

  function getUsers(){
    try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.users)) || {}; } catch(e){ return {}; }
  }
  function setUsers(users){ localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users)); }
  function hash(s){ // simple non-crypto hash for demo
    let h = 0; for(let i=0;i<s.length;i++){ h = (h<<5) - h + s.charCodeAt(i); h|=0; } return `h${Math.abs(h)}`;
  }
  function setSession(email){ localStorage.setItem(STORAGE_KEYS.session, JSON.stringify({email})); }
  function getSession(){ try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.session)); } catch(e){ return null; } }
  function clearSession(){ localStorage.removeItem(STORAGE_KEYS.session); }


  function updateNavbar(){
    const nav = document.querySelector('.nav .pages');
    if(!nav) return;

    nav.querySelectorAll('.nav-auth').forEach(n=>n.remove());

    const session = getSession();
    if(session && session.email){
      const profileLink = document.createElement('a');
      profileLink.href = './profile.html';
      profileLink.textContent = 'Profil';
      profileLink.className = 'nav-auth';

      const logoutLink = document.createElement('a');
      logoutLink.href = '#logout';
      logoutLink.textContent = 'Logout';
      logoutLink.className = 'nav-auth nav-cta';
      logoutLink.addEventListener('click', (e)=>{
        e.preventDefault();
        clearSession();

        window.location.href = './index.html';
      });

      nav.appendChild(profileLink);
      nav.appendChild(logoutLink);
    } else {
      const loginLink = document.createElement('a');
      loginLink.href = './login.html';
      loginLink.textContent = 'Login';
      loginLink.className = 'nav-auth nav-cta';
      nav.appendChild(loginLink);
    }
  }


  window.UXAuth = {
    register: function({email, password, name}){
      email = String(email||'').trim().toLowerCase();
      if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) throw new Error('Email invalid');
      if(String(password||'').length < 8) throw new Error('Parola trebuie să aibă minim 8 caractere');
      const users = getUsers();
      if(users[email]) throw new Error('Există deja un cont cu acest email');
      users[email] = { passwordHash: hash(password), name: String(name||'').trim(), createdAt: new Date().toISOString() };
      setUsers(users);
      setSession(email);
      return true;
    },
    login: function({email, password}){
      email = String(email||'').trim().toLowerCase();
      const users = getUsers();
      const u = users[email];
      if(!u) throw new Error('Cont inexistent');
      if(u.passwordHash !== hash(String(password||''))) throw new Error('Parolă incorectă');
      setSession(email);
      return true;
    },
    logout: function(){ clearSession(); },
    sessionEmail: function(){ const s=getSession(); return s && s.email; },
    storageKeys: STORAGE_KEYS,
  };

  document.addEventListener('DOMContentLoaded', updateNavbar);
})();

function updateCartFab() {
    const badge = document.getElementById('cart-fab-badge');
    if (!badge) return;

    const cart = JSON.parse(localStorage.getItem('px-cart')) || [];
    const totalQty = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

    badge.textContent = totalQty;
    badge.setAttribute('data-count', totalQty);
}

updateCartFab();

window.addEventListener('storage', updateCartFab);
