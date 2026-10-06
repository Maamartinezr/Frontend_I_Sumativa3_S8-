const { useEffect, useMemo, useState } = React;

const PRODUCTS = [
  {
    id: 1,
    name: "Neon Quest",
    category: "videojuegos",
    typeLabel: "VideoGame Aventura",
    platform: "PS5 / Xbox / PC",
    normalPrice: 45990,
    offerPrice: 39990,
    description: "Juego de accion futurista con modo cooperativo.",
    image: "assets/img/catalog-neon-quest-specific.jpg",
    alt: "Arte promocional futurista del juego Neon Quest"
  },
  {
    id: 2,
    name: "Turbo Circuit",
    category: "videojuegos",
    typeLabel: "VideoGame Carreras",
    platform: "Nintendo / PC",
    normalPrice: 39990,
    offerPrice: 34990,
    description: "Competencias arcade con pistas dinamicas.",
    image: "assets/img/catalog-turbo-circuit-specific.jpg",
    alt: "Autos de carreras futuristas para el juego Turbo Circuit"
  },
  {
    id: 3,
    name: "Crystal Legends",
    category: "videojuegos",
    typeLabel: "VideoGame RPG",
    platform: "PS5 / PC",
    normalPrice: 52990,
    offerPrice: 44990,
    description: "Rol, exploracion y combates por turnos.",
    image: "assets/img/catalog-crystal-legends-specific.jpg",
    alt: "Escena de fantasia RPG para el juego Crystal Legends"
  },
  {
    id: 4,
    name: "Shadow Protocol",
    category: "videojuegos",
    typeLabel: "VideoGame Accion",
    platform: "PS5 / Xbox / PC",
    normalPrice: 49990,
    offerPrice: 42990,
    description: "Infiltracion tactica y combates en una ciudad futurista.",
    image: "assets/img/catalog-shadow-protocol-specific.jpg",
    alt: "Operativo tactico en ciudad futurista para Shadow Protocol"
  },
  {
    id: 5,
    name: "Strike Division",
    category: "videojuegos",
    typeLabel: "VideoGame Shooter",
    platform: "PS5 / Xbox / PC",
    normalPrice: 46990,
    offerPrice: 39990,
    description: "Combates multijugador competitivos con mapas dinamicos.",
    image: "assets/img/catalog-strike-division-specific.jpg",
    alt: "Equipo competitivo en arena futurista para Strike Division"
  },
  {
    id: 6,
    name: "Lost Horizon",
    category: "videojuegos",
    typeLabel: "VideoGame Supervivencia",
    platform: "PC / Xbox",
    normalPrice: 37990,
    offerPrice: 31990,
    description: "Explora, construye refugios y sobrevive en territorio hostil.",
    image: "assets/img/catalog-lost-horizon-specific.jpg",
    alt: "Campamento de supervivencia en territorio hostil para Lost Horizon"
  },
  {
    id: 7,
    name: "Empire Nexus",
    category: "videojuegos",
    typeLabel: "VideoGame Estrategia",
    platform: "PC",
    normalPrice: 32990,
    offerPrice: 27990,
    description: "Construye tu imperio y domina territorios mediante estrategia.",
    image: "assets/img/catalog-empire-nexus-specific.jpg",
    alt: "Mapa holografico estrategico del juego Empire Nexus"
  },
  {
    id: 8,
    name: "GameBox Series Z",
    category: "consolas",
    typeLabel: "Consola",
    platform: "Microsoft",
    normalPrice: 549990,
    offerPrice: 499990,
    description: "Consola disenada para juegos en 4K y tiempos de carga reducidos.",
    image: "assets/img/catalog-gamebox-series-z-specific.jpg",
    alt: "Consola de sobremesa GameBox Series Z con control"
  },
  {
    id: 9,
    name: "PocketPlay OLED",
    category: "consolas",
    typeLabel: "Consola",
    platform: "Portatil",
    normalPrice: 389990,
    offerPrice: 349990,
    description: "Consola portatil con pantalla OLED y controles desmontables.",
    image: "assets/img/catalog-pocketplay-oled-specific.jpg",
    alt: "Consola portatil PocketPlay OLED con controles desmontables"
  },
  {
    id: 10,
    name: "Control Pro X",
    category: "accesorios",
    typeLabel: "Accesorio",
    platform: "Multiplataforma",
    normalPrice: 34990,
    offerPrice: 29990,
    description: "Control ergonomico con respuesta precisa.",
    image: "assets/img/catalog-control-pro-x-specific.jpg",
    alt: "Control ergonomico Control Pro X de color negro y azul"
  },
  {
    id: 11,
    name: "DualShock Nova",
    category: "accesorios",
    typeLabel: "Accesorio",
    platform: "PS5",
    normalPrice: 79990,
    offerPrice: 69990,
    description: "Control inalambrico con vibracion avanzada y gatillos adaptativos.",
    image: "assets/img/catalog-dualshock-nova-specific.jpg",
    alt: "Control inalambrico DualShock Nova en blanco y grafito"
  },
  {
    id: 12,
    name: "Elite Control S2",
    category: "accesorios",
    typeLabel: "Accesorio",
    platform: "Xbox / PC",
    normalPrice: 89990,
    offerPrice: 79990,
    description: "Control configurable con botones traseros y perfiles personalizados.",
    image: "assets/img/catalog-elite-control-s2-specific.jpg",
    alt: "Control profesional Elite Control S2 con botones traseros"
  }
];

