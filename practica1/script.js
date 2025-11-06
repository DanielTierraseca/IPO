// =============================================
// CONSTANTES Y VARIABLES GLOBALES
// =============================================

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

// Estado global
const state = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  purchases: JSON.parse(localStorage.getItem('purchases')) || [],
  repairRequests: JSON.parse(localStorage.getItem('repairRequests')) || [],
  currentRating: 0,
  currentProductId: null
};

// =============================================
// SISTEMA DE ALMACENAMIENTO
// =============================================

const AppStorage = {
  saveCart() {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  },

  savePurchases() {
    localStorage.setItem('purchases', JSON.stringify(state.purchases));
  },

  saveRepairRequests() {
    localStorage.setItem('repairRequests', JSON.stringify(state.repairRequests));
  },

  getUser() {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  },

  saveUser(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
  },

  removeUser() {
    localStorage.removeItem('userData');
  }
};

// =============================================
// SISTEMA DE AUTENTICACIÓN
// =============================================

const Auth = {
  init() {
    this.bindEvents();
    this.checkLoggedInUser();
  },

  bindEvents() {
    const loginSidebarLink = document.getElementById('login-sidebar-link');
    const closeLoginModal = document.getElementById('close-login-modal');
    const loginForm = document.getElementById('login-form');
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');

    if (loginSidebarLink) {
      loginSidebarLink.addEventListener('click', this.handleLoginSidebarClick.bind(this));
    }

    if (closeLoginModal) {
      closeLoginModal.addEventListener('click', this.closeModal.bind(this));
    }

    if (loginModal) {
      loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) this.closeModal();
      });
    }

    if (loginForm) {
      loginForm.addEventListener('submit', this.handleRegistration.bind(this));
    }

    if (loginBtn) {
      // Clonar y reemplazar el botón para evitar duplicados de event listeners
      const newLoginBtn = loginBtn.cloneNode(true);
      loginBtn.parentNode.replaceChild(newLoginBtn, loginBtn);
      newLoginBtn.addEventListener('click', this.handleLogin.bind(this));
    }
  },

  handleLoginSidebarClick(e) {
    e.preventDefault();
    e.stopPropagation();

    const user = AppStorage.getUser();
    if (user) {
      if (confirm(`¿Deseas cerrar sesión, ${user.name}?`)) {
        this.logout();
      }
    } else {
      Sidebar.close();
      setTimeout(() => this.openModal(), 50);
    }
  },

  handleLogin(e) {
    e.preventDefault();
    e.stopPropagation();

    const email = document.getElementById('login-email')?.value;
    const password = document.getElementById('login-password')?.value;

    if (!email || !password) {
      alert('Por favor, completa email y contraseña.');
      return;
    }

    const userData = AppStorage.getUser();

    if (!userData) {
      alert('No hay usuarios registrados. Por favor, regístrate primero.');
      return;
    }

    if (userData.email === email && userData.password === password) {
      this.closeModal();
      alert('¡Inicio de sesión exitoso! Bienvenido de nuevo ' + userData.name);
      this.updateUI(userData.name);
    } else {
      alert('Correo electrónico o contraseña incorrectos.');
    }
  },

  handleRegistration(e) {
    e.preventDefault();

    const email = document.getElementById('login-email')?.value;
    const name = document.getElementById('login-name')?.value;
    const password = document.getElementById('login-password')?.value;

    if (!email || !name || !password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (!this.isValidEmail(email)) {
      alert('Por favor, introduce un correo electrónico válido.');
      return;
    }

    const userData = {
      email: email,
      name: name,
      password: password,
      registrationDate: new Date().toLocaleString('es-ES')
    };

    AppStorage.saveUser(userData);
    this.closeModal();
    alert('¡Registro exitoso! Bienvenido ' + name);
    this.updateUI(name);
  },

  logout() {
    AppStorage.removeUser();
    this.updateUI(null);
    alert('Has cerrado sesión correctamente.');
  },

  updateUI(userName) {
    const loginLink = document.getElementById('login-sidebar-link');
    if (!loginLink) return;

    if (userName) {
      loginLink.innerHTML = `
        <div style="text-align: center;">
          <div style="font-weight: 600; margin-bottom: 4px;">👋 Hola, ${userName}</div>
          <div style="font-size: 12px; color: var(--muted);">Cerrar sesión</div>
        </div>
      `;
      loginLink.style.background = 'rgba(59, 130, 246, 0.1)';
      loginLink.style.color = '#3b82f6';
    } else {
      loginLink.innerHTML = 'Iniciar Sesión';
      loginLink.style.background = 'rgba(110, 231, 183, 0.1)';
      loginLink.style.color = 'var(--accent)';
    }
    loginLink.style.cursor = 'pointer';
  },

  checkLoggedInUser() {
    const user = AppStorage.getUser();
    if (user) {
      this.updateUI(user.name);
    } else {
      this.updateUI(null);
    }
  },

  openModal() {
    const loginModal = document.getElementById('login-modal');
    if (loginModal) {
      loginModal.style.display = 'block';
      document.body.classList.add('body-no-scroll');

      // Re-bind del botón de login cuando se abre el modal
      const loginBtn = document.getElementById('login-btn');
      if (loginBtn) {
        loginBtn.onclick = (e) => this.handleLogin(e);
      }
    }
  },

  closeModal() {
    const loginModal = document.getElementById('login-modal');
    if (loginModal) {
      loginModal.style.display = 'none';
      document.body.classList.remove('body-no-scroll');
    }
  },

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
};

