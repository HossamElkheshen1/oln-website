/**
 * OLN CLASSIC — High-End Menswear & Silk Ties E-Commerce Architecture
 * Master Application Logic & State Engine
 */

// ==========================================
// 1. PRODUCT CATALOG DATABASE
// ==========================================
const PRODUCTS = [
  // --- REAL OLN SIGNATURE SILK TIES ---
  {
    id: 'tie-1',
    name: 'The Sovereign Lilac Geometric Silk Tie',
    category: 'ties',
    categoryLabel: 'Silk Ties',
    priceUSD: 85,
    image: 'tie1.png',
    badge: 'Bestseller',
    rating: 4.9,
    reviewsCount: 38,
    fabric: '100% Pure Mulberry Silk',
    weave: 'Micro-Geometric Jacquard',
    origin: 'Handcrafted Atelier Finish',
    description: 'Woven with refined lilac and violet micro-geometric motifs on a structured silk warp. Designed to create a sculpted four-in-hand knot with an effortless natural dimple.',
    optionsLabel: 'Blade Width',
    options: ['Classic (8.5 cm)', 'Contemporary (7.5 cm)'],
    inStock: true,
    featured: true
  },
  {
    id: 'tie-2',
    name: 'The Riviera Sky Blue Micro-Chain Silk Tie',
    category: 'ties',
    categoryLabel: 'Silk Ties',
    priceUSD: 85,
    image: 'tie2.png',
    badge: 'Editor’s Choice',
    rating: 5.0,
    reviewsCount: 42,
    fabric: '100% Pure Mulberry Silk',
    weave: 'High-Density Chain Jacquard',
    origin: 'Artisanal Hand-Stitched',
    description: 'A brilliant cerulean blue necktie adorned with subtle interlocking micro-links. Illuminates dark navy and charcoal suit lapels with Mediterranean poise.',
    optionsLabel: 'Blade Width',
    options: ['Classic (8.5 cm)', 'Contemporary (7.5 cm)'],
    inStock: true,
    featured: true
  },
  {
    id: 'tie-3',
    name: 'The Grand Burgundy Diamond Jacquard Silk Tie',
    category: 'ties',
    categoryLabel: 'Silk Ties',
    priceUSD: 95,
    image: 'tie3.png',
    badge: 'VIP Signature',
    rating: 4.9,
    reviewsCount: 56,
    fabric: '100% High-Twist Mulberry Silk',
    weave: 'Diamond Micro-Texture',
    origin: '7-Fold Atelier Craft',
    description: 'Deep Tuscan wine crimson imbued with subtle optical depth. The pinnacle choice for formal business, boardrooms, and autumn-winter galas.',
    optionsLabel: 'Blade Width',
    options: ['Classic (8.5 cm)', 'Contemporary (7.5 cm)'],
    inStock: true,
    featured: true
  },
  {
    id: 'tie-4',
    name: 'The Amber Twill Herringbone Silk Tie',
    category: 'ties',
    categoryLabel: 'Silk Ties',
    priceUSD: 80,
    image: 'tie4.png',
    badge: 'New Season',
    rating: 4.8,
    reviewsCount: 24,
    fabric: '100% Textured Raw Silk Twill',
    weave: 'Diagonal Chevron Twill',
    origin: 'Hand-Rolled Edges',
    description: 'Luminous warm apricot and amber tones with a tactile diagonal twill weave. Brings instant warmth, personality, and bespoke elegance to any classic tailored jacket.',
    optionsLabel: 'Blade Width',
    options: ['Classic (8.5 cm)', 'Contemporary (7.5 cm)'],
    inStock: true,
    featured: false
  },
  {
    id: 'tie-5',
    name: 'The Imperial Maroon Medallion Silk Tie',
    category: 'ties',
    categoryLabel: 'Silk Ties',
    priceUSD: 90,
    image: 'tie5.png',
    badge: 'Classic Heritage',
    rating: 4.9,
    reviewsCount: 31,
    fabric: '100% Heavyweight Jacquard Silk',
    weave: 'Archival Medallion Lattice',
    origin: 'Double Interlined Wool Core',
    description: 'Exquisite maroon background accented with miniature antique bronze geometric florets. Crafted with a premium wool-blend lining for resilient recovery and weight.',
    optionsLabel: 'Blade Width',
    options: ['Classic (8.5 cm)', 'Contemporary (7.5 cm)'],
    inStock: true,
    featured: false
  },
  {
    id: 'tie-6',
    name: 'The Royal Navy & Golden Repp Stripe Silk Tie',
    category: 'ties',
    categoryLabel: 'Silk Ties',
    priceUSD: 85,
    image: 'tie6.png',
    badge: 'Timeless Icon',
    rating: 5.0,
    reviewsCount: 67,
    fabric: '100% Pure Woven Silk',
    weave: 'Traditional Repp Stripe',
    origin: 'Artisanal Bar-Tack Finish',
    description: 'Regal sunshine gold contrasted by bold midnight navy diagonal club stripes. The undisputed cornerstone of collegiate and executive menswear.',
    optionsLabel: 'Blade Width',
    options: ['Classic (8.5 cm)', 'Contemporary (7.5 cm)'],
    inStock: true,
    featured: true
  },

  // --- BESPOKE CLASSIC SUITS & TUXEDOS ---
  {
    id: 'suit-1',
    name: 'The Savoy Midnight Navy Three-Piece Bespoke Suit',
    category: 'suits',
    categoryLabel: 'Classic Suits',
    priceUSD: 890,
    image: 'suit1.jpg',
    badge: 'Masterpiece',
    rating: 5.0,
    reviewsCount: 52,
    fabric: 'Italian Super 150s Pure Virgin Wool',
    weave: 'Fine Twill Canvassed',
    origin: 'Sartorial Half-Canvas Construction',
    description: 'Our flagship 3-piece tailored suit in prestigious midnight navy. Featuring hand-rolled peak lapels, a tailored 5-button waistcoat, and flat-front trousers with side adjusters.',
    optionsLabel: 'Suit Size',
    options: ['38R (EU 48)', '40R (EU 50)', '42R (EU 52)', '44R (EU 54)', '46R (EU 56)'],
    inStock: true,
    featured: true
  },
  {
    id: 'suit-2',
    name: 'The Milanese Charcoal Double-Breasted Wool Suit',
    category: 'suits',
    categoryLabel: 'Classic Suits',
    priceUSD: 850,
    image: 'suit2.jpg',
    badge: 'Tailor’s Cut',
    rating: 4.9,
    reviewsCount: 45,
    fabric: 'Super 130s Extra-Fine Merino Wool',
    weave: 'Structured Birdseye Weave',
    origin: 'Handmade Milanese Lapel Hole',
    description: 'A commanding 6x2 double-breasted silhouette with sweeping peak lapels, genuine horn buttons, double back vents, and tailored tapered trousers.',
    optionsLabel: 'Suit Size',
    options: ['38R (EU 48)', '40R (EU 50)', '42R (EU 52)', '44R (EU 54)', '46R (EU 56)'],
    inStock: true,
    featured: true
  },
  {
    id: 'suit-3',
    name: 'The Grand Gala Black Silk-Shawl Velvet Tuxedo',
    category: 'tuxedos',
    categoryLabel: 'Black Tie',
    priceUSD: 980,
    image: 'suit3.jpg',
    badge: 'Black Tie Exclusive',
    rating: 5.0,
    reviewsCount: 29,
    fabric: 'Pure Silk-Cotton Velvet & Satin Lapels',
    weave: 'Plush Velvet with Satin Galon',
    origin: 'Bespoke Evening Atelier',
    description: 'The supreme expression of black-tie gala sophistication. Rich midnight-black velvet jacket with continuous silk-satin shawl lapels, paired with tuxedo trousers featuring satin side braids.',
    optionsLabel: 'Tuxedo Size',
    options: ['38R (EU 48)', '40R (EU 50)', '42R (EU 52)', '44R (EU 54)', '46R (EU 56)'],
    inStock: true,
    featured: true
  },
  {
    id: 'suit-4',
    name: 'The Florentine Camel Wool-Cashmere Tailored Suit',
    category: 'suits',
    categoryLabel: 'Classic Suits',
    priceUSD: 920,
    image: 'suit4.jpg',
    badge: 'Limited Edition',
    rating: 4.9,
    reviewsCount: 34,
    fabric: '90% Italian Virgin Wool, 10% Mongolian Cashmere',
    weave: 'Soft Melton Flannel',
    origin: 'Neapolitan Spalla Camicia Shoulder',
    description: 'Impeccably tailored in warm camel tones. Crafted with soft deconstructed shoulders, curved barchetta breast pocket, and unlined comfort for refined cosmopolitan style.',
    optionsLabel: 'Suit Size',
    options: ['38R (EU 48)', '40R (EU 50)', '42R (EU 52)', '44R (EU 54)', '46R (EU 56)'],
    inStock: true,
    featured: true
  }
];

