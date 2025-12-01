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
    price:79.09,
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
    price:89.99,
    desc:'Retroiluminado RGB y switches de alta durabilidad. Experiencia de escritura superior.',
    image:'https://img.pccomponentes.com/articles/1086/10861649/2309-edifier-g4k-teclado-mecanico-inalambrico-gaming-negro-comprar.jpg',
    specs:['Switches Blue', 'RGB', 'Teclas PBT', 'USB-C', 'Reposamuñecas']
  },
  {
    id:7,
    name:'Ratón Óptico SwiftClick',
    price:49.40,
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
    price:449.40,
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
    price:69.99,
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
    price:75.28,
    desc:'Rendimiento superior para multitarea y gaming. Compatible con la mayoría de placas.',
    image:'https://m.media-amazon.com/images/I/61aDeyMWIsL._UF894,1000_QL80_.jpg',
    specs:['16GB DDR4', '3200MHz', 'CL16', 'Dual Channel', 'Disipador']
  },
  {
    id:15,
    name:'Tablet TabX 10"',
    price:259.99,
    desc:'Pantalla grande y batería de larga duración para entretenimiento y trabajo ligero.',
    image:'https://image.made-in-china.com/202f0j00JKUhSjlFrgGr/Mega-Tab-X-Tablet-PC-for-Student-Learing-10-1-Inch-Android-Tablet-PC-for-Education.webp',
    specs:['10" FHD', '64GB', '8h batería', 'Android', 'Cámara 8MP']
  },
  {
    id: 16,
    name: 'Auriculares ProMax',
    price: 129.83,
    desc: 'Sonido de estudio con graves profundos y diseño premium. Cancelación de ruido avanzada.',
    image: 'https://http2.mlstatic.com/D_NQ_NP_995147-MLU77127017840_062024-O.webp',
    specs: ['Cancelación de ruido Pro', '30h batería', 'Bluetooth 5.2', 'Estuche de carga', 'Audio Hi-Fi']
  },
  {
    id: 17,
    name: 'GamerZone H7',
    price: 99.98,
    desc: 'Auriculares gaming con sonido envolvente 7.1 y micrófono retráctil. Diseño ergonómico con luces RGB.',
    image: 'https://msldigital.com.my/wp-content/uploads/2022/07/c102d42b5fe731abb45fed4a25e41cdb.jpeg',
    specs: ['Sonido 7.1', 'Micrófono retráctil', 'RGB dinámico', 'Almohadillas suaves', 'Cable trenzado 2m']
  },
  {
    id: 18,
    name: 'MiniPods AirLite',
    price: 89.53,
    desc: 'Auriculares inalámbricos ultraligeros con estuche de carga compacto. Sonido claro y conexión instantánea.',
    image: 'https://img.tamindir.com/resize/1200x675/2024/05/476742/airpods-lite-2.jpg',
    specs: ['Bluetooth 5.3', 'Estuche de carga USB-C', 'Control táctil', '24h de batería total', 'Diseño ergonómico']
  },
  {
  id: 19,
  name: 'SoundBeats Urban',
  price: 99.98,
  desc: 'Auriculares deportivos resistentes al agua con enganche ergonómico. Sonido potente y ajuste seguro para entrenar.',
  image: 'https://images.fravega.com/f1000/e083ad6458639b6fd4698f90acfca73b.jpg',
  specs: ['Bluetooth 5.2', 'Resistencia IPX7', 'Enganche deportivo', '12h batería', 'Micrófono HD']
}
];

// Estado global
const state = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  purchases: JSON.parse(localStorage.getItem('purchases')) || [],
  repairRequests: JSON.parse(localStorage.getItem('repairRequests')) || [],
  currentRating: 0,
  currentProductId: null,

};

// =============================================
// SISTEMA DE FEEDBACK MULTIMODAL (RETO 9)
// =============================================

// =============================================
// SISTEMA DE FEEDBACK MULTIMODAL (MEJORADO)
// =============================================

