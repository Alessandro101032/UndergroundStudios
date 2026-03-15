const DEMO_CART = [
    { id: 1, name: 'Tricou PerformX Pro', variant: 'M / Negru',  icon: '👕', price: 149, qty: 1 },
    { id: 2, name: 'Șosete Compresie',    variant: 'L / Alb',    icon: '🧦', price: 49,  qty: 2 },
    { id: 3, name: 'Rucsac Sport 30L',    variant: 'One Size',   icon: '🎒', price: 299, qty: 1 },
];

const COUPONS = { 'PERFORMX10': 10, 'SPORT20': 20 };

let cart = JSON.parse(localStorage.getItem('px-cart')) || DEMO_CART;
let discountPct = 0;


function saveCart() {
    localStorage.setItem('px-cart', JSON.stringify(cart));
}

function render() {
    const list    = document.getElementById('cart-list');
    const empty   = document.getElementById('cart-empty');
    const countEl = document.getElementById('cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');

    list.innerHTML = '';

    if (cart.length === 0) {
        empty.style.display  = 'flex';
        checkoutBtn.disabled = true;
        countEl.textContent  = '0 produse în coș';
        updateSummary();
        return;
    }

    empty.style.display  = 'none';
    checkoutBtn.disabled = false;

    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    countEl.textContent = `${totalQty} ${totalQty === 1 ? 'produs' : 'produse'} în coș`;

    cart.forEach(item => {
        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <div class="item-info">
                <div class="item-img">${item.icon}</div>
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    <div class="item-variant">${item.variant}</div>
                </div>
            </div>
            <div class="qty-control">
                <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
                <span class="qty-value">${item.qty}</span>
                <button class="qty-btn" onclick="changeQty(${item.id}, +1)">+</button>
            </div>
            <div class="item-price">${(item.price * item.qty).toFixed(2)} RON</div>
            <button class="remove-btn" onclick="removeItem(${item.id})" title="Șterge">×</button>
        `;
        list.appendChild(row);
    });

    updateSummary();
}


function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
        showToast('Produs șters din coș');
    }
    saveCart();
    render();
}


function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    render();
    showToast('Produs șters din coș');
}


function updateSummary() {
    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const shipping = subtotal === 0 ? 0 : subtotal >= 300 ? 0 : 20;
    const discount = subtotal * (discountPct / 100);
    const total    = subtotal + shipping - discount;

    document.getElementById('subtotal').textContent = subtotal.toFixed(2) + ' RON';
    document.getElementById('shipping').textContent = shipping === 0 ? 'Gratuit' : shipping.toFixed(2) + ' RON';
    document.getElementById('total').textContent    = total.toFixed(2) + ' RON';

    const discRow = document.getElementById('discount-row');
    if (discountPct > 0) {
        discRow.style.display = 'flex';
        document.getElementById('discount-val').textContent = '-' + discount.toFixed(2) + ' RON';
    } else {
        discRow.style.display = 'none';
    }
}


function applyCoupon() {
    const code = document.getElementById('coupon-input').value.trim().toUpperCase();
    if (COUPONS[code]) {
        discountPct = COUPONS[code];
        showToast(`Cod aplicat: -${discountPct}% reducere 🎉`);
        updateSummary();
    } else {
        showToast('Cod invalid sau expirat');
    }
}

function checkout() {
    if (cart.length === 0) return;
    showToast('Redirecționare spre plată... 🚀');
    setTimeout(() => {
        alert('Demo: plată finalizată cu succes!');
    }, 1200);
}


function showToast(msg) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.classList.remove('show'), 2800);
}

render();