const WEEKLY_DEAL = {
  id: 9001,
  name: "Pack gamer esencial",
  category: "ofertas",
  typeLabel: "Oferta semanal",
  platform: "Pack gamer",
  normalPrice: 79990,
  offerPrice: 59990,
  description: "Incluye un juego destacado, audifonos y gift card digital para renovar tu setup de juego.",
  image: "assets/img/launch-pixelvault-gift-card.jpg",
  alt: "Pack gamer esencial PixelVault con productos en oferta"
};

const CATEGORY_OPTIONS = [
  { value: "todas", label: "Todos los productos" },
  { value: "videojuegos", label: "Videojuegos" },
  { value: "consolas", label: "Consolas" },
  { value: "accesorios", label: "Accesorios" }
];

const currencyFormatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0
});

function formatPrice(value) {
  return currencyFormatter.format(Number(value) || 0);
}

// Normaliza los productos cargados desde JSON y les agrega precio normal/oferta.
function enrichCatalogProduct(product) {
  const baseProduct = PRODUCTS.find((item) => item.id === Number(product.id)) || {};
  const offerPrice = Number(product.price || baseProduct.offerPrice || 0);

  return {
    ...baseProduct,
    ...product,
    id: Number(product.id),
    normalPrice: baseProduct.normalPrice || Math.round(offerPrice * 1.15),
    offerPrice,
    typeLabel: product.typeLabel || baseProduct.typeLabel || "Producto",
    image: product.image || baseProduct.image,
    alt: product.alt || baseProduct.alt || `Imagen de ${product.name}`
  };
}

function getStoredCart() {
  try {
    const storedCart = JSON.parse(localStorage.getItem("pixelvaultReactCart") || "[]");
    return storedCart
      .map((item) => ({
        productId: Number(item.productId),
        quantity: Math.max(1, Number(item.quantity) || 1),
        product: item.product
      }))
      .filter((item) => item.productId && item.quantity > 0);
  } catch (error) {
    console.error(error);
    localStorage.removeItem("pixelvaultReactCart");
    return [];
  }
}