const Feedback = {
  // 1. SONIDOS (Audio API)
  playSound(type) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    const now = ctx.currentTime;

    if (type === 'success') {
      // Ding agudo (Éxito)
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(523.25, now);
      oscillator.frequency.exponentialRampToValueAtTime(1046.5, now + 0.1);
      gainNode.gain.setValueAtTime(0.1, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
      oscillator.start(now);
      oscillator.stop(now + 0.5);

    } else if (type === 'error') {
      // Error grave
      oscillator.type = 'sawtooth'; // Sonido más áspero
      oscillator.frequency.setValueAtTime(150, now);
      gainNode.gain.setValueAtTime(0.1, now);
      gainNode.gain.linearRampToValueAtTime(0.01, now + 0.3);
      oscillator.start(now);
      oscillator.stop(now + 0.3);

    } else if (type === 'delete') {
      // NUEVO: Sonido de "Tirar a la basura" (Descendente rápido)
      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(300, now); // Empieza medio
      oscillator.frequency.exponentialRampToValueAtTime(50, now + 0.3); // Baja rápido
      gainNode.gain.setValueAtTime(0.1, now);
      gainNode.gain.linearRampToValueAtTime(0.01, now + 0.3);
      oscillator.start(now);
      oscillator.stop(now + 0.3);

    } else if (type === 'warning') {
      // NUEVO: Sonido de advertencia (Dos toques)
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(400, now);
      gainNode.gain.setValueAtTime(0.05, now);
      gainNode.gain.setValueAtTime(0, now + 0.1);
      gainNode.gain.setValueAtTime(0.05, now + 0.15);
      gainNode.gain.linearRampToValueAtTime(0, now + 0.3);
      oscillator.start(now);
      oscillator.stop(now + 0.3);
    }
  },

  // 2. HÁPTICO
  vibrate(type) {
    if (navigator.vibrate) {
      if (type === 'error') navigator.vibrate([50, 50, 50]);
      else if (type === 'delete') navigator.vibrate(50); // Vibración seca
      else if (type === 'success') navigator.vibrate([50, 30, 50]); // Doble vibración feliz
      else navigator.vibrate(20); // Click suave
    }
  },

  // 3. VISUAL (Toast Notification)
  showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    // Iconos personalizados
    const icons = {
      success: '✅',
      error: '❌',
      info: 'ℹ️',
      warning: '⚠️',   // Nuevo
      delete: '🗑️'    // Nuevo
    };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || '🔔'}</span>
      <div>${message}</div>
    `;

    container.appendChild(toast);

    // Feedback sonoro y háptico automático
    this.playSound(type);
    this.vibrate(type);

    // Eliminar
    setTimeout(() => {
      toast.style.animation = 'slideOut 0.3s ease-in forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },

  notify(message, type = 'success') {
    this.showToast(message, type);
  }
};

let checkoutButtonHandler = null;
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
  },

  getSettings() {
    const settings = localStorage.getItem('appSettings');
    return settings ? JSON.parse(settings) : {
      fontSize: 'medium',
      language: 'es'
    };
  },

  saveSettings(settings) {
    localStorage.setItem('appSettings', JSON.stringify(settings));
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
      Feedback.notify('Por favor, completa email y contraseña.', 'error');
      return;
    }

    const userData = AppStorage.getUser();

    if (!userData) {
      Feedback.notify('No hay usuarios registrados. Por favor, regístrate primero.', 'warning');
      return;
    }

    if (userData.email === email && userData.password === password) {
      this.closeModal();
      Feedback.notify('¡Inicio de sesión exitoso! Bienvenido de nuevo ' + userData.name, 'info');
      this.updateUI(userData.name);
    } else {
      Feedback.notify('Correo electrónico o contraseña incorrectos.', 'error');
    }
  },

  handleRegistration(e) {
    e.preventDefault();

    const email = document.getElementById('login-email')?.value;
    const name = document.getElementById('login-name')?.value;
    const password = document.getElementById('login-password')?.value;

    if (!email || !name || !password) {
      Feedback.notify('Por favor, completa todos los campos.', 'error');
      return;
    }

    if (!this.isValidEmail(email)) {
      Feedback.notify('Por favor, introduce un correo electrónico válido.', 'error');
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
    Feedback.notify('¡Registro exitoso! Bienvenido ' + name, 'success');
    this.updateUI(name);
  },

  logout() {
    AppStorage.removeUser();
    this.updateUI(null);
    Feedback.notify('Has cerrado sesión correctamente.', 'warning');
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
// SISTEMA DE CARRITO - CORREGIDO
// =============================================

const Cart = {

  calculateTotals() {
    // Definimos qué productos tienen qué oferta (Coincidiendo con ofertas.html)
    const ids3x2 = [3, 16, 17, 18, 19]; // Auriculares
    const ids20 = [6, 12]; // Teclado y Webcam
    const ids15 = [7, 9, 14, 15]; // Ratón, Gráfica, RAM, Tablet

    let subtotal = 0;
    let descuentoTotal = 0;
    let precios3x2 = [];
    let hay3x2 = false;

    // Recorremos el carrito UNA sola vez
    state.cart.forEach(item => {
      const itemTotal = item.price * item.qty;
      subtotal += itemTotal;

      // A. Lógica 3x2 (Guardamos precios para procesar luego)
      if (ids3x2.includes(item.id)) {
        for (let i = 0; i < item.qty; i++) {
          precios3x2.push(item.price);
        }
      }
      // B. Descuento directo del 20% (Teclado, Webcam)
      else if (ids20.includes(item.id)) {
        descuentoTotal += itemTotal * 0.20;
      }
      // C. Descuento directo del 15% (Resto de ofertas)
      else if (ids15.includes(item.id)) {
        descuentoTotal += itemTotal * 0.15;
      }
    });

    // Procesar el 3x2 (cada tercer artículo es gratis)
    if (precios3x2.length >= 3) {
      hay3x2 = true;
      precios3x2.sort((a, b) => b - a); // Ordenar caros primero
      for (let i = 2; i < precios3x2.length; i += 3) {
        descuentoTotal += precios3x2[i];
      }
    }

    // D. Lógica Global Black Friday (>250€ = 20% DE TODO)
    // Si el descuento global es MEJOR que la suma de los descuentos individuales
    // y no hay un 3x2 activo (para no acumular ofertas locas), aplicamos el global.
    if (!hay3x2 && subtotal >= 250) {
      const descuentoGlobal = subtotal * 0.20;
      if (descuentoGlobal > descuentoTotal) {
        descuentoTotal = descuentoGlobal;
      }
    }

    return {
      subtotal: subtotal,
      descuento: descuentoTotal,
      total: subtotal - descuentoTotal,
      hay3x2: hay3x2
    };
  },

  init() {
    this.updateCounter();
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

    const settings = AppStorage.getSettings();
    const translations = Settings.getTranslations();
    const currentTranslations = translations[settings.language] || translations.es;
    Feedback.notify(`${product.name} ${currentTranslations['notification.added_to_cart']}`, 'success');
  },

  remove(productId) {
    const product = state.cart.find(item => item.id === productId);
    const name = product ? product.name : 'Producto';

    state.cart = state.cart.filter(item => item.id !== productId);
    AppStorage.saveCart();
    this.updateUI();
    this.updateCounter();

    // NUEVO FEEDBACK DE ELIMINACIÓN
    Feedback.notify(`${name} eliminado del carrito`, 'delete');
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
    const checkoutSection = document.getElementById('checkout-section');

    if (!cartContents) return;

    // 1. OBTENEMOS LAS TRADUCCIONES ACTUALES
    const settings = AppStorage.getSettings();
    const translations = Settings.getTranslations();
    const t = translations[settings.language] || translations.es;

    if (state.cart.length === 0) {
      cartContents.innerHTML = `<p class="muted">${t['cart.empty'] || 'Tu carrito está vacío.'}</p>`;
      if (checkoutSection) checkoutSection.style.display = 'none';

      if (typeof Tutorial !== 'undefined') Tutorial.updateCartButtonVisibility();
      return;
    }

    let html = '';
    state.cart.forEach(item => {
      html += `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:12px; border-bottom: 1px solid rgba(255,255,255,0.1);">
          <div>
            <strong>${item.name}</strong>
            <div class="muted">€${item.price} × ${item.qty} = €${(item.price * item.qty).toFixed(2)}</div>
          </div>
          <div style="display:flex;gap:8px;align-items:center;">
            <button class="small-btn" onclick="Cart.updateQty(${item.id}, -1)">-</button>
            <span style="padding: 0 12px; min-width:30px; text-align:center;">${item.qty}</span>
            <button class="small-btn" onclick="Cart.updateQty(${item.id}, 1)">+</button>
            <button class="small-btn" onclick="Cart.remove(${item.id})" style="margin-left:8px;">🗑️</button>
          </div>
        </div>
      `;
    });

    // USAMOS LA NUEVA FUNCIÓN DE CÁLCULOS
    const totals = this.calculateTotals();

    // 2. LOGICA DE TEXTO DE OFERTA TRADUCIDO
    let textoOferta = '';
    if (totals.hay3x2) {
      // Usa la clave de traducción en lugar del texto fijo
      textoOferta = t['cart.offer.3x2'];
    } else if (totals.descuento > 0) {
      textoOferta = t['cart.offer.20_percent'];
    } else {
      textoOferta = t['cart.offer.none'];
    }

    // 3. HTML CON ETIQUETAS TRADUCIDAS (Subtotal, Descuento, Total, Envío)
    html += `
      <div style="margin-top:16px; padding:12px; background:var(--glass); border-radius:8px;">
        <div><strong>${t['cart.subtotal']}:</strong> €${totals.subtotal.toFixed(2)}</div>
        <div><strong>${t['cart.discount_applied']}:</strong> -€${totals.descuento.toFixed(2)}</div>
        <div style="font-size: 13px; color: var(--accent); margin-top: 4px;">${textoOferta}</div>
        <div style="font-size: 18px; margin-top: 8px;"><strong>${t['cart.total_pay']}:</strong> €${totals.total.toFixed(2)}</div>
        <div style="font-size: 13px; color: var(--muted); margin-top: 6px;">
          ${t['cart.free_shipping']}
        </div>
      </div>
    `;

    cartContents.innerHTML = html;

    if (checkoutSection) {
      checkoutSection.style.display = 'block';
    }

    this.bindCheckoutButton();

    if (typeof Tutorial !== 'undefined') Tutorial.updateCartButtonVisibility();
  },

bindCheckoutButton() {
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    // Remover handler anterior si existe
    if (checkoutButtonHandler) {
      checkoutBtn.removeEventListener('click', checkoutButtonHandler);
    }

    // Crear nuevo handler
    checkoutButtonHandler = () => this.checkout();
    checkoutBtn.addEventListener('click', checkoutButtonHandler);
  }
},

  updateCounter() {
  const total = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) {
    // Obtener la traducción para "Carrito"
    const settings = AppStorage.getSettings();
    const translations = Settings.getTranslations();
    const currentTranslations = translations[settings.language] || translations.es;
    const cartText = currentTranslations['header.cart'] || 'Carrito';

    cartBtn.textContent = `${cartText} (${total})`;
  }
},

  checkout() {
    console.log('🛒 Iniciando checkout...');
    this.showPaymentModal();
  },

  showPaymentModal() {
    console.log('💰 Mostrando modal de pago...');

    const paymentModal = document.getElementById('payment-modal');
    if (!paymentModal) return;

    const paymentTotalElement = document.getElementById('payment-total');
    const orderNumberElement = document.getElementById('order-number');

    // USAMOS LOS CÁLCULOS CORRECTOS
    const totals = this.calculateTotals();

    this.updatePaymentSummary();

    if (paymentTotalElement) {
      // MOSTRAMOS EL TOTAL FINAL (CON DESCUENTO)
      paymentTotalElement.textContent = `€${totals.total.toFixed(2)}`;
    }

    if (orderNumberElement) {
      orderNumberElement.textContent = Math.floor(100000 + Math.random() * 900000);
    }

    paymentModal.style.display = 'block';
    document.body.classList.add('body-no-scroll');

    this.setupPaymentModal();
  },

  updatePaymentSummary() {
  const summaryElement = document.getElementById('payment-summary');
  if (!summaryElement) {
    console.error('❌ Elemento payment-summary no encontrado');
    return;
  }

  let html = '';
  state.cart.forEach(item => {
    html += `
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 4px 0;">
        <span>${item.name} × ${item.qty}</span>
        <span>€${item.price * item.qty}</span>
      </div>
    `;
  });

  summaryElement.innerHTML = html;
  console.log('✅ Resumen de pago actualizado');
},

  setupPaymentModal() {
    // Resetear formulario
    this.resetPaymentForm();

    // Mostrar campos de tarjeta por defecto
    this.togglePaymentFields('credit');

    // Vincular eventos
    this.bindPaymentModalEvents();
  },

  resetPaymentForm() {
    const form = document.getElementById('payment-form');
    if (form) form.reset();

    const termsCheckbox = document.getElementById('terms-accepted');
    if (termsCheckbox) termsCheckbox.checked = false;
  },

  bindPaymentModalEvents() {
    const closeBtn = document.getElementById('close-payment-modal');
    const cancelBtn = document.getElementById('cancel-payment');
    const paymentForm = document.getElementById('payment-form');
    const paymentMethod = document.getElementById('payment-method');

    // Cerrar modal
    if (closeBtn) {
      closeBtn.onclick = () => this.closePaymentModal();
    }

    if (cancelBtn) {
      cancelBtn.onclick = () => this.closePaymentModal();
    }

    // Cambiar método de pago
    if (paymentMethod) {
      paymentMethod.onchange = (e) => {
        this.togglePaymentFields(e.target.value);
      };
    }

    // Enviar formulario
    if (paymentForm) {
      paymentForm.onsubmit = (e) => {
        e.preventDefault();
        this.processPayment();
      };
    }

    // Cerrar al hacer clic fuera
    const paymentModal = document.getElementById('payment-modal');
    if (paymentModal) {
      paymentModal.onclick = (e) => {
        if (e.target === paymentModal) {
          this.closePaymentModal();
        }
      };
    }
  },

  togglePaymentFields(method) {
    // Ocultar todos los campos
    const fields = ['card-fields', 'paypal-fields', 'transfer-fields'];
    fields.forEach(field => {
      const element = document.getElementById(field);
      if (element) element.style.display = 'none';
    });

    // Mostrar campos según el método
    switch (method) {
      case 'credit':
      case 'debit':
        document.getElementById('card-fields').style.display = 'block';
        break;
      case 'paypal':
        document.getElementById('paypal-fields').style.display = 'block';
        break;
      case 'transfer':
        document.getElementById('transfer-fields').style.display = 'block';
        break;
    }
  },

  processPayment() {
  const email = document.getElementById('payment-email')?.value;
  const termsAccepted = document.getElementById('terms-accepted')?.checked;
  const paymentMethod = document.getElementById('payment-method')?.value;

  const settings = AppStorage.getSettings();
  const translations = Settings.getTranslations();
  const currentTranslations = translations[settings.language] || translations.es;

  // Validaciones
  if (!email) {
    alert(currentTranslations['payment.email_required']);
    return;
  }

  if (!termsAccepted) {
    alert(currentTranslations['payment.terms_required']);
    return;
  }

  if (paymentMethod === 'credit' || paymentMethod === 'debit') {
    const cardNumber = document.getElementById('card-number')?.value;
    const cardExpiry = document.getElementById('card-expiry')?.value;
    const cardCVV = document.getElementById('card-cvv')?.value;
    const cardName = document.getElementById('card-name')?.value;

    if (!cardNumber || !cardExpiry || !cardCVV || !cardName) {
      alert(currentTranslations['payment.card_required']);
      return;
    }

    if (cardNumber.replace(/\s/g, '').length !== 16) {
      alert(currentTranslations['payment.card_invalid']);
      return;
    }
  }

  // Procesar pago
  alert(currentTranslations['notification.payment_processing']);
  setTimeout(() => {
    this.completePurchase();
  }, 1500);
},


  completePurchase() {
    const settings = AppStorage.getSettings();
    const translations = Settings.getTranslations();
    const currentTranslations = translations[settings.language] || translations.es;

    // 1. Obtenemos los totales reales (con descuentos del 3x2 o 20%)
    const totals = this.calculateTotals();

    // 2. Calculamos el "ratio de pago".
    // Ejemplo: Si el subtotal es 100€ y paga 80€, el ratio es 0.8 (paga el 80% de cada producto)
    const discountRatio = totals.subtotal > 0 ? (totals.total / totals.subtotal) : 1;

    // 3. Mover items a compras con el PRECIO REBAJADO
    state.cart.forEach(item => {
      // Calculamos el precio real que pagó por unidad
      const precioFinalUnitario = item.price * discountRatio;

      state.purchases.push({
        id: item.id,
        name: item.name,
        price: parseFloat(precioFinalUnitario.toFixed(2)), // <-- AQUÍ guardamos el precio con descuento
        qty: item.qty,
        date: new Date().toLocaleString('es-ES'),
        review: null
      });
    });

    // Limpiar carrito
    state.cart = [];
    AppStorage.saveCart();
    AppStorage.savePurchases();

    // Actualizar UI
    this.updateUI();
    this.updateCounter();

    // Cerrar modal
    this.closePaymentModal();

    // Mensaje de éxito
    Feedback.notify(currentTranslations['notification.payment_success'], 'success');
// Vibración larga de éxito
Feedback.vibrate([100, 50, 100]);

    // Redirigir
    setTimeout(() => {
      window.location.href = 'mis-compras.html';
    }, 1000);
  },

  closePaymentModal() {
  const paymentModal = document.getElementById('payment-modal');
  if (paymentModal) {
    paymentModal.style.display = 'none';
    document.body.classList.remove('body-no-scroll');

    // Limpiar el formulario
    this.resetPaymentForm();
  }
},
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

  getTranslatedProduct(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return null;

  const settings = AppStorage.getSettings();
  const translations = Settings.getTranslations();
  const currentTranslations = translations[settings.language] || translations.es;

  // Buscar traducción del producto
  const productKey = `product.${productId}`;
  const translatedName = currentTranslations[`${productKey}.name`] || product.name;
  const translatedDesc = currentTranslations[`${productKey}.desc`] || product.desc;

  // Traducir especificaciones
  const translatedSpecs = product.specs ? product.specs.map(spec => {
    // Crear clave para la especificación
    const specKey = 'specs.' + spec.toLowerCase()
      .replace(/[^a-z0-9]/g, '_')
      .replace(/_+/g, '_')
      .replace(/["]/g, '')
      .replace(/_$/, '');
    return currentTranslations[specKey] || spec;
  }) : [];

  return {
    ...product,
    name: translatedName,
    desc: translatedDesc,
    specs: translatedSpecs
  };
},

  render(filteredProducts = null) {
  const list = document.getElementById('product-list');
  if (!list) return;

  const productsToRender = filteredProducts || PRODUCTS;
  const settings = AppStorage.getSettings();
  const translations = Settings.getTranslations();
  const currentTranslations = translations[settings.language] || translations.es;

  list.innerHTML = '';
  productsToRender.forEach(product => {
    // Obtener producto traducido
    const translatedProduct = this.getTranslatedProduct(product.id);
    const productName = translatedProduct.name;
    const productDesc = translatedProduct.desc;

    // Traducir botón de compra
    const buyButtonText = currentTranslations['button.buy'];

    const div = document.createElement('div');
    div.className = 'card';
    div.onclick = () => this.openModal(product.id);

    div.innerHTML = `
      <div class="thumb">
        <img src="${product.image}" alt="${productName}"
             onerror="this.style.display='none'; this.parentElement.innerHTML='${productName.split(' ')[0]}';
             this.parentElement.style.background='linear-gradient(135deg,#0ea5e9,#7c3aed)';
             this.parentElement.style.display='flex';
             this.parentElement.style.alignItems='center';
             this.parentElement.style.justifyContent='center';">
      </div>
      <div class="product-title">${productName}</div>
      <div class="muted">${productDesc}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div class="price">€${product.price}</div>
        <button class="small-btn" onclick="event.stopPropagation(); Cart.add(${product.id})">${buyButtonText}</button>
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

  // Obtener producto traducido
  const translatedProduct = this.getTranslatedProduct(productId);
  const productName = translatedProduct.name;
  const productDesc = translatedProduct.desc;
  const productSpecs = translatedProduct.specs;

  // Obtener traducciones
  const settings = AppStorage.getSettings();
  const translations = Settings.getTranslations();
  const currentTranslations = translations[settings.language] || translations.es;

  modalBody.innerHTML = `
    <div class="modal-product-content">
      <img src="${product.image}" alt="${productName}" class="modal-product-image"
           onerror="this.style.display='none';">
      <div class="modal-product-image-placeholder" style="display:${product.image ? 'none' : 'flex'};">
        ${productName.split(' ')[0]}
      </div>

      <div class="modal-product-title">${productName}</div>
      <div class="modal-product-price">€${product.price}</div>
      <div class="modal-product-desc">${productDesc}</div>

      ${productSpecs && productSpecs.length > 0 ? `
        <div class="modal-product-specs">
          <h4>${currentTranslations['product.specs']}:</h4>
          <div class="specs-list">
            ${productSpecs.map(spec => `<div class="spec-item">${spec}</div>`).join('')}
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

    // Obtener traducciones
    const settings = AppStorage.getSettings();
    const translations = Settings.getTranslations();
    const currentTranslations = translations[settings.language] || translations.es;

    if (state.purchases.length === 0) {
      list.innerHTML = currentTranslations['purchases.empty'];
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
                  <div><strong>${currentTranslations['purchases.your_review']}:</strong> ${purchase.review.rating}⭐</div>
                  <div class="muted">"${purchase.review.text}"</div>
                  <small class="muted">${purchase.review.date || currentTranslations['purchases.no_date']}</small>
                </div>
              ` : ''}
            </div>
          </div>
          <div>
            ${!hasReview ?
              `<button class="small-btn add-review-btn" data-index="${index}" style="margin-left:8px;">✍️ ${currentTranslations['purchases.review']}</button>` :
              `<button class="small-btn edit-review-btn" data-index="${index}" style="margin-left:8px;">📝 ${currentTranslations['purchases.edit_review']}</button>`
            }
          </div>
        </div>
      </div>`;
    }).join('');
  },

  showReviewForm(purchaseIndex) {
    const purchase = state.purchases[purchaseIndex];

    // Obtener traducciones
    const settings = AppStorage.getSettings();
    const translations = Settings.getTranslations();
    const currentTranslations = translations[settings.language] || translations.es;

    const reviewFormHTML = `
      <div id="review-modal" class="modal" style="display: block;">
        <div class="modal-content">
          <span class="close-modal" id="review-close-modal">&times;</span>
          <div class="card">
            <h3>${currentTranslations['review.title']} ${purchase.name}</h3>

            <div style="margin:16px 0; text-align:center;">
              <div style="font-size:14px; margin-bottom:8px; color:var(--muted);">${currentTranslations['review.rating']}:</div>
              <div id="rating-stars" style="display:flex; justify-content:center; gap:8px; font-size:24px;">
                ${[1,2,3,4,5].map(star => `
                  <span style="cursor:pointer; color:#666;" data-rating="${star}" class="star" id="star-${star}">⭐</span>
                `).join('')}
              </div>
              <div id="rating-text" style="margin-top:8px; font-size:14px; color:var(--muted);">${currentTranslations['review.select_stars']}</div>
            </div>

            <textarea
              id="review-text"
              placeholder="${currentTranslations['review.placeholder']}"
              rows="5"
              style="width:100%; background:transparent; border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:12px; color:white; margin:12px 0;"
            ></textarea>

            <div style="display:flex; gap:8px; justify-content:flex-end;">
              <button class="small-btn" id="review-cancel-btn">${currentTranslations['review.cancel']}</button>
              <button class="btn" id="review-submit-btn" data-index="${purchaseIndex}">${currentTranslations['review.submit']}</button>
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
    // Obtener traducciones
    const settings = AppStorage.getSettings();
    const translations = Settings.getTranslations();
    const currentTranslations = translations[settings.language] || translations.es;

    const ratingTexts = [
      currentTranslations['review.select_stars'],
      currentTranslations['review.rating.bad'],
      currentTranslations['review.rating.poor'],
      currentTranslations['review.rating.good'],
      currentTranslations['review.rating.very_good'],
      currentTranslations['review.rating.excellent']
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

    // Obtener traducciones para la notificación
    const settings = AppStorage.getSettings();
    const translations = Settings.getTranslations();
    const currentTranslations = translations[settings.language] || translations.es;

    Feedback.notify(currentTranslations['notification.review_thanks'], 'success');
  },

  editReview(purchaseIndex) {
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

    // Obtener traducciones
    const settings = AppStorage.getSettings();
    const translations = Settings.getTranslations();
    const currentTranslations = translations[settings.language] || translations.es;

    Feedback.notify(currentTranslations['notification.repair_submitted'], 'success');
    event.target.reset();
  },

  render() {
    const container = document.getElementById('repair-list');
    if (!container) return;

    // Obtener traducciones
    const settings = AppStorage.getSettings();
    const translations = Settings.getTranslations();
    const currentTranslations = translations[settings.language] || translations.es;

    if (state.repairRequests.length === 0) {
      container.innerHTML = `<p class="muted">${currentTranslations['repair.no_requests']}</p>`;
      return;
    }

    container.innerHTML = state.repairRequests.map((repair) => `
      <div class="repair-item" style="margin-bottom: 15px; padding: 16px; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; background: var(--glass);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
          <div style="flex: 1;">
            <strong style="font-size: 16px;">${repair.device}</strong>
            <div class="muted" style="font-size: 14px; margin-top: 4px;">${currentTranslations['repair.requested_by']} ${repair.name}</div>
            <div style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
              <span class="status-badge" style="background: ${this.getStatusColor(repair.status)}; color: white; padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: 600;">
                ${repair.status}
              </span>
              <span class="muted" style="font-size: 12px;">${repair.date}</span>
            </div>
          </div>
          <div style="display: flex; gap: 6px; flex-shrink: 0;">
            <button class="small-btn" onclick="Repairs.edit(${repair.id})" style="font-size: 12px;">✏️ ${currentTranslations['repair.edit']}</button>
            <button class="small-btn" onclick="Repairs.delete(${repair.id})" style="font-size: 12px;">🗑️ ${currentTranslations['repair.delete']}</button>
          </div>
        </div>
        <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px;">
          <strong style="font-size: 14px; color: var(--muted);">${currentTranslations['repair.problem']}:</strong>
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
    // Obtener traducciones
    const settings = AppStorage.getSettings();
    const translations = Settings.getTranslations();
    const currentTranslations = translations[settings.language] || translations.es;

    if (confirm('¿Estás seguro de que quieres eliminar esta solicitud de reparación?')) {
      state.repairRequests = state.repairRequests.filter(repair => repair.id !== id);
      AppStorage.saveRepairRequests();
      this.render();
      // NUEVO FEEDBACK DE ELIMINACIÓN
      Feedback.notify('Solicitud eliminada correctamente', 'delete');
    }
  },

  edit(id) {
    const repair = state.repairRequests.find(r => r.id === id);

    if (!repair) {
      alert('No se encontró la solicitud de reparación');
      return;
    }

    // Obtener traducciones
    const settings = AppStorage.getSettings();
    const translations = Settings.getTranslations();
    const currentTranslations = translations[settings.language] || translations.es;

    const editModalHTML = `
      <div id="edit-repair-modal" class="modal" style="display: block;">
        <div class="modal-content">
          <span class="close-modal" id="close-edit-modal">&times;</span>
          <div class="card">
            <h3>${currentTranslations['repair.edit']} ${currentTranslations['repair.title']}</h3>

            <form id="edit-repair-form">
              <input
                type="text"
                id="edit-repair-name"
                placeholder="${currentTranslations['repair.name']}"
                value="${repair.name.replace(/"/g, '&quot;')}"
                required
                style="width:100%; background:transparent; border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:10px; color:white; margin-bottom: 12px;"
              >
              <input
                type="text"
                id="edit-repair-device"
                placeholder="${currentTranslations['repair.device']}"
                value="${repair.device.replace(/"/g, '&quot;')}"
                required
                style="width:100%; background:transparent; border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:10px; color:white; margin-bottom: 12px;"
              >
              <textarea
                id="edit-repair-description"
                placeholder="${currentTranslations['repair.description']}"
                rows="4"
                required
                style="width:100%; background:transparent; border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:10px; color:white; resize: vertical; margin-bottom: 12px;"
              >${repair.description.replace(/"/g, '&quot;')}</textarea>

              <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 16px;">
                <label style="color: var(--muted); font-size: 14px;">${currentTranslations['repair.status.pending']}:</label>
                <select id="edit-repair-status" style="background: transparent; border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; padding: 6px; color: white;">
                  <option value="Pendiente" ${repair.status === 'Pendiente' ? 'selected' : ''}>${currentTranslations['repair.status.pending']}</option>
                  <option value="En proceso" ${repair.status === 'En proceso' ? 'selected' : ''}>${currentTranslations['repair.status.processing']}</option>
                  <option value="Completado" ${repair.status === 'Completado' ? 'selected' : ''}>${currentTranslations['repair.status.completed']}</option>
                  <option value="Cancelado" ${repair.status === 'Cancelado' ? 'selected' : ''}>${currentTranslations['repair.status.cancelled']}</option>
                </select>
              </div>

              <div style="display:flex; gap:8px; justify-content:flex-end;">
                <button type="button" class="small-btn" id="cancel-edit-btn">${currentTranslations['button.cancel']}</button>
                <button type="submit" class="btn">${currentTranslations['button.save']}</button>
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
  },

  update(id) {
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

    if (!name || !device || !description) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    const repairIndex = state.repairRequests.findIndex(r => r.id === id);

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

      // Obtener traducciones
      const settings = AppStorage.getSettings();
      const translations = Settings.getTranslations();
      const currentTranslations = translations[settings.language] || translations.es;

      alert(currentTranslations['notification.repair_updated']);
    } else {
      alert('Error: No se encontró la solicitud de reparación');
    }
  },

  closeEditModal() {
    const modal = document.getElementById('edit-repair-modal');
    if (modal) {
      modal.remove();
    }
    document.body.classList.remove('body-no-scroll');
  }
};

// =============================================
// SISTEMA DE AJUSTES
// =============================================

const Settings = {
  init() {
    this.bindEvents();
    this.loadSettings();
  },

  updateProductTranslations() {
  const settings = AppStorage.getSettings();
  this.applyLanguage(settings.language);

  // Si estamos en la página de productos, volver a renderizar
  if (document.getElementById('product-list')) {
    Products.render();
  }

  // Si hay un modal de producto abierto, actualizarlo
  const productModal = document.getElementById('product-modal');
  if (productModal && productModal.style.display === 'block' && state.currentProductId) {
    Products.openModal(state.currentProductId);
  }
},
  bindEvents() {
    const settingsBtn = document.getElementById('settings-btn');
    const closeSettingsModal = document.getElementById('close-settings-modal');
    const saveSettingsBtn = document.getElementById('save-settings');
    const settingsModal = document.getElementById('settings-modal');

    if (settingsBtn) {
      settingsBtn.addEventListener('click', this.openModal.bind(this));
    }

    if (closeSettingsModal) {
      closeSettingsModal.addEventListener('click', this.closeModal.bind(this));
    }

    if (saveSettingsBtn) {
      saveSettingsBtn.addEventListener('click', this.saveSettings.bind(this));
    }

    if (settingsModal) {
      settingsModal.addEventListener('click', (e) => {
        if (e.target === settingsModal) this.closeModal();
      });
    }

    // Event delegation para las opciones de tamaño de fuente
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-font-size]')) {
        const fontSize = e.target.closest('[data-font-size]').dataset.fontSize;
        this.selectFontSize(fontSize);
      }
    });

    // Event delegation para las opciones de idioma
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-language]')) {
        const language = e.target.closest('[data-language]').dataset.language;
        this.selectLanguage(language);
      }
    });
  },

  openModal() {
    const settingsModal = document.getElementById('settings-modal');
    if (settingsModal) {
      settingsModal.style.display = 'block';
      document.body.classList.add('body-no-scroll');
      this.loadCurrentSettings();
    }
  },

  closeModal() {
    const settingsModal = document.getElementById('settings-modal');
    if (settingsModal) {
      settingsModal.style.display = 'none';
      document.body.classList.remove('body-no-scroll');
    }
  },

  loadCurrentSettings() {
  const settings = AppStorage.getSettings();
  console.log('🎯 Cargando configuración actual:', settings);

  // Actualizar selección de tamaño de fuente
  document.querySelectorAll('[data-font-size]').forEach(option => {
    option.classList.remove('active');
    if (option.dataset.fontSize === settings.fontSize) {
      option.classList.add('active');
      console.log('✅ Tamaño de fuente seleccionado:', settings.fontSize);
    }
  });

  // Actualizar selección de idioma
  document.querySelectorAll('[data-language]').forEach(option => {
    option.classList.remove('active');
    if (option.dataset.language === settings.language) {
      option.classList.add('active');
      console.log('✅ Idioma seleccionado:', settings.language);
    }
  });

    document.querySelectorAll('[data-color-mode]').forEach(option => {
      option.classList.remove('active');
      // Si no hay modo guardado, usamos 'normal'
      if (option.dataset.colorMode === (settings.colorMode || 'normal')) {
        option.classList.add('active');
      }
    });
},

  selectFontSize(size) {
    document.querySelectorAll('[data-font-size]').forEach(option => {
      option.classList.remove('active');
    });
    document.querySelector(`[data-font-size="${size}"]`).classList.add('active');
  },

  selectLanguage(language) {
    document.querySelectorAll('[data-language]').forEach(option => {
      option.classList.remove('active');
    });
    document.querySelector(`[data-language="${language}"]`).classList.add('active');
  },

  saveSettings() {
  const activeFontSize = document.querySelector('[data-font-size].active');
  const activeLanguage = document.querySelector('[data-language].active');
  const activeColorMode = document.querySelector('[data-color-mode].active');
  // Obtener traducciones para mensajes de error
  const currentSettings = AppStorage.getSettings();
  const translations = this.getTranslations();
  const currentTranslations = translations[currentSettings.language] || translations.es;

  if (!activeFontSize || !activeLanguage || !activeColorMode) {
    alert(currentTranslations['settings.select_all']);
    return;
  }

  const settings = {
    fontSize: activeFontSize.dataset.fontSize,
    language: activeLanguage.dataset.language,
    colorMode: activeColorMode.dataset.colorMode
  };

  console.log('💾 Guardando ajustes:', settings);

  AppStorage.saveSettings(settings);
  this.applySettings(settings);
  this.closeModal();

  // Actualizar traducciones de productos
  this.updateProductTranslations();

  // Mostrar mensaje en el idioma actual
  const newTranslations = translations[settings.language] || translations.es;
  alert(newTranslations['settings.saved']);

  // Forzar actualización visual
  setTimeout(() => {
    this.applySettings(settings);
  }, 100);
},

  loadSettings() {
  const settings = AppStorage.getSettings();
  console.log('📖 Cargando ajustes:', settings);
  this.applySettings(settings);
},

  applySettings(settings) {
  console.log('🔧 Aplicando ajustes:', settings);

  // Aplicar tamaño de fuente - CORREGIDO
  document.body.classList.remove('font-small', 'font-medium', 'font-large', 'font-xlarge');
  document.body.classList.add(`font-${settings.fontSize}`);

  console.log('📝 Clases aplicadas al body:', document.body.className);
  document.body.classList.remove('color-mode-normal', 'color-mode-protanopia', 'color-mode-tritanopia');
    if (settings.colorMode && settings.colorMode !== 'normal') {
      document.body.classList.add(`color-mode-${settings.colorMode}`);
    }
  // Aplicar idioma
  this.applyLanguage(settings.language);
},

  applyLanguage(language) {
  console.log('🌍 Aplicando idioma:', language);

  const translations = this.getTranslations();
  const currentTranslations = translations[language] || translations.es;

  // 1. Actualizar textos estáticos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (currentTranslations[key]) {
      element.textContent = currentTranslations[key];
    } else {
      console.warn('Traducción faltante:', key);
      // NO borrar el contenido si no hay traducción
    }
  });

  // 2. Actualizar placeholders - mantener el placeholder original si no hay traducción
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    const currentPlaceholder = element.getAttribute('placeholder');
    if (currentTranslations[key]) {
      element.placeholder = currentTranslations[key];
    } else if (!currentPlaceholder) {
      element.placeholder = `[${key}]`; // Solo poner placeholder si no tiene uno
    }
  });

  // Resto del código sin cambios...
  this.updateDynamicTexts(currentTranslations);
  this.updateAllModules(currentTranslations);
},

updateAllModules(translations) {
  console.log('🔄 Actualizando todos los módulos...');

  // Actualizar productos
  if (typeof Products !== 'undefined' && document.getElementById('product-list')) {
    console.log('📦 Actualizando productos...');
    Products.render();
  }

  // Actualizar ofertas (si estamos en la página de ofertas)
  if (typeof Offers !== 'undefined' && document.getElementById('offer-product-list')) {
    console.log('🎁 Actualizando ofertas...');
    Offers.render();
  }

  // Actualizar carrito
  if (typeof Cart !== 'undefined') {
    console.log('🛒 Actualizando carrito...');
    Cart.updateUI();
    Cart.updateCounter();
  }

  // Actualizar compras
  if (typeof Purchases !== 'undefined' && document.getElementById('purchase-list')) {
    console.log('📋 Actualizando compras...');
    Purchases.render();
  }

  // Actualizar reparaciones
  if (typeof Repairs !== 'undefined' && document.getElementById('repair-list')) {
    console.log('🔧 Actualizando reparaciones...');
    Repairs.render();
  }

  // Actualizar reseñas
  if (typeof Reviews !== 'undefined' && Reviews.updateSlider) {
    console.log('⭐ Actualizando reseñas...');
    Reviews.updateSlider();
  }

  // Actualizar botones específicos
  this.updateSpecificButtons(translations);
},

updateSpecificButtons(translations) {
  // Botón de añadir al carrito en modal
  const modalAddBtn = document.getElementById('modal-add-to-cart');
  if (modalAddBtn) {
    modalAddBtn.textContent = translations['button.add_to_cart'];
  }

  // Botones de compra en productos
  const buyButtons = document.querySelectorAll('.small-btn');
  buyButtons.forEach(btn => {
    if (btn.textContent.includes('Comprar') || btn.textContent.includes('Buy') || btn.textContent.includes('购买')) {
      btn.textContent = translations['button.buy'];
    }
  });

  // Botones en reparaciones
  const repairButtons = document.querySelectorAll('#repair-list .small-btn');
  repairButtons.forEach(btn => {
    if (btn.textContent.includes('Editar') || btn.textContent.includes('Edit') || btn.textContent.includes('编辑')) {
      btn.textContent = '✏️ ' + translations['button.edit'];
    }
    if (btn.textContent.includes('Eliminar') || btn.textContent.includes('Delete') || btn.textContent.includes('删除')) {
      btn.textContent = '🗑️ ' + translations['button.delete'];
    }
  });
},

updateDynamicTexts(translations) {
  // Botón del carrito
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) {
    const cartCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
    cartBtn.textContent = `${translations['header.cart']} (${cartCount})`;
  }

  // Contenido del carrito
  const cartContents = document.getElementById('cart-contents');
  if (cartContents && state.cart.length === 0) {
    cartContents.textContent = translations['cart.empty'];
  }

  // Lista de compras
  const purchaseList = document.getElementById('purchase-list');
  if (purchaseList && state.purchases.length === 0) {
    purchaseList.textContent = translations['purchases.empty'];
  }

  // Lista de reparaciones
  const repairList = document.getElementById('repair-list');
  if (repairList && state.repairRequests.length === 0) {
    repairList.innerHTML = `<p class="muted">${translations['repair.no_requests']}</p>`;
  }

    // Actualizar botones dinámicos en productos
    const buyButtons = document.querySelectorAll('.small-btn');
    buyButtons.forEach(btn => {
      if (btn.textContent.includes('Comprar') || btn.textContent.includes('Buy') || btn.textContent.includes('购买')) {
        btn.textContent = translations['button.buy'];
      }
    });

    // Actualizar botón de añadir al carrito en modal
    const modalAddBtn = document.getElementById('modal-add-to-cart');
    if (modalAddBtn) {
      modalAddBtn.textContent = translations['button.add_to_cart'];
    }
  },

  getTranslations() {
    return {
      es: {
        // Títulos de página
      'page.title.index': 'ElectroInformatic — Inicio',
      'page.title.shop': 'ElectroInformatic — Comprar',
      'page.title.cart': 'ElectroInformatic — Carrito',
      'page.title.repair': 'ElectroInformatic — Reparar',
      'page.title.purchases': 'ElectroInformatic — Mis Compras',

      // Header
      'header.brand': 'ElectroInformatic',
      'header.tagline': 'Dispositivos electrónicos',
      'header.cart': 'Carrito',
      'header.settings': 'Ajustes',

      // Navegación
      'nav.home': 'Inicio',
      'nav.shop': 'Comprar',
      'nav.repair': 'Reparar',
      'nav.purchases': 'Mis Compras',
      'nav.login': 'Iniciar Sesión',

      // Página principal
      'hero.title': 'Bienvenid@ a ElectroInformatic',
      'hero.subtitle': 'Compra, repara y comparte tu experiencia con tus dispositivos electrónicos favoritos.',
      'hero.shop': 'Ir a Comprar',
      'hero.repair': 'Reservar reparación',
      'hero.help.title': '¿Necesitas ayuda?',
      'hero.help.text': 'Consulta guías, consejos o solicita una reparación en la pestaña Reparar.',
      'reviews.title': 'Reseñas de clientes',

      // Página de comprar
      'shop.title': 'Comprar',
      'shop.subtitle': 'Haz clic en cualquier producto para ver detalles y añadir al carrito.',
      'shop.search': '🔍 Buscar dispositivo...',
      'shop.modal.add': 'Añadir al Carrito',

      // Carrito
      'cart.title': 'Carrito',
      'cart.empty': 'Tu carrito está vacío.',
      'cart.total': 'Total',
      'cart.checkout': 'Pagar',

      // Modal de pago
      'payment.title': 'Finalizar Compra',
      'payment.summary': 'Resumen del Pedido',
      'payment.method': 'Método de Pago',
      'payment.card.number': 'Número de Tarjeta',
      'payment.card.expiry': 'Fecha de Expiración',
      'payment.card.cvv': 'CVV',
      'payment.card.name': 'Nombre del Titular',
      'payment.paypal.message': 'Serás redirigido a PayPal para completar el pago',
      'payment.transfer.details': 'Datos para transferencia',
      'payment.transfer.iban': 'IBAN',
      'payment.transfer.beneficiary': 'Beneficiario',
      'payment.transfer.concept': 'Concepto',
      'payment.email': 'Correo Electrónico',
      'payment.terms': 'Acepto los términos y condiciones',
      'payment.cancel': 'Cancelar',
      'payment.pay': 'Pagar Ahora',
      'payment.email_required': 'Por favor, introduce tu correo electrónico',
      'payment.terms_required': 'Debes aceptar los términos y condiciones',
      'payment.card_required': 'Por favor, completa todos los datos de la tarjeta',
      'payment.card_invalid': 'El número de tarjeta debe tener 16 dígitos',

      // Reparar
      'repair.title': 'Reparar',
      'repair.name': 'Nombre',
      'repair.device': 'Dispositivo (ej. móvil, portátil)',
      'repair.description': 'Descripción del fallo',
      'repair.submit': 'Enviar solicitud',
      'repair.call': 'Llamar',
      'repair.requests': 'Solicitudes enviadas',
      'repair.no_requests': 'Aún no hay solicitudes.',
      'repair.status': 'Estado',
      'repair.status.pending': 'Pendiente',
      'repair.status.processing': 'En proceso',
      'repair.status.completed': 'Completado',
      'repair.status.cancelled': 'Cancelado',
      'repair.edit': 'Editar',
      'repair.delete': 'Eliminar',
      'repair.problem': 'Descripción del problema',
      'repair.requested_by': 'Solicitado por:',
      'repair.required_fields': 'Por favor, completa todos los campos.',
      'repair.delete_confirm': '¿Estás seguro de que quieres eliminar esta solicitud de reparación?',
      'repair.not_found': 'No se encontró la solicitud de reparación',

      // Mis Compras
      'purchases.title': 'Mis Compras',
      'purchases.subtitle': 'Aquí verás tus pedidos completados. Puedes añadir una reseña.',
      'purchases.empty': 'Aún no has comprado nada.',
      'purchases.review': 'Añadir Reseña',
      'purchases.edit_review': 'Editar Reseña',
      'purchases.your_review': 'Tu reseña',
      'purchases.no_date': 'Sin fecha',

      // Reseñas
      'review.title': 'Escribe tu reseña',
      'review.rating': 'Calificación',
      'review.select_stars': 'Selecciona las estrellas',
      'review.rating.bad': 'Malo',
      'review.rating.poor': 'Regular',
      'review.rating.good': 'Bueno',
      'review.rating.very_good': 'Muy bueno',
      'review.rating.excellent': 'Excelente',
      'review.placeholder': 'Comparte tu experiencia con este producto... ¿Qué te gustó? ¿Qué mejorarías?',
      'review.cancel': 'Cancelar',
      'review.submit': 'Publicar Reseña',
      'review.rating_required': 'Por favor, selecciona una calificación con estrellas',
      'review.text_required': 'Por favor, escribe tu reseña',
      'review.default.phone': '"El X-Phone me sorprendió, excelente batería."',
      'review.default.laptop': '"SpeedBook va genial para clase y trabajo."',
      'review.default.headphones': '"SoundMax tiene un sonido brutal."',
      'review.default.watch': '"FitTime es cómodo y mide bien el pulso."',


      // Footer
      'footer.text': '✨ La tienda para verdaderos ElectroInformaticos ✨',

      // Modal de login
      'login.title': '💻 ElectroInformatic',
      'login.subtitle': 'Únete a nuestra comunidad de expertos',
      'login.email': '📧 Correo electrónico',
      'login.name': '👤 Nombre completo',
      'login.password': '🔒 Contraseña',
      'login.register': '📝 Registrarse',
      'login.signin': '🚀 Iniciar Sesión',
      'login.terms': 'Al registrarte aceptas nuestros términos y condiciones',
      'login.tip.register': 'Para registrarte:',
      'login.tip.register.desc': 'Completa todos los campos',
      'login.tip.login': 'Para iniciar sesión:',
      'login.tip.login.desc': 'Solo email y contraseña',
      'login.required_fields': 'Por favor, completa todos los campos.',
      'login.invalid_email': 'Por favor, introduce un correo electrónico válido.',
      'login.no_users': 'No hay usuarios registrados. Por favor, regístrate primero.',
      'login.invalid_credentials': 'Correo electrónico o contraseña incorrectos.',
      'login.success': '¡Inicio de sesión exitoso! Bienvenido de nuevo ',
      'registration.success': '¡Registro exitoso! Bienvenido ',
      'logout.success': 'Has cerrado sesión correctamente.',
      'logout.confirm': '¿Deseas cerrar sesión, ${user.name}?',

      // Ajustes
      'settings.title': 'Ajustes',
      'settings.fontSize': 'Tamaño de letra:',
      'settings.language': 'Idioma:',
      'settings.save': 'Guardar Ajustes',
      'settings.small': 'Pequeño',
      'settings.medium': 'Mediano',
      'settings.large': 'Grande',
      'settings.xlarge': 'Muy Grande',
      'settings.saved': 'Ajustes guardados correctamente',
      'settings.select_all': 'Por favor, selecciona todas las opciones',

      // Botones y acciones
      'button.add_to_cart': 'Añadir al Carrito',
      'button.buy': 'Comprar',
      'button.view_details': 'Ver Detalles',
      'button.edit': 'Editar',
      'button.delete': 'Eliminar',
      'button.save': 'Guardar',
      'button.cancel': 'Cancelar',
      'button.submit': 'Enviar',
      'button.confirm': 'Confirmar',
      'button.close': 'Cerrar',

      // Notificaciones
      'notification.added_to_cart': 'añadido al carrito!',
      'notification.login_success': '¡Inicio de sesión exitoso! Bienvenido de nuevo',
      'notification.registration_success': '¡Registro exitoso! Bienvenido',
      'notification.logout_success': 'Has cerrado sesión correctamente.',
      'notification.empty_cart': 'El carrito está vacío',
      'notification.payment_success': '¡Pago completado! Gracias por tu compra. ✨',
      'notification.repair_submitted': '✅ Solicitud de reparación enviada correctamente',
      'notification.repair_deleted': '🗑️ Solicitud eliminada correctamente',
      'notification.repair_updated': '✅ Solicitud de reparación actualizada correctamente',
      'notification.review_thanks': '¡Gracias por tu reseña! ✨',
      'notification.product_added': '¡Producto añadido al carrito!',
      'notification.cart_updated': 'Carrito actualizado',
      'notification.payment_processing': 'Procesando pago...',

      // Características de dispositivos (especificaciones)
      'specs.intel_core_i7': 'Intel Core i7',
      'specs.16gb_ram': '16GB RAM',
      'specs.512gb_ssd': '512GB SSD',
      'specs.rtx_3050': 'RTX 3050',
      'specs.15_6_fhd': '15.6" FHD',
      'specs.windows_11': 'Windows 11',
      'specs.intel_i5': 'Intel i5',
      'specs.8gb_ram': '8GB RAM',
      'specs.256gb_ssd': '256GB SSD',
      'specs.intel_iris': 'Gráficos Intel Iris',
      'specs.14_fhd': '14" FHD',
      'specs.12h_battery': '12h batería',
      'specs.noise_cancellation': 'Cancelación de ruido',
      'specs.20h_battery': '20h batería',
      'specs.bluetooth_5': 'Bluetooth 5.0',
      'specs.built_in_mic': 'Micrófono integrado',
      'specs.foldable': 'Plegables',
      'specs.amoled': 'Pantalla AMOLED',
      'specs.water_resistant': 'Resistente al agua',
      'specs.heart_monitor': 'Monitoreo cardiaco',
      'specs.notifications': 'Notificaciones',
      'specs.7_days_battery': '7 días batería',
      'specs.27_fhd': '27" FHD',
      'specs.75hz': '75Hz',
      'specs.ips': 'IPS',
      'specs.hdmi_vga': 'HDMI/VGA',
      'specs.thin_border': 'Borde delgado',
      'specs.blue_switches': 'Switches Blue',
      'specs.rgb': 'RGB',
      'specs.pbt_keys': 'Teclas PBT',
      'specs.usb_c': 'USB-C',
      'specs.wrist_rest': 'Reposamuñecas',
      'specs.16000_dpi': '16000 DPI',
      'specs.wireless': 'Inalámbrico',
      'specs.6_buttons': '6 botones',
      'specs.50h_battery': '50h batería',
      'specs.ergonomic': 'Ergonómico',
      'specs.1tb_nvme': '1TB NVMe',
      'specs.3500_mbs': '3500 MB/s',
      'specs.m2': 'M.2',
      'specs.5_years_warranty': '5 años garantía',
      'specs.rtx_4060': 'RTX 4060',
      'specs.8gb_gddr6': '8GB GDDR6',
      'specs.dlss_3': 'DLSS 3',
      'specs.3_fans': '3 ventiladores',
      'specs.pcie_4': 'PCIe 4.0',
      'specs.wifi': 'WiFi',
      'specs.bluetooth': 'Bluetooth',
      'specs.scanner': 'Escáner',
      'specs.copier': 'Copiadora',
      'specs.continuous_ink': 'Tinta continua',
      'specs.wifi_6': 'WiFi 6',
      'specs.6000_mbps': '6000 Mbps',
      'specs.8_antennas': '8 antenas',
      'specs.2_5g_port': 'Puerto 2.5G',
      'specs.app_management': 'App gestión',
      'specs.1080p_30fps': '1080p 30fps',
      'specs.auto_focus': 'Enfoque automático',
      'specs.adjustable_clip': 'Clip ajustable',
      'specs.usb': 'USB',
      'specs.2_1_channels': '2.1 Canales',
      'specs.100w': '100W',
      'specs.aux_input': 'Entrada auxiliar',
      'specs.remote_control': 'Control remoto',
      'specs.16gb_ddr4': '16GB DDR4',
      'specs.3200mhz': '3200MHz',
      'specs.cl16': 'CL16',
      'specs.dual_channel': 'Dual Channel',
      'specs.heatsink': 'Disipador',
      'specs.10_fhd': '10" FHD',
      'specs.64gb': '64GB',
      'specs.8h_battery': '8h batería',
      'specs.android': 'Android',
      'specs.8mp_camera': 'Cámara 8MP',
      'product.specs': 'Especificaciones técnicas',
      'specs.cancelaci_n_de_ruido_pro': 'Cancelación de ruido Pro',
      'specs.30h_bater_a': '30h batería',
      'specs.bluetooth_5_2': 'Bluetooth 5.2',
      'specs.estuche_de_carga': 'Estuche de carga',
      'specs.audio_hi_fi': 'Audio Hi-Fi',
      'specs.sonido_7_1': 'Sonido 7.1',
      'specs.micr_fono_retr_ctil': 'Micrófono retráctil',
      'specs.rgb_din_mico': 'RGB dinámico',
      'specs.almohadillas_suaves': 'Almohadillas suaves',
      'specs.cable_trenzado_2m': 'Cable trenzado 2m',
      'specs.bluetooth_5_3': 'Bluetooth 5.3',
      'specs.estuche_de_carga_usb_c': 'Estuche de carga USB-C',
      'specs.control_t_ctil': 'Control táctil',
      'specs.24h_de_bater_a_total': '24h de batería total',
      'specs.dise_o_ergon_mico': 'Diseño ergonómico',
      'specs.resistencia_ipx7': 'Resistencia IPX7',
      'specs.enganche_deportivo': 'Enganche deportivo',
      'specs.micr_fono_hd': 'Micrófono HD',

      // Traducciones de productos
      'product.1.name': 'Pccom revolt i7 3050',
      'product.1.desc': 'Portátil gaming de alto rendimiento con procesador Intel Core i7 y tarjeta gráfica RTX 3050. Ideal para gaming y trabajo intensivo.',

      'product.2.name': 'SpeedBook 14"',
      'product.2.desc': 'Portátil ultraligero perfecto para trabajo y estudio. Diseño elegante y batería de larga duración.',

      'product.3.name': 'Auriculares SoundMax',
      'product.3.desc': 'Auriculares con sonido envolvente y cancelación activa de ruido. Perfectos para música y gaming.',

      'product.4.name': 'Smartwatch FitTime',
      'product.4.desc': 'Monitoriza tu salud y notificaciones con este elegante smartwatch. Resistente al agua.',

      'product.5.name': 'Monitor UltraView 27"',
      'product.5.desc': 'Pantalla Full HD con colores vibrantes y marco delgado. Ideal para trabajo y entretenimiento.',

      'product.6.name': 'Teclado Mecánico ProKey',
      'product.6.desc': 'Retroiluminado RGB y switches de alta durabilidad. Experiencia de escritura superior.',

      'product.7.name': 'Ratón Óptico SwiftClick',
      'product.7.desc': 'Precisión extrema y diseño ergonómico para largas sesiones. Conexión inalámbrica.',

      'product.8.name': 'Disco SSD FastDrive 1TB',
      'product.8.desc': 'Velocidad de lectura y escritura ultrarrápida. Mejora el rendimiento de tu equipo.',

      'product.9.name': 'Tarjeta Gráfica PowerX 4060',
      'product.9.desc': 'Rendimiento ideal para gaming y edición de video. Soporta los últimos juegos en alta calidad.',

      'product.10.name': 'Impresora JetPrint 3000',
      'product.10.desc': 'Impresión rápida con conectividad WiFi y Bluetooth. Multifunción a color.',

      'product.11.name': 'Router WiFi TurboNet AX6000',
      'product.11.desc': 'Cobertura amplia y soporte para WiFi 6. Perfecto para hogares con muchos dispositivos.',

      'product.12.name': 'Cámara Web ClearView HD',
      'product.12.desc': 'Resolución 1080p ideal para videollamadas y streaming. Micrófono integrado.',

      'product.13.name': 'Altavoces BassBoom 2.1',
      'product.13.desc': 'Potente sonido con graves profundos y diseño moderno. Conexión Bluetooth y auxiliar.',

      'product.14.name': 'Memoria RAM HyperSpeed 16GB',
      'product.14.desc': 'Rendimiento superior para multitarea y gaming. Compatible con la mayoría de placas.',

      'product.15.name': 'Tablet TabX 10"',
      'product.15.desc': 'Pantalla grande y batería de larga duración para entretenimiento y trabajo ligero.',

      'product.16.name': 'Auriculares ProMax',
      'product.16.desc': 'Sonido de estudio con graves profundos y diseño premium. Cancelación de ruido avanzada.',

      'product.17.name': 'GamerZone H7',
      'product.17.desc': 'Auriculares gaming con sonido envolvente 7.1 y micrófono retráctil. Diseño ergonómico con luces RGB.',

      'product.18.name': 'MiniPods AirLite',
      'product.18.desc': 'Auriculares inalámbricos ultraligeros con estuche de carga compacto. Sonido claro y conexión instantánea.',

      'product.19.name': 'SoundBeats Urban',
      'product.19.desc': 'Auriculares deportivos resistentes al agua con enganche ergonómico. Sonido potente y ajuste seguro para entrenar.',

      'settings.fontSize.desc': 'Ajusta el tamaño del texto para mejor legibilidad',
        'settings.language.desc': 'Selecciona tu idioma preferido',
        'settings.small.desc': 'Texto compacto',
        'settings.medium.desc': 'Tamaño estándar',
        'settings.large.desc': 'Texto ampliado',
        'settings.xlarge.desc': 'Texto extra grande',
        'settings.language.es': 'Español',
        'settings.language.en': 'Inglés',
        'settings.language.zh': 'Chino',

      // Tutorial
'tutorial.start': 'Iniciar Tutorial',
'tutorial.empty_cart_redirect': 'Parece que tu carrito está vacío. Vamos a la página de productos para añadir algo.',
'tutorial.welcome': '¡Bienvenido al tutorial de ElectroInformatic!',
'tutorial.click_product': 'Para comenzar, haz clic en este producto para ver sus detalles y especificaciones.',
'tutorial.add_to_cart': 'Ahora que has visto las especificaciones del producto, añádelo a tu carrito haciendo clic aquí.',
'tutorial.go_to_cart': '¡Perfecto! Has añadido el producto al carrito. Ahora haz clic en el carrito para ver tus productos y finalizar la compra.',
'tutorial.cart_welcome': '¡Bienvenido al carrito! Aquí puedes ver todos los productos que has añadido.',
'tutorial.proceed_checkout': 'Para continuar con la compra, haz clic en "Pagar".',
'tutorial.complete_payment': 'Completa los datos de pago para finalizar tu compra. En un entorno real, aquí introducirías tus datos de tarjeta.',
'tutorial.completed': '¡Tutorial completado! Ahora sabes cómo comprar en ElectroInformatic.',
'tutorial.step': 'Paso',
'tutorial.previous': 'Anterior',
'tutorial.next': 'Siguiente',
'tutorial.finish': 'Finalizar',

        //Ofertas
        'page.title.offers': 'ElectroInformatic — Ofertas',
'offers.special_offers': 'Ofertas Especiales',
'offers.special_offers.subtitle': 'Aprovecha nuestras promociones exclusivas por tiempo limitado',
'offers.black_friday.title': '🛍️ BLACK FRIDAY 🛍️',
'offers.black_friday.subtitle': '¡Ofertas exclusivas por tiempo limitado!',
'offers.3x2.title': '3x2 en Auriculares',
'offers.3x2.description': 'Llévate 3 auriculares y paga solo 2. ¡La mejor oferta en sonido!',
'offers.3x2.details': 'Aplica en todos los modelos de auriculares',
'offers.20_discount.title': '20% DTO en +250€',
'offers.20_discount.description': 'Consigue un 20% de descuento en compras superiores a 250€',
'offers.20_discount.details': 'Se aplica automáticamente',
'offers.free_shipping.title': 'Envío Gratis',
'offers.free_shipping.description': 'Envío gratuito en todos los pedidos durante el Black Friday',
'offers.free_shipping.details': 'Válido hasta agotar existencias',
'offers.featured_products': 'Productos Destacados en Oferta',
'offers.complete_offer': '¡Completa tu oferta 3x2!',
'offers.add_for_promotion': 'Añade uno de estos productos para la promoción:',
'offers.off': 'OFF',
'nav.offers': "Ver todas las ofertas",
'header.nav.offers': "Ofertas",
        'cart.subtotal': 'Subtotal',
        'cart.discount_applied': 'Descuento aplicado',
        'cart.offer.3x2': '🟢 Oferta activa: 3x2 en Auriculares',
        'cart.offer.20_percent': '🟢 Oferta activa: 20% por compras superiores a 250€',
        'cart.offer.none': 'Sin ofertas aplicadas',
        'cart.total_pay': 'Total a pagar',
        'cart.free_shipping': '🚚 Envío gratis incluido',
        // --- TRADUCCIONES DE ACCESIBILIDAD (ESPAÑOL) ---
      'settings.accessibility': 'Accesibilidad Visual',
      'settings.accessibility.desc': 'Ajuste de colores para daltonismo',
      'settings.color.normal': 'Normal',
      'settings.color.normal.desc': 'Colores estándar',
      'settings.color.protanopia': 'Protanopía',
      'settings.color.protanopia.desc': 'Sin Rojo (Ayuda visual)',
      'settings.color.tritanopia': 'Tritanopía',
      'settings.color.tritanopia.desc': 'Sin Azul (Ayuda visual)',


      },
      en: {
      'page.title.index': 'ElectroInformatic — Home',
  'page.title.shop': 'ElectroInformatic — Shop',
  'page.title.cart': 'ElectroInformatic — Cart',
  'page.title.repair': 'ElectroInformatic — Repair',
  'page.title.purchases': 'ElectroInformatic — My Purchases',

  // Header
  'header.brand': 'ElectroInformatic',
  'header.tagline': 'Electronic devices',
  'header.cart': 'Cart',
  'header.settings': 'Settings',

  // Navigation
  'nav.home': 'Home',
  'nav.shop': 'Shop',
  'nav.repair': 'Repair',
  'nav.purchases': 'My Purchases',
  'nav.login': 'Sign In',

  // Home page
  'hero.title': 'Welcome to ElectroInformatic',
  'hero.subtitle': 'Buy, repair and share your experience with your favorite electronic devices.',
  'hero.shop': 'Go Shopping',
  'hero.repair': 'Book Repair',
  'hero.help.title': 'Need help?',
  'hero.help.text': 'Check guides, tips or request a repair in the Repair tab.',
  'reviews.title': 'Customer Reviews',

  // Shop page
  'shop.title': 'Shop',
  'shop.subtitle': 'Click on any product to see details and add to cart.',
  'shop.search': '🔍 Search device...',
  'shop.modal.add': 'Add to Cart',

  // Cart
  'cart.title': 'Cart',
  'cart.empty': 'Your cart is empty.',
  'cart.total': 'Total',
  'cart.checkout': 'Checkout',

  // Payment modal
  'payment.title': 'Complete Purchase',
  'payment.summary': 'Order Summary',
  'payment.method': 'Payment Method',
  'payment.card.number': 'Card Number',
  'payment.card.expiry': 'Expiration Date',
  'payment.card.cvv': 'CVV',
  'payment.card.name': 'Cardholder Name',
  'payment.paypal.message': 'You will be redirected to PayPal to complete the payment',
  'payment.transfer.details': 'Transfer details',
  'payment.transfer.iban': 'IBAN',
  'payment.transfer.beneficiary': 'Beneficiary',
  'payment.transfer.concept': 'Concept',
  'payment.email': 'Email',
  'payment.terms': 'I accept the terms and conditions',
  'payment.cancel': 'Cancel',
  'payment.pay': 'Pay Now',
  'payment.email_required': 'Please enter your email address',
  'payment.terms_required': 'You must accept the terms and conditions',
  'payment.card_required': 'Please complete all card details',
  'payment.card_invalid': 'Card number must have 16 digits',

  // Repair
  'repair.title': 'Repair',
  'repair.name': 'Name',
  'repair.device': 'Device (e.g. phone, laptop)',
  'repair.description': 'Problem description',
  'repair.submit': 'Submit request',
  'repair.call': 'Call',
  'repair.requests': 'Submitted requests',
  'repair.no_requests': 'No requests yet.',
  'repair.status': 'Status',
  'repair.status.pending': 'Pending',
  'repair.status.processing': 'In process',
  'repair.status.completed': 'Completed',
  'repair.status.cancelled': 'Cancelled',
  'repair.edit': 'Edit',
  'repair.delete': 'Delete',
  'repair.problem': 'Problem description',
  'repair.requested_by': 'Requested by:',
  'repair.required_fields': 'Please complete all fields.',
  'repair.delete_confirm': 'Are you sure you want to delete this repair request?',
  'repair.not_found': 'Repair request not found',

  // Purchases
  'purchases.title': 'My Purchases',
  'purchases.subtitle': 'Here you will see your completed orders. You can add a review.',
  'purchases.empty': 'You haven\'t purchased anything yet.',
  'purchases.review': 'Add Review',
  'purchases.edit_review': 'Edit Review',
  'purchases.your_review': 'Your review',
  'purchases.no_date': 'No date',

  // Reviews
  'review.title': 'Write your review',
  'review.rating': 'Rating',
  'review.select_stars': 'Select the stars',
  'review.rating.bad': 'Bad',
  'review.rating.poor': 'Poor',
  'review.rating.good': 'Good',
  'review.rating.very_good': 'Very Good',
  'review.rating.excellent': 'Excellent',
  'review.placeholder': 'Share your experience with this product... What did you like? What would you improve?',
  'review.cancel': 'Cancel',
  'review.submit': 'Publish Review',
  'review.rating_required': 'Please select a rating with stars',
  'review.text_required': 'Please write your review',
  'review.default.phone': '"The X-Phone surprised me, excellent battery."',
  'review.default.laptop': '"SpeedBook works great for class and work."',
  'review.default.headphones': '"SoundMax has amazing sound."',
  'review.default.watch': '"FitTime is comfortable and measures pulse well."',

  // Footer
  'footer.text': '✨ The store for true ElectroInformaticos ✨',

  // Login modal
  'login.title': '💻 ElectroInformatic',
  'login.subtitle': 'Join our community of experts',
  'login.email': '📧 Email',
  'login.name': '👤 Full name',
  'login.password': '🔒 Password',
  'login.register': '📝 Register',
  'login.signin': '🚀 Sign In',
  'login.terms': 'By registering you accept our terms and conditions',
  'login.tip.register': 'To register:',
  'login.tip.register.desc': 'Complete all fields',
  'login.tip.login': 'To sign in:',
  'login.tip.login.desc': 'Only email and password',
  'login.required_fields': 'Please complete all fields.',
  'login.invalid_email': 'Please enter a valid email address.',
  'login.no_users': 'No registered users. Please register first.',
  'login.invalid_credentials': 'Incorrect email or password.',
  'login.success': 'Login successful! Welcome back ',
  'registration.success': 'Registration successful! Welcome ',
  'logout.success': 'You have successfully logged out.',
  'logout.confirm': 'Do you want to log out, ${user.name}?',

  // Settings
  'settings.title': 'Settings',
  'settings.fontSize': 'Font size:',
  'settings.language': 'Language:',
  'settings.save': 'Save Settings',
  'settings.small': 'Small',
  'settings.medium': 'Medium',
  'settings.large': 'Large',
  'settings.xlarge': 'Extra Large',
  'settings.saved': 'Settings saved successfully',
  'settings.select_all': 'Please select all options',

  // Buttons and actions
  'button.add_to_cart': 'Add to Cart',
  'button.buy': 'Buy',
  'button.view_details': 'View Details',
  'button.edit': 'Edit',
  'button.delete': 'Delete',
  'button.save': 'Save',
  'button.cancel': 'Cancel',
  'button.submit': 'Submit',
  'button.confirm': 'Confirm',
  'button.close': 'Close',

  // Notifications
  'notification.added_to_cart': 'added to cart!',
  'notification.login_success': 'Login successful! Welcome back',
  'notification.registration_success': 'Registration successful! Welcome',
  'notification.logout_success': 'You have successfully logged out.',
  'notification.empty_cart': 'The cart is empty',
  'notification.payment_success': 'Payment completed! Thank you for your purchase. ✨',
  'notification.repair_submitted': '✅ Repair request submitted successfully',
  'notification.repair_deleted': '🗑️ Request deleted successfully',
  'notification.repair_updated': '✅ Repair request updated successfully',
  'notification.review_thanks': 'Thank you for your review! ✨',
  'notification.product_added': 'Product added to cart!',
  'notification.cart_updated': 'Cart updated',
  'notification.payment_processing': 'Processing payment...',

  // Product descriptions in English
  'product.1.name': 'Pccom revolt i7 3050',
  'product.1.desc': 'High-performance gaming laptop with Intel Core i7 processor and RTX 3050 graphics card. Ideal for gaming and intensive work.',

  'product.2.name': 'SpeedBook 14"',
  'product.2.desc': 'Ultra-light laptop perfect for work and study. Elegant design and long battery life.',

  'product.3.name': 'SoundMax Headphones',
  'product.3.desc': 'Headphones with surround sound and active noise cancellation. Perfect for music and gaming.',

  'product.4.name': 'FitTime Smartwatch',
  'product.4.desc': 'Monitor your health and notifications with this elegant smartwatch. Water resistant.',

  'product.5.name': 'UltraView 27" Monitor',
  'product.5.desc': 'Full HD display with vibrant colors and thin bezel. Ideal for work and entertainment.',

  'product.6.name': 'ProKey Mechanical Keyboard',
  'product.6.desc': 'RGB backlighting and high durability switches. Superior typing experience.',

  'product.7.name': 'SwiftClick Optical Mouse',
  'product.7.desc': 'Extreme precision and ergonomic design for long sessions. Wireless connection.',

  'product.8.name': 'FastDrive 1TB SSD',
  'product.8.desc': 'Ultra-fast read and write speeds. Improve your computer performance.',

  'product.9.name': 'PowerX 4060 Graphics Card',
  'product.9.desc': 'Ideal performance for gaming and video editing. Supports the latest games in high quality.',

  'product.10.name': 'JetPrint 3000 Printer',
  'product.10.desc': 'Fast printing with WiFi and Bluetooth connectivity. Color multifunction.',

  'product.11.name': 'TurboNet AX6000 WiFi Router',
  'product.11.desc': 'Wide coverage and WiFi 6 support. Perfect for homes with many devices.',

  'product.12.name': 'ClearView HD Webcam',
  'product.12.desc': '1080p resolution ideal for video calls and streaming. Built-in microphone.',

  'product.13.name': 'BassBoom 2.1 Speakers',
  'product.13.desc': 'Powerful sound with deep bass and modern design. Bluetooth and auxiliary connection.',

  'product.14.name': 'HyperSpeed 16GB RAM',
  'product.14.desc': 'Superior performance for multitasking and gaming. Compatible with most motherboards.',

  'product.15.name': 'TabX 10" Tablet',
  'product.15.desc': 'Large screen and long battery life for entertainment and light work.',

  'product.16.name': 'ProMax Headphones',
  'product.16.desc': 'Studio sound with deep bass and premium design. Advanced noise cancellation.',

  'product.17.name': 'GamerZone H7',
  'product.17.desc': 'Gaming headset with 7.1 surround sound and retractable microphone. Ergonomic design with RGB lights.',

  'product.18.name': 'MiniPods AirLite',
  'product.18.desc': 'Ultralight wireless earbuds with compact charging case. Clear sound and instant connection.',

  'product.19.name': 'SoundBeats Urban',
  'product.19.desc': 'Water-resistant sports headphones with ergonomic hook. Powerful sound and secure fit for training.',

  // Device specifications
  'specs.intel_core_i7': 'Intel Core i7',
  'specs.16gb_ram': '16GB RAM',
  'specs.512gb_ssd': '512GB SSD',
  'specs.rtx_3050': 'RTX 3050',
  'specs.15_6_fhd': '15.6" FHD',
  'specs.windows_11': 'Windows 11',
  'specs.intel_i5': 'Intel i5',
  'specs.8gb_ram': '8GB RAM',
  'specs.256gb_ssd': '256GB SSD',
  'specs.intel_iris': 'Intel Iris Graphics',
  'specs.14_fhd': '14" FHD',
  'specs.12h_battery': '12h battery',
  'specs.noise_cancellation': 'Noise cancellation',
  'specs.20h_battery': '20h battery',
  'specs.bluetooth_5': 'Bluetooth 5.0',
  'specs.built_in_mic': 'Built-in microphone',
  'specs.foldable': 'Foldable',
  'specs.amoled': 'AMOLED Display',
  'specs.water_resistant': 'Water resistant',
  'specs.heart_monitor': 'Heart monitor',
  'specs.notifications': 'Notifications',
  'specs.7_days_battery': '7 days battery',
  'specs.27_fhd': '27" FHD',
  'specs.75hz': '75Hz',
  'specs.ips': 'IPS',
  'specs.hdmi_vga': 'HDMI/VGA',
  'specs.thin_border': 'Thin border',
  'specs.blue_switches': 'Blue Switches',
  'specs.rgb': 'RGB',
  'specs.pbt_keys': 'PBT Keys',
  'specs.usb_c': 'USB-C',
  'specs.wrist_rest': 'Wrist rest',
  'specs.16000_dpi': '16000 DPI',
  'specs.wireless': 'Wireless',
  'specs.6_buttons': '6 buttons',
  'specs.50h_battery': '50h battery',
  'specs.ergonomic': 'Ergonomic',
  'specs.1tb_nvme': '1TB NVMe',
  'specs.3500_mbs': '3500 MB/s',
  'specs.m2': 'M.2',
  'specs.5_years_warranty': '5 years warranty',
  'specs.rtx_4060': 'RTX 4060',
  'specs.8gb_gddr6': '8GB GDDR6',
  'specs.dlss_3': 'DLSS 3',
  'specs.3_fans': '3 fans',
  'specs.pcie_4': 'PCIe 4.0',
  'specs.wifi': 'WiFi',
  'specs.bluetooth': 'Bluetooth',
  'specs.scanner': 'Scanner',
  'specs.copier': 'Copier',
  'specs.continuous_ink': 'Continuous ink',
  'specs.wifi_6': 'WiFi 6',
  'specs.6000_mbps': '6000 Mbps',
  'specs.8_antennas': '8 antennas',
  'specs.2_5g_port': '2.5G Port',
  'specs.app_management': 'App management',
  'specs.1080p_30fps': '1080p 30fps',
  'specs.auto_focus': 'Auto focus',
  'specs.adjustable_clip': 'Adjustable clip',
  'specs.usb': 'USB',
  'specs.2_1_channels': '2.1 Channels',
  'specs.100w': '100W',
  'specs.aux_input': 'Aux input',
  'specs.remote_control': 'Remote control',
  'specs.16gb_ddr4': '16GB DDR4',
  'specs.3200mhz': '3200MHz',
  'specs.cl16': 'CL16',
  'specs.dual_channel': 'Dual Channel',
  'specs.heatsink': 'Heatsink',
  'specs.10_fhd': '10" FHD',
  'specs.64gb': '64GB',
  'specs.8h_battery': '8h battery',
  'specs.android': 'Android',
  'specs.8mp_camera': '8MP Camera',
  'product.specs': 'Technical Specifications',
  'specs.cancelaci_n_de_ruido_pro': 'Pro Noise Cancellation',
      'specs.30h_bater_a': '30h battery',
      'specs.bluetooth_5_2': 'Bluetooth 5.2',
      'specs.estuche_de_carga': 'Charging case',
      'specs.audio_hi_fi': 'Hi-Fi Audio',
      'specs.sonido_7_1': '7.1 Sound',
      'specs.micr_fono_retr_ctil': 'Retractable microphone',
      'specs.rgb_din_mico': 'Dynamic RGB',
      'specs.almohadillas_suaves': 'Soft ear pads',
      'specs.cable_trenzado_2m': '2m braided cable',
      'specs.bluetooth_5_3': 'Bluetooth 5.3',
      'specs.estuche_de_carga_usb_c': 'USB-C charging case',
      'specs.control_t_ctil': 'Touch control',
      'specs.24h_de_bater_a_total': '24h total battery',
      'specs.dise_o_ergon_mico': 'Ergonomic design',
      'specs.resistencia_ipx7': 'IPX7 resistance',
      'specs.enganche_deportivo': 'Sports hook',
      'specs.micr_fono_hd': 'HD Microphone',

        'settings.fontSize.desc': 'Adjust text size for better readability',
'settings.language.desc': 'Select your preferred language',
'settings.small.desc': 'Compact text',
'settings.medium.desc': 'Standard size',
'settings.large.desc': 'Enlarged text',
'settings.xlarge.desc': 'Extra large text',
'settings.language.es': 'Spanish',
'settings.language.en': 'English',
'settings.language.zh': 'Chinese',

        // Tutorial
'tutorial.start': 'Start Tutorial',
'tutorial.empty_cart_redirect': 'Your cart seems to be empty. Let\'s go to the products page to add something.',
'tutorial.welcome': 'Welcome to the ElectroInformatic tutorial!',
'tutorial.click_product': 'To get started, click on this product to see its details and specifications.',
'tutorial.add_to_cart': 'Now that you\'ve seen the product specifications, add it to your cart by clicking here.',
'tutorial.go_to_cart': 'Perfect! You\'ve added the product to the cart. Now click on the cart to see your products and complete the purchase.',
'tutorial.cart_welcome': 'Welcome to the cart! Here you can see all the products you\'ve added.',
'tutorial.proceed_checkout': 'To continue with the purchase, click on "Checkout".',
'tutorial.complete_payment': 'Complete the payment details to finish your purchase. In a real environment, you would enter your card details here.',
'tutorial.completed': 'Tutorial completed! Now you know how to shop at ElectroInformatic.',
'tutorial.step': 'Step',
'tutorial.previous': 'Previous',
'tutorial.next': 'Next',
'tutorial.finish': 'Finish',

        //oferta
        'page.title.offers': 'ElectroInformatic — Offers',
'offers.special_offers': 'Special Offers',
'offers.special_offers.subtitle': 'Take advantage of our exclusive limited-time promotions',
'offers.black_friday.title': '🛍️ BLACK FRIDAY 🛍️',
'offers.black_friday.subtitle': 'Exclusive limited-time offers!',
'offers.3x2.title': '3x2 on Headphones',
'offers.3x2.description': 'Get 3 headphones and pay only 2. The best sound offer!',
'offers.3x2.details': 'Applies to all headphone models',
'offers.20_discount.title': '20% OFF on +250€',
'offers.20_discount.description': 'Get 20% discount on purchases over 250€',
'offers.20_discount.details': 'Applied automatically',
'offers.free_shipping.title': 'Free Shipping',
'offers.free_shipping.description': 'Free shipping on all orders during Black Friday',
'offers.free_shipping.details': 'Valid while supplies last',
'offers.featured_products': 'Featured Products on Offer',
'offers.complete_offer': 'Complete your 3x2 offer!',
'offers.add_for_promotion': 'Add one of these products for the promotion:',
'offers.off': 'OFF',
'nav.offers': "See all offers",
'header.nav.offers': "Offers",
        'cart.subtotal': 'Subtotal',
        'cart.discount_applied': 'Discount applied',
        'cart.offer.3x2': '🟢 Active Offer: 3x2 on Headphones',
        'cart.offer.20_percent': '🟢 Active Offer: 20% off orders over €250',
        'cart.offer.none': 'No offers applied',
        'cart.total_pay': 'Total to pay',
        'cart.free_shipping': '🚚 Free shipping included',
        // --- ACCESSIBILITY TRANSLATIONS (ENGLISH) ---
      'settings.accessibility': 'Visual Accessibility',
      'settings.accessibility.desc': 'Color blind mode adjustment',
      'settings.color.normal': 'Normal',
      'settings.color.normal.desc': 'Standard colors',
      'settings.color.protanopia': 'Protanopia',
      'settings.color.protanopia.desc': 'No Red (Visual aid)',
      'settings.color.tritanopia': 'Tritanopia',
      'settings.color.tritanopia.desc': 'No Blue (Visual aid)',
      },
      zh: {
        // 页面标题
      'page.title.index': 'ElectroInformatic — 首页',
      'page.title.shop': 'ElectroInformatic — 购买',
      'page.title.cart': 'ElectroInformatic — 购物车',
      'page.title.repair': 'ElectroInformatic — 维修',
      'page.title.purchases': 'ElectroInformatic — 我的购买',

      // 头部
      'header.brand': 'ElectroInformatic',
      'header.tagline': '电子设备',
      'header.cart': '购物车',
      'header.settings': '设置',

      // 导航
      'nav.home': '首页',
      'nav.shop': '购买',
      'nav.repair': '维修',
      'nav.purchases': '我的购买',
      'nav.login': '登录',

      // 主页
      'hero.title': '欢迎来到 ElectroInformatic',
      'hero.subtitle': '购买、维修并分享您最喜爱的电子设备的体验。',
      'hero.shop': '去购物',
      'hero.repair': '预约维修',
      'hero.help.title': '需要帮助？',
      'hero.help.text': '在维修选项卡中查看指南、提示或请求维修。',
      'reviews.title': '客户评价',

      // 购买页面
      'shop.title': '购买',
      'shop.subtitle': '点击任何产品查看详情并加入购物车。',
      'shop.search': '🔍 搜索设备...',
      'shop.modal.add': '加入购物车',

      // 购物车
      'cart.title': '购物车',
      'cart.empty': '您的购物车是空的。',
      'cart.total': '总计',
      'cart.checkout': '结账',

      // 支付模态框
      'payment.title': '完成购买',
      'payment.summary': '订单摘要',
      'payment.method': '支付方式',
      'payment.card.number': '卡号',
      'payment.card.expiry': '有效期',
      'payment.card.cvv': 'CVV',
      'payment.card.name': '持卡人姓名',
      'payment.paypal.message': '您将被重定向到 PayPal 完成支付',
      'payment.transfer.details': '转账详情',
      'payment.transfer.iban': 'IBAN',
      'payment.transfer.beneficiary': '收款人',
      'payment.transfer.concept': '概念',
      'payment.email': '电子邮件',
      'payment.terms': '我接受条款和条件',
      'payment.cancel': '取消',
      'payment.pay': '立即支付',
      'payment.email_required': '请输入您的电子邮件',
      'payment.terms_required': '您必须接受条款和条件',
      'payment.card_required': '请填写所有卡资料',
      'payment.card_invalid': '卡号必须为16位数字',

      // 维修
      'repair.title': '维修',
      'repair.name': '姓名',
      'repair.device': '设备（例如手机、笔记本电脑）',
      'repair.description': '问题描述',
      'repair.submit': '提交请求',
      'repair.call': '打电话',
      'repair.requests': '已提交的请求',
      'repair.no_requests': '尚无请求。',
      'repair.status': '状态',
      'repair.status.pending': '待处理',
      'repair.status.processing': '处理中',
      'repair.status.completed': '已完成',
      'repair.status.cancelled': '已取消',
      'repair.edit': '编辑',
      'repair.delete': '删除',
      'repair.problem': '问题描述',
      'repair.requested_by': '申请者：',
      'repair.required_fields': '请填写所有字段。',
      'repair.delete_confirm': '您确定要删除此维修请求吗？',
      'repair.not_found': '未找到维修请求',

      // 我的购买
      'purchases.title': '我的购买',
      'purchases.subtitle': '在这里您将看到已完成的订单。您可以添加评论。',
      'purchases.empty': '您尚未购买任何商品。',
      'purchases.review': '添加评论',
      'purchases.edit_review': '编辑评论',
      'purchases.your_review': '您的评论',
      'purchases.no_date': '无日期',

      // 评论
      'review.title': '写下您的评论',
      'review.rating': '评分',
      'review.select_stars': '选择星星',
      'review.rating.bad': '差',
      'review.rating.poor': '一般',
      'review.rating.good': '好',
      'review.rating.very_good': '很好',
      'review.rating.excellent': '优秀',
      'review.placeholder': '分享您使用此产品的体验...您喜欢什么？您会改进什么？',
      'review.cancel': '取消',
      'review.submit': '发布评论',
      'review.rating_required': '请选择星级评分',
      'review.text_required': '请写下您的评论',
      'review.default.phone': '"X-Phone 让我惊喜，电池续航极佳。"',
      'review.default.laptop': '"SpeedBook 非常适合课堂和工作。"',
      'review.default.headphones': '"SoundMax 音质惊人。"',
      'review.default.watch': '"FitTime 舒适且脉搏测量准确。"',

      // 页脚
      'footer.text': '✨ 真正 ElectroInformaticos 的商店 ✨',

      // 登录模态框
      'login.title': '💻 ElectroInformatic',
      'login.subtitle': '加入我们的专家社区',
      'login.email': '📧 电子邮件',
      'login.name': '👤 全名',
      'login.password': '🔒 密码',
      'login.register': '📝 注册',
      'login.signin': '🚀 登录',
      'login.terms': '注册即表示您接受我们的条款和条件',
      'login.tip.register': '注册时：',
      'login.tip.register.desc': '填写所有字段',
      'login.tip.login': '登录时：',
      'login.tip.login.desc': '只需电子邮件和密码',
      'login.required_fields': '请填写所有字段。',
      'login.invalid_email': '请输入有效的电子邮件地址。',
      'login.no_users': '没有注册用户。请先注册。',
      'login.invalid_credentials': '电子邮件或密码不正确。',
      'login.success': '登录成功！欢迎回来 ',
      'registration.success': '注册成功！欢迎 ',
      'logout.success': '您已成功注销。',
      'logout.confirm': '您要注销吗，${user.name}？',

      // 设置
      'settings.title': '设置',
      'settings.fontSize': '字体大小：',
      'settings.language': '语言：',
      'settings.save': '保存设置',
      'settings.small': '小',
      'settings.medium': '中',
      'settings.large': '大',
      'settings.xlarge': '特大',
      'settings.saved': '设置保存成功',
      'settings.select_all': '请选择所有选项',

      // 按钮和操作
      'button.add_to_cart': '加入购物车',
      'button.buy': '购买',
      'button.view_details': '查看详情',
      'button.edit': '编辑',
      'button.delete': '删除',
      'button.save': '保存',
      'button.cancel': '取消',
      'button.submit': '提交',
      'button.confirm': '确认',
      'button.close': '关闭',

      // 通知
      'notification.added_to_cart': '已加入购物车！',
      'notification.login_success': '登录成功！欢迎回来',
      'notification.registration_success': '注册成功！欢迎',
      'notification.logout_success': '您已成功注销。',
      'notification.empty_cart': '购物车为空',
      'notification.payment_success': '支付完成！感谢您的购买。✨',
      'notification.repair_submitted': '✅ 维修请求已成功提交',
      'notification.repair_deleted': '🗑️ 请求已成功删除',
      'notification.repair_updated': '✅ 维修请求已成功更新',
      'notification.review_thanks': '感谢您的评论！✨',
      'notification.product_added': '产品已加入购物车！',
      'notification.cart_updated': '购物车已更新',
      'notification.payment_processing': '处理支付中...',

      // 设备规格
      'specs.intel_core_i7': '英特尔酷睿 i7',
      'specs.16gb_ram': '16GB 内存',
      'specs.512gb_ssd': '512GB 固态硬盘',
      'specs.rtx_3050': 'RTX 3050',
      'specs.15_6_fhd': '15.6" 全高清',
      'specs.windows_11': 'Windows 11',
      'specs.intel_i5': '英特尔 i5',
      'specs.8gb_ram': '8GB 内存',
      'specs.256gb_ssd': '256GB 固态硬盘',
      'specs.intel_iris': '英特尔 Iris 显卡',
      'specs.14_fhd': '14" 全高清',
      'specs.12h_battery': '12小时电池',
      'specs.noise_cancellation': '降噪',
      'specs.20h_battery': '20小时电池',
      'specs.bluetooth_5': '蓝牙 5.0',
      'specs.built_in_mic': '内置麦克风',
      'specs.foldable': '可折叠',
      'specs.amoled': 'AMOLED 显示屏',
      'specs.water_resistant': '防水',
      'specs.heart_monitor': '心率监测',
      'specs.notifications': '通知',
      'specs.7_days_battery': '7天电池',
      'specs.27_fhd': '27" 全高清',
      'specs.75hz': '75Hz',
      'specs.ips': 'IPS',
      'specs.hdmi_vga': 'HDMI/VGA',
      'specs.thin_border': '薄边框',
      'specs.blue_switches': '蓝轴',
      'specs.rgb': 'RGB',
      'specs.pbt_keys': 'PBT 键帽',
      'specs.usb_c': 'USB-C',
      'specs.wrist_rest': '腕托',
      'specs.16000_dpi': '16000 DPI',
      'specs.wireless': '无线',
      'specs.6_buttons': '6 个按钮',
      'specs.50h_battery': '50小时电池',
      'specs.ergonomic': '人体工学',
      'specs.1tb_nvme': '1TB NVMe',
      'specs.3500_mbs': '3500 MB/秒',
      'specs.m2': 'M.2',
      'specs.5_years_warranty': '5 年保修',
      'specs.rtx_4060': 'RTX 4060',
      'specs.8gb_gddr6': '8GB GDDR6',
      'specs.dlss_3': 'DLSS 3',
      'specs.3_fans': '3 个风扇',
      'specs.pcie_4': 'PCIe 4.0',
      'specs.wifi': 'WiFi',
      'specs.bluetooth': '蓝牙',
      'specs.scanner': '扫描仪',
      'specs.copier': '复印机',
      'specs.continuous_ink': '连续供墨',
      'specs.wifi_6': 'WiFi 6',
      'specs.6000_mbps': '6000 Mbps',
      'specs.8_antennas': '8 个天线',
      'specs.2_5g_port': '2.5G 端口',
      'specs.app_management': '应用管理',
      'specs.1080p_30fps': '1080p 30fps',
      'specs.auto_focus': '自动对焦',
      'specs.adjustable_clip': '可调节夹子',
      'specs.usb': 'USB',
      'specs.2_1_channels': '2.1 声道',
      'specs.100w': '100W',
      'specs.aux_input': '辅助输入',
      'specs.remote_control': '遥控器',
      'specs.16gb_ddr4': '16GB DDR4',
      'specs.3200mhz': '3200MHz',
      'specs.cl16': 'CL16',
      'specs.dual_channel': '双通道',
      'specs.heatsink': '散热器',
      'specs.10_fhd': '10" 全高清',
      'specs.64gb': '64GB',
      'specs.8h_battery': '8小时电池',
      'specs.android': 'Android',
      'specs.8mp_camera': '8MP 摄像头',
      'product.specs': '技术规格',
      'specs.cancelaci_n_de_ruido_pro': '专业降噪',
      'specs.30h_bater_a': '30小时电池',
      'specs.bluetooth_5_2': '蓝牙 5.2',
      'specs.estuche_de_carga': '充电盒',
      'specs.audio_hi_fi': 'Hi-Fi 音频',
      'specs.sonido_7_1': '7.1 声道',
      'specs.micr_fono_retr_ctil': '伸缩麦克风',
      'specs.rgb_din_mico': '动态 RGB',
      'specs.almohadillas_suaves': '柔软耳垫',
      'specs.cable_trenzado_2m': '2米编织线',
      'specs.bluetooth_5_3': '蓝牙 5.3',
      'specs.estuche_de_carga_usb_c': 'USB-C 充电盒',
      'specs.control_t_ctil': '触控',
      'specs.24h_de_bater_a_total': '24小时总电池寿命',
      'specs.dise_o_ergon_mico': '人体工学设计',
      'specs.resistencia_ipx7': 'IPX7 防水',
      'specs.enganche_deportivo': '运动挂钩',
      'specs.micr_fono_hd': '高清麦克风',

      'product.1.name': 'Pccom revolt i7 3050',
      'product.1.desc': '高性能游戏笔记本电脑，配备英特尔酷睿 i7 处理器和 RTX 3050 显卡。适合游戏和密集型工作。',

      'product.2.name': 'SpeedBook 14"',
      'product.2.desc': '超轻笔记本电脑，完美适合工作和学习。优雅设计，电池续航时间长。',

      'product.3.name': 'SoundMax 耳机',
      'product.3.desc': '环绕声耳机，具有主动降噪功能。非常适合音乐和游戏。',

      'product.4.name': 'FitTime 智能手表',
      'product.4.desc': '通过这款优雅的智能手表监测您的健康和通知。防水设计。',

      'product.5.name': 'UltraView 27" 显示器',
      'product.5.desc': '全高清显示屏，色彩鲜艳，边框超薄。适合工作和娱乐。',

      'product.6.name': 'ProKey 机械键盘',
      'product.6.desc': 'RGB 背光和高耐久性开关。卓越的打字体验。',

      'product.7.name': 'SwiftClick 光电鼠标',
      'product.7.desc': '极致精度和符合人体工程学的设计，适合长时间使用。无线连接。',

      'product.8.name': 'FastDrive 1TB SSD 硬盘',
      'product.8.desc': '超快的读写速度。提升您的设备性能。',

      'product.9.name': 'PowerX 4060 显卡',
      'product.9.desc': '游戏和视频编辑的理想性能。支持高质量的最新游戏。',

      'product.10.name': 'JetPrint 3000 打印机',
      'product.10.desc': '具有 WiFi 和蓝牙连接的快速打印。彩色多功能。',

      'product.11.name': 'TurboNet AX6000 WiFi 路由器',
      'product.11.desc': '覆盖范围广，支持 WiFi 6。非常适合多设备家庭。',

      'product.12.name': 'ClearView HD 网络摄像头',
      'product.12.desc': '1080p 分辨率，适合视频通话和直播。内置麦克风。',

      'product.13.name': 'BassBoom 2.1 音箱',
      'product.13.desc': '强大的声音，深沉的低音和现代设计。蓝牙和辅助输入连接。',

      'product.14.name': 'HyperSpeed 16GB 内存',
      'product.14.desc': '多任务和游戏的卓越性能。兼容大多数主板。',

      'product.15.name': 'TabX 10" 平板电脑',
      'product.15.desc': '大屏幕和长续航电池，适合娱乐和轻量工作。',

      'product.16.name': 'ProMax 耳机',
      'product.16.desc': '具有深沉低音和优质设计的工作室级声音。先进的降噪功能。',

      'product.17.name': 'GamerZone H7',
      'product.17.desc': '具有 7.1 环绕声和伸缩麦克风的游戏耳机。带 RGB 灯光的人体工学设计。',

      'product.18.name': 'MiniPods AirLite',
      'product.18.desc': '带紧凑充电盒的超轻无线耳机。清晰的声音和即时连接。',

      'product.19.name': 'SoundBeats Urban',
      'product.19.desc': '具有人体工学挂钩的防水运动耳机。强劲的声音和稳固的佩戴，适合训练。',

      'settings.fontSize.desc': '调整文本大小以获得更好的可读性',
'settings.language.desc': '选择您偏好的语言',
'settings.small.desc': '紧凑文本',
'settings.medium.desc': '标准大小',
'settings.large.desc': '放大文本',
'settings.xlarge.desc': '特大文本',
'settings.language.es': '西班牙语',
'settings.language.en': '英语',
'settings.language.zh': '中文',

    'tutorial.start': '开始教程',
        'tutorial.empty_cart_redirect': '您的购物车似乎是空的。让我们去产品页面添加一些东西。',
        'tutorial.welcome': '欢迎来到 ElectroInformatic 教程！',
        'tutorial.click_product': '首先，点击此产品以查看其详细信息和规格。',
        'tutorial.add_to_cart': '现在您已查看产品规格，请点击此处将其添加到购物车。',
        'tutorial.go_to_cart': '完美！您已将产品添加到购物车。现在点击购物车查看您的产品并完成购买。',
        'tutorial.cart_welcome': '欢迎来到购物车！在这里您可以看到您添加的所有产品。',
        'tutorial.proceed_checkout': '要继续购买，请点击“结账”。',
        'tutorial.complete_payment': '填写付款详细信息以完成购买。在真实环境中，您将在此处输入卡详细信息。',
        'tutorial.completed': '教程完成！现在您知道如何在 ElectroInformatic 购物了。',
        'tutorial.step': '步骤',
        'tutorial.previous': '上一步',
        'tutorial.next': '下一步',
        'tutorial.finish': '完成',
        // oferta
'page.title.offers': 'ElectroInformatic — 优惠',
'offers.special_offers': '特别优惠',
'offers.special_offers.subtitle': '利用我们独家的限时促销',
'offers.black_friday.title': '🛍️ 黑色星期五 🛍️',
'offers.black_friday.subtitle': '独家限时优惠！',
'offers.3x2.title': '耳机买3付2',
'offers.3x2.description': '买3个耳机只需付2个的钱。最佳音响优惠！',
'offers.3x2.details': '适用于所有耳机型号',
'offers.20_discount.title': '满250€享20%折扣',
'offers.20_discount.description': '购买超过250€享受20%折扣',
'offers.20_discount.details': '自动应用',
'offers.free_shipping.title': '免费送货',
'offers.free_shipping.description': '黑色星期五期间所有订单免费送货',
'offers.free_shipping.details': '有效期至库存售完',
'offers.featured_products': '特色优惠产品',
'offers.complete_offer': '完成您的买3付2优惠！',
'offers.add_for_promotion': '添加以下产品之一参与促销：',
'offers.off': '优惠',
'nav.offers': "查看所有优惠",
'header.nav.offers': "优惠",
'cart.subtotal': '小计',
        'cart.discount_applied': '已应用折扣',
        'cart.offer.3x2': '🟢 活动优惠：耳机买3付2',
        'cart.offer.20_percent': '🟢 活动优惠：订单满 250€ 享 20% 折扣',
        'cart.offer.none': '无适用优惠',
        'cart.total_pay': '应付总额',
        'cart.free_shipping': '🚚 包含免费送货',

        // --- 辅助功能翻译 (CHINESE) ---
      'settings.accessibility': '视觉辅助',
      'settings.accessibility.desc': '色盲模式调整',
      'settings.color.normal': '正常',
      'settings.color.normal.desc': '标准颜色',
      'settings.color.protanopia': '红色盲',
      'settings.color.protanopia.desc': '无红色 (视觉辅助)',
      'settings.color.tritanopia': '蓝色盲',
      'settings.color.tritanopia.desc': '无蓝色 (视觉辅助)',
      }
    };
  }
};
// =============================================
// ELECTROBOT V7.0 - MULTILENGUAJE (ES/EN/ZH)
// =============================================

const Chatbot = {
  isOpen: false,
  messages: [],
  voiceEnabled: false,
  recognition: null,

  // --- DICCIONARIO DE IDIOMAS ---
  i18n: {
    es: {
      welcome: "¡Hola! Soy ElectroBot. ¿En qué te ayudo?",
      intro: 'Di <strong>"Ayuda"</strong> para ver mis comandos.',
      help_menu: `
        <strong>🤖 COMANDOS:</strong><br>
        🛍️ <strong>"Buscar [producto]"</strong><br>
        🛒 <strong>"Ver carrito"</strong><br>
        💡 <strong>"Recomienda [gaming/barato]"</strong><br>
        🔧 <strong>"Estado reparación"</strong><br>
        ℹ️ <strong>"Horario" / "Ubicación"</strong><br>
        ✈️ <strong>"Ir a inicio" / "Ofertas"</strong><br>
        🌗 <strong>"Cambiar tema"</strong><br>
        🧹 <em>"Limpiar chat"</em>
      `,
      shop_closed: '🕒 Lunes a Viernes de 09:00 a 20:00.',
      location: '📍 Calle Tecnológica 123, Polígono Digital.',
      warranty: '🛡️ 3 años de garantía y 30 días de devolución.',
      tech_slow: '🐢 Si va lento: 1. Reinicia. 2. Cierra programas. 3. Revisa el SSD.',
      tech_broken: '🔥 Suena grave. Abre una incidencia en <a href="reparar.html">Reparar</a>.',
      calc_tax: (p, t) => `🧮 Precio: €${p} + IVA = <strong>€${t}</strong>`,
      nav_home: '✈️ Yendo al Inicio...',
      nav_offers: '🎁 ¡Vamos a las ofertas!',
      nav_shop: '🛍️ Abriendo tienda...',
      nav_repair: '🔧 Abriendo taller...',
      rec_title: (f) => `✨ Recomendaciones <strong>${f}</strong>:<br>`,
      rec_ask: '¿Qué buscas? ¿Gaming, barato o trabajo?',
      search_found: (n) => `He encontrado ${n} coincidencias:<br>`,
      search_none: (q) => `No encuentro nada sobre "<strong>${q}</strong>". 📦`,
      cart_empty: 'El carrito está vacío. 🛒',
      cart_status: (c) => `Tienes <strong>${c} productos</strong>. <a href="carrito.html">Ver carrito</a>`,
      login_req: 'Inicia sesión primero.',
      login_open: 'Abriendo login...',
      logout: 'Sesión cerrada. 👋',
      theme_changed: '¡Tema cambiado! 🎨',
      fact: '🤓 El primer ratón era de madera (1964).',
      fallback: 'No te entiendo. Prueba con <strong>"Ayuda"</strong>.',

      proactive: {
        default: [
          "👋 Hola, llevo un rato observando. ¿Necesitas que te guíe?",
          "🤖 Bip, bop. ¿Buscas algo en concreto?",
          "👀 Si te pierdes, estoy aquí para ayudarte.",
          "✨ Recuerda que puedes cambiar el tema a Modo Oscuro si lo prefieres.",
          "🚀 ¿Sabías que hacemos envíos en 24h?"
        ],
        shop: [ // Comprar
          "🎮 ¿Buscas un PC Gaming o algo para trabajar? Pregúntame.",
          "📉 Veo que dudas. ¿Quieres que te recomiende lo más barato?",
          "🔥 Los portátiles están volando hoy. ¡Aprovecha!",
          "🔍 Usa el buscador de arriba si no encuentras tu modelo.",
          "⌨️ Tenemos teclados mecánicos muy buenos en oferta.",
          "🖱️ ¿Eres de ratón inalámbrico o con cable? Tengo opciones."
        ],
        cart: [ // Carrito
          "💳 ¿Tienes problemas con el pago? Puedo ayudarte.",
          "🚚 Recuerda: ¡Envío gratis si superas cierto importe!",
          "🛒 ¡Ya casi es tuyo! ¿Te ayudo a finalizar la compra?",
          "🔒 El pago es 100% seguro, no te preocupes.",
          "🎁 ¿Has revisado si te falta algo para aprovechar el envío gratis?",
          "🏷️ Si tienes un código promocional, es el momento de usarlo."
        ],
        repair: [ // Reparar
          "🛠️ Lamento que tu dispositivo falle. ¿Abrimos una incidencia?",
          "🔍 ¿Quieres consultar el estado de una reparación antigua?",
          "📱 ¿Pantalla rota? Tenemos técnicos especialistas.",
          "💻 Si tu PC va lento, a veces basta con cambiar el disco duro.",
          "⏱️ Nuestras reparaciones suelen tardar menos de 48h.",
          "👨‍🔧 Nuestros técnicos son certificados por las marcas oficiales."
        ],
        offers: [ // Ofertas
          "🎁 ¡El 3x2 en auriculares es nuestra mejor oferta!",
          "⚡ ¡Corre que el stock del Black Friday vuela!",
          "💸 ¿Has visto el descuento del 20%? Es automático.",
          "🔥 Esa tarjeta gráfica tiene un precio histórico mínimo.",
          "🎧 Los SoundMax están baratísimos ahora mismo.",
          "🕒 Estas ofertas acaban pronto, no te lo pienses mucho."
        ],
        purchases: [ // Mis Compras
          "⭐ ¿Qué tal tu última compra? ¡Nos encantaría leer tu reseña!",
          "📄 ¿Necesitas descargar la factura de algún pedido?",
          "📦 Esperamos que disfrutes de tus nuevos gadgets.",
          "🔄 Tienes 30 días para devoluciones si algo no te convence.",
          "🚚 Puedes seguir el estado de tu envío desde aquí."
        ]
      }
    },
    en: {
      welcome: "Hi! I'm ElectroBot. How can I help?",
      intro: 'Say <strong>"Help"</strong> to see my commands.',
      help_menu: `
        <strong>🤖 COMMANDS:</strong><br>
        🛍️ <strong>"Search [product]"</strong><br>
        🛒 <strong>"View cart"</strong><br>
        💡 <strong>"Recommend [gaming/cheap]"</strong><br>
        🔧 <strong>"Repair status"</strong><br>
        ℹ️ <strong>"Hours" / "Location"</strong><br>
        ✈️ <strong>"Go home" / "Offers"</strong><br>
        🌗 <strong>"Change theme"</strong><br>
        🧹 <em>"Clear chat"</em>
      `,
      shop_closed: '🕒 Mon-Fri from 09:00 to 20:00.',
      location: '📍 123 Tech Street, Digital Park.',
      warranty: '🛡️ 3-year warranty and 30-day returns.',
      tech_slow: '🐢 Slow PC? 1. Restart. 2. Close apps. 3. Check SSD.',
      tech_broken: '🔥 Sounds bad. Open a ticket in <a href="reparar.html">Repair</a>.',
      calc_tax: (p, t) => `🧮 Price: €${p} + TAX = <strong>€${t}</strong>`,
      nav_home: '✈️ Going Home...',
      nav_offers: '🎁 Let\'s see offers!',
      nav_shop: '🛍️ Opening shop...',
      nav_repair: '🔧 Opening workshop...',
      rec_title: (f) => `✨ Recommendations for <strong>${f}</strong>:<br>`,
      rec_ask: 'What do you need? Gaming, cheap or work?',
      search_found: (n) => `Found ${n} matches:<br>`,
      search_none: (q) => `Nothing found for "<strong>${q}</strong>". 📦`,
      cart_empty: 'Cart is empty. 🛒',
      cart_status: (c) => `You have <strong>${c} items</strong>. <a href="carrito.html">View cart</a>`,
      login_req: 'Please login first.',
      login_open: 'Opening login...',
      logout: 'Logged out. 👋',
      theme_changed: 'Theme changed! 🎨',
      fact: '🤓 The first computer mouse was made of wood.',
      fallback: 'I don\'t understand. Try <strong>"Help"</strong>.',

      proactive: {
        default: [
          "👋 Hi there, need some guidance?",
          "🤖 Beep, boop. Looking for something specific?",
          "👀 I'm here if you get lost.",
          "✨ You can toggle Dark Mode if you prefer.",
          "🚀 Did you know we offer 24h shipping?"
        ],
        shop: [
          "🎮 Gaming or Work? Ask me for recommendations.",
          "📉 Hesitating? Want me to show you the cheapest items?",
          "🔥 Laptops are selling fast today. Grab one!",
          "🔍 Use the search bar above if you can't find your model.",
          "⌨️ We have great mechanical keyboards on sale.",
          "🖱️ Wireless or wired mouse? I have options for both."
        ],
        cart: [
          "💳 Any issues with payment? I can help.",
          "🚚 Remember: Free shipping on qualified orders!",
          "🛒 Almost yours! Need help finishing checkout?",
          "🔒 Payment is 100% secure, don't worry.",
          "🎁 Check if you need one more item for free shipping!",
          "🏷️ If you have a promo code, now is the time."
        ],
        repair: [
          "🛠️ Sorry about your device. Shall we open a ticket?",
          "🔍 Want to check the status of a repair?",
          "📱 Broken screen? We have expert technicians.",
          "💻 Slow PC? Sometimes an SSD upgrade is all you need.",
          "⏱️ Repairs usually take less than 48 hours.",
          "👨‍🔧 Our technicians are officially certified."
        ],
        offers: [
          "🎁 The 3x2 on headphones is our best deal!",
          "⚡ Hurry! Black Friday stock is running low!",
          "💸 Have you seen the 20% discount? It's automatic.",
          "🔥 That graphics card is at an all-time low price.",
          "🎧 SoundMax headphones are a steal right now.",
          "🕒 These offers end soon, don't wait too long."
        ],
        purchases: [
          "⭐ How was your purchase? We'd love a review!",
          "📄 Need an invoice for any order?",
          "📦 We hope you enjoy your new gadgets.",
          "🔄 You have 30 days for returns.",
          "🚚 You can track your shipment from here."
        ]
      }
    },
    zh: {
      welcome: "你好！我是 ElectroBot。",
      intro: '输入 <strong>"Help"</strong> 查看指令。',
      help_menu: `
        <strong>🤖 指令菜单:</strong><br>
        🛍️ <strong>"Search [产品]"</strong> (搜索)<br>
        🛒 <strong>"Cart"</strong> (购物车)<br>
        💡 <strong>"Recommend"</strong> (推荐)<br>
        🔧 <strong>"Repair"</strong> (维修状态)<br>
        ℹ️ <strong>"Hours"</strong> (营业时间)<br>
        ✈️ <strong>"Go home"</strong> (首页)<br>
        🌗 <strong>"Theme"</strong> (切换主题)<br>
        🧹 <em>"Clear"</em> (清除)
      `,
      shop_closed: '🕒 周一至周五 09:00 - 20:00。',
      location: '📍 科技街 123 号。',
      warranty: '🛡️ 3年保修，30天退货。',
      tech_slow: '🐢 电脑慢？重启或检查硬盘。',
      tech_broken: '🔥 请在 <a href="reparar.html">维修</a> 页面提交工单。',
      calc_tax: (p, t) => `🧮 价格: €${p} + 税 = <strong>€${t}</strong>`,
      nav_home: '✈️ 返回首页...',
      nav_offers: '🎁 查看优惠！',
      nav_shop: '🛍️ 打开商店...',
      nav_repair: '🔧 打开维修中心...',
      rec_title: (f) => `✨ 推荐 <strong>${f}</strong>:<br>`,
      rec_ask: '你需要什么？游戏 (Gaming) 或 便宜 (Cheap)？',
      search_found: (n) => `找到 ${n} 个结果:<br>`,
      search_none: (q) => `未找到 "<strong>${q}</strong>". 📦`,
      cart_empty: '购物车是空的。 🛒',
      cart_status: (c) => `购物车有 <strong>${c} 件商品</strong>. <a href="carrito.html">查看</a>`,
      login_req: '请先登录。',
      login_open: '打开登录窗口...',
      logout: '已退出。 👋',
      theme_changed: '主题已更改！ 🎨',
      fact: '🤓 第一个鼠标是木头做的。',
      fallback: '我不明白。请输入 <strong>"Help"</strong>。',

      proactive: {
        default: [
          "👋 你好，需要我带路吗？",
          "🤖 哔哔。在找什么特别的东西吗？",
          "👀 如果迷路了，我在这里等你。",
          "✨ 你可以切换到深色模式。",
          "🚀 你知道我们提供24小时发货吗？"
        ],
        shop: [
          "🎮 游戏还是工作？我可以为您推荐。",
          "📉 犹豫不决？想看看最便宜的吗？",
          "🔥 今天的笔记本电脑卖得很火。抓紧！",
          "🔍 如果找不到型号，请使用上方的搜索栏。",
          "⌨️ 我们的机械键盘正在促销。",
          "🖱️ 无线还是有线鼠标？我有推荐。"
        ],
        cart: [
          "💳 支付有问题吗？我可以帮忙。",
          "🚚 记住：满足条件免运费！",
          "🛒 快是你的了！需要帮助结账吗？",
          "🔒 支付100%安全，请放心。",
          "🎁 看看是否还需要加一件商品以免运费！",
          "🏷️ 如果你有优惠码，现在可以使用。"
        ],
        repair: [
          "🛠️ 设备坏了？我们要开个维修单吗？",
          "🔍 想查询维修状态吗？",
          "📱 屏幕碎了？我们有专家。",
          "💻 电脑慢？有时候换个硬盘就行。",
          "⏱️ 维修通常在48小时内完成。",
          "👨‍🔧 我们的技术人员经过官方认证。"
        ],
        offers: [
          "🎁 耳机买三付二是最好的优惠！",
          "⚡ 快点！黑色星期五库存不多了！",
          "💸 看到20%的折扣了吗？自动应用的。",
          "🔥 显卡价格达到了历史最低。",
          "🎧 SoundMax 耳机现在非常划算。",
          "🕒 优惠即将结束，不要犹豫太久。"
        ],
        purchases: [
          "⭐ 购物体验如何？我们期待您的评价！",
          "📄 需要发票吗？",
          "📦 希望您喜欢您的新设备。",
          "🔄 您有30天的退货期。",
          "🚚 您可以在这里追踪发货状态。"
        ]
      }
    }
  },

  init() {
    // Recuperar configuración de idioma
    const settings = AppStorage.getSettings();
    const langCode = settings.language || 'es';

    // Mapeo de idiomas para voz
    const voiceLangs = { 'es': 'es-ES', 'en': 'en-US', 'zh': 'zh-CN' };

    // Configuración de Voz
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      this.recognition.lang = voiceLangs[langCode]; // Idioma dinámico
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;

      this.recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        document.getElementById('chatbot-input').value = text;
        this.handleUserMessage();
        this.toggleMicVisuals(false);
      };

      this.recognition.onerror = (event) => {
        this.toggleMicVisuals(false);
      };

      this.recognition.onend = () => this.toggleMicVisuals(false);
    }

    // Historial
    const savedHistory = localStorage.getItem('electroBotHistory');
    if (savedHistory) {
      this.messages = JSON.parse(savedHistory);
    }

    this.createDOM();
    this.bindEvents();
    this.renderInitialMessages();
    this.startProactiveInitiative();
  },
  startProactiveInitiative() {
    // --- CONFIGURACIÓN ---
    const TIEMPO_INICIAL = 10000; // 10 segundos la primera vez

    // Rango para las siguientes veces (Aleatorio entre MIN y MAX)
    const TIEMPO_MIN = 30000; // 30 segundos
    const TIEMPO_MAX = 90000; // 90 segundos (1 minuto y medio)

    // Función para calcular tiempo aleatorio
    const getRandomDelay = () => {
        return Math.floor(Math.random() * (TIEMPO_MAX - TIEMPO_MIN + 1) + TIEMPO_MIN);
    };

    const triggerLogic = () => {
        // Solo molestamos si el chat está CERRADO
        if (!this.isOpen) {

            // 1. DETECTAR CONTEXTO
            const path = window.location.pathname;
            let contextKey = 'default';

            if (path.includes('comprar')) contextKey = 'shop';
            else if (path.includes('carrito')) contextKey = 'cart';
            else if (path.includes('reparar')) contextKey = 'repair';
            else if (path.includes('ofertas')) contextKey = 'offers';
            else if (path.includes('mis-compras')) contextKey = 'purchases';

            // 2. OBTENER IDIOMA
            const settings = AppStorage.getSettings();
            const lang = settings.language || 'es';

            // 3. SELECCIONAR MENSAJE ALEATORIO
            if (this.i18n[lang] && this.i18n[lang].proactive) {
                const messagesList = this.i18n[lang].proactive[contextKey] || this.i18n[lang].proactive['default'];
                const randomMessage = messagesList[Math.floor(Math.random() * messagesList.length)];

                // 4. EJECUTAR
                console.log(`🤖 ElectroBot dice: "${randomMessage}" (Contexto: ${contextKey})`);
                this.toggle();
                this.addMessage(randomMessage, 'bot');

                if (this.voiceEnabled) this.speak(randomMessage);
                else if(typeof Feedback !== 'undefined') Feedback.playSound('info');
            }
        } else {
            console.log("🤖 El bot quería salir, pero ya estaba abierto. Esperando al siguiente turno.");
        }

        // --- REPROGRAMACIÓN ALEATORIA ---
        const nextDelay = getRandomDelay();
        console.log(`🕒 Próximo intento del bot en: ${nextDelay/1000} segundos.`);
        this.proactiveTimer = setTimeout(triggerLogic, nextDelay);
    };

    // Primera ejecución fija
    console.log(`🕒 Bot programado para salir en ${TIEMPO_INICIAL/1000} segundos.`);
    this.proactiveTimer = setTimeout(triggerLogic, TIEMPO_INICIAL);
  },

  // Helper para obtener textos en el idioma actual
  t(key, param1, param2) {
    const lang = AppStorage.getSettings().language || 'es';
    const text = this.i18n[lang][key] || this.i18n['es'][key]; // Fallback a español
    if (typeof text === 'function') return text(param1, param2);
    return text;
  },

  createDOM() {
    if (document.getElementById('chatbot-toggle-btn')) return;

    const btn = document.createElement('button');
    btn.id = 'chatbot-toggle-btn';
    btn.innerHTML = '💬';
    btn.title = 'Ayuda Virtual';
    btn.style.zIndex = "9999";
    document.body.appendChild(btn);

    const chatWindow = document.createElement('div');
    chatWindow.id = 'chatbot-window';
    chatWindow.className = 'chatbot-window';

    const voiceIcon = this.voiceEnabled ? '🔊' : '🔇';

    chatWindow.innerHTML = `
      <div class="chatbot-header">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:20px;">🤖</span>
          <span>ElectroBot</span>
        </div>
        <div style="display:flex; align-items:center; gap:15px;">
          <span id="chatbot-voice-toggle" title="Voz">${voiceIcon}</span>
          <span id="chatbot-close" style="cursor:pointer; font-size:24px; line-height:1;">&times;</span>
        </div>
      </div>

      <div class="chatbot-messages" id="chatbot-messages"></div>

      <form class="chatbot-input-area" id="chatbot-form">
        <button type="button" id="chatbot-mic-btn" title="Micro">🎙️</button>
        <input type="text" id="chatbot-input" placeholder="..." autocomplete="off">
        <button type="submit">➤</button>
      </form>

      <div class="chatbot-resize-handle"></div>
    `;
    document.body.appendChild(chatWindow);
  },

  renderInitialMessages() {
    const container = document.getElementById('chatbot-messages');
    if (!container) return;
    container.innerHTML = '';

    if (this.messages.length === 0) {
      const user = AppStorage.getUser();
      // Personalizamos saludo
      const baseWelcome = this.t('welcome');
      const welcome = user ? `${baseWelcome} ${user.name}!` : baseWelcome;

      this.appendMessageToDOM(welcome, 'bot');
      this.appendMessageToDOM(this.t('intro'), 'bot');
    } else {
      this.messages.forEach(msg => this.appendMessageToDOM(msg.text, msg.sender));
      setTimeout(() => container.scrollTop = container.scrollHeight, 100);
    }
  },

  bindEvents() {
    const toggleBtn = document.getElementById('chatbot-toggle-btn');
    const closeBtn = document.getElementById('chatbot-close');
    const voiceToggle = document.getElementById('chatbot-voice-toggle');
    const micBtn = document.getElementById('chatbot-mic-btn');
    const form = document.getElementById('chatbot-form');

    if (toggleBtn) toggleBtn.addEventListener('click', () => this.toggle());
    if (closeBtn) closeBtn.addEventListener('click', () => this.toggle());

    if (voiceToggle) {
      voiceToggle.addEventListener('click', () => {
        this.voiceEnabled = !this.voiceEnabled;
        voiceToggle.textContent = this.voiceEnabled ? '🔊' : '🔇';
        if(this.voiceEnabled) this.speak('OK');
        else window.speechSynthesis.cancel();
      });
    }

    if (micBtn) {
      micBtn.addEventListener('click', () => {
        if (this.recognition) {
          try {
            this.recognition.start();
            this.toggleMicVisuals(true);
          } catch (e) {}
        } else {
          alert("Micro no soportado.");
        }
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleUserMessage();
      });
    }
  },

  toggleMicVisuals(isListening) {
    const btn = document.getElementById('chatbot-mic-btn');
    if(!btn) return;
    if (isListening) btn.classList.add('listening');
    else btn.classList.remove('listening');
  },

  toggle() {
    const chatWindow = document.getElementById('chatbot-window');
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      chatWindow.classList.add('active');
      const input = document.getElementById('chatbot-input');
      if(input) input.focus();
      const container = document.getElementById('chatbot-messages');
      if(container) container.scrollTop = container.scrollHeight;
    } else {
      chatWindow.classList.remove('active');
      window.speechSynthesis.cancel();
    }
  },

  handleUserMessage() {
    const input = document.getElementById('chatbot-input');
    const text = input.value.trim();
    if (!text) return;

    this.addMessage(text, 'user');
    input.value = '';

    setTimeout(() => {
      const reply = this.processIntelligence(text);
      if (reply) {
        this.addMessage(reply, 'bot');
        if (this.voiceEnabled) this.speak(reply);
      }
    }, 600);
  },

  speak(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    // Elegir voz según idioma
    const langCode = AppStorage.getSettings().language || 'es';
    const voiceMap = { 'es': 'es-ES', 'en': 'en-US', 'zh': 'zh-CN' };

    // 1. Eliminar etiquetas HTML (como <strong>, <br>, etc.)
    let cleanText = text.replace(/<[^>]*>?/gm, '');

    // 2. Eliminar Emojis para que no los lea 🚫😀
    // Este regex cubre la gran mayoría de rangos de emojis
    cleanText = cleanText.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

    // 3. Limpiar espacios extra que hayan podido quedar tras borrar los emojis
    cleanText = cleanText.replace(/\s+/g, ' ').trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = voiceMap[langCode];
    window.speechSynthesis.speak(utterance);
  },

  addMessage(text, sender) {
    this.messages.push({ text, sender });
    localStorage.setItem('electroBotHistory', JSON.stringify(this.messages));
    this.appendMessageToDOM(text, sender);
  },

  appendMessageToDOM(text, sender) {
    const container = document.getElementById('chatbot-messages');
    if (!container) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}`;
    msgDiv.innerHTML = text;
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
  },

  // ============================================================
  // CEREBRO MULTILENGUAJE
  // ============================================================

  cleanText(text) {
    return text.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
      .trim();
  },

  hasKeyword(cleanInput, keywords) {
    return keywords.some(word => cleanInput.includes(word));
  },

  processIntelligence(rawText) {
    const text = this.cleanText(rawText);
    const user = AppStorage.getUser();

    // 1. LIMPIAR
    if (this.hasKeyword(text, ['borrar', 'limpiar', 'clear', 'vaciar', 'reset', 'clean'])) {
      this.messages = [];
      localStorage.removeItem('electroBotHistory');
      this.renderInitialMessages();
      return null;
    }

    // 2. AYUDA
    if (this.hasKeyword(text, ['ayuda', 'help', 'comandos', 'menu', 'bangzhu'])) {
      return this.t('help_menu');
    }

    // 3. NAVEGACIÓN
    if (this.hasKeyword(text, ['ir a', 'go to', 'volver', 'back', 'qu'])) {
      if (text.includes('inicio') || text.includes('home') || text.includes('shouye')) {
        window.location.href = 'index.html'; return this.t('nav_home');
      }
      if (text.includes('oferta') || text.includes('offer') || text.includes('youhui')) {
        window.location.href = 'ofertas.html'; return this.t('nav_offers');
      }
      if (text.includes('compra') || text.includes('shop') || text.includes('store') || text.includes('mai')) {
        window.location.href = 'comprar.html'; return this.t('nav_shop');
      }
      if (text.includes('repara') || text.includes('repair') || text.includes('weixiu')) {
        window.location.href = 'reparar.html'; return this.t('nav_repair');
      }
    }

    // 4. REPARACIONES
    if (this.hasKeyword(text, ['repara', 'fix', 'status', 'taller', 'estado'])) {
      const repairs = state.repairRequests;
      if (!repairs || repairs.length === 0) return '...'; // Simplificado, idealmente usaríamos trads aquí también
      let msg = '🔧:<br>';
      repairs.forEach(r => msg += `• ${r.device}: ${r.status}<br>`);
      return msg;
    }

    // 5. BÚSQUEDA (Ahora detecta ES, EN, ZH)
    if (this.hasKeyword(text, ['busca', 'search', 'find', 'precio', 'price', 'buy', 'comprar', 'sousuo', 'zhao'])) {
      // Palabras 'stop' en 3 idiomas
      const stopWords = ['buscar', 'search', 'find', 'un', 'a', 'el', 'the', 'precio', 'price', 'comprar', 'buy', 'de', 'of', 'sousuo'];
      const words = text.split(' ');
      const importantWords = words.filter(word => !stopWords.includes(word));
      let query = importantWords.join(' ').trim();

      if (query.length < 2) return this.t('search_none', '...');

      const found = PRODUCTS.filter(p => {
        const pName = this.cleanText(p.name);
        return pName.includes(query);
      });

      if (found.length > 0) {
        let resp = this.t('search_found', found.length);
        found.slice(0, 2).forEach(p => {
          resp += `<div style="margin-top:8px; padding:8px; background:rgba(255,255,255,0.05); border-radius:8px;">
            <strong>${p.name}</strong><br>
            <span style="color:var(--accent);">€${p.price}</span>
            <button class="small-btn" style="width:100%; margin-top:5px; font-size:11px;" onclick="Products.openModal(${p.id})">Ver / View</button>
          </div>`;
        });
        return resp;
      }
      return this.t('search_none', query);
    }

    // 6. OTROS COMANDOS
    if (this.hasKeyword(text, ['carrito', 'cart', 'cesta', 'pagar', 'pay', 'gouwuche'])) {
      const count = state.cart.length;
      if (count === 0) return this.t('cart_empty');
      return this.t('cart_status', count);
    }

    if (this.hasKeyword(text, ['pedido', 'order', 'history', 'dingdan'])) return user ? `📦 ${state.purchases.length}` : this.t('login_req');
    if (this.hasKeyword(text, ['iniciar', 'login', 'sign in', 'denglu'])) { Auth.openModal(); return this.t('login_open'); }
    if (this.hasKeyword(text, ['cerrar', 'logout', 'sign out', 'tuichu'])) { Auth.logout(); return this.t('logout'); }

    if (this.hasKeyword(text, ['tema', 'theme', 'dark', 'light', 'zhuti'])) { document.getElementById('theme-toggle-btn')?.click(); return this.t('theme_changed'); }

    if (this.hasKeyword(text, ['horario', 'hours', 'time'])) return this.t('shop_closed');
    if (this.hasKeyword(text, ['donde', 'where', 'location'])) return this.t('location');

    if (this.hasKeyword(text, ['hola', 'hello', 'hi', 'nihao'])) return this.t('welcome');

    return this.t('fallback');
  }
};
// =============================================
// INICIALIZACIÓN PRINCIPAL
// =============================================

