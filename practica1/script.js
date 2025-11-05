const PRODUCTS = [
  {
    id:1,
    name:'Pccom revolt i7 3050',
    price:529,
    desc:'Portátil gaming de alto rendimiento con procesador Intel Core i7 y tarjeta gráfica RTX 3050. Ideal para gaming y trabajo intensivo.',
    image:'https://thumb.pccomponentes.com/w-530-530/articles/1091/10916702/1154-pccom-revolt-5060-intel-core-i7-14650hx-32gb-1tb-ssd-rtx-5060-16-comprar.jpg',
    specs:['Intel Core i7', '16GB RAM', '512GB SSD', 'RTX 3050', '15.6" FHD', 'Windows 11']
  },
  {
    id:2,
    name:'SpeedBook 14"',
    price:649,
    desc:'Portátil ultraligero perfecto para trabajo y estudio. Diseño elegante y batería de larga duración.',
    image:'https://i.blogs.es/d44d83/hp-slatebook-14-1/450_1000.jpg',
    specs:['Intel i5', '8GB RAM', '256GB SSD', 'Gráficos Intel Iris', '14" FHD', '12h batería']
  },
  {
    id:3,
    name:'Auriculares SoundMax',
    price:79,
    desc:'Auriculares con sonido envolvente y cancelación activa de ruido. Perfectos para música y gaming.',
    image:'https://m.media-amazon.com/images/I/51xTiE941pL._UF1000,1000_QL80_.jpg',
    specs:['Cancelación de ruido', '20h batería', 'Bluetooth 5.0', 'Micrófono integrado', 'Plegables']
  },
  {
    id:4,
    name:'Smartwatch FitTime',
    price:119,
    desc:'Monitoriza tu salud y notificaciones con este elegante smartwatch. Resistente al agua.',
    image:'https://m.media-amazon.com/images/I/61zAWem6QjL.jpg',
    specs:['Pantalla AMOLED', 'Resistente al agua', 'Monitoreo cardiaco', 'Notificaciones', '7 días batería']
  },
  {
    id:5,
    name:'Monitor UltraView 27"',
    price:219,
    desc:'Pantalla Full HD con colores vibrantes y marco delgado. Ideal para trabajo y entretenimiento.',
    image:'https://www.digitaltigers.com/images/product/gallery/uvquad27-wid1260.jpg',
    specs:['27" FHD', '75Hz', 'IPS', 'HDMI/VGA', 'Borde delgado']
  },
  {
    id:6,
    name:'Teclado Mecánico ProKey',
    price:89,
    desc:'Retroiluminado RGB y switches de alta durabilidad. Experiencia de escritura superior.',
    image:'https://img.pccomponentes.com/articles/1086/10861649/2309-edifier-g4k-teclado-mecanico-inalambrico-gaming-negro-comprar.jpg',
    specs:['Switches Blue', 'RGB', 'Teclas PBT', 'USB-C', 'Reposamuñecas']
  },
  {
    id:7,
    name:'Ratón Óptico SwiftClick',
    price:49,
    desc:'Precisión extrema y diseño ergonómico para largas sesiones. Conexión inalámbrica.',
    image:'https://www.ngs.eu/images/productos/M/Raton_optico_USB_NGS_silver_Tick_02.jpg',
    specs:['16000 DPI', 'Inalámbrico', '6 botones', '50h batería', 'Ergonómico']
  },
  {
    id:8,
    name:'Disco SSD FastDrive 1TB',
    price:129,
    desc:'Velocidad de lectura y escritura ultrarrápida. Mejora el rendimiento de tu equipo.',
    image:'https://media.adeo.com/mkp/f2107145a9df74f5e1738f160ce9542e/media.jpeg',
    specs:['1TB NVMe', '3500 MB/s', 'M.2', '5 años garantía']
  },
  {
    id:9,
    name:'Tarjeta Gráfica PowerX 4060',
    price:449,
    desc:'Rendimiento ideal para gaming y edición de video. Soporta los últimos juegos en alta calidad.',
    image:'https://dcdn-us.mitiendanube.com/stores/004/850/241/products/tarjeta-grafica-pny-nvidia-geforce-rtx-4060-front-c57f7fe915e8129e7a17286807838281-1024-1024.png',
    specs:['RTX 4060', '8GB GDDR6', 'DLSS 3', '3 ventiladores', 'PCIe 4.0']
  },
  {
    id:10,
    name:'Impresora JetPrint 3000',
    price:159,
    desc:'Impresión rápida con conectividad WiFi y Bluetooth. Multifunción a color.',
    image:'https://m.media-amazon.com/images/I/61Zl8Cf3PDL._AC_UF894,1000_QL80_.jpg',
    specs:['WiFi', 'Bluetooth', 'Escáner', 'Copiadora', 'Tinta continua']
  },
  {
    id:11,
    name:'Router WiFi TurboNet AX6000',
    price:189,
    desc:'Cobertura amplia y soporte para WiFi 6. Perfecto para hogares con muchos dispositivos.',
    image:'https://m.media-amazon.com/images/I/6109HWXqgXL._AC_UF350,350_QL80_.jpg',
    specs:['WiFi 6', '6000 Mbps', '8 antenas', 'Puerto 2.5G', 'App gestión']
  },
  {
    id:12,
    name:'Cámara Web ClearView HD',
    price:69,
    desc:'Resolución 1080p ideal para videollamadas y streaming. Micrófono integrado.',
    image:'https://informaticaeducativa.es/wp-content/uploads/2020/07/webcam-informaticaeducativa.es_.png',
    specs:['1080p 30fps', 'Micrófono', 'Enfoque automático', 'Clip ajustable', 'USB']
  },
  {
    id:13,
    name:'Altavoces BassBoom 2.1',
    price:99,
    desc:'Potente sonido con graves profundos y diseño moderno. Conexión Bluetooth y auxiliar.',
    image:'https://m.media-amazon.com/images/I/81ETcqAfWIL._AC_UF894,1000_QL80_.jpg',
    specs:['2.1 Canales', '100W', 'Bluetooth', 'Entrada auxiliar', 'Control remoto']
  },
  {
    id:14,
    name:'Memoria RAM HyperSpeed 16GB',
    price:75,
    desc:'Rendimiento superior para multitarea y gaming. Compatible con la mayoría de placas.',
    image:'https://m.media-amazon.com/images/I/61aDeyMWIsL._UF894,1000_QL80_.jpg',
    specs:['16GB DDR4', '3200MHz', 'CL16', 'Dual Channel', 'Disipador']
  },
  {
    id:15,
    name:'Tablet TabX 10"',
    price:259,
    desc:'Pantalla grande y batería de larga duración para entretenimiento y trabajo ligero.',
    image:'https://image.made-in-china.com/202f0j00JKUhSjlFrgGr/Mega-Tab-X-Tablet-PC-for-Student-Learing-10-1-Inch-Android-Tablet-PC-for-Education.webp',
    specs:['10" FHD', '64GB', '8h batería', 'Android', 'Cámara 8MP']
  }
];