// ==========================================
// 2. CURRENCY & SYSTEM STATE
// ==========================================
const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0, name: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, name: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, name: 'GBP (£)' },
  EGP: { symbol: 'E£ ', rate: 49.5, name: 'EGP (E£)' },
  AED: { symbol: 'AED ', rate: 3.67, name: 'AED (د.إ)' }
};

const PROMO_CODES = {
  'OLN10': 0.10,
  'OLNCLASSIC10': 0.10,
  'GENTLEMAN': 0.15,
  'SUITANDTIE': 0.15
};

const STATE = {
  currency: 'USD',
  cart: [],
  wishlist: [],
  appliedPromo: null,
  activeCategory: 'all',
  sortBy: 'featured',
  searchQuery: '',
  // Virtual Stylist state
  stylingSuitId: 'suit-1',
  stylingTieId: 'tie-6'
};

// ==========================================
// 3. STORAGE & INITIALIZATION
// ==========================================
function loadPersistedState() {
  try {
    const savedCart = localStorage.getItem('oln_cart');
    if (savedCart) STATE.cart = JSON.parse(savedCart);

    const savedWishlist = localStorage.getItem('oln_wishlist');
    if (savedWishlist) STATE.wishlist = JSON.parse(savedWishlist);

    const savedCurrency = localStorage.getItem('oln_currency');
    if (savedCurrency && CURRENCIES[savedCurrency]) STATE.currency = savedCurrency;
  } catch (e) {
    console.warn('Storage load error:', e);
  }
}

function persistState() {
  try {
    localStorage.setItem('oln_cart', JSON.stringify(STATE.cart));
    localStorage.setItem('oln_wishlist', JSON.stringify(STATE.wishlist));
    localStorage.setItem('oln_currency', STATE.currency);
  } catch (e) {
    console.warn('Storage save error:', e);
  }
}

// ==========================================
// 4. FORMATTING UTILITIES
// ==========================================
function formatPrice(priceUSD) {
  const curr = CURRENCIES[STATE.currency] || CURRENCIES.USD;
  const converted = Math.round(priceUSD * curr.rate);
  return `${curr.symbol}${converted.toLocaleString()}`;
}