document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Inicializando aplicación...');

  // Inicializar sistemas en orden
   Settings.init(); // PRIMERO los ajustes
  Sidebar.init();
  Auth.init();
  Cart.init();
  Products.init();
  PaymentModal.init();
  Chatbot.init();

  // Inicializar modal de pago si existe
  if (document.getElementById('payment-modal')) {
    console.log('💳 Modal de pago detectado, inicializando...');}
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
// INICIALIZACIÓN DEL MODAL DE PAGO
// =============================================

const PaymentModal = {
  init() {
    this.bindEvents();
     setTimeout(() => {
    this.loadSettings();
  }, 100);
  },

  bindEvents() {
    // Cerrar modal al hacer clic en la X
    const closeBtn = document.getElementById('close-payment-modal');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    // Cerrar modal al hacer clic en cancelar
    const cancelBtn = document.getElementById('cancel-payment');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => this.close());
    }

    // Cambiar campos según método de pago
    const paymentMethod = document.getElementById('payment-method');
    if (paymentMethod) {
      paymentMethod.addEventListener('change', (e) => this.togglePaymentFields(e.target.value));
    }

    // Enviar formulario
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
      paymentForm.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    // Cerrar al hacer clic fuera del modal
    const modal = document.getElementById('payment-modal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.close();
      });
    }
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-color-mode]')) {
        const mode = e.target.closest('[data-color-mode]').dataset.colorMode;
        // Quitamos la clase active de todos y se la ponemos al clicado
        document.querySelectorAll('[data-color-mode]').forEach(opt => opt.classList.remove('active'));
        e.target.closest('[data-color-mode]').classList.add('active');
      }
    });
  },

  togglePaymentFields(method) {
    const fields = {
      'card-fields': method === 'credit' || method === 'debit',
      'paypal-fields': method === 'paypal',
      'transfer-fields': method === 'transfer'
    };

    Object.keys(fields).forEach(fieldId => {
      const element = document.getElementById(fieldId);
      if (element) {
        element.style.display = fields[fieldId] ? 'block' : 'none';
      }
    });
  },

  handleSubmit(e) {
    e.preventDefault();
    Cart.processPayment();
  },

  close() {
    const modal = document.getElementById('payment-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.classList.remove('body-no-scroll');
    }
  }
};