// =============================================
// SISTEMA DE MENÚ LATERAL
// =============================================

const Sidebar = {
  init() {
    this.bindEvents();
  },

  bindEvents() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const closeSidebar = document.getElementById('close-sidebar');

    if (!hamburgerBtn || !sidebar) return;

    hamburgerBtn.addEventListener('click', () => this.open());
    closeSidebar.addEventListener('click', () => this.close());
    sidebarOverlay.addEventListener('click', () => this.close());

    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        this.close();
      }
    });

    // Cerrar al hacer clic en enlaces
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', () => this.close());
    });
  },

  open() {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    if (sidebar && sidebarOverlay) {
      sidebar.classList.add('active');
      sidebarOverlay.classList.add('active');
      document.body.classList.add('body-no-scroll');
    }
  },

  close() {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    if (sidebar && sidebarOverlay) {
      sidebar.classList.remove('active');
      sidebarOverlay.classList.remove('active');
      document.body.classList.remove('body-no-scroll');
    }
  }
};

// =============================================
// SISTEMA DE CARRITO
// =============================================


const Cart = {
  init() {
    this.updateCounter();
    // Si estamos en la página del carrito, actualizamos la UI
    if (document.getElementById('cart-contents')) {
      this.updateUI();
    }
  },

  add(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingItem = state.cart.find(item => item.id === productId);

    if (existingItem) {
      existingItem.qty++;
    } else {
      state.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: 1
      });
    }

    AppStorage.saveCart();
    this.updateUI();
    this.updateCounter();
    alert(`¡${product.name} añadido al carrito!`);
  },

  remove(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    AppStorage.saveCart();
    this.updateUI();
    this.updateCounter();
  },

  updateQty(productId, delta) {
    const item = state.cart.find(item => item.id === productId);
    if (!item) return;

    item.qty += delta;

    if (item.qty <= 0) {
      this.remove(productId);
    } else {
      AppStorage.saveCart();
      this.updateUI();
      this.updateCounter();
    }
  },

  updateUI() {
    const cartContents = document.getElementById('cart-contents');
    if (!cartContents) return;

    if (state.cart.length === 0) {
      cartContents.innerHTML = 'Tu carrito está vacío.';
      return;
    }

    let html = '';
    state.cart.forEach(item => {
      html += `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px; border-bottom: 1px solid rgba(255,255,255,0.1);">
          <div>
            <strong>${item.name}</strong>
            <div class="muted">€${item.price} × ${item.qty}</div>
          </div>
          <div style="display:flex;gap:4px;">
            <button class="small-btn" onclick="Cart.updateQty(${item.id}, -1)">-</button>
            <span style="padding: 0 8px;">${item.qty}</span>
            <button class="small-btn" onclick="Cart.updateQty(${item.id}, 1)">+</button>
          </div>
        </div>
      `;
    });

    const total = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    html += `
      <div style="margin-top:16px; padding:12px; background:var(--glass); border-radius:8px;">
        <strong>Total: €${total}</strong>
      </div>
      <div style="margin-top:16px;">
        <button class="btn" onclick="Cart.checkout()" style="width:100%">Pagar</button>
      </div>
    `;

    cartContents.innerHTML = html;
  },

  updateCounter() {
    const total = state.cart.reduce((sum, item) => sum + item.qty, 0);
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
      cartBtn.textContent = `Carrito (${total})`;
    }
  },

  checkout() {
    this.showPaymentModal();
  },

  showPaymentModal() {
    if (state.cart.length === 0) {
      alert('El carrito está vacío');
      return;
    }

    // Calcular total
    const total = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    // Actualizar resumen
    this.updatePaymentSummary();
    document.getElementById('payment-total').textContent = `€${total}`;

    // Generar número de pedido aleatorio
    document.getElementById('order-number').textContent = Math.floor(100000 + Math.random() * 900000);

    // Mostrar modal
    const paymentModal = document.getElementById('payment-modal');
    paymentModal.style.display = 'block';
    document.body.classList.add('body-no-scroll');

    // Vincular eventos del modal de pago
    this.bindPaymentModalEvents();
  },

  updatePaymentSummary() {
    const summaryElement = document.getElementById('payment-summary');
    let summaryHTML = '';

    state.cart.forEach(item => {
      summaryHTML += `
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px; font-size: 14px;">
          <span>${item.name} (x${item.qty})</span>
          <span>€${item.price * item.qty}</span>
        </div>
      `;
    });

    summaryElement.innerHTML = summaryHTML;
  },

  bindPaymentModalEvents() {
    const paymentModal = document.getElementById('payment-modal');
    const closeBtn = document.getElementById('close-payment-modal');
    const cancelBtn = document.getElementById('cancel-payment');
    const paymentForm = document.getElementById('payment-form');
    const paymentMethod = document.getElementById('payment-method');

    // Cerrar modal
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.closePaymentModal();
      });
    }

    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        this.closePaymentModal();
      });
    }

    // Cambiar campos según método de pago
    if (paymentMethod) {
      paymentMethod.addEventListener('change', (e) => {
        this.togglePaymentFields(e.target.value);
      });
    }

    // Enviar formulario
    if (paymentForm) {
      paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.processPayment();
      });
    }

    // Cerrar al hacer clic fuera
    if (paymentModal) {
      paymentModal.addEventListener('click', (e) => {
        if (e.target === paymentModal) {
          this.closePaymentModal();
        }
      });
    }
  },

  togglePaymentFields(method) {
    const cardFields = document.getElementById('card-fields');
    const paypalFields = document.getElementById('paypal-fields');
    const transferFields = document.getElementById('transfer-fields');

    // Ocultar todos primero
    cardFields.style.display = 'none';
    paypalFields.style.display = 'none';
    transferFields.style.display = 'none';

    // Mostrar los campos correspondientes
    switch(method) {
      case 'credit':
      case 'debit':
        cardFields.style.display = 'block';
        break;
      case 'paypal':
        paypalFields.style.display = 'block';
        break;
      case 'transfer':
        transferFields.style.display = 'block';
        break;
    }
  },

  processPayment() {
    // Validaciones básicas
    const email = document.getElementById('payment-email').value;
    const termsAccepted = document.getElementById('terms-accepted').checked;
    const paymentMethod = document.getElementById('payment-method').value;

    if (!email) {
      alert('Por favor, introduce tu correo electrónico');
      return;
    }

    if (!termsAccepted) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }

    // Validaciones específicas por método de pago
    if (paymentMethod === 'credit' || paymentMethod === 'debit') {
      const cardNumber = document.getElementById('card-number').value;
      const cardExpiry = document.getElementById('card-expiry').value;
      const cardCVV = document.getElementById('card-cvv').value;
      const cardName = document.getElementById('card-name').value;

      if (!cardNumber || !cardExpiry || !cardCVV || !cardName) {
        alert('Por favor, completa todos los datos de la tarjeta');
        return;
      }

      // Validación simple de tarjeta (solo para demo)
      if (cardNumber.replace(/\s/g, '').length !== 16) {
        alert('El número de tarjeta debe tener 16 dígitos');
        return;
      }
    }

    // Simular procesamiento de pago
    this.showPaymentProcessing();
  },

  showPaymentProcessing() {
    // Mostrar estado de procesamiento
    const confirmBtn = document.getElementById('confirm-payment');
    const originalText = confirmBtn.textContent;
    confirmBtn.textContent = 'Procesando...';
    confirmBtn.disabled = true;

    // Simular delay de procesamiento
    setTimeout(() => {
      this.completePurchase();
      confirmBtn.textContent = originalText;
      confirmBtn.disabled = false;
    }, 2000);
  },

  completePurchase() {
    // Agregar a compras
    state.purchases.push(...state.cart.map(item => ({...item})));
    AppStorage.savePurchases();

    // Limpiar carrito
    state.cart = [];
    AppStorage.saveCart();
    this.updateUI();
    this.updateCounter();

    // Cerrar modal de pago
    this.closePaymentModal();

    // Mostrar confirmación
    alert('¡Pago completado! Gracias por tu compra. ✨');

    // Redirigir a mis compras
    setTimeout(() => {
      window.location.href = 'mis-compras.html';
    }, 1500);
  },

  closePaymentModal() {
    const paymentModal = document.getElementById('payment-modal');
    if (paymentModal) {
      paymentModal.style.display = 'none';
      document.body.classList.remove('body-no-scroll');
    }
  }
};