function ProductCard({ product, onAddToCart, cartQuantity = 0 }) {
  const discount = Math.round(((product.normalPrice - product.offerPrice) / product.normalPrice) * 100);
  const isInCart = cartQuantity > 0;

  return (
    <article className="card surface-card product-card h-100">
      <div className="product-media">
        <img src={product.image} className="card-img-top" alt={product.alt} loading="lazy" />
        <span className="product-type-badge">{product.typeLabel}</span>
        <span className="product-discount-badge">-{discount}%</span>
      </div>
      <div className="card-body">
        <p className="small text-uppercase text-soft fw-bold mb-1">{product.platform}</p>
        <h3 className="h5 card-title">{product.name}</h3>
        <p className="card-text">{product.description}</p>
        <div className="price-row">
          <span className="normal-price">{formatPrice(product.normalPrice)}</span>
          <strong className="offer-price">{formatPrice(product.offerPrice)}</strong>
        </div>
      </div>
      <div className="card-footer bg-transparent border-secondary">
        <button
          className={`btn btn-sm w-100 ${isInCart ? "btn-outline-warning" : "btn-cyan"}`}
          type="button"
          onClick={() => onAddToCart(product.id)}
        >
          {isInCart ? `En el carrito (${cartQuantity})` : "Agregar al carrito"}
        </button>
      </div>
    </article>
  );
}

