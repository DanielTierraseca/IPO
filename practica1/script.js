const PRODUCTS = [
  {id:1, name:'Pccom revolt i7 3050', price:529, desc:'Portatil gaming de buen rendimiento.',image:'https://thumb.pccomponentes.com/w-530-530/articles/1091/10916702/1154-pccom-revolt-5060-intel-core-i7-14650hx-32gb-1tb-ssd-rtx-5060-16-comprar.jpg'},
  {id:2, name:'SpeedBook 14"', price:649, desc:'Portátil ligero para trabajo y estudio.',image:'https://i.blogs.es/d44d83/hp-slatebook-14-1/450_1000.jpg'},
  {id:3, name:'Auriculares SoundMax', price:79, desc:'Sonido envolvente y cancelación de ruido.',image:'https://m.media-amazon.com/images/I/51xTiE941pL._UF1000,1000_QL80_.jpg'},
  {id:4, name:'Smartwatch FitTime', price:119, desc:'Monitoriza salud y notificaciones.',image:'https://m.media-amazon.com/images/I/61zAWem6QjL.jpg'},
  {id:5, name:'Monitor UltraView 27"', price:219, desc:'Pantalla Full HD con colores vibrantes y marco delgado.',image:'https://www.digitaltigers.com/images/product/gallery/uvquad27-wid1260.jpg'},
  {id:6, name:'Teclado Mecánico ProKey', price:89, desc:'Retroiluminado RGB y switches de alta durabilidad.',image:'https://img.pccomponentes.com/articles/1086/10861649/2309-edifier-g4k-teclado-mecanico-inalambrico-gaming-negro-comprar.jpg'},
  {id:7, name:'Ratón Óptico SwiftClick', price:49, desc:'Precisión extrema y diseño ergonómico para largas sesiones.',image:'https://www.ngs.eu/images/productos/M/Raton_optico_USB_NGS_silver_Tick_02.jpg'},
  {id:8, name:'Disco SSD FastDrive 1TB', price:129, desc:'Velocidad de lectura y escritura ultrarrápida.',image:'https://media.adeo.com/mkp/f2107145a9df74f5e1738f160ce9542e/media.jpeg'},
  {id:9, name:'Tarjeta Gráfica PowerX 4060', price:449, desc:'Rendimiento ideal para gaming y edición de video.',image:'https://dcdn-us.mitiendanube.com/stores/004/850/241/products/tarjeta-grafica-pny-nvidia-geforce-rtx-4060-front-c57f7fe915e8129e7a17286807838281-1024-1024.png'},
  {id:10, name:'Impresora JetPrint 3000', price:159, desc:'Impresión rápida con conectividad WiFi y Bluetooth.',image:'https://m.media-amazon.com/images/I/61Zl8Cf3PDL._AC_UF894,1000_QL80_.jpg'},
  {id:11, name:'Router WiFi TurboNet AX6000', price:189, desc:'Cobertura amplia y soporte para WiFi 6.',image:'https://m.media-amazon.com/images/I/6109HWXqgXL._AC_UF350,350_QL80_.jpg'},
  {id:12, name:'Cámara Web ClearView HD', price:69, desc:'Resolución 1080p ideal para videollamadas y streaming.',image:'https://informaticaeducativa.es/wp-content/uploads/2020/07/webcam-informaticaeducativa.es_.png'},
  {id:13, name:'Altavoces BassBoom 2.1', price:99, desc:'Potente sonido con graves profundos y diseño moderno.',image:'https://m.media-amazon.com/images/I/81ETcqAfWIL._AC_UF894,1000_QL80_.jpg'},
  {id:14, name:'Memoria RAM HyperSpeed 16GB', price:75, desc:'Rendimiento superior para multitarea y gaming.',image:'https://m.media-amazon.com/images/I/61aDeyMWIsL._UF894,1000_QL80_.jpg'},
  {id:15, name:'Tablet TabX 10"', price:259, desc:'Pantalla grande y batería de larga duración para entretenimiento.',image:'https://image.made-in-china.com/202f0j00JKUhSjlFrgGr/Mega-Tab-X-Tablet-PC-for-Student-Learing-10-1-Inch-Android-Tablet-PC-for-Education.webp'}

];

// Cargar carrito y compras desde localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let purchases = JSON.parse(localStorage.getItem('purchases')) || [];

// Guardar en localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function savePurchases() {
  localStorage.setItem('purchases', JSON.stringify(purchases));
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
  // Solo ejecutar funciones si los elementos existen en la página actual
  if (document.getElementById('product-list')) {
    renderProducts();
  }
  if (document.getElementById('cart-contents')) {
    updateCartUI();
  }
  if (document.getElementById('purchase-list')) {
    renderPurchases();
  }

  // Actualizar contador del carrito en todas las páginas
  updateCartCounter();
});

function updateCartCounter() {
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) {
    const total = cart.reduce((sum,i)=>sum+i.qty,0);
    cartBtn.textContent = `Carrito (${total})`;
  }
}