// Variables globales
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let purchases = JSON.parse(localStorage.getItem('purchases')) || [];
let currentRating = 0;
let currentProductId = null;
let repairRequests = JSON.parse(localStorage.getItem('repairRequests')) || [];

// =============================================
// FUNCIONES DE ALMACENAMIENTO
// =============================================

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function savePurchases() {
  localStorage.setItem('purchases', JSON.stringify(purchases));
}

function saveRepairRequests() {
  localStorage.setItem('repairRequests', JSON.stringify(repairRequests));
}

// =============================================
// SISTEMA DE INICIO DE SESIÓN - COMPLETAMENTE CORREGIDO
// =============================================

function initLoginModal() {
  console.log('🔧 Inicializando modal de login...');

  const loginSidebarLink = document.getElementById('login-sidebar-link');
  const loginModal = document.getElementById('login-modal');
  const closeLoginModal = document.getElementById('close-login-modal');
  const loginForm = document.getElementById('login-form');
  const loginBtn = document.getElementById('login-btn');

  console.log('Elementos encontrados:', {
    loginSidebarLink: !!loginSidebarLink,
    loginModal: !!loginModal,
    closeLoginModal: !!closeLoginModal,
    loginForm: !!loginForm,
    loginBtn: !!loginBtn
  });

  if (!loginSidebarLink) {
    console.error('❌ No se encontró el enlace de login en el sidebar');
    return;
  }

  if (!loginModal) {
    console.error('❌ No se encontró el modal de login');
    return;
  }

  // ABRIR MODAL DE LOGIN - ESTA ES LA PARTE CRÍTICA
  loginSidebarLink.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('👉 Clic en login-sidebar-link detectado');

    // Cerrar el menú lateral primero
    closeSidebarMenu();

    // Pequeño delay para asegurar que el menú se cierre antes de abrir el modal
    setTimeout(() => {
      console.log('🔄 Abriendo modal de login...');
      openLoginModal();
    }, 50);
  });

  // CERRAR MODAL
  if (closeLoginModal) {
    closeLoginModal.addEventListener('click', function(e) {
      e.preventDefault();
      closeLoginModalFunc();
    });
  }

  // CERRAR AL HACER CLIC FUERA
  loginModal.addEventListener('click', function(e) {
    if (e.target === loginModal) {
      closeLoginModalFunc();
    }
  });

  // FORMULARIO DE REGISTRO
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleRegistration();
    });
  }

  // BOTÓN DE INICIO DE SESIÓN
  if (loginBtn) {
    loginBtn.addEventListener('click', function(e) {
      e.preventDefault();
      handleLogin();
    });
  }

  console.log('✅ Modal de login inicializado correctamente');
}

