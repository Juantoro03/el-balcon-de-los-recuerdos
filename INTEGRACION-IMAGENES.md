# Integración de imágenes — El Balcón de los Recuerdos

Rutas web relativas a public/. Los archivos originales se conservan sin renombrar, convertir ni duplicar.

| Sección | Imagen | Ruta exacta | Archivo o componente | Estado |
|---|---|---|---|---|
| `Inicio` | `cafe-fachada-portada.webp` | `/images/hero/cafe-fachada-portada.webp` | `src/data/hero.js; Inicio.jsx` | `Integrada` |
| `Slider 1` | `cafe-promocion.png` | `/images/promociones/cafe-promocion.png` | `src/data/promociones.js; PromotionImage.jsx` | `Integrada` |
| `Slider 2` | `Cartel gastronómico festivo de Salento.png` | `/images/promociones/Cartel gastronómico festivo de Salento.png` | `src/data/promociones.js; PromotionImage.jsx` | `Integrada` |
| `Slider 3` | `Desayuno colombiano_ omelette y arepa.png` | `/images/promociones/Desayuno colombiano_ omelette y arepa.png` | `src/data/promociones.js; PromotionImage.jsx` | `Integrada` |
| `Modal exclusivo` | `Granizado de café cremoso y refrescante.png` | `/images/modal/Granizado de café cremoso y refrescante.png` | `src/data/promociones.js; PromotionalModal.jsx` | `Integrada` |
| `Historia` | `fundador-retrato-sin-marco.webp` | `/images/historia/fundador-retrato-sin-marco.webp` | `src/data/historia.js; ArchiveImage.jsx` | `Integrada` |
| `Greca principal` | `greca-1905-principal.webp` | `/images/greca/greca-1905-principal.webp` | `src/data/greca.js; ArchiveImage.jsx` | `Integrada` |
| `Greca detalle` | `greca-vista-frontal-editorial.webp` | `/images/greca/greca-vista-frontal-editorial.webp` | `src/data/greca.js; Greca.jsx; story.css` | `Integrada` |
| `Greca detalle` | `greca-detalle-manija.webp` | `/images/greca/greca-detalle-manija.webp` | `src/data/greca.js; Greca.jsx; story.css` | `Integrada` |
| `Familia` | `equipo-cafe-mostrador.webp` | `/images/familia/equipo-cafe-mostrador.webp` | `src/data/familia.js; ArchiveImage.jsx` | `Integrada` |
| `Galería / greca` | `greca-1905-principal.webp` | `/images/greca/greca-1905-principal.webp` | `src/data/galeria.js` | `Integrada` |
| `Galería / rincon` | `cafe-fachada-portada.webp` | `/images/hero/cafe-fachada-portada.webp` | `src/data/galeria.js` | `Integrada` |
| `Galería / sabores` | `cafe-bunuelos-ambiente.webp` | `/images/galeria/cafe-bunuelos-ambiente.webp` | `src/data/galeria.js` | `Integrada` |
| `Galería / momentos` | `equipo-cafe-mostrador.webp` | `/images/familia/equipo-cafe-mostrador.webp` | `src/data/galeria.js` | `Integrada` |
| `Galería / rincon` | `cafe-interior-panoramico.webp` | `/images/galeria/cafe-interior-panoramico.webp` | `src/data/galeria.js` | `Integrada` |
| `Galería / greca` | `greca-detalle-manija.webp` | `/images/greca/greca-detalle-manija.webp` | `src/data/galeria.js` | `Integrada` |
| `Galería / momentos` | `preparacion-cafe-barista-rojo.webp` | `/images/familia/preparacion-cafe-barista-rojo.webp` | `src/data/galeria.js` | `Integrada` |
| `Galería / sabores` | `desayuno-tradicional.webp` | `/images/productos/desayuno-tradicional.webp` | `src/data/galeria.js` | `Integrada` |
| `Galería / rincon` | `salento-calle-tradicional.webp` | `/images/galeria/salento-calle-tradicional.webp` | `src/data/galeria.js` | `Integrada` |
| `Galería / momentos` | `preparacion-cafe-mujer-realista.webp` | `/images/familia/preparacion-cafe-mujer-realista.webp` | `src/data/galeria.js` | `Integrada` |
| `Galería / greca` | `greca-vintage-editorial.webp` | `/images/greca/greca-vintage-editorial.webp` | `src/data/galeria.js` | `Integrada` |
| `Galería / greca` | `greca-vista-lateral.webp` | `/images/greca/greca-vista-lateral.webp` | `src/data/galeria.js` | `Integrada` |
| `Galería / rincon` | `cafe-salon-escaleras.webp` | `/images/galeria/cafe-salon-escaleras.webp` | `src/data/galeria.js` | `Integrada` |
| `Visítanos` | `cafe-fachada-portada.webp` | `/images/hero/cafe-fachada-portada.webp` | `Visitanos.jsx (sin cambios)` | `Ya integrada` |
| `Libro: portada` | `portada-libro.svg` | `/images/resenas/portada-libro.svg` | `src/data/resenas.js (sin cambios)` | `Conservada` |
| `Libro: contraportada` | `contraportada-libro.svg` | `/images/resenas/contraportada-libro.svg` | `src/data/resenas.js (sin cambios)` | `Conservada` |