function showToast(message, icon = '✓') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `<span style="color: var(--gold-light); font-weight: bold;">${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// 5. PRODUCT RENDERING & FILTERING
// ==========================================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  let filtered = [...PRODUCTS];

  // Category filter
  if (STATE.activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === STATE.activeCategory);
  }

  // Search filter
  if (STATE.searchQuery.trim()) {
    const q = STATE.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.fabric.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // Sort
  if (STATE.sortBy === 'price-low') {
    filtered.sort((a, b) => a.priceUSD - b.priceUSD);
  } else if (STATE.sortBy === 'price-high') {
    filtered.sort((a, b) => b.priceUSD - a.priceUSD);
  } else if (STATE.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else {
    // Featured first
    filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.5rem; font-family: var(--font-serif); margin-bottom: 0.5rem; color: var(--gold-light);">No Sartorial Creations Found</p>
        <p>Try refining your search keyword or clearing category filters.</p>
        <button onclick="resetFilters()" class="btn-primary-gold" style="margin-top: 1.5rem; padding: 0.75rem 1.5rem;">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = STATE.wishlist.includes(product.id);
    return `
      <article class="product-card" data-id="${product.id}">
        <div class="card-media-box">
          <img src="./${product.image}" alt="${product.name}" class="card-img" loading="lazy">
          ${product.badge ? `<span class="card-badge">${product.badge}</span>` : ''}
          <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist('${product.id}')" 
                  aria-label="Save to Wishlist" 
                  title="Save to Wishlist">
            ${isWishlisted ? '♥' : '♡'}
          </button>
          <div class="card-actions-overlay">
            <button class="btn-card-quickview" onclick="openQuickView('${product.id}')">Quick View</button>
            <button class="btn-card-add" onclick="quickAddToCart('${product.id}')">Add to Bag</button>
          </div>
        </div>
        <div class="card-content">
          <span class="card-category">${product.categoryLabel}</span>
          <h3 class="card-title">${product.name}</h3>
          <p class="card-fabric-spec">
            <span>✧</span> ${product.fabric}
          </p>
          <div class="card-bottom-row">
            <span class="card-price">${formatPrice(product.priceUSD)}</span>
            <div class="card-rating">
              <span>★</span>
              <span>${product.rating.toFixed(1)}</span>
              <span style="color: var(--text-muted); font-size: 0.72rem;">(${product.reviewsCount})</span>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function resetFilters() {
  STATE.activeCategory = 'all';
  STATE.searchQuery = '';
  const searchInput = document.getElementById('navSearchInput');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'all');
  });

  renderProducts();
}

// ==========================================
// 6. CART MANAGEMENT
// ==========================================
function quickAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const defaultOption = product.options[0];
  addToCart(productId, defaultOption, 1);
}

function addToCart(productId, selectedOption, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = STATE.cart.find(
    item => item.productId === productId && item.selectedOption === selectedOption
  );

  if (existing) {
    existing.quantity += quantity;
  } else {
    STATE.cart.push({
      productId,
      selectedOption,
      quantity,
      addedAt: Date.now()
    });
  }

  persistState();
  updateCartBadge();
  renderCartDrawer();
  openCartDrawer();
  showToast(`Added "${product.name}" to your shopping bag.`);
}

function updateCartItemQty(index, delta) {
  if (!STATE.cart[index]) return;
  STATE.cart[index].quantity += delta;
  if (STATE.cart[index].quantity <= 0) {
    STATE.cart.splice(index, 1);
  }
  persistState();
  updateCartBadge();
  renderCartDrawer();
}

function removeCartItem(index) {
  if (!STATE.cart[index]) return;
  const removed = STATE.cart.splice(index, 1)[0];
  const prod = PRODUCTS.find(p => p.id === removed.productId);
  persistState();
  updateCartBadge();
  renderCartDrawer();
  showToast(`Removed from bag.`, '✕');
}

function calculateCartTotals() {
  let subtotalUSD = 0;
  STATE.cart.forEach(item => {
    const prod = PRODUCTS.find(p => p.id === item.productId);
    if (prod) {
      subtotalUSD += prod.priceUSD * item.quantity;
    }
  });

  let discountUSD = 0;
  if (STATE.appliedPromo && PROMO_CODES[STATE.appliedPromo]) {
    discountUSD = subtotalUSD * PROMO_CODES[STATE.appliedPromo];
  }

  // Free shipping threshold: $200 USD
  const freeShippingThresholdUSD = 200;
  const remainingForFreeShipping = Math.max(0, freeShippingThresholdUSD - subtotalUSD);
  const isFreeShipping = subtotalUSD >= freeShippingThresholdUSD || subtotalUSD === 0;
  const shippingCostUSD = (subtotalUSD === 0 || isFreeShipping) ? 0 : 25;

  const finalTotalUSD = Math.max(0, subtotalUSD - discountUSD + shippingCostUSD);

  return {
    subtotalUSD,
    discountUSD,
    shippingCostUSD,
    finalTotalUSD,
    isFreeShipping,
    remainingForFreeShipping,
    freeShippingThresholdUSD
  };
}