function openLoginModal() {
  const loginModal = document.getElementById('login-modal');
  if (loginModal) {
    loginModal.style.display = 'block';
    document.body.classList.add('body-no-scroll');
    console.log('✅ Modal de login abierto exitosamente');
  } else {
    console.error('❌ No se pudo abrir el modal de login - elemento no encontrado');
  }
}

function closeLoginModalFunc() {
  const loginModal = document.getElementById('login-modal');
  if (loginModal) {
    loginModal.style.display = 'none';
    document.body.classList.remove('body-no-scroll');
    console.log('✅ Modal de login cerrado');
  }
}

function handleRegistration() {
  const email = document.getElementById('login-email')?.value;
  const name = document.getElementById('login-name')?.value;
  const password = document.getElementById('login-password')?.value;

  if (!email || !name || !password) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Por favor, introduce un correo electrónico válido.');
    return;
  }

  const userData = {
    email: email,
    name: name,
    password: password,
    registrationDate: new Date().toLocaleString('es-ES')
  };

  localStorage.setItem('userData', JSON.stringify(userData));
  closeLoginModalFunc();
  alert('¡Registro exitoso! Bienvenido ' + name);
  updateLoginUI(name);
}

function handleLogin() {
  const email = document.getElementById('login-email')?.value;
  const password = document.getElementById('login-password')?.value;

  if (!email || !password) {
    alert('Por favor, completa email y contraseña.');
    return;
  }

  const storedUserData = localStorage.getItem('userData');

  if (!storedUserData) {
    alert('No hay usuarios registrados. Por favor, regístrate primero.');
    return;
  }

  const userData = JSON.parse(storedUserData);

  if (userData.email === email && userData.password === password) {
    closeLoginModalFunc();
    alert('¡Inicio de sesión exitoso! Bienvenido de nuevo ' + userData.name);
    updateLoginUI(userData.name);
  } else {
    alert('Correo electrónico o contraseña incorrectos.');
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function updateLoginUI(userName) {
  const loginLink = document.getElementById('login-sidebar-link');
  if (loginLink) {
    loginLink.textContent = `Hola, ${userName}`;
    loginLink.style.background = 'rgba(59, 130, 246, 0.1)';
    loginLink.style.color = '#3b82f6';
    loginLink.style.cursor = 'default';
  }
}

function checkLoggedInUser() {
  const storedUserData = localStorage.getItem('userData');
  if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    updateLoginUI(userData.name);
  }
}

// =============================================
// SISTEMA DE MENÚ HAMBURGUESA
// =============================================

function initHamburgerMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const closeSidebar = document.getElementById('close-sidebar');

  if (!hamburgerBtn || !sidebar) return;

  function openSidebar() {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.classList.add('body-no-scroll');
  }

  function closeSidebarMenu() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.classList.remove('body-no-scroll');
  }

  hamburgerBtn.addEventListener('click', openSidebar);
  closeSidebar.addEventListener('click', closeSidebarMenu);
  sidebarOverlay.addEventListener('click', closeSidebarMenu);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
      closeSidebarMenu();
    }
  });

  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebarMenu);
  });
}

