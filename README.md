# PixelVault - Semana 8 Sumativa React

Proyecto eCommerce evolutivo de Frontend I. Esta version conserva el sitio trabajado en semanas anteriores e integra React dentro del aplicativo existente.

## Mejoras principales

- Catalogo cargado dinamicamente desde `assets/data/catalogo.json` usando `useEffect`.
- Estado `catalogProducts` gestionado con `useState`.
- Productos con nombre, descripcion, imagen, precio normal y precio oferta.
- Carrito de compras gestionado con `useState`.
- Agregar, quitar, aumentar y disminuir cantidades.
- Contador total de productos en el menu.
- Total estimado calculado desde React.
- Renderizado condicional para carga de productos, errores, busquedas sin resultados, carrito vacio y boton `En el carrito`.
- Se conservan carrusel, ofertas, lanzamientos, categorias y formulario de contacto.

## Estructura

```text
index.html
assets/
  css/
    styles.css
  js/
    app.js
    react-ecommerce.jsx
  img/
    imagenes del sitio y productos
  data/
    catalogo.json
    lanzamientos.json
```

## Tecnologías utilizadas

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- React mediante CDN
- Fetch API
- JSON local
- GitHub Pages

## Funcionalidades principales

- Carrusel principal responsivo.
- Catálogo de productos cargado dinámicamente desde un archivo JSON.
- Tarjetas de productos con imagen, nombre, descripción, precio normal y precio oferta.
- Filtro por categorías.
- Buscador de productos.
- Oferta semanal con botón interactivo.
- Sección de últimos lanzamientos cargada dinámicamente.
- Carrito de compras funcional.
- Contador total de productos en el carrito.
- Botones para agregar, aumentar, disminuir y eliminar productos.
- Resumen del carrito con productos, subtotal, descuento agregado y total.
- Mensajes condicionales cuando el carrito está vacío o no hay resultados de búsqueda.
- Persistencia básica del carrito usando localStorage.

## Ejecucion

Abrir `index.html` con Live Server desde Visual Studio Code.