// Render de productos
function renderProducts() {
  const list = document.getElementById('product-list');
  if (!list) return;

  list.innerHTML = '';
  PRODUCTS.forEach(p => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <div class="thumb">
        <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='${p.name.split(' ')[0]}'; this.parentElement.style.background='linear-gradient(135deg,#0ea5e9,#7c3aed)'; this.parentElement.style.display='flex'; this.parentElement.style.alignItems='center'; this.parentElement.style.justifyContent='center';">
      </div>
      <div class="product-title">${p.name}</div>
      <div class="muted">${p.desc}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
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
  if (!detail) return;

  detail.innerHTML = `
    <div class="card detail" style="display:flex; gap: 20px; align-items: flex-start;">
      <div style="flex: 0 0 220px;">
        <div class="thumb">
          <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='${p.name.split(' ')[0]}'; this.parentElement.style.background='linear-gradient(135deg,#0ea5e9,#7c3aed)'; this.parentElement.style.display='flex'; this.parentElement.style.alignItems='center'; this.parentElement.style.justifyContent='center';">
        </div>
      </div>
      <div class="info" style="flex: 1;">
        <h3>${p.name}</h3>
        <p class="muted">${p.desc}</p>
        <div class="price">€${p.price}</div>
        <button class="btn" onclick="addToCart(${p.id}); window.location.href='carrito.html'">Añadir al carrito</button>
      </div>
    </div>`;
  detail.scrollIntoView({behavior:'smooth'});
}

// Carrito
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({id:p.id, name:p.name, price:p.price, qty:1});
  }
  saveCart();
  updateCartUI();
  updateCartCounter();

  // Mostrar confirmación
  alert(`¡${p.name} añadido al carrito!`);
}

function updateCartUI() {
  updateCartCounter();
  const cont = document.getElementById('cart-contents');
  if (!cont) return;

  if (cart.length === 0) {
    cont.innerHTML = 'Tu carrito está vacío.';
    return;
  }

  let html = '';
  cart.forEach(item => {
    html += `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px; border-bottom: 1px solid rgba(255,255,255,0.1);">
      <div><strong>${item.name}</strong> <div class="muted">€${item.price} × ${item.qty}</div></div>
      <div style="display:flex;gap:4px;">
        <button class="small-btn" onclick="changeQty(${item.id},-1)">-</button>
        <span style="padding: 0 8px;">${item.qty}</span>
        <button class="small-btn" onclick="changeQty(${item.id},1)">+</button>
      </div>
    </div>`;
  });
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  html += `<div style="margin-top:16px; padding:12px; background:var(--glass); border-radius:8px;">
    <strong>Total: €${total}</strong>
  </div>
  <div style="margin-top:16px;">
    <button class="btn" onclick="checkout()" style="width:100%">Pagar</button>
  </div>`;
  cont.innerHTML = html;
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(x => x.id !== id);
  }
  saveCart();
  updateCartUI();
}

function checkout() {
  if (cart.length === 0) {
    alert('El carrito está vacío');
    return;
  }

  purchases.push(...cart.map(i => ({...i})));
  savePurchases();

  // Verificar que se guardó en localStorage
  const verify = JSON.parse(localStorage.getItem('purchases'));
  console.log('Verificación de localStorage (purchases):', verify);

  alert('¡Compra completada! Gracias por tu compra.');
  cart = [];
  saveCart();
  updateCartUI();

  // Redirigir a mis compras después de pagar
  setTimeout(() => {
    window.location.href = 'mis-compras.html';
  }, 1000);
}

// Mis compras
// Mis compras
// Mis compras
function renderPurchases() {
  const list = document.getElementById('purchase-list');
  if (!list) return;

  // Recargar purchases desde localStorage por si acaso
  purchases = JSON.parse(localStorage.getItem('purchases')) || [];

  console.log('Compras encontradas:', purchases); // Para depurar

  if (purchases.length === 0) {
    list.innerHTML = 'Aún no has comprado nada.';
    return;
  }

  list.innerHTML = purchases.map((p, index) => {
    const hasReview = p.review && p.review.text;
    return `
    <div class="purchase-item" style="margin-bottom:20px; padding:16px; border:1px solid rgba(255,255,255,0.1); border-radius:12px; background:var(--glass);">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <div style="display:flex; gap: 12px; align-items: flex-start;">
          ${p.image ? `
            <div style="width: 60px; height: 60px; border-radius: 8px; overflow: hidden; flex-shrink: 0;">
              <img src="${p.image}" alt="${p.name}" style="width:100%; height:100%; object-fit:cover;">
            </div>
          ` : ''}
          <div>
            <strong style="font-size:16px;">${p.name}</strong>
            <div class="muted">€${p.price} × ${p.qty} | Total: €${p.price * p.qty}</div>
            ${hasReview ? `
              <div style="margin-top:8px; padding:8px; background:rgba(255,255,255,0.05); border-radius:8px;">
                <div><strong>Tu reseña:</strong> ${p.review.rating}⭐</div>
                <div class="muted">"${p.review.text}"</div>
                <small class="muted">${p.review.date || 'Sin fecha'}</small>
              </div>
            ` : ''}
          </div>
        </div>
        <div>
          ${!hasReview ?
            `<button class="small-btn" onclick="showReviewForm(${index})" style="margin-left:8px;">✍️ Añadir Reseña</button>` :
            `<button class="small-btn" onclick="editReview(${index})" style="margin-left:8px;">📝 Editar Reseña</button>`
          }
        </div>
      </div>
    </div>`;
  }).join('');
}