// =============================================
// SISTEMA DE PRODUCTOS
// =============================================

const Products = {
  init() {
    if (document.getElementById('product-list')) {
      this.render();
      this.initSearch();
    }
    this.initModal();
  },

  render(filteredProducts = null) {
    const list = document.getElementById('product-list');
    if (!list) return;

    const productsToRender = filteredProducts || PRODUCTS;

    list.innerHTML = '';
    productsToRender.forEach(product => {
      const div = document.createElement('div');
      div.className = 'card';
      div.onclick = () => this.openModal(product.id);
      div.innerHTML = `
        <div class="thumb">
          <img src="${product.image}" alt="${product.name}"
               onerror="this.style.display='none'; this.parentElement.innerHTML='${product.name.split(' ')[0]}';
               this.parentElement.style.background='linear-gradient(135deg,#0ea5e9,#7c3aed)';
               this.parentElement.style.display='flex';
               this.parentElement.style.alignItems='center';
               this.parentElement.style.justifyContent='center';">
        </div>
        <div class="product-title">${product.name}</div>
        <div class="muted">${product.desc}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div class="price">€${product.price}</div>
          <button class="small-btn" onclick="event.stopPropagation(); Cart.add(${product.id})">Comprar</button>
        </div>
      `;
      list.appendChild(div);
    });
  },

  initSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => this.search(e.target.value));
    }
  },

  search(searchTerm) {
    if (!searchTerm) {
      this.render();
      return;
    }

    const filteredProducts = PRODUCTS.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );

    this.render(filteredProducts);
  },

  initModal() {
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('#product-modal .close-modal');
    const addToCartBtn = document.getElementById('modal-add-to-cart');

    if (closeBtn) {
      closeBtn.addEventListener('click', this.closeModal);
    }

    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', this.addToCartFromModal);
    }

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeModal();
      });
    }
  },

  openModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    state.currentProductId = productId;

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
  },

  closeModal() {
    const modal = document.getElementById('product-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.classList.remove('body-no-scroll');
    }
    state.currentProductId = null;
  },

  addToCartFromModal() {
    if (state.currentProductId) {
      Cart.add(state.currentProductId);
      Products.closeModal();
    }
  }
};

