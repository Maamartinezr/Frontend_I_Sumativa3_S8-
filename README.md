# PixelVault Semana 7

Proyecto de eCommerce de videojuegos desarrollado para la asignatura Frontend I.

El sitio presenta una tienda gamer llamada PixelVault, con catálogo de productos, oferta semanal, últimos lanzamientos, categorías, carrito de compras e interactividad implementada con React.

## Sitio publicado

El proyecto está desplegado con GitHub Pages:

https://maamartinezr.github.io/Frontend_I_Sumativa3_S8-/

Reemplazar el enlace anterior por la URL real generada por GitHub Pages.

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

## Estructura del proyecto

```text
index.html
assets/
  css/
    styles.css
  js/
    app.js
    react-ecommerce.jsx
  data/
    catalogo.json
    lanzamientos.json
  img/
    imagenes del sitio y productos