// =============================================
// SISTEMA MEJORADO DE TUTORIALES INTERACTIVOS
// =============================================

const Tutorial = {
  currentStep: 0,
  isActive: false,
  steps: [],
  tutorialData: null,
  allowedElements: [],
  isModalOpen: false,
  modalCheckInterval: null,
  lastProductId: null,

 init() {
  const currentPage = window.location.pathname.split('/').pop();

  // Solo mostrar el botón de tutorial en comprar.html y carrito.html
  if (currentPage === 'comprar.html' || currentPage === 'carrito.html') {
    this.addTutorialButton();
  }

  this.checkTutorialState();
  this.setupModalListeners();

  // Si estamos en la página del carrito, actualizar visibilidad del botón
  if (currentPage === 'carrito.html') {
    this.updateCartButtonVisibility();
  }
},

  setupModalListeners() {
    // Escuchar cuando se cierra el modal
    document.addEventListener('click', (e) => {
      if ((e.target.classList.contains('close-modal') ||
           (e.target.id === 'product-modal' && e.target === e.currentTarget)) &&
          this.isModalOpen) {
        this.isModalOpen = false;
      }
    }, true);
  },

  addTutorialButton() {
    if (document.getElementById('tutorial-btn')) return;

    const tutorialBtn = document.createElement('button');
    tutorialBtn.id = 'tutorial-btn';
    tutorialBtn.className = 'tutorial-btn';
    tutorialBtn.innerHTML = '?';
    tutorialBtn.setAttribute('aria-label', 'Iniciar tutorial interactivo');
    tutorialBtn.addEventListener('click', () => this.start());

    // Si estamos en la página del carrito, inicialmente oculto
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'carrito.html') {
      tutorialBtn.style.display = 'none';
    }

    document.body.appendChild(tutorialBtn);
  },

  // Método para actualizar la visibilidad del botón en el carrito
  updateCartButtonVisibility() {
    const tutorialBtn = document.getElementById('tutorial-btn');
    if (!tutorialBtn) return;

    // Mostrar el botón solo si hay productos en el carrito
    if (state.cart && state.cart.length > 0) {
      tutorialBtn.style.display = 'flex';
    } else {
      tutorialBtn.style.display = 'none';
    }
  },

  start() {
    this.isActive = true;
    this.currentStep = 0;
    this.isModalOpen = false;
    this.lastProductId = null;
    document.body.classList.add('tutorial-active');

    this.tutorialData = {
      started: true,
      currentPage: window.location.pathname.split('/').pop(),
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('electroTutorial', JSON.stringify(this.tutorialData));

    this.defineSteps();
    this.showStep(0);
  },

  defineSteps() {
    const currentPage = window.location.pathname.split('/').pop();
    const settings = AppStorage.getSettings();
    const translations = Settings.getTranslations();
    const t = translations[settings.language] || translations.es;

    if (currentPage === 'comprar.html') {
      this.steps = [
        {
          selector: '.grid .card:first-child',
          message: `${t['tutorial.welcome']}<br><br>${t['tutorial.click_product']}`,
          action: 'click',
          position: 'right',
          allowedSelectors: ['.grid .card:first-child', '#product-modal', '#modal-body', '.close-modal', '.modal-content'],
          onComplete: () => {
            this.lastProductId = state.currentProductId;
          }
        },
        {
          selector: '#modal-add-to-cart',
          message: t['tutorial.add_to_cart'],
          action: 'click',
          position: 'top',
          allowedSelectors: ['#modal-add-to-cart', '#product-modal', '#modal-body', '.close-modal', '.modal-content'],
          requiresModal: true,
          onComplete: () => {
            if (state.currentProductId) {
              Cart.add(state.currentProductId);
              Products.closeModal();
              this.isModalOpen = false;
            }
          }
        },
        {
          selector: '#cart-btn',
          message: t['tutorial.go_to_cart'],
          action: 'navigate',
          position: 'left',
          allowedSelectors: ['#cart-btn', '.cart-btn', 'a[href="carrito.html"]', 'header', '.header-actions'],
          highlightHeader: true,
          specialClass: 'tutorial-cart-highlight'
        }
      ];
    } else if (currentPage === 'carrito.html') {
    this.steps = [
      {
        selector: '#checkout-btn',
        message: t['tutorial.cart_welcome'] + '<br><br>' + t['tutorial.proceed_checkout'],
        action: 'click',
        position: 'top',
        allowedSelectors: ['#checkout-btn', '#payment-modal', '.close-modal', '#close-payment-modal', '#cancel-payment'],
        onComplete: () => {
          console.log('🛒 Paso 1 del carrito completado - abriendo modal de pago');
          // Abrir el modal de pago directamente
          Cart.showPaymentModal();
        }
      },
      {
        selector: '#payment-form',
        message: t['tutorial.complete_payment'],
        action: 'form',
        position: 'center',
        allowedSelectors: ['#payment-form', '#payment-modal', '.close-modal', '#close-payment-modal', '#cancel-payment', '#confirm-payment'],
        requiresModal: true,
        modalType: 'payment',
        onComplete: () => {
          console.log('💳 Paso 2 del carrito completado - procesando pago');
          // Aquí podrías simular el procesamiento del pago
        }
      }
    ];
    } else {
      this.steps = [
        {
          selector: 'body',
          message: `${t['tutorial.welcome']}<br><br>${t['tutorial.click_product']}`,
          action: 'redirect',
          redirect: 'comprar.html',
          position: 'center'
        }
      ];
    }
  },

  showStep(stepIndex) {
    this.clear();

    const step = this.steps[stepIndex];
    if (!step) {
      this.end();
      return;
    }

    let overlay = document.getElementById('tutorial-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'tutorial-overlay';
      overlay.className = 'tutorial-overlay';
      document.body.appendChild(overlay);
    }
    overlay.style.display = 'block';

    // Configuración especial para el paso del header
    if (step.highlightHeader) {
      this.setupHeaderHighlight();
    }

    if (step.selector === 'body') {
      this.showGeneralStep(step);
      return;
    }

    // Si el paso requiere el modal, verificamos su estado
    if (step.requiresModal) {
      this.waitForModal(step);
      return;
    }

    const checkElement = setInterval(() => {
      const element = document.querySelector(step.selector);
      if (element) {
        clearInterval(checkElement);
        this.highlightElement(element, step);
      }
    }, 100);
  },

  waitForModal(step) {
  // Limpiar intervalo anterior si existe
  if (this.modalCheckInterval) {
    clearInterval(this.modalCheckInterval);
  }

  const modalType = step.modalType || 'product';
  const modalId = modalType === 'payment' ? 'payment-modal' : 'product-modal';

  console.log('⏳ Esperando modal:', modalId);

  this.modalCheckInterval = setInterval(() => {
    const modal = document.getElementById(modalId);
    const modalDisplay = modal ? window.getComputedStyle(modal).display : 'none';

    if (modalDisplay === 'block') {
      console.log('✅ Modal detectado:', modalId);
      clearInterval(this.modalCheckInterval);
      this.isModalOpen = true;

      // Esperar a que el contenido del modal esté completamente cargado
      setTimeout(() => {
        const element = document.querySelector(step.selector);
        if (element) {
          console.log('✅ Elemento encontrado en modal:', step.selector);
          this.highlightElement(element, step);
        } else {
          console.error('❌ Elemento no encontrado en modal:', step.selector);
          // Reintentar después de un tiempo
          setTimeout(() => {
            const retryElement = document.querySelector(step.selector);
            if (retryElement) {
              this.highlightElement(retryElement, step);
            } else {
              console.error('❌ Elemento aún no encontrado, saltando paso');
              this.nextStep();
            }
          }, 1000);
        }
      }, 800);
    }
  }, 200);
},
  setupHeaderHighlight() {
    const header = document.querySelector('header');
    if (header) {
      header.style.zIndex = '10010';
      header.style.position = 'relative';
    }

    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
      cartBtn.style.zIndex = '10011';
    }
  },

  highlightElement(element, step) {
  // Aplicar clase especial si está definida
  if (step.specialClass) {
    element.classList.add(step.specialClass);
  }

  element.classList.add('tutorial-highlight');

  // Scroll suave solo si no es el header y no estamos en un modal
  if (!step.highlightHeader && !step.requiresModal) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    });
  }

  setTimeout(() => {
    const tooltip = document.createElement('div');
    tooltip.id = 'tutorial-tooltip';
    tooltip.className = 'tutorial-tooltip';
    tooltip.setAttribute('data-position', step.position || 'bottom');

    const settings = AppStorage.getSettings();
    const translations = Settings.getTranslations();
    const t = translations[settings.language] || translations.es;

    const progress = this.currentStep + 1 + '/' + this.steps.length;

    tooltip.innerHTML = `
      <h3>📚 ${t['tutorial.start']}</h3>
      <p>${step.message}</p>
      <div class="tutorial-progress">${t['tutorial.step']} ${progress}</div>
      <div class="tutorial-tooltip-buttons">
        ${this.currentStep > 0 ? `<button id="tutorial-prev" class="small-btn">${t['tutorial.previous']}</button>` : '<div></div>'}
        <button id="tutorial-next" class="btn">${this.currentStep === this.steps.length - 1 ? t['tutorial.finish'] : t['tutorial.next']}</button>
      </div>
    `;

    this.positionTooltip(tooltip, element, step.position || 'bottom');

    setTimeout(() => {
      tooltip.classList.add('visible');
    }, 100);

    // Configurar elementos permitidos para este paso
    this.allowedElements = step.allowedSelectors || [step.selector];

    // Event listeners para los botones del tooltip
    document.getElementById('tutorial-next').addEventListener('click', () => {
      // Comportamiento especial para el formulario de pago
      if (step.action === 'form') {
        // Simular el envío del formulario de pago
        const confirmPaymentBtn = document.getElementById('confirm-payment');
        if (confirmPaymentBtn) {
          confirmPaymentBtn.click();
        }
      }

      // Ejecutar función onComplete si existe
      if (step.onComplete) {
        step.onComplete();
      }

      if (this.currentStep === this.steps.length - 1) {
        this.end();
      } else {
        this.nextStep();
      }
    });

    if (this.currentStep > 0) {
      document.getElementById('tutorial-prev').addEventListener('click', () => {
        this.prevStep();
      });
    }

    // Manejar diferentes tipos de acciones
    if (step.action === 'click') {
      element.style.cursor = 'pointer';

      element.addEventListener('click', this.stepClickListener = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setTimeout(() => {
          // Ejecutar función onComplete si existe
          if (step.onComplete) {
            step.onComplete();
          }

          this.nextStep();
        }, 800);
      }, { once: true });
    }
    else if (step.action === 'form') {
      // Para formularios, no agregamos listener de clic al elemento
      // El usuario debe interactuar con el formulario normalmente
      console.log('📝 Paso de formulario - esperando interacción del usuario');
    }
  }, step.highlightHeader ? 100 : 500);
},

  // Método para verificar si un elemento está permitido
  isElementAllowed(element) {
    if (!this.isActive) return true;

    // Siempre permitir elementos del tutorial
    if (element.closest('#tutorial-tooltip') ||
        element.closest('#tutorial-btn') ||
        element.id === 'tutorial-prev' ||
        element.id === 'tutorial-next' ||
        element.id === 'tutorial-skip' ||
        element.id === 'tutorial-next-action') {
      return true;
    }

    // Verificar si el elemento o alguno de sus padres está en la lista de permitidos
    let currentElement = element;
    while (currentElement && currentElement !== document.body) {
      for (const allowedSelector of this.allowedElements) {
        if (currentElement.matches?.(allowedSelector) ||
            currentElement.closest?.(allowedSelector)) {
          return true;
        }
      }
      currentElement = currentElement.parentElement;
    }

    return false;
  },

  positionTooltip(tooltip, element, position) {
  const elementRect = element.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  document.body.appendChild(tooltip);
  const tooltipRect = tooltip.getBoundingClientRect();

  let top, left;

  // Posiciones base
  switch(position) {
    case 'top':
      top = elementRect.top - tooltipRect.height - 15;
      left = elementRect.left + (elementRect.width - tooltipRect.width) / 2;
      break;
    case 'bottom':
      top = elementRect.bottom + 15;
      left = elementRect.left + (elementRect.width - tooltipRect.width) / 2;
      break;
    case 'left':
      top = elementRect.top + (elementRect.height - tooltipRect.height) / 2;
      left = elementRect.left - tooltipRect.width - 15;
      break;
    case 'right':
      top = elementRect.top + (elementRect.height - tooltipRect.height) / 2;
      left = elementRect.right + 15;
      break;
    case 'center':
    default:
      top = (viewportHeight - tooltipRect.height) / 2;
      left = (viewportWidth - tooltipRect.width) / 2;
      break;
  }

  // Ajustes para mantener dentro de la pantalla
  if (top < 20) top = 20;
  if (top + tooltipRect.height > viewportHeight - 20) {
    top = viewportHeight - tooltipRect.height - 20;
  }
  if (left < 20) left = 20;
  if (left + tooltipRect.width > viewportWidth - 20) {
    left = viewportWidth - tooltipRect.width - 20;
  }

  // Aplicar posición
  tooltip.style.top = `${top}px`;
  tooltip.style.left = `${left}px`;
  tooltip.style.opacity = '1';
  tooltip.style.visibility = 'visible';

  console.log('🔧 Tooltip posicionado en:', { top, left, position });
},

  nextStep() {
    this.currentStep++;
    this.showStep(this.currentStep);
  },

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;

      // Si volvemos al paso 2 y el modal está cerrado, necesitamos abrirlo
      if (this.currentStep === 1 && !this.isModalOpen && this.lastProductId) {
        Products.openModal(this.lastProductId);
        // Esperar a que el modal se abra antes de mostrar el paso
        setTimeout(() => {
          this.showStep(this.currentStep);
        }, 500);
      } else {
        this.showStep(this.currentStep);
      }
    }
  },

  clear() {
    document.querySelectorAll('.tutorial-highlight').forEach(el => {
      el.classList.remove('tutorial-highlight');
    });

    // Remover clases especiales
    document.querySelectorAll('.tutorial-cart-highlight').forEach(el => {
      el.classList.remove('tutorial-cart-highlight');
    });

    // Limpiar intervalo de verificación del modal
    if (this.modalCheckInterval) {
      clearInterval(this.modalCheckInterval);
      this.modalCheckInterval = null;
    }

    // Restaurar estilos del header
    const header = document.querySelector('header');
    if (header) {
      header.style.zIndex = '';
      header.style.position = '';
    }

    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
      cartBtn.style.zIndex = '';
    }

    const tooltip = document.getElementById('tutorial-tooltip');
    if (tooltip) tooltip.remove();

    const overlay = document.getElementById('tutorial-overlay');
    if (overlay) overlay.style.display = 'none';

    if (this.stepClickListener) {
      document.removeEventListener('click', this.stepClickListener);
      this.stepClickListener = null;
    }

    if (this.stepFormListener) {
      document.removeEventListener('submit', this.stepFormListener);
      this.stepFormListener = null;
    }

    this.allowedElements = [];
  },

   end() {
    this.isActive = false;
    this.currentStep = 0;
    this.isModalOpen = false;
    this.clear();
    document.body.classList.remove('tutorial-active');
    localStorage.removeItem('electroTutorial');

    setTimeout(() => {
      if (!window.location.pathname.includes('carrito.html')) {
        const settings = AppStorage.getSettings();
        const translations = Settings.getTranslations();
        const t = translations[settings.language] || translations.es;
        alert(t['tutorial.completed']);
      }
    }, 300);
  },

  checkTutorialState() {
    const tutorialData = localStorage.getItem('electroTutorial');
    if (tutorialData) {
      this.tutorialData = JSON.parse(tutorialData);

      if (this.tutorialData.started && this.tutorialData.currentPage !== window.location.pathname.split('/').pop()) {
        setTimeout(() => {
          if (confirm('Parece que tienes un tutorial en curso. ¿Quieres continuar donde lo dejaste?')) {
            this.start();
          } else {
            localStorage.removeItem('electroTutorial');
          }
        }, 1000);
      }
    }
  }
};