## Archivos no encontrados y correcciones

- Todos los archivos solicitados fueron localizados con su extensión real.
- Corregida la ruta obsoleta /images/historia/cafe-interior-panoramico.webp por /images/galeria/cafe-interior-panoramico.webp.
- Hero: reemplazadas ambas rutas provisionales de inicio por la fachada existente; retirado el crédito de Unsplash que ya no corresponde.
- Slider: demostracion.svg sustituido por tres PNG, en el orden solicitado. Modal independiente con el PNG del granizado.
- Historia, Greca y fotografía principal de Familia: sustituidos los src vacíos por fotografías existentes.
- resenas/ solo contiene las cubiertas SVG: faltan fotografías reales de páginas. Se conservan los tres placeholders sin inventar mensajes.

## Archivos sin uso como contenido principal

- `/images/familia/album-provisional.svg`
- `/images/greca/greca-provisional.svg`
- `/images/historia/archivo-provisional.svg`
- `/images/inicio/cafe-provisional-mobile.webp`
- `/images/inicio/cafe-provisional.webp`
- `/images/promociones/demostracion.svg`

Los SVG provisionales de Historia, Greca y Familia quedan únicamente como respaldo ante errores de carga. No aparecen cuando la fotografía carga correctamente. Las dos imágenes antiguas de inicio y el flyer de demostración quedan sin referencias en la interfaz. Todas las fotografías y flyers definitivos disponibles tienen uso.

## Verificaciones

- npm run build: correcto.
- Todas las rutas de la tabla existen; imágenes renderizadas y decodificadas correctamente en el navegador.
- Responsive: 320, 390, 768 y 1440 px, sin desbordamiento horizontal ni errores de consola.
- Hero: fachada con carga eager y prioridad high.
- Carrusel: exactamente tres flyers, completos con contain; flechas, indicadores, teclado y gesto táctil comprobados.
- Modal: solo granizado, cierre con X y Escape, una vez por sesión, tamaño móvil comprobado.
- Historia: retrato completo a proporción original; Greca: principal y dos detalles.
- Familia: fotografía grupal sin asignar identidades; integrantes sigue vacío.
- Galería: 13 imágenes únicas; filtros, visor, foco, flechas, Escape, swipe y movimiento reducido comprobados.
- Menú sin fotografías ni precios; Libro de Recuerdos pasó sus pruebas de regresión.

No se añadieron dependencias, no se modificaron textos históricos ni se avanzó de fase.