function renderCartDrawer() {
  const container = document.getElementById('drawerItemsList');
  const subtotalEl = document.getElementById('drawerSubtotal');
  const shippingMeterText = document.getElementById('shippingMeterText');
  const shippingProgressFill = document.getElementById('shippingProgressFill');

  if (!container) return;

  const totals = calculateCartTotals();

  // Free shipping progress bar
  if (shippingMeterText && shippingProgressFill) {
    if (totals.subtotalUSD === 0) {
      shippingMeterText.innerHTML = `Add items to qualify for <strong>Complimentary Express Courier</strong>.`;
      shippingProgressFill.style.width = '0%';
    } else if (totals.isFreeShipping) {
      shippingMeterText.innerHTML = `🎉 <strong>Congratulations!</strong> You’ve unlocked Complimentary Express Courier.`;
      shippingProgressFill.style.width = '100%';
    } else {
      const pct = Math.min(100, Math.round((totals.subtotalUSD / totals.freeShippingThresholdUSD) * 100));
      shippingMeterText.innerHTML = `Add <strong>${formatPrice(totals.remainingForFreeShipping)}</strong> more to unlock Complimentary Express Courier.`;
      shippingProgressFill.style.width = `${pct}%`;
    }
  }

  if (STATE.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">⚜</div>
        <h4 style="font-family: var(--font-serif); font-size: 1.25rem; color: #fff; margin-bottom: 0.5rem;">Your Shopping Bag is Empty</h4>
        <p style="font-size: 0.88rem; margin-bottom: 1.5rem;">Indulge in our masterfully crafted ties and bespoke classic suits.</p>
        <button onclick="closeCartDrawer();" class="btn-primary-gold" style="padding: 0.75rem 1.5rem; font-size: 0.8rem;">Discover Collections</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatPrice(0);
    return;
  }

  container.innerHTML = STATE.cart.map((item, idx) => {
    const prod = PRODUCTS.find(p => p.id === item.productId);
    if (!prod) return '';

    return `
      <div class="cart-item-row">
        <div class="cart-item-thumb">
          <img src="./${prod.image}" alt="${prod.name}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-name">${prod.name}</div>
          <div class="cart-item-variant">${item.selectedOption}</div>
          <div class="cart-item-price">${formatPrice(prod.priceUSD * item.quantity)}</div>
          <div class="cart-item-qty-ctrl">
            <button class="qty-btn" onclick="updateCartItemQty(${idx}, -1)" title="Decrease">−</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartItemQty(${idx}, 1)" title="Increase">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem(${idx})" title="Remove item">×</button>
      </div>
    `;
  }).join('');

  if (subtotalEl) {
    subtotalEl.textContent = formatPrice(totals.finalTotalUSD);
  }
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadgeCount');
  const totalCount = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  }
}

function applyPromoCode() {
  const input = document.getElementById('promoCodeInput');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (PROMO_CODES[code]) {
    STATE.appliedPromo = code;
    showToast(`Promo code "${code}" applied: ${(PROMO_CODES[code] * 100)}% off!`, '🏷');
    renderCartDrawer();
  } else {
    showToast(`Invalid promotion code. Try "OLN10".`, '⚠️');
  }
}