// =============================================
// SISTEMA DE COMPRAS Y RESEÑAS
// =============================================

// =============================================
// SISTEMA DE COMPRAS Y RESEÑAS - CORREGIDO
// =============================================

// =============================================
// SISTEMA DE COMPRAS Y RESEÑAS - CORREGIDO
// =============================================

const Purchases = {
  init() {
    this.render();
    this.bindGlobalEvents();
  },

  bindGlobalEvents() {
    // Usar event delegation para los botones dinámicos
    document.addEventListener('click', (e) => {
      // Botón "Añadir Reseña"
      if (e.target.classList.contains('add-review-btn')) {
        const purchaseIndex = parseInt(e.target.dataset.index);
        this.showReviewForm(purchaseIndex);
      }

      // Botón "Editar Reseña"
      if (e.target.classList.contains('edit-review-btn')) {
        const purchaseIndex = parseInt(e.target.dataset.index);
        this.editReview(purchaseIndex);
      }
    });
  },

  render() {
    const list = document.getElementById('purchase-list');
    if (!list) return;

    if (state.purchases.length === 0) {
      list.innerHTML = 'Aún no has comprado nada.';
      return;
    }

    list.innerHTML = state.purchases.map((purchase, index) => {
      const hasReview = purchase.review && purchase.review.text;
      return `
      <div class="purchase-item" style="margin-bottom:20px; padding:16px; border:1px solid rgba(255,255,255,0.1); border-radius:12px; background:var(--glass);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <div style="display:flex; gap: 12px; align-items: flex-start;">
            <div>
              <strong style="font-size:16px;">${purchase.name}</strong>
              <div class="muted">€${purchase.price} × ${purchase.qty} | Total: €${purchase.price * purchase.qty}</div>
              ${hasReview ? `
                <div style="margin-top:8px; padding:8px; background:rgba(255,255,255,0.05); border-radius:8px;">
                  <div><strong>Tu reseña:</strong> ${purchase.review.rating}⭐</div>
                  <div class="muted">"${purchase.review.text}"</div>
                  <small class="muted">${purchase.review.date || 'Sin fecha'}</small>
                </div>
              ` : ''}
            </div>
          </div>
          <div>
            ${!hasReview ?
              `<button class="small-btn add-review-btn" data-index="${index}" style="margin-left:8px;">✍️ Añadir Reseña</button>` :
              `<button class="small-btn edit-review-btn" data-index="${index}" style="margin-left:8px;">📝 Editar Reseña</button>`
            }
          </div>
        </div>
      </div>`;
    }).join('');
  },

  showReviewForm(purchaseIndex) {
    console.log('🔴 Mostrar formulario para compra:', purchaseIndex);
    const purchase = state.purchases[purchaseIndex];

    const reviewFormHTML = `
      <div id="review-modal" class="modal" style="display: block;">
        <div class="modal-content">
          <span class="close-modal" id="review-close-modal">&times;</span>
          <div class="card">
            <h3>Escribe tu reseña para ${purchase.name}</h3>

            <div style="margin:16px 0; text-align:center;">
              <div style="font-size:14px; margin-bottom:8px; color:var(--muted);">Calificación:</div>
              <div id="rating-stars" style="display:flex; justify-content:center; gap:8px; font-size:24px;">
                ${[1,2,3,4,5].map(star => `
                  <span style="cursor:pointer; color:#666;" data-rating="${star}" class="star" id="star-${star}">⭐</span>
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
              <button class="small-btn" id="review-cancel-btn">Cancelar</button>
              <button class="btn" id="review-submit-btn" data-index="${purchaseIndex}">Publicar Reseña</button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Eliminar modal existente
    const existingModal = document.getElementById('review-modal');
    if (existingModal) {
      existingModal.remove();
    }

    // Añadir nuevo modal
    document.body.insertAdjacentHTML('beforeend', reviewFormHTML);
    document.body.classList.add('body-no-scroll');

    // Vincular eventos del modal
    this.bindReviewModalEvents(purchaseIndex);

    state.currentRating = 0;
    this.updateStars(0);
  },

  bindReviewModalEvents(purchaseIndex) {
    // Cerrar modal
    const closeBtn = document.getElementById('review-close-modal');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.closeReviewForm();
      });
    }

    // Botón cancelar
    const cancelBtn = document.getElementById('review-cancel-btn');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        this.closeReviewForm();
      });
    }

    // Event delegation para las estrellas
    const ratingStarsContainer = document.getElementById('rating-stars');
    if (ratingStarsContainer) {
      ratingStarsContainer.addEventListener('click', (e) => {
        const starElement = e.target.closest('[data-rating]');
        if (starElement) {
          const rating = parseInt(starElement.dataset.rating);
          this.setRating(rating);
        }
      });
    }

    // Botón enviar
    const submitBtn = document.getElementById('review-submit-btn');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        this.submitReview(purchaseIndex);
      });
    }

    // Cerrar al hacer clic fuera
    const modal = document.getElementById('review-modal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target.id === 'review-modal') {
          this.closeReviewForm();
        }
      });
    }

    // Cerrar con ESC
    const closeOnEsc = (e) => {
      if (e.key === 'Escape' && document.getElementById('review-modal')) {
        this.closeReviewForm();
        // Remover el event listener después de cerrar
        document.removeEventListener('keydown', closeOnEsc);
      }
    };
    document.addEventListener('keydown', closeOnEsc);
  },

  setRating(rating) {
    state.currentRating = rating;
    this.updateStars(rating);
  },

  updateStars(rating) {
    const ratingTexts = [
      "Selecciona las estrellas",
      "Malo",
      "Regular",
      "Bueno",
      "Muy bueno",
      "Excelente"
    ];

    // Actualizar todas las estrellas
    for (let i = 1; i <= 5; i++) {
      const star = document.getElementById(`star-${i}`);
      if (star) {
        star.style.color = i <= rating ? '#FFD700' : '#666';
        star.style.transform = i <= rating ? 'scale(1.1)' : 'scale(1)';
      }
    }

    const ratingText = document.getElementById('rating-text');
    if (ratingText) {
      ratingText.textContent = ratingTexts[rating];
      ratingText.style.color = rating > 0 ? '#FFD700' : 'var(--muted)';
    }
  },

  submitReview(purchaseIndex) {
    const reviewText = document.getElementById('review-text').value.trim();

    if (state.currentRating === 0) {
      alert('Por favor, selecciona una calificación con estrellas');
      return;
    }

    if (!reviewText) {
      alert('Por favor, escribe tu reseña');
      return;
    }

    if (!state.purchases[purchaseIndex].review) {
      state.purchases[purchaseIndex].review = {};
    }

    state.purchases[purchaseIndex].review = {
      rating: state.currentRating,
      text: reviewText,
      date: new Date().toLocaleDateString('es-ES')
    };

    AppStorage.savePurchases();
    this.closeReviewForm();
    this.render();

    // Actualizar slider de reseñas si existe
    if (typeof Reviews !== 'undefined' && Reviews.updateSlider) {
      Reviews.updateSlider();
    }

    alert('¡Gracias por tu reseña! ✨');
  },

  editReview(purchaseIndex) {
    console.log('🔴 Editando reseña para compra:', purchaseIndex);
    const purchase = state.purchases[purchaseIndex];
    this.showReviewForm(purchaseIndex);

    // Usar setTimeout para asegurar que el DOM esté actualizado
    setTimeout(() => {
      if (purchase.review) {
        state.currentRating = purchase.review.rating;
        this.updateStars(state.currentRating);
        const reviewTextArea = document.getElementById('review-text');
        if (reviewTextArea) {
          reviewTextArea.value = purchase.review.text;
        }
      }
    }, 50);
  },

  closeReviewForm() {
    const modal = document.getElementById('review-modal');
    if (modal) {
      modal.remove();
    }
    document.body.classList.remove('body-no-scroll');

    // Limpiar el rating actual
    state.currentRating = 0;
  }
};