// Sistema de bloqueo mejorado
document.addEventListener('DOMContentLoaded', function() {
  Tutorial.init();

  // Interceptar la apertura del modal para el tutorial
  const originalOpenModal = Products.openModal;
  Products.openModal = function(productId) {
    originalOpenModal.call(this, productId);

    // Si hay un tutorial activo en el paso 1, marcar que el modal está abierto
    if (Tutorial.isActive && Tutorial.currentStep === 0) {
      setTimeout(() => {
        Tutorial.isModalOpen = true;
        Tutorial.lastProductId = productId; // Guardar el ID del producto
      }, 300);
    }
  };

  // Bloquear interacciones durante el tutorial
  const blockInteraction = function(e) {
    if (Tutorial.isActive && !Tutorial.isElementAllowed(e.target)) {
      e.preventDefault();
      e.stopPropagation();

      // Mostrar mensaje contextual
      const isProductCard = e.target.closest('.grid .card');
      const isCartButton = e.target.closest('#cart-btn') || e.target.closest('.cart-btn');

      if (isProductCard && Tutorial.currentStep !== 0) {
        alert('💡 Primero completa el paso actual del tutorial.');
      } else if (isCartButton && Tutorial.currentStep === 2) {
        // En el paso 3, el carrito debería estar permitido
        return;
      } else {
        alert('💡 Sigue las instrucciones del tutorial para continuar.');
      }

      return false;
    }
  };

  document.addEventListener('click', blockInteraction, true);
  document.addEventListener('touchstart', blockInteraction, true);

  // También bloquear otros eventos
  document.addEventListener('keydown', function(e) {
    if (Tutorial.isActive && (e.key === 'Escape' || e.key === 'Tab')) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);
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

    // Cerrar modal de ajustes
    const settingsModal = document.getElementById('settings-modal');
    if (settingsModal && settingsModal.style.display === 'block') {
      Settings.closeModal();
    }

    // Cerrar modal de pago
    const paymentModal = document.getElementById('payment-modal');
    if (paymentModal && paymentModal.style.display === 'block') {
      Cart.closePaymentModal();
    }
  }
});

// modo claro oscuro
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const root = document.documentElement;

  // Guardar estado en localStorage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "light") {
    root.classList.add("light-theme");
  }

  toggleBtn.addEventListener("click", () => {
    root.classList.toggle("light-theme");
    const isLight = root.classList.contains("light-theme");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
});