function openCartDrawer() {
  document.getElementById('cartDrawerBackdrop')?.classList.add('active');
  document.getElementById('cartDrawer')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cartDrawerBackdrop')?.classList.remove('active');
  document.getElementById('cartDrawer')?.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// 7. WISHLIST MANAGEMENT
// ==========================================
function toggleWishlist(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const idx = STATE.wishlist.indexOf(productId);
  if (idx > -1) {
    STATE.wishlist.splice(idx, 1);
    showToast(`Removed from your Wishlist.`, '♡');
  } else {
    STATE.wishlist.push(productId);
    showToast(`Saved "${prod.name}" to your Wishlist.`, '♥');
  }

  persistState();
  updateWishlistBadge();
  renderProducts();
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlistBadgeCount');
  if (badge) {
    badge.textContent = STATE.wishlist.length;
    badge.style.display = STATE.wishlist.length > 0 ? 'flex' : 'none';
  }
}

// ==========================================
// 8. QUICK VIEW MODAL
// ==========================================
let currentQuickViewProduct = null;
let currentQuickViewOption = null;
let currentQuickViewQty = 1;

function openQuickView(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  currentQuickViewProduct = prod;
  currentQuickViewOption = prod.options[0];
  currentQuickViewQty = 1;

  const modal = document.getElementById('quickViewModal');
  const container = document.getElementById('quickViewContainer');
  if (!modal || !container) return;

  container.innerHTML = `
    <div class="quickview-layout">
      <div class="quickview-media">
        <img src="./${prod.image}" alt="${prod.name}">
      </div>
      <div class="quickview-info">
        <span class="quickview-category">${prod.categoryLabel}</span>
        <h2 class="quickview-title">${prod.name}</h2>
        <div class="quickview-price">${formatPrice(prod.priceUSD)}</div>
        <p class="quickview-desc">${prod.description}</p>
        
        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 1rem; border-radius: var(--radius-sm); margin-bottom: 1.5rem; font-size: 0.82rem;">
          <div style="margin-bottom: 0.35rem;"><strong style="color: var(--gold-light);">Fabrication:</strong> ${prod.fabric}</div>
          <div style="margin-bottom: 0.35rem;"><strong style="color: var(--gold-light);">Weave / Texture:</strong> ${prod.weave}</div>
          <div><strong style="color: var(--gold-light);">Sartorial Origin:</strong> ${prod.origin}</div>
        </div>

        <div class="variant-selector-wrap">
          <div class="variant-label">
            <span>Select ${prod.optionsLabel}</span>
            <button onclick="openSizeGuide()" style="color: var(--gold-primary); text-transform: none; text-decoration: underline; font-size: 0.78rem;">View Measurement Guide</button>
          </div>
          <div class="size-chips">
            ${prod.options.map((opt, i) => `
              <button class="size-chip ${i === 0 ? 'selected' : ''}" onclick="selectQuickViewOption('${opt}', this)">
                ${opt}
              </button>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; gap: 1rem; align-items: center; margin-top: 1rem;">
          <div class="cart-item-qty-ctrl" style="margin: 0; padding: 0.3rem;">
            <button class="qty-btn" onclick="changeQuickViewQty(-1)" style="font-size: 1.1rem; padding: 0.3rem 0.8rem;">−</button>
            <span id="quickViewQtyVal" class="qty-val" style="font-size: 1rem; padding: 0 0.8rem;">1</span>
            <button class="qty-btn" onclick="changeQuickViewQty(1)" style="font-size: 1.1rem; padding: 0.3rem 0.8rem;">+</button>
          </div>
          <button class="btn-primary-gold" style="flex: 1; justify-content: center;" onclick="addQuickViewToCart()">
            Add to Shopping Bag
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function selectQuickViewOption(opt, btnEl) {
  currentQuickViewOption = opt;
  document.querySelectorAll('.size-chip').forEach(el => el.classList.remove('selected'));
  btnEl.classList.add('selected');
}

function changeQuickViewQty(delta) {
  currentQuickViewQty = Math.max(1, currentQuickViewQty + delta);
  const el = document.getElementById('quickViewQtyVal');
  if (el) el.textContent = currentQuickViewQty;
}

function addQuickViewToCart() {
  if (!currentQuickViewProduct) return;
  addToCart(currentQuickViewProduct.id, currentQuickViewOption, currentQuickViewQty);
  closeQuickView();
}

function closeQuickView() {
  document.getElementById('quickViewModal')?.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// 9. SIZE & FIT GUIDE MODAL
// ==========================================
function openSizeGuide() {
  document.getElementById('sizeGuideModal')?.classList.add('active');
}

function closeSizeGuide() {
  document.getElementById('sizeGuideModal')?.classList.remove('active');
}

// ==========================================
// 10. INTERACTIVE SARTORIAL PAIRER (STYLING STUDIO)
// ==========================================
const SARTORIAL_RECOMMENDATIONS = {
  'suit-1': {
    'tie-1': 'The lilac and violet geometry provides a soft, sophisticated contrast against deep midnight navy. Ideal for daytime spring ceremonies or creative executive meetings.',
    'tie-2': 'Tone-on-tone mastery: Riviera blue highlights the rich Italian navy wool, projecting calm confidence and effortless Italian Sprezzatura.',
    'tie-3': 'A power combination: Deep Tuscan burgundy creates high visual contrast with navy, making this the ultimate choice for evening board meetings and formal banquets.',
    'tie-4': 'Warm amber chevron twill adds vibrant energy to navy. Perfect for autumn events and gentlemen wishing to showcase individual sartorial confidence.',
    'tie-5': 'Vintage medallion motifs against the 3-piece navy silhouette emulate classical Savile Row gentlemen’s club refinement.',
    'tie-6': 'The iconic collegiate statement: Golden yellow and navy repp stripes pair flawlessly with the Savoy 3-piece suit for undisputed executive authority.'
  },
  'suit-2': {
    'tie-1': 'Lilac softens the seriousness of charcoal double-breasted wool, creating an inviting, artistic aesthetic.',
    'tie-2': 'Cerulean micro-chains break through dark charcoal flannel with luminous clarity. Clean, crisp, and exceptionally modern.',
    'tie-3': 'Burgundy and charcoal is the classic transatlantic power pairing. Recommended for keynote speeches and high-stakes negotiations.',
    'tie-4': 'Amber twill offers warm autumnal friction against cool charcoal tones. An outstanding pairing for cooler months.',
    'tie-5': 'The medallion motif mirrors the structured elegance of double-breasted tailoring, evoking timeless 1930s sartorial flair.',
    'tie-6': 'Bold collegiate stripes introduce dynamic geometry to the wide peak lapels of the double-breasted silhouette.'
  },
  'suit-3': {
    'tie-1': 'A non-traditional evening statement for avant-garde black-tie receptions.',
    'tie-2': 'Provides a vibrant jewel-toned touch when paired with velvet evening lapels.',
    'tie-3': 'Deep crimson wine silk harmonizes exquisitely with black velvet, creating an aristocratic operatic ambience.',
    'tie-4': 'A dramatic, bold pop of color against gala black velvet.',
    'tie-5': 'The deep maroon medallion provides rich archival romance for bespoke gala evenings.',
    'tie-6': 'A bold daytime club look when substituting a tuxedo jacket for a blazer.'
  },
  'suit-4': {
    'tie-1': 'Lilac and camel create an elevated warm-pastel harmony reminiscent of Pitti Uomo in Florence.',
    'tie-2': 'Sky blue and camel wool is the quintessential Italian summer pairing. Light, airy, and remarkably refined.',
    'tie-3': 'Rich burgundy anchors the lightness of camel flannel with warm, grounding richness.',
    'tie-4': 'Monochromatic harmony: Amber twill complements camel wool like a tailored glove.',
    'tie-5': 'The medallion motifs provide aristocratic distinction against the neutral camel canvas.',
    'tie-6': 'Navy and gold stripes ground the camel suit with classic nautical and sporting heritage.'
  }
};

function initStylingStudio() {
  const suitList = PRODUCTS.filter(p => p.category === 'suits' || p.category === 'tuxedos');
  const tieList = PRODUCTS.filter(p => p.category === 'ties');

  const suitPicker = document.getElementById('suitPickerThumbs');
  const tiePicker = document.getElementById('tiePickerThumbs');

  if (suitPicker) {
    suitPicker.innerHTML = suitList.map(s => `
      <div class="picker-thumb ${s.id === STATE.stylingSuitId ? 'active' : ''}" 
           onclick="selectStylingSuit('${s.id}')" title="${s.name}">
        <img src="./${s.image}" alt="${s.name}">
      </div>
    `).join('');
  }

  if (tiePicker) {
    tiePicker.innerHTML = tieList.map(t => `
      <div class="picker-thumb ${t.id === STATE.stylingTieId ? 'active' : ''}" 
           onclick="selectStylingTie('${t.id}')" title="${t.name}">
        <img src="./${t.image}" alt="${t.name}">
      </div>
    `).join('');
  }

  updateStylingPreview();
}

function selectStylingSuit(suitId) {
  STATE.stylingSuitId = suitId;
  document.querySelectorAll('#suitPickerThumbs .picker-thumb').forEach(el => {
    el.classList.toggle('active', el.getAttribute('title').includes(PRODUCTS.find(p => p.id === suitId).name));
  });
  updateStylingPreview();
}

function selectStylingTie(tieId) {
  STATE.stylingTieId = tieId;
  document.querySelectorAll('#tiePickerThumbs .picker-thumb').forEach(el => {
    el.classList.toggle('active', el.getAttribute('title').includes(PRODUCTS.find(p => p.id === tieId).name));
  });
  updateStylingPreview();
}

function updateStylingPreview() {
  const suit = PRODUCTS.find(p => p.id === STATE.stylingSuitId);
  const tie = PRODUCTS.find(p => p.id === STATE.stylingTieId);
  if (!suit || !tie) return;

  const suitImg = document.getElementById('studioSuitImg');
  const suitTitle = document.getElementById('studioSuitTitle');
  const tieImg = document.getElementById('studioTieImg');
  const tieTitle = document.getElementById('studioTieTitle');
  const verdict = document.getElementById('studioStylingVerdict');
  const bundlePrice = document.getElementById('studioBundlePrice');

  if (suitImg) suitImg.src = `./${suit.image}`;
  if (suitTitle) suitTitle.textContent = suit.name;
  if (tieImg) tieImg.src = `./${tie.image}`;
  if (tieTitle) tieTitle.textContent = tie.name;

  const advice = SARTORIAL_RECOMMENDATIONS[suit.id]?.[tie.id] || 
    'An undeniably refined combination of master tailoring and artisanal pure silk neckwear.';
  if (verdict) verdict.innerHTML = `<strong>Tailor’s Note:</strong> ${advice}`;

  // Combined bundle with 10% discount
  const combinedUSD = (suit.priceUSD + tie.priceUSD) * 0.9;
  if (bundlePrice) {
    bundlePrice.innerHTML = `${formatPrice(combinedUSD)} <span class="combo-savings-tag">10% Off Bundle</span>`;
  }
}

function addStyledComboToCart() {
  const suit = PRODUCTS.find(p => p.id === STATE.stylingSuitId);
  const tie = PRODUCTS.find(p => p.id === STATE.stylingTieId);
  if (!suit || !tie) return;

  addToCart(suit.id, suit.options[0], 1);
  addToCart(tie.id, tie.options[0], 1);
  showToast(`Sartorial Ensemble (${suit.name} + ${tie.name}) added to bag!`, '✨');
}

// ==========================================
// 11. CHECKOUT FLOW & RECEIPT GENERATOR
// ==========================================
function openCheckoutModal() {
  closeCartDrawer();
  const totals = calculateCartTotals();
  if (totals.subtotalUSD === 0) {
    showToast('Your shopping bag is empty. Please select products first.', '⚠️');
    return;
  }

  const modal = document.getElementById('checkoutModal');
  const orderSummary = document.getElementById('checkoutOrderSummary');
  if (orderSummary) {
    orderSummary.innerHTML = `
      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); padding: 1.25rem; border-radius: var(--radius-sm); margin-bottom: 1.5rem;">
        <h4 style="font-family: var(--font-serif); font-size: 1rem; color: var(--gold-light); margin-bottom: 0.75rem;">Order Summary (${STATE.cart.length} items)</h4>
        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem;">
          <span>Subtotal</span>
          <span>${formatPrice(totals.subtotalUSD)}</span>
        </div>
        ${totals.discountUSD > 0 ? `
          <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--accent-success); margin-bottom: 0.4rem;">
            <span>VIP Promo Discount (${STATE.appliedPromo})</span>
            <span>-${formatPrice(totals.discountUSD)}</span>
          </div>
        ` : ''}
        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.4rem;">
          <span>Courier Shipping</span>
          <span>${totals.isFreeShipping ? '<span style="color: var(--gold-primary);">COMPLIMENTARY</span>' : formatPrice(totals.shippingCostUSD)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 1.15rem; font-weight: 700; color: #fff; border-top: 1px solid var(--border-subtle); padding-top: 0.75rem; margin-top: 0.75rem;">
          <span>Total</span>
          <span style="color: var(--gold-light);">${formatPrice(totals.finalTotalUSD)}</span>
        </div>
      </div>
    `;
  }

  // Reset checkout view to Step 1
  document.getElementById('checkoutStep1').style.display = 'block';
  document.getElementById('checkoutStep2').style.display = 'none';
  document.getElementById('checkoutConfirmation').style.display = 'none';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal')?.classList.remove('active');
  document.body.style.overflow = '';
}

function proceedToPaymentStep(event) {
  event.preventDefault();
  const form = document.getElementById('shippingAddressForm');
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  document.getElementById('checkoutStep1').style.display = 'none';
  document.getElementById('checkoutStep2').style.display = 'block';

  document.getElementById('stepIndicator1').classList.remove('active');
  document.getElementById('stepIndicator2').classList.add('active');
}

function backToShippingStep() {
  document.getElementById('checkoutStep1').style.display = 'block';
  document.getElementById('checkoutStep2').style.display = 'none';

  document.getElementById('stepIndicator1').classList.add('active');
  document.getElementById('stepIndicator2').classList.remove('active');
}

function selectPaymentMethod(method, btnEl) {
  const hiddenInput = document.getElementById('selectedPaymentMethod');
  if (hiddenInput) hiddenInput.value = method;

  document.querySelectorAll('.payment-tab-btn').forEach(btn => {
    btn.classList.remove('active', 'btn-primary-gold');
    btn.classList.add('btn-outline-gold');
  });

  btnEl.classList.remove('btn-outline-gold');
  btnEl.classList.add('btn-primary-gold', 'active');

  const cardFields = document.getElementById('cardFieldsGrid');
  if (cardFields) {
    if (method === 'Cash on Delivery') {
      cardFields.style.opacity = '0.35';
      cardFields.style.pointerEvents = 'none';
      showToast('Cash on Delivery: Payment will be collected upon arrival.', '💵');
    } else if (method === 'Apple Pay / GPay') {
      cardFields.style.opacity = '0.35';
      cardFields.style.pointerEvents = 'none';
      showToast('Apple Pay / GPay selected for one-touch authorisation.', '');
    } else {
      cardFields.style.opacity = '1';
      cardFields.style.pointerEvents = 'auto';
      showToast('Credit / Debit card payment selected.', '💳');
    }
  }
}

// Merchant WhatsApp Configuration
const OLN_WHATSAPP_NUMBER = '201107644472'; // International format for 01107644472
const OLN_WHATSAPP_DISPLAY = '+20 110 764 4472';
let lastCompletedOrderData = null;

function buildWhatsAppMessage(orderData) {
  const { orderNum, customerName, customerEmail, customerPhone, customerAddress, customerCity, customerCountry, paymentMethod, items, totals, dateStr } = orderData;
  
  let msg = `⚜ *OLN CLASSIC — NEW ORDER* ⚜\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `📋 *Order Number:* ${orderNum}\n`;
  msg += `📅 *Date:* ${dateStr}\n\n`;
  
  msg += `👤 *CUSTOMER DETAILS:*\n`;
  msg += `• *Name:* ${customerName}\n`;
  msg += `• *Phone:* ${customerPhone}\n`;
  msg += `• *Email:* ${customerEmail}\n`;
  msg += `• *Address:* ${customerAddress}, ${customerCity}, ${customerCountry}\n\n`;
  
  msg += `🛍 *ORDER ITEMS:*\n`;
  items.forEach((item, index) => {
    const itemTotalFormatted = formatPrice(item.priceUSD * item.quantity);
    msg += `${index + 1}. *${item.name}*\n`;
    msg += `   ▫ Specification: ${item.selectedOption}\n`;
    msg += `   ▫ Quantity: ${item.quantity}\n`;
    msg += `   ▫ Item Total: ${itemTotalFormatted}\n\n`;
  });
  
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💵 *Subtotal:* ${formatPrice(totals.subtotalUSD)}\n`;
  if (totals.discountUSD > 0) {
    msg += `🏷 *Promo Discount (${STATE.appliedPromo}):* -${formatPrice(totals.discountUSD)}\n`;
  }
  msg += `✈ *Courier Delivery:* ${totals.isFreeShipping ? 'COMPLIMENTARY' : formatPrice(totals.shippingCostUSD)}\n`;
  msg += `⭐ *GRAND TOTAL:* ${formatPrice(totals.finalTotalUSD)}\n`;
  msg += `💳 *Payment Method:* ${paymentMethod}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💬 _Please confirm my order and dispatch schedule. Thank you!_`;
  
  return msg;
}

function sendOrderViaWhatsApp() {
  if (!lastCompletedOrderData) return;
  const msg = buildWhatsAppMessage(lastCompletedOrderData);
  const waUrl = `https://wa.me/${OLN_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
}

function completeOrder(event) {
  event.preventDefault();

  const customerName = document.getElementById('shipFullName')?.value || 'Distinguished Customer';
  const customerEmail = document.getElementById('shipEmail')?.value || 'client@olnclassic.com';
  const customerPhone = document.getElementById('shipPhone')?.value || 'N/A';
  const customerAddress = document.getElementById('shipAddress')?.value || 'Atelier Residence';
  const customerCity = document.getElementById('shipCity')?.value || 'Cairo';
  const customerCountry = document.getElementById('shipCountry')?.value || 'Egypt';

  // Determine selected payment method
  const paymentMethod = document.getElementById('selectedPaymentMethod')?.value || 'Credit / Debit Card';

  const orderNum = 'OLN-' + Math.floor(100000 + Math.random() * 900000);
  const totals = calculateCartTotals();
  const dateStr = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  // Capture items before clearing cart
  const orderedItems = STATE.cart.map(item => {
    const prod = PRODUCTS.find(p => p.id === item.productId);
    return {
      name: prod ? prod.name : 'OLN Creation',
      selectedOption: item.selectedOption,
      quantity: item.quantity,
      priceUSD: prod ? prod.priceUSD : 0
    };
  });

  // Store completed order data for WhatsApp transmission
  lastCompletedOrderData = {
    orderNum,
    customerName,
    customerEmail,
    customerPhone,
    customerAddress,
    customerCity,
    customerCountry,
    paymentMethod,
    items: orderedItems,
    totals,
    dateStr
  };

  // Receipt HTML
  const receiptContainer = document.getElementById('orderReceiptBox');
  if (receiptContainer) {
    receiptContainer.innerHTML = `
      <div class="receipt-header-row">
        <div>
          <h3 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--gold-light);">OLN CLASSIC ATELIER</h3>
          <p style="font-size: 0.78rem; color: var(--text-muted);">Official Purchase Inscription & Delivery Certificate</p>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: 700; color: #fff;">${orderNum}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">${dateStr}</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.82rem; margin-bottom: 1.25rem;">
        <div>
          <span style="color: var(--text-muted); display: block;">Recipient:</span>
          <strong style="color: #fff;">${customerName}</strong><br>
          ${customerAddress}<br>
          ${customerCity}, ${customerCountry}<br>
          <span style="color: var(--gold-primary);">${customerEmail} &bull; ${customerPhone}</span>
        </div>
        <div>
          <span style="color: var(--text-muted); display: block;">Delivery & Payment:</span>
          <strong style="color: #fff;">Express Courier (Signed & Insured)</strong><br>
          Payment: <strong>${paymentMethod}</strong><br>
          Estimated Dispatch: Within 24-48 Hours
        </div>
      </div>

      <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; margin-bottom: 1rem;">
        <thead>
          <tr style="border-bottom: 1px solid var(--border-subtle); color: var(--gold-light); text-align: left;">
            <th style="padding: 0.5rem 0;">Item Description</th>
            <th style="padding: 0.5rem 0; text-align: center;">Qty</th>
            <th style="padding: 0.5rem 0; text-align: right;">Amount</th>
          </tr>
        </thead>
        <tbody>
          ${orderedItems.map(item => `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
              <td style="padding: 0.6rem 0;">
                <span style="color: #fff; font-weight: 600;">${item.name}</span><br>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${item.selectedOption}</span>
              </td>
              <td style="padding: 0.6rem 0; text-align: center; color: var(--text-secondary);">${item.quantity}</td>
              <td style="padding: 0.6rem 0; text-align: right; color: var(--gold-light);">${formatPrice(item.priceUSD * item.quantity)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div style="border-top: 1px solid var(--border-subtle); padding-top: 0.75rem; display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 800;">
        <span style="color: #fff;">Grand Total</span>
        <span style="color: var(--gold-light);">${formatPrice(totals.finalTotalUSD)}</span>
      </div>

      <!-- WhatsApp Dispatch Status Banner -->
      <div style="margin-top: 1.25rem; background: rgba(37, 211, 102, 0.1); border: 1px solid rgba(37, 211, 102, 0.35); border-radius: var(--radius-sm); padding: 0.85rem 1rem; display: flex; align-items: center; gap: 0.75rem;">
        <span style="font-size: 1.5rem;">📱</span>
        <div style="font-size: 0.8rem; color: #e2e8f0; text-align: left;">
          <strong style="color: #4ade80;">Direct WhatsApp Dispatch to OLN:</strong><br>
          Order details are formatted for WhatsApp (${OLN_WHATSAPP_DISPLAY}). Click below if your WhatsApp window didn't open automatically.
        </div>
      </div>
    `;
  }

  // Automatically trigger WhatsApp in a new tab/app window
  const waMsg = buildWhatsAppMessage(lastCompletedOrderData);
  const waUrl = `https://wa.me/${OLN_WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;
  try {
    window.open(waUrl, '_blank');
  } catch (err) {
    console.log('Popup blocked, available via button', err);
  }

  // Clear Cart
  STATE.cart = [];
  STATE.appliedPromo = null;
  persistState();
  updateCartBadge();
  renderCartDrawer();

  // Show Confirmation Step
  document.getElementById('checkoutStep2').style.display = 'none';
  document.getElementById('checkoutConfirmation').style.display = 'block';

  showToast(`Order ${orderNum} confirmed! Sending details to WhatsApp...`, '📱');
}

// ==========================================
// 12. EVENT LISTENERS & SETUP
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadPersistedState();

  // Initial renders
  renderProducts();
  updateCartBadge();
  updateWishlistBadge();
  renderCartDrawer();
  initStylingStudio();

  // Category filter tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.activeCategory = btn.dataset.category;
      renderProducts();
    });
  });

  // Sort dropdown
  const sortSelect = document.getElementById('shopSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      STATE.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Search input
  const searchInput = document.getElementById('navSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      STATE.searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Currency select
  const currencySelect = document.getElementById('currencySelector');
  if (currencySelect) {
    currencySelect.value = STATE.currency;
    currencySelect.addEventListener('change', (e) => {
      STATE.currency = e.target.value;
      persistState();
      renderProducts();
      renderCartDrawer();
      updateStylingPreview();
      showToast(`Currency converted to ${CURRENCIES[STATE.currency].name}`, '💱');
    });
  }

  // Header scroll appearance
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mainNav = document.getElementById('mainNav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('mobile-active');
    });
  }

  // VIP Newsletter Form
  const vipForm = document.getElementById('vipClubForm');
  if (vipForm) {
    vipForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = vipForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        showToast(`Welcome to the OLN Club! Use code OLN10 for 10% off.`, '✨');
        emailInput.value = '';
      }
    });
  }

  // Keyboard accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeQuickView();
      closeSizeGuide();
      closeCheckoutModal();
    }
  });
});