// =============================================
// SISTEMA DE RESEÑAS EN INICIO
// =============================================

const Reviews = {
  initSlider() {
    this.renderSlider();
  },

  getAllReviews() {
    const defaultReviews = [
      {text: '"El X-Phone me sorprendió, excelente batería."', rating: 5, emoji: '📱'},
      {text: '"SpeedBook va genial para clase y trabajo."', rating: 4, emoji: '💻'},
      {text: '"SoundMax tiene un sonido brutal."', rating: 5, emoji: '🎧'},
      {text: '"FitTime es cómodo y mide bien el pulso."', rating: 4, emoji: '⌚'}
    ];

    const userReviews = [];
    state.purchases.forEach(purchase => {
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

    return this.shuffleArray(allReviews);
  },

  shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  },

  renderSlider() {
    const sliderContainer = document.querySelector('.resenas-slider');
    if (!sliderContainer) return;

    const reviews = this.getAllReviews();

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
  },

  updateSlider() {
    if (document.querySelector('.resenas-slider')) {
      this.renderSlider();
    }
  }
};

// =============================================
// SISTEMA DE REPARACIONES - COMPLETO
// =============================================

const Repairs = {
  init() {
    this.bindEvents();
    this.render();
  },

  bindEvents() {
    const repairForm = document.getElementById('repair-form');
    if (repairForm) {
      repairForm.addEventListener('submit', this.handleSubmit.bind(this));
    }
  },

  handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('repair-name').value;
    const device = document.getElementById('repair-device').value;
    const description = document.getElementById('repair-desc').value;

    if (!name || !device || !description) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const repairRequest = {
      id: Date.now(), // ID único para cada solicitud
      name: name,
      device: device,
      description: description,
      date: new Date().toLocaleString('es-ES'),
      status: 'Pendiente'
    };

    state.repairRequests.push(repairRequest);
    AppStorage.saveRepairRequests();
    this.render();

    alert('✅ Solicitud de reparación enviada correctamente');
    event.target.reset();
  },

  render() {
    const container = document.getElementById('repair-list');
    if (!container) return;

    if (state.repairRequests.length === 0) {
      container.innerHTML = '<p class="muted">Aún no hay solicitudes.</p>';
      return;
    }

    container.innerHTML = state.repairRequests.map((repair) => `
      <div class="repair-item" style="margin-bottom: 15px; padding: 16px; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; background: var(--glass);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
          <div style="flex: 1;">
            <strong style="font-size: 16px;">${repair.device}</strong>
            <div class="muted" style="font-size: 14px; margin-top: 4px;">Solicitado por: ${repair.name}</div>
            <div style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
              <span class="status-badge" style="background: ${this.getStatusColor(repair.status)}; color: white; padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 600;">
                ${repair.status}
              </span>
              <span class="muted" style="font-size: 12px;">${repair.date}</span>
            </div>
          </div>
          <div style="display: flex; gap: 6px; flex-shrink: 0;">
            <button class="small-btn" onclick="Repairs.edit(${repair.id})" style="font-size: 12px;">✏️ Editar</button>
            <button class="small-btn" onclick="Repairs.delete(${repair.id})" style="font-size: 12px;">🗑️ Eliminar</button>
          </div>
        </div>
        <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px;">
          <strong style="font-size: 14px; color: var(--muted);">Descripción del problema:</strong>
          <p style="margin: 8px 0 0 0; font-size: 14px; line-height: 1.4;">${repair.description}</p>
        </div>
      </div>
    `).join('');
  },

  getStatusColor(status) {
    const colors = {
      'Pendiente': '#f59e0b',
      'En proceso': '#3b82f6',
      'Completado': '#10b981',
      'Cancelado': '#ef4444'
    };
    return colors[status] || '#6b7280';
  },

  delete(id) {
    if (confirm('¿Estás seguro de que quieres eliminar esta solicitud de reparación?')) {
      state.repairRequests = state.repairRequests.filter(repair => repair.id !== id);
      AppStorage.saveRepairRequests();
      this.render();
      alert('🗑️ Solicitud eliminada correctamente');
    }
  },

  edit(id) {
    console.log('🔧 Editando reparación con ID:', id);
    const repair = state.repairRequests.find(r => r.id === id);

    if (!repair) {
      console.error('❌ No se encontró la reparación con ID:', id);
      alert('No se encontró la solicitud de reparación');
      return;
    }

    const editModalHTML = `
      <div id="edit-repair-modal" class="modal" style="display: block;">
        <div class="modal-content">
          <span class="close-modal" id="close-edit-modal">&times;</span>
          <div class="card">
            <h3>Editar Solicitud de Reparación</h3>

            <form id="edit-repair-form">
              <input
                type="text"
                id="edit-repair-name"
                placeholder="Nombre"
                value="${repair.name.replace(/"/g, '&quot;')}"
                required
                style="width:100%; background:transparent; border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:10px; color:white; margin-bottom: 12px;"
              >
              <input
                type="text"
                id="edit-repair-device"
                placeholder="Dispositivo"
                value="${repair.device.replace(/"/g, '&quot;')}"
                required
                style="width:100%; background:transparent; border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:10px; color:white; margin-bottom: 12px;"
              >
              <textarea
                id="edit-repair-description"
                placeholder="Descripción del fallo"
                rows="4"
                required
                style="width:100%; background:transparent; border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:10px; color:white; resize: vertical; margin-bottom: 12px;"
              >${repair.description.replace(/"/g, '&quot;')}</textarea>

              <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 16px;">
                <label style="color: var(--muted); font-size: 14px;">Estado:</label>
                <select id="edit-repair-status" style="background: transparent; border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; padding: 6px; color: white;">
                  <option value="Pendiente" ${repair.status === 'Pendiente' ? 'selected' : ''}>Pendiente</option>
                  <option value="En proceso" ${repair.status === 'En proceso' ? 'selected' : ''}>En proceso</option>
                  <option value="Completado" ${repair.status === 'Completado' ? 'selected' : ''}>Completado</option>
                  <option value="Cancelado" ${repair.status === 'Cancelado' ? 'selected' : ''}>Cancelado</option>
                </select>
              </div>

              <div style="display:flex; gap:8px; justify-content:flex-end;">
                <button type="button" class="small-btn" id="cancel-edit-btn">Cancelar</button>
                <button type="submit" class="btn">Guardar Cambios</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;

    // Eliminar modal existente si hay uno
    const existingModal = document.getElementById('edit-repair-modal');
    if (existingModal) {
      existingModal.remove();
    }

    // Añadir nuevo modal
    document.body.insertAdjacentHTML('beforeend', editModalHTML);
    document.body.classList.add('body-no-scroll');

    // Configurar event listeners
    const modal = document.getElementById('edit-repair-modal');
    const closeBtn = document.getElementById('close-edit-modal');
    const cancelBtn = document.getElementById('cancel-edit-btn');
    const form = document.getElementById('edit-repair-form');

    // Función para cerrar el modal
    const closeModal = () => {
      if (modal) modal.remove();
      document.body.classList.remove('body-no-scroll');
    };

    // Event listeners
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.update(id);
      });
    }

    console.log('✅ Modal de edición abierto correctamente');
  },

  update(id) {
    console.log('🔄 Actualizando reparación con ID:', id);

    const nameInput = document.getElementById('edit-repair-name');
    const deviceInput = document.getElementById('edit-repair-device');
    const descriptionInput = document.getElementById('edit-repair-description');
    const statusSelect = document.getElementById('edit-repair-status');

    if (!nameInput || !deviceInput || !descriptionInput || !statusSelect) {
      alert('Error: No se pudieron encontrar los campos del formulario');
      return;
    }

    const name = nameInput.value;
    const device = deviceInput.value;
    const description = descriptionInput.value;
    const status = statusSelect.value;

    console.log('📝 Nuevos valores:', { name, device, description, status });

    if (!name || !device || !description) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    const repairIndex = state.repairRequests.findIndex(r => r.id === id);
    console.log('🔍 Índice encontrado:', repairIndex);

    if (repairIndex !== -1) {
      state.repairRequests[repairIndex] = {
        ...state.repairRequests[repairIndex],
        name: name,
        device: device,
        description: description,
        status: status,
        date: new Date().toLocaleString('es-ES') // Actualizar fecha de modificación
      };

      AppStorage.saveRepairRequests();
      this.render();
      this.closeEditModal();
      alert('✅ Solicitud de reparación actualizada correctamente');
    } else {
      console.error('❌ No se encontró la reparación para actualizar');
      alert('Error: No se encontró la solicitud de reparación');
    }
  },

  closeEditModal() {
    console.log('🚪 Cerrando modal de edición');
    const modal = document.getElementById('edit-repair-modal');
    if (modal) {
      modal.remove();
    }
    document.body.classList.remove('body-no-scroll');
  }
};
// =============================================
// INICIALIZACIÓN PRINCIPAL
// =============================================

// =============================================
// INICIALIZACIÓN PRINCIPAL
// =============================================

document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Inicializando aplicación...');

  // Inicializar sistemas en orden
  Sidebar.init();
  Auth.init();
  Cart.init();
  Products.init();

  // Inicializar sistemas específicos de página
  if (document.getElementById('purchase-list')) {
    Purchases.init();
  }

  if (document.getElementById('repair-form')) {
    Repairs.init();
  }

  if (document.querySelector('.resenas-slider')) {
    Reviews.initSlider();
  }

  // Inicializar carrito en página de carrito
  if (document.getElementById('cart-contents')) {
    Cart.updateUI();
  }

  console.log('✅ Aplicación completamente inicializada');
});

// =============================================
// MANEJO DE TECLA ESC PARA TODOS LOS MODALES
// =============================================

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    Auth.closeModal();
    Products.closeModal();

    // Cerrar modales de reseñas
    const reviewModal = document.getElementById('review-modal');
    if (reviewModal) {
      Purchases.closeReviewForm();
    }

    // Cerrar modales de reparaciones
    const repairModal = document.getElementById('edit-repair-modal');
    if (repairModal) {
      Repairs.closeEditModal();
    }
  }
});