function CatalogSection({
  products,
  selectedCategory,
  searchTerm,
  productStatus,
  cartQuantities,
  onCategoryChange,
  onSearchChange,
  onAddToCart,
  onRetryProducts
}) {
  return (
    <section className="container py-5" id="catalogo">
      <div className="row align-items-end mb-4">
        <div className="col-12 col-lg-8">
          <p className="section-kicker mb-2">Catalogo gamer</p>
          <h2 className="display-6 fw-bold">Catalogo completo</h2>
          <p className="text-soft mb-lg-0">
            Explora videojuegos, consolas y accesorios con precios destacados e imagenes pensadas para cada producto.
          </p>
        </div>
        <div className="col-12 col-lg-4 text-lg-end">
          <span className="badge rounded-pill text-bg-info">{products.length} producto(s)</span>
        </div>
      </div>

      <form className="search-panel rounded-3 p-3 mb-4" role="search" onSubmit={(event) => event.preventDefault()}>
        <div className="row g-3 align-items-end">
          <div className="col-12 col-lg-6">
            <label htmlFor="searchInput" className="form-label">Buscar producto</label>
            <input
              id="searchInput"
              className="form-control"
              type="search"
              placeholder="Ej: consola, aventura, control"
              autoComplete="off"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
            />
          </div>
          <div className="col-12 col-sm-7 col-lg-4">
            <label htmlFor="categoryFilter" className="form-label">Categoria</label>
            <select
              id="categoryFilter"
              className="form-select"
              value={selectedCategory}
              onChange={(event) => onCategoryChange(event.target.value)}
            >
              {CATEGORY_OPTIONS.map((category) => (
                <option key={category.value} value={category.value}>{category.label}</option>
              ))}
            </select>
          </div>
          <div className="col-12 col-sm-5 col-lg-2">
            <a className="btn btn-cyan w-100" href="#carrito">Ver carrito</a>
          </div>
        </div>
      </form>

      {productStatus === "loading" && (
        <div className="alert alert-info border-0" role="status">Cargando productos desde catalogo.json...</div>
      )}

      {productStatus === "error" && (
        <div className="alert alert-danger border-0 status-message" role="status">
          <span>No pudimos cargar el catalogo. Verifica Live Server y el archivo assets/data/catalogo.json.</span>
          <button className="btn btn-sm btn-outline-light fw-bold" type="button" onClick={onRetryProducts}>Reintentar</button>
        </div>
      )}

      {productStatus === "success" && products.length === 0 && (
        <div className="alert alert-warning border-0" role="status">
          No encontramos productos con esa busqueda. Prueba con otra palabra o categoria.
        </div>
      )}

      {productStatus === "success" && products.length > 0 && (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                cartQuantity={cartQuantities.get(product.id) || 0}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function DealSection({ dealQuantity, onAddDealToCart }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <section className="container py-5" id="ofertas">
      <div className="deal-band rounded-3 p-4 p-lg-5">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-8">
            <p className="section-kicker mb-2">Oferta semanal</p>
            <h2 className="display-6 fw-bold">{WEEKLY_DEAL.name}</h2>
            <p className="text-soft mb-0">{WEEKLY_DEAL.description}</p>
            {showDetail && (
              <div className="text-soft small mt-3">
                El pack incluye despacho prioritario, garantia de 30 dias y soporte de instalacion para accesorios compatibles.
              </div>
            )}
          </div>
          <div className="col-12 col-lg-4 text-lg-end">
            <span className="badge text-bg-warning fs-6 mb-3">-25%</span>
            <div className="deal-prices mb-3">
              <span className="normal-price d-block">{formatPrice(WEEKLY_DEAL.normalPrice)}</span>
              <strong className="display-6 text-warning">{formatPrice(WEEKLY_DEAL.offerPrice)}</strong>
            </div>
            <div className="deal-actions">
              <button
                className={`btn btn-lg ${dealQuantity > 0 ? "btn-outline-warning" : "btn-cyan"}`}
                type="button"
                onClick={onAddDealToCart}
              >
                {dealQuantity > 0 ? `En el carrito (${dealQuantity})` : "Agregar al carrito"}
              </button>
              <button className="btn btn-outline-light btn-lg" type="button" onClick={() => setShowDetail((value) => !value)}>
                {showDetail ? "Ocultar detalle" : "Ver detalle"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LaunchesSection({ cartQuantities, onAddLaunchToCart }) {
  const [launches, setLaunches] = useState([]);
  const [status, setStatus] = useState("loading");

  const loadLaunches = async () => {
    try {
      setStatus("loading");
      const response = await fetch("assets/data/lanzamientos.json", { cache: "no-store" });

      if (!response.ok) {
        throw new Error("No se pudieron cargar los lanzamientos.");
      }

      const data = await response.json();
      setLaunches(data.map((item) => ({
        ...item,
        id: Number(item.id) + 1000,
        normalPrice: Math.round(Number(item.price) * 1.15),
        offerPrice: Number(item.price),
        typeLabel: item.platform || "Lanzamiento"
      })));
      setStatus("success");
    } catch (error) {
      console.error(error);
      setLaunches([]);
      setStatus("error");
    }
  };

  useEffect(() => {
    loadLaunches();
  }, []);

  return (
    <section className="container py-5" id="dinamicos">
      <div className="row align-items-end mb-4">
        <div className="col-12 col-lg-8">
          <p className="section-kicker mb-2">Novedades gamer</p>
          <h2 className="display-6 fw-bold">Ultimos lanzamientos</h2>
          <p className="text-soft mb-lg-0">Descubre productos nuevos seleccionados para mejorar tu experiencia de juego.</p>
        </div>
        <div className="col-12 col-lg-4 text-lg-end">
          <button className="btn btn-outline-light" type="button" onClick={loadLaunches}>Actualizar novedades</button>
        </div>
      </div>

      {status === "loading" && <div className="alert alert-info border-0">Cargando novedades...</div>}
      {status === "error" && (
        <div className="alert alert-danger border-0 status-message">
          <span>No se pudieron cargar las novedades. Abre el sitio con Live Server y verifica que assets/data/lanzamientos.json exista.</span>
          <button className="btn btn-sm btn-outline-light fw-bold" type="button" onClick={loadLaunches}>Reintentar</button>
        </div>
      )}
      {status === "success" && <div className="alert alert-success border-0">Novedades actualizadas.</div>}

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
        {launches.map((product) => (
          <div className="col" key={`launch-${product.id}`}>
            <ProductCard
              product={product}
              onAddToCart={() => onAddLaunchToCart(product)}
              cartQuantity={cartQuantities.get(product.id) || 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoriesSection({ selectedCategory, onCategoryChange }) {
  const handleCategoryClick = (event, value) => {
    event.preventDefault();
    onCategoryChange(value);
    document.querySelector("#catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="container py-5" id="categorias">
      <div className="mb-4">
        <p className="section-kicker mb-2">Explora por tipo</p>
        <h2 className="display-6 fw-bold">Categorias</h2>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">
        {CATEGORY_OPTIONS.map((category) => (
          <div className="col" key={category.value}>
            <a
              className={`category-link rounded-3 d-flex align-items-center p-3 fw-bold text-decoration-none ${selectedCategory === category.value ? "active" : ""}`}
              href="#catalogo"
              aria-pressed={selectedCategory === category.value}
              onClick={(event) => handleCategoryClick(event, category.value)}
            >
              {category.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function CartSection({ cart, onIncrease, onDecrease, onRemove, onClear }) {
  const totalUnits = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (Number(item.product.normalPrice || item.product.offerPrice) * item.quantity), 0);
  const total = cart.reduce((sum, item) => sum + item.product.offerPrice * item.quantity, 0);
  const discount = Math.max(0, subtotal - total);
  const totalUnitsText = totalUnits === 1 ? "1 producto" : `${totalUnits} productos`;

  return (
    <section className="cart-section py-5" id="carrito">
      <div className="container">
        <div className="cart-panel rounded-3 p-4 p-lg-5">
          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-5">
              <p className="cart-kicker mb-2">Carrito de compras</p>
              <h2 className="display-6 fw-bold">Tu seleccion final</h2>
              <p className="text-white-50 mb-0">
                Revisa tus productos, ajusta cantidades y confirma el total antes de finalizar tu compra.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <div className="cart-summary rounded-3 p-3 h-100">
                <h3 className="h6 fw-bold text-white">Productos en el carrito</h3>
                {cart.length === 0 ? (
                  <p className="cart-empty mb-0">El carrito esta vacio.</p>
                ) : (
                  <ul className="cart-list list-group list-group-flush rounded-2">
                    {cart.map((item) => (
                      <li className="list-group-item bg-transparent px-0 cart-row" key={item.product.id}>
                        <div className="cart-item-info">
                          <span className="cart-item-name">{item.product.name}</span>
                          <span className="cart-item-meta">{item.quantity} unidad(es) x {formatPrice(item.product.offerPrice)}</span>
                          <strong className="cart-item-subtotal">Subtotal: {formatPrice(item.product.offerPrice * item.quantity)}</strong>
                        </div>
                        <div className="cart-controls">
                          <button className="btn btn-sm btn-outline-warning" type="button" onClick={() => onDecrease(item.product.id)} aria-label={`Disminuir ${item.product.name}`}>-</button>
                          <span className="cart-quantity">{item.quantity}</span>
                          <button className="btn btn-sm btn-warning fw-bold" type="button" onClick={() => onIncrease(item.product.id)} aria-label={`Aumentar ${item.product.name}`}>+</button>
                          <button className="btn btn-sm btn-outline-light" type="button" onClick={() => onRemove(item.product.id)}>Quitar</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="cart-summary rounded-3 p-3 h-100 d-flex flex-column justify-content-between text-lg-end">
                <div>
                  <div className="checkout-totals">
                    <div className="summary-line">
                      <span>Productos</span>
                      <strong>{totalUnitsText}</strong>
                    </div>
                    <div className="summary-line">
                      <span>Subtotal</span>
                      <strong>{formatPrice(subtotal)}</strong>
                    </div>
                    <div className="summary-line discount-line">
                      <span>Descuento agregado</span>
                      <strong>-{formatPrice(discount)}</strong>
                    </div>
                    <div className="summary-line summary-total">
                      <span>Total</span>
                      <strong>{formatPrice(total)}</strong>
                    </div>
                  </div>
                </div>
                <button className="btn btn-warning fw-bold w-100 mt-3" type="button" onClick={onClear} disabled={cart.length === 0}>Vaciar carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PixelVaultReactApp() {
  const [selectedCategory, setSelectedCategory] = useState("todas");
  const [searchTerm, setSearchTerm] = useState("");
  const [catalogProducts, setCatalogProducts] = useState([]);
  const [productStatus, setProductStatus] = useState("loading");
  const [cart, setCart] = useState(getStoredCart);

  const cartProducts = useMemo(() => cart.map((item) => {
    const product = catalogProducts.find((candidate) => candidate.id === item.productId)
      || (item.productId === WEEKLY_DEAL.id ? WEEKLY_DEAL : item.product);
    return { ...item, product };
  }).filter((item) => item.product), [cart, catalogProducts]);

  const totalUnits = cartProducts.reduce((sum, item) => sum + item.quantity, 0);

  const cartQuantities = useMemo(() => {
    return cartProducts.reduce((map, item) => {
      map.set(item.product.id, item.quantity);
      return map;
    }, new Map());
  }, [cartProducts]);

  // Carga dinamica del catalogo desde un archivo JSON local usando useEffect.
  const loadCatalogProducts = async () => {
    try {
      setProductStatus("loading");
      const response = await fetch("assets/data/catalogo.json", { cache: "no-store" });

      if (!response.ok) {
        throw new Error("No se pudo cargar el catalogo.");
      }

      const data = await response.json();
      setCatalogProducts(data.map(enrichCatalogProduct));
      setProductStatus("success");
    } catch (error) {
      console.error(error);
      setCatalogProducts([]);
      setProductStatus("error");
    }
  };

  useEffect(() => {
    loadCatalogProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("pixelvaultReactCart", JSON.stringify(cart.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
      product: item.product
    }))));
  }, [cart]);

  useEffect(() => {
    const badge = document.querySelector("#cartCount");
    if (badge) badge.textContent = totalUnits === 1 ? "1 producto" : `${totalUnits} productos`;
  }, [totalUnits]);

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return catalogProducts.filter((product) => {
      const matchesCategory = selectedCategory === "todas" || product.category === selectedCategory;
      const searchableText = `${product.name} ${product.platform} ${product.description} ${product.typeLabel}`.toLowerCase();
      return matchesCategory && searchableText.includes(term);
    });
  }, [catalogProducts, selectedCategory, searchTerm]);

  const addToCart = (productId) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.productId === productId);
      if (existingItem) {
        return currentCart.map((item) => (
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
        ));
      }
      return [...currentCart, { productId, quantity: 1 }];
    });
  };

  const addDealToCart = () => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.productId === WEEKLY_DEAL.id);
      if (existingItem) {
        return currentCart.map((item) => (
          item.productId === WEEKLY_DEAL.id ? { ...item, quantity: item.quantity + 1 } : item
        ));
      }
      return [...currentCart, { productId: WEEKLY_DEAL.id, quantity: 1 }];
    });
  };

  const addLaunchToCart = (launchProduct) => {
    const product = {
      ...launchProduct,
      id: Number(launchProduct.id),
      offerPrice: Number(launchProduct.offerPrice),
      normalPrice: Number(launchProduct.normalPrice)
    };

    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.productId === product.id);
      if (existingItem) {
        return currentCart.map((item) => (
          item.productId === product.id ? { ...item, quantity: item.quantity + 1, product } : item
        ));
      }
      return [...currentCart, { productId: product.id, quantity: 1, product }];
    });
  };

  const increaseQuantity = (productId) => {
    setCart((currentCart) => currentCart.map((item) => (
      item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
    )));
  };

  const decreaseQuantity = (productId) => {
    setCart((currentCart) => currentCart
      .map((item) => (
        item.productId === productId ? { ...item, quantity: item.quantity - 1 } : item
      ))
      .filter((item) => item.quantity > 0));
  };

  const removeProduct = (productId) => {
    setCart((currentCart) => currentCart.filter((item) => item.productId !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <CatalogSection
        products={filteredProducts}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        productStatus={productStatus}
        cartQuantities={cartQuantities}
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchTerm}
        onAddToCart={addToCart}
        onRetryProducts={loadCatalogProducts}
      />
      <DealSection dealQuantity={cartQuantities.get(WEEKLY_DEAL.id) || 0} onAddDealToCart={addDealToCart} />
      <LaunchesSection cartQuantities={cartQuantities} onAddLaunchToCart={addLaunchToCart} />
      <CategoriesSection selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <CartSection
        cart={cartProducts}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeProduct}
        onClear={clearCart}
      />
    </>
  );
}

ReactDOM.createRoot(document.querySelector("#reactEcommerceRoot")).render(<PixelVaultReactApp />);