// =============================================
// INICIALIZACIÓN PRINCIPAL
// =============================================

document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Inicializando aplicación...');

  // ORDEN CRÍTICO: menú primero, luego login
  initHamburgerMenu();
  initLoginModal();
  checkLoggedInUser();

  // Resto de inicializaciones...
  if (document.getElementById('product-list')) {
    renderProducts();
    initSearch();
  }
  if (document.getElementById('cart-contents')) {
    updateCartUI();
  }
  if (document.getElementById('purchase-list')) {
    renderPurchases();
  }
  if (document.getElementById('repair-form')) {
    initRepairPage();
  }

  updateCartCounter();

  if (document.querySelector('.resenas-slider')) {
    renderReviewsSlider();
  }

  initProductModal();

  console.log('✅ Aplicación completamente inicializada');
});

// =============================================
// FUNCIONALIDADES DE PRODUCTOS Y CARRITO
// =============================================

function initSearch() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', searchProducts);
  }
}

function searchProducts() {
  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value.toLowerCase().trim();

  if (!searchTerm) {
    renderProducts();
    return;
  }

  const filteredProducts = PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.desc.toLowerCase().includes(searchTerm)
  );

  renderFilteredProducts(filteredProducts);
}

function renderFilteredProducts(filteredProducts) {
  const list = document.getElementById('product-list');
  if (!list) return;

  list.innerHTML = '';

  if (filteredProducts.length === 0) {
    list.innerHTML = '<div class="card" style="text-align: center; padding: 40px; grid-column: 1 / -1;">No se encontraron productos que coincidan con tu búsqueda.</div>';
    return;
  }

  filteredProducts.forEach(p => {
    const div = document.createElement('div');
    div.className = 'card';
    div.onclick = () => openProductModal(p.id);
    div.innerHTML = `
      <div class="thumb">
        <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='${p.name.split(' ')[0]}'; this.parentElement.style.background='linear-gradient(135deg,#0ea5e9,#7c3aed)'; this.parentElement.style.display='flex'; this.parentElement.style.alignItems='center'; this.parentElement.style.justifyContent='center';">
      </div>
      <div class="product-title">${p.name}</div>
      <div class="muted">${p.desc}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div class="price">€${p.price}</div>
        <button class="small-btn" onclick="event.stopPropagation(); addToCart(${p.id})">Comprar</button>
      </div>`;
    list.appendChild(div);
  });
}

function renderProducts() {
  const list = document.getElementById('product-list');
  if (!list) return;

  list.innerHTML = '';
  PRODUCTS.forEach(p => {
    const div = document.createElement('div');
    div.className = 'card';
    div.onclick = () => openProductModal(p.id);
    div.innerHTML = `
      <div class="thumb">
        <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='${p.name.split(' ')[0]}'; this.parentElement.style.background='linear-gradient(135deg,#0ea5e9,#7c3aed)'; this.parentElement.style.display='flex'; this.parentElement.style.alignItems='center'; this.parentElement.style.justifyContent='center';">
      </div>
      <div class="product-title">${p.name}</div>
      <div class="muted">${p.desc}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div class="price">€${p.price}</div>
        <button class="small-btn" onclick="event.stopPropagation(); addToCart(${p.id})">Comprar</button>
      </div>`;
    list.appendChild(div);
  });
}

