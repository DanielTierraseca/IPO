const PRODUCTS = [
  {id:1, name:'X-Phone Pro', price:329, desc:'Teléfono con buena cámara y batería duradera.'},
  {id:2, name:'SpeedBook 14"', price:649, desc:'Portátil ligero para trabajo y estudio.'},
  {id:3, name:'Auriculares SoundMax', price:79, desc:'Sonido envolvente y cancelación de ruido.'},
  {id:4, name:'Smartwatch FitTime', price:119, desc:'Monitoriza salud y notificaciones.'}
];

let cart = [];
let purchases = [];

// Navegación
function showSection(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.target === id));
}

// Botones de menú
document.querySelectorAll('.nav-btn[data-target]').forEach(btn => {
  btn.addEventListener('click', () => showSection(btn.dataset.target));
});

// Render de productos
function renderProducts() {
  const list = document.getElementById('product-list');
  list.innerHTML = '';
  PRODUCTS.forEach(p => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <div class="thumb">${p.name.split(' ')[0]}</div>
      <div class="product-title">${p.name}</div>
      <div class="muted">${p.desc}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px">
        <div class="price">€${p.price}</div>
        <div style="display:flex;gap:8px">
          <button class="small-btn" onclick="showDetail(${p.id})">Ver</button>
          <button class="small-btn" onclick="addToCart(${p.id})">Comprar</button>
        </div>
      </div>`;
    list.appendChild(div);
  });
}

// Detalles
function showDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const detail = document.getElementById('product-detail');
  detail.innerHTML = `
    <div class="card detail">
      <div style="min-width:220px">
        <div class="thumb" style="height:200px">${p.name.split(' ')[0]}</div>
      </div>
      <div class="info">
        <h3>${p.name}</h3>
        <p class="muted">${p.desc}</p>
        <div class="price">€${p.price}</div>
        <button class="btn" onclick="addToCart(${p.id})">Añadir al carrito</button>
      </div>
    </div>`;
  detail.scrollIntoView({behavior:'smooth'});
}

// Carrito
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({id:p.id,name:p.name,price:p.price,qty:1});
  updateCartUI();
  showSection('carrito');
}

function updateCartUI() {
  const cartBtn = document.getElementById('cart-btn');
  const total = cart.reduce((sum,i)=>sum+i.qty,0);
  cartBtn.textContent = `Carrito (${total})`;

  const cont = document.getElementById('cart-contents');
  if (cart.length === 0) { cont.innerHTML = 'Tu carrito está vacío.'; return; }

  let html = '';
  cart.forEach(item => {
    html += `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px;">
      <div><strong>${item.name}</strong> <div class="muted">€${item.price} × ${item.qty}</div></div>
      <div><button class="small-btn" onclick="changeQty(${item.id},-1)">-</button><button class="small-btn" onclick="changeQty(${item.id},1)">+</button></div>
    </div>`;
  });
  html += `<hr><strong>Total:</strong> €${cart.reduce((s,i)=>s+i.price*i.qty,0)}<br><br>
  <button class="btn" onclick="checkout()">Pagar</button>`;
  cont.innerHTML = html;
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(x => x.id !== id);
  updateCartUI();
}

function checkout() {
  purchases.push(...cart.map(i => ({...i})));
  alert('Compra completada (demo). ¡Gracias!');
  cart = [];
  updateCartUI();
  renderPurchases();
  showSection('mis-compras');
}

// Mis compras
function renderPurchases() {
  const list = document.getElementById('purchase-list');
  if (purchases.length === 0) { list.innerHTML = 'Aún no has comprado nada.'; return; }
  list.innerHTML = purchases.map(p => `
    <div style="margin-bottom:12px;">
      <strong>${p.name}</strong> — €${p.price} × ${p.qty}<br>
      <button class="small-btn" onclick="addReview('${p.name}')">Añadir reseña</button>
    </div>`).join('');
}

function addReview(name) {
  const reseña = prompt(`Añade tu reseña para ${name}:`);
  if (reseña) alert(`Gracias por tu reseña: "${reseña}"`);
}

renderProducts();
updateCartUI();
renderPurchases();