// Mostrar formulario de reseña
function showReviewForm(purchaseIndex) {
  const purchase = purchases[purchaseIndex];
  const reviewForm = `
    <div id="review-modal" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); display:flex; justify-content:center; align-items:center; z-index:1000;">
      <div class="card" style="max-width:500px; width:90%; margin:20px;">
        <h3>Escribe tu reseña para ${purchase.name}</h3>

        <div style="margin:16px 0; text-align:center;">
          <div style="font-size:14px; margin-bottom:8px; color:var(--muted);">Calificación:</div>
          <div id="rating-stars" style="display:flex; justify-content:center; gap:8px; font-size:24px;">
            ${[1,2,3,4,5].map(star => `
              <span style="cursor:pointer; color:#666;" onclick="setRating(${star})" id="star-${star}">⭐</span>
            `).join('')}
          </div>
          <div id="rating-text" style="margin-top:8px; font-size:14px; color:var(--muted);">Selecciona las estrellas</div>
        </div>

        <textarea
          id="review-text"
          placeholder="Comparte tu experiencia con este producto... ¿Qué te gustó? ¿Qué mejorarías?"
          rows="5"
          style="width:100%; background:transparent; border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:12px; color:white; margin:12px 0;"
        ></textarea>

        <div style="display:flex; gap:8px; justify-content:flex-end;">
          <button class="small-btn" onclick="closeReviewForm()">Cancelar</button>
          <button class="btn" onclick="submitReview(${purchaseIndex})">Publicar Reseña</button>
        </div>
      </div>
    </div>
  `;

  // Remover modal existente si hay uno
  const existingModal = document.getElementById('review-modal');
  if (existingModal) {
    existingModal.remove();
  }

  document.body.insertAdjacentHTML('beforeend', reviewForm);
  currentRating = 0;
  updateStars(0);
}

// Variables globales para el formulario de reseña
let currentRating = 0;

function setRating(rating) {
  currentRating = rating;
  updateStars(rating);
}

function updateStars(rating) {
  const ratingTexts = [
    "Selecciona las estrellas",
    "Malo",
    "Regular",
    "Bueno",
    "Muy bueno",
    "Excelente"
  ];

  // Actualizar estrellas
  for (let i = 1; i <= 5; i++) {
    const star = document.getElementById(`star-${i}`);
    if (star) {
      star.style.color = i <= rating ? '#FFD700' : '#666';
    }
  }

  // Actualizar texto
  const ratingText = document.getElementById('rating-text');
  if (ratingText) {
    ratingText.textContent = ratingTexts[rating];
    ratingText.style.color = rating > 0 ? '#FFD700' : 'var(--muted)';
  }
}

function submitReview(purchaseIndex) {
  const reviewText = document.getElementById('review-text').value.trim();

  if (currentRating === 0) {
    alert('Por favor, selecciona una calificación con estrellas');
    return;
  }

  if (!reviewText) {
    alert('Por favor, escribe tu reseña');
    return;
  }

  // Guardar la reseña
  if (!purchases[purchaseIndex].review) {
    purchases[purchaseIndex].review = {};
  }

  purchases[purchaseIndex].review = {
    rating: currentRating,
    text: reviewText,
    date: new Date().toLocaleDateString('es-ES')
  };

  savePurchases();
  closeReviewForm();
  renderPurchases();

  // Mostrar confirmación
  alert('¡Gracias por tu reseña! ✨');
}

function editReview(purchaseIndex) {
  const purchase = purchases[purchaseIndex];
  showReviewForm(purchaseIndex);

  // Rellenar con datos existentes
  setTimeout(() => {
    if (purchase.review) {
      currentRating = purchase.review.rating;
      updateStars(currentRating);
      document.getElementById('review-text').value = purchase.review.text;
    }
  }, 100);
}

function closeReviewForm() {
  const modal = document.getElementById('review-modal');
  if (modal) {
    modal.remove();
  }
}

// Cerrar modal con ESC
document.addEventListener('DOMContentLoaded', function(e) {
  if (e.key === 'Escape') {
    if (document.getElementById('purchase-list')) {
    renderPurchases();
  }
    closeReviewForm();
  }
});

// Limpiar carrito (función útil para testing)
function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  alert('Carrito limpiado');
}