function updateCartCounter() {
  const total = cart.reduce((sum,i)=>sum+i.qty,0);
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) {
    cartBtn.textContent = `Carrito (${total})`;
  }
}

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

  alert('¡Compra completada! Gracias por tu compra.');
  cart = [];
  saveCart();
  updateCartUI();

  setTimeout(() => {
    window.location.href = 'mis-compras.html';
  }, 1000);
}

// =============================================
// SISTEMA DE MODAL DE PRODUCTOS
// =============================================

function initProductModal() {
  const modal = document.getElementById('product-modal');
  const closeBtn = document.querySelector('#product-modal .close-modal');
  const addToCartBtn = document.getElementById('modal-add-to-cart');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeProductModal);
  }

  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', addToCartFromModal);
  }

  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeProductModal();
      }
    });
  }
}

function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  currentProductId = productId;

  const modal = document.getElementById('product-modal');
  const modalBody = document.getElementById('modal-body');

  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-product-content">
      <img src="${product.image}" alt="${product.name}" class="modal-product-image"
           onerror="this.style.display='none';">
      <div class="modal-product-image-placeholder" style="display:${product.image ? 'none' : 'flex'};">
        ${product.name.split(' ')[0]}
      </div>

      <div class="modal-product-title">${product.name}</div>
      <div class="modal-product-price">€${product.price}</div>
      <div class="modal-product-desc">${product.desc}</div>

      ${product.specs ? `
        <div class="modal-product-specs">
          <h4>Especificaciones técnicas:</h4>
          <div class="specs-list">
            ${product.specs.map(spec => `<div class="spec-item">${spec}</div>`).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;

  modal.style.display = 'block';
  document.body.classList.add('body-no-scroll');
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.classList.remove('body-no-scroll');
  }
  currentProductId = null;
}

function addToCartFromModal() {
  if (currentProductId) {
    addToCart(currentProductId);
    closeProductModal();
  }
}

// =============================================
// SISTEMA DE COMPRAS Y RESEÑAS
// =============================================

function renderPurchases() {
  const list = document.getElementById('purchase-list');
  if (!list) return;

  purchases = JSON.parse(localStorage.getItem('purchases')) || [];

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

function showReviewForm(purchaseIndex) {
  const purchase = purchases[purchaseIndex];

  const reviewFormHTML = `
    <div id="review-modal" class="modal">
      <div class="modal-content">
        <span class="close-modal" onclick="closeReviewForm()">&times;</span>
        <div class="card">
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
    </div>
  `;

  const existingModal = document.getElementById('review-modal');
  if (existingModal) {
    existingModal.remove();
  }

  document.body.insertAdjacentHTML('beforeend', reviewFormHTML);
  currentRating = 0;
  updateStars(0);
  document.body.classList.add('body-no-scroll');
}

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

  for (let i = 1; i <= 5; i++) {
    const star = document.getElementById(`star-${i}`);
    if (star) {
      star.style.color = i <= rating ? '#FFD700' : '#666';
    }
  }

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
  updateReviewsSlider();

  alert('¡Gracias por tu reseña! ✨');
}

function editReview(purchaseIndex) {
  const purchase = purchases[purchaseIndex];
  showReviewForm(purchaseIndex);

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
  document.body.classList.remove('body-no-scroll');
}

// =============================================
// SISTEMA DE RESEÑAS EN INICIO
// =============================================

function getAllReviews() {
  const defaultReviews = [
    {text: '"El X-Phone me sorprendió, excelente batería."', rating: 5, emoji: '📱'},
    {text: '"SpeedBook va genial para clase y trabajo."', rating: 4, emoji: '💻'},
    {text: '"SoundMax tiene un sonido brutal."', rating: 5, emoji: '🎧'},
    {text: '"FitTime es cómodo y mide bien el pulso."', rating: 4, emoji: '⌚'}
  ];

  const userReviews = [];
  const purchases = JSON.parse(localStorage.getItem('purchases')) || [];

  purchases.forEach(purchase => {
    if (purchase.review && purchase.review.text) {
      userReviews.push({
        text: purchase.review.text,
        rating: purchase.review.rating,
        emoji: '⭐',
        product: purchase.name
      });
    }
  });

  let allReviews = [...defaultReviews];
  userReviews.slice(0, 6).forEach(review => {
    allReviews.push(review);
  });

  return shuffleArray(allReviews);
}

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function renderReviewsSlider() {
  const sliderContainer = document.querySelector('.resenas-slider');
  if (!sliderContainer) return;

  const reviews = getAllReviews();

  let reviewsHTML = '';
  reviews.forEach(review => {
    const stars = '⭐'.repeat(review.rating);
    reviewsHTML += `
      <div class="card">
        ${review.emoji} ${review.text}<br>${stars}
        ${review.product ? `<div style="font-size:12px; margin-top:4px; color:var(--muted)">- ${review.product}</div>` : ''}
      </div>
    `;
  });

  sliderContainer.innerHTML = reviewsHTML + reviewsHTML;
}

function updateReviewsSlider() {
  if (document.querySelector('.resenas-slider')) {
    renderReviewsSlider();
  }
}

// =============================================
// SISTEMA DE REPARACIONES
// =============================================

function initRepairPage() {
  const repairForm = document.getElementById('repair-form');
  if (repairForm) {
    repairForm.addEventListener('submit', handleRepairSubmit);
  }
  renderRepairRequests();
}

function handleRepairSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('repair-name').value;
  const device = document.getElementById('repair-device').value;
  const description = document.getElementById('repair-desc').value;

  const repairRequest = {
    id: Date.now(),
    name: name,
    device: device,
    description: description,
    date: new Date().toLocaleDateString('es-ES'),
    status: 'Pendiente'
  };

  repairRequests.push(repairRequest);
  saveRepairRequests();
  renderRepairRequests();

  alert('✅ Solicitud de reparación enviada correctamente');
  event.target.reset();
}

function renderRepairRequests() {
  const container = document.getElementById('repair-list');
  if (!container) return;

  if (repairRequests.length === 0) {
    container.innerHTML = '<p class="muted">Aún no hay solicitudes.</p>';
    return;
  }

  container.innerHTML = repairRequests.map((repair, index) => `
    <div class="repair-item" style="margin-bottom: 15px; padding: 16px; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; background: var(--glass);">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
        <div style="flex: 1;">
          <strong style="font-size: 16px;">${repair.device}</strong>
          <div class="muted" style="font-size: 14px; margin-top: 4px;">Solicitado por: ${repair.name}</div>
          <div style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
            <span class="status-badge" style="background: ${getStatusColor(repair.status)}; color: white; padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 600;">
              ${repair.status}
            </span>
            <span class="muted" style="font-size: 12px;">${repair.date}</span>
          </div>
        </div>
        <div style="display: flex; gap: 6px; flex-shrink: 0;">
          <button class="small-btn" onclick="editRepairRequest(${repair.id})" style="font-size: 12px;">✏️ Editar</button>
          <button class="small-btn" onclick="deleteRepairRequest(${repair.id})" style="font-size: 12px;">🗑️ Eliminar</button>
        </div>
      </div>
      <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px;">
        <strong style="font-size: 14px; color: var(--muted);">Descripción del problema:</strong>
        <p style="margin: 8px 0 0 0; font-size: 14px; line-height: 1.4;">${repair.description}</p>
      </div>
    </div>
  `).join('');
}

function getStatusColor(status) {
  const colors = {
    'Pendiente': '#f59e0b',
    'En proceso': '#3b82f6',
    'Completado': '#10b981',
    'Cancelado': '#ef4444'
  };
  return colors[status] || '#6b7280';
}

function deleteRepairRequest(id) {
  if (confirm('¿Estás seguro de que quieres eliminar esta solicitud de reparación?')) {
    repairRequests = repairRequests.filter(repair => repair.id !== id);
    saveRepairRequests();
    renderRepairRequests();
  }
}

function editRepairRequest(id) {
  const repair = repairRequests.find(r => r.id === id);
  if (!repair) return;

  const editModalHTML = `
    <div id="edit-repair-modal" class="modal">
      <div class="modal-content">
        <span class="close-modal" onclick="closeEditRepairModal()">&times;</span>
        <div class="card">
          <h3>Editar Solicitud de Reparación</h3>

          <form id="edit-repair-form" style="display: flex; flex-direction: column; gap: 12px;">
            <input
              type="text"
              placeholder="Nombre"
              value="${repair.name}"
              required
              style="width:100%; background:transparent; border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:10px; color:white;"
            >
            <input
              type="text"
              placeholder="Dispositivo"
              value="${repair.device}"
              required
              style="width:100%; background:transparent; border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:10px; color:white;"
            >
            <textarea
              placeholder="Descripción del fallo"
              rows="4"
              required
              style="width:100%; background:transparent; border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:10px; color:white; resize: vertical;"
            >${repair.description}</textarea>

            <div style="display: flex; gap: 8px; align-items: center;">
              <label style="color: var(--muted); font-size: 14px;">Estado:</label>
              <select id="edit-repair-status" style="background: transparent; border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; padding: 6px; color: white;">
                <option value="Pendiente" ${repair.status === 'Pendiente' ? 'selected' : ''}>Pendiente</option>
                <option value="En proceso" ${repair.status === 'En proceso' ? 'selected' : ''}>En proceso</option>
                <option value="Completado" ${repair.status === 'Completado' ? 'selected' : ''}>Completado</option>
                <option value="Cancelado" ${repair.status === 'Cancelado' ? 'selected' : ''}>Cancelado</option>
              </select>
            </div>

            <div style="display:flex; gap:8px; justify-content:flex-end; margin-top: 16px;">
              <button type="button" class="small-btn" onclick="closeEditRepairModal()">Cancelar</button>
              <button type="submit" class="btn">Guardar Cambios</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;

  const existingModal = document.getElementById('edit-repair-modal');
  if (existingModal) {
    existingModal.remove();
  }

  document.body.insertAdjacentHTML('beforeend', editModalHTML);
  document.body.classList.add('body-no-scroll');

  document.getElementById('edit-repair-form').addEventListener('submit', function(e) {
    e.preventDefault();
    updateRepairRequest(id);
  });
}

function updateRepairRequest(id) {
  const form = document.getElementById('edit-repair-form');
  const name = form.querySelector('input[placeholder="Nombre"]').value;
  const device = form.querySelector('input[placeholder="Dispositivo"]').value;
  const description = form.querySelector('textarea').value;
  const status = document.getElementById('edit-repair-status').value;

  const repairIndex = repairRequests.findIndex(r => r.id === id);
  if (repairIndex !== -1) {
    repairRequests[repairIndex] = {
      ...repairRequests[repairIndex],
      name: name,
      device: device,
      description: description,
      status: status
    };

    saveRepairRequests();
    renderRepairRequests();
    closeEditRepairModal();
    alert('✅ Solicitud de reparación actualizada correctamente');
  }
}

function closeEditRepairModal() {
  const modal = document.getElementById('edit-repair-modal');
  if (modal) {
    modal.remove();
  }
  document.body.classList.remove('body-no-scroll');
}

// =============================================
// MANEJO DE TECLA ESC
// =============================================

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeReviewForm();
    closeEditRepairModal();
    closeProductModal();
    closeLoginModalFunc();
  }
});
