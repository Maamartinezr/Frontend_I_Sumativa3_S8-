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

## Ejecucion

Abrir `index.html` con Live Server desde Visual Studio Code.
