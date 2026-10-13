# El Balcón de los Recuerdos — Fase 7 completada

Página informativa local en React, Vite y JavaScript JSX. Portada y navegación completadas en la etapa 2; Historia y Greca desarrolladas en la etapa 3; Familia desarrollada en la etapa 4; carta minimalista con 124 productos suministrados en la revisión de la etapa 5. Faltan fotos propias y perfiles familiares. Libro de recuerdos, Galería y Visítanos siguen siendo provisionales. Sin backend, autenticación, base de datos ni panel administrativo.

## Ejecutar

Requiere Node.js 22.12+ (verificado con Node 24) y npm.

```sh
npm ci
npm run dev
```

Abrir la URL local que imprime Vite. Para producción:

```sh
npm run build
npm run preview
```

`dist/` contiene la compilación estática. Solo existe una página; la navegación usa anclas, sin router. No se ha publicado el sitio.

## Organización

```text
src/
  components/
    layout/       Header y Footer
    ui/           SectionPlaceholder, Reveal, StoryReveal, ArchiveImage, FamilyMemberCard y componentes Menu*
    sections/     Inicio, Historia, Greca, Familia, Menu, Recuerdos, Galeria, Visitanos
  data/           site, hero, historia, greca, familia, history/family (compatibilidad), menu, reviews, gallery
  hooks/          useReveal y useSectionNavigation
  styles/         global.css, tokens.css, hero.css, story.css, family.css y menu.css
  App.jsx         Composición de la única página
  main.jsx        Entrada React
public/images/
  inicio/ historia/ greca/ familia/ productos/ galeria/ resenas/
```

`src/data/site.js` centraliza el nombre provisional, la ubicación y la navegación. Al cambiar el nombre se actualizan encabezado, pie y título del documento. El título HTML inicial es neutral. `src/data/hero.js` centraliza los textos, botones, imagen y encuadre de la portada.

IDs: `inicio`, `historia`, `greca`, `familia`, `menu`, `recuerdos`, `galeria`, `visitanos`.

Tailwind se integra mediante `@tailwindcss/vite`. La paleta y las fuentes se definen con `@theme` en `tokens.css`; ese archivo también centraliza espaciado, bordes y tiempos CSS. Las fuentes iniciales son locales (Georgia y Segoe UI/Arial), sin descargas externas. El cobre se reserva para acentos; los textos principales usan café oscuro y verde sobre crema.

Motion se importa desde `motion/react`. `Reveal` y `useReveal` preparan entradas discretas al viewport, una sola vez, sin ocultar texto. `MotionConfig` sigue las preferencias del usuario y el hook anula el desplazamiento y la duración con movimiento reducido. El CSS también desactiva el desplazamiento suave y las transiciones con esa preferencia. La estructura usa tamaños fluidos, navegación adaptable y breakpoints para tablet/escritorio.

## Contenido y pendientes

Fuente: [Revista Diners, 2 de enero de 2020](https://revistadiners.com.co/estilo-de-vida/el-balcon-de-los-recuerdos-el-cafe-de-salento-que-conserva-una-greca-de-115-anos/). El artículo identifica el establecimiento como **El Balcón de los Recuerdos**, no confirma su nombre comercial actual. **Café de La Esquina** continúa como nombre provisional.

Los datos históricos quedan atribuidos y fechados en `historia.js` y `greca.js`. `history.js` conserva exportaciones de compatibilidad. El funcionamiento actual de la greca necesita confirmación directa; la sección distingue el registro de 2020 del presente. No se extrapolan las edades, precios ni roles familiares del artículo a la actualidad.

- Confirmar nombre comercial, cronología y texto final de cada sección.
- Carta incorporada con los nombres y descripciones suministrados, sin precios ni fotografías por decisión de diseño.
- Confirmar perfiles familiares y recibir retratos autorizados.
- Recibir reseñas auténticas con fuentes y autorización; no hay reseñas ficticias ni formulario de envío.
- Recibir imágenes autorizadas, créditos y textos alternativos para las seis carpetas y la imagen principal.
- Confirmar dirección, horarios, teléfono y enlace al mapa.

Las colecciones faltantes están vacías y los campos desconocidos usan `null`. Cada archivo identifica pendientes y, cuando corresponde, el esquema de futuros registros. Historia, Greca y Familia incorporan marcadores SVG locales. El menú solo utiliza nombres y descripciones; su carpeta de imágenes permanece vacía.

El documento incluye `noindex, nofollow` mientras el contenido sea provisional. Revisarlo antes de una publicación definitiva.

## Alcance de validación

Verificaciones realizadas en la etapa 1:

- `npm run build`: compilación de producción correcta, sin errores.
- `npm run dev -- --host 127.0.0.1 --port 5173 --strictPort`: arranque correcto; petición HTTP con respuesta 200.
- Renderizado de React mediante Vite y React DOM Server: ocho secciones, ocho destinos de navegación presentes y un único encabezado h1.
- Instalación de dependencias: npm reportó cero vulnerabilidades; versiones reproducibles en `package-lock.json`.

En la etapa 1 no hubo navegador de pruebas disponible. Las comprobaciones de navegador se incorporaron en la etapa 2.

## Etapa 2: portada y navegación

- Encabezado fijo, transparente al inicio y crema al desplazarse; indicador de sección activa.
- Menú de dos columnas por debajo de 1280 px, con `aria-expanded`, cierre al navegar, Escape, clic exterior y salida del foco. Se usa navegación convencional con Tab, sin roles de menú de aplicación ni bloqueo del foco.
- Scroll compensado por la altura del encabezado; cada sección conserva su ID.
- Hero con un solo h1, tipografía fluida, dos CTA, degradado y animaciones de entrada. El indicador se anima tres ciclos y se detiene. Con movimiento reducido, las entradas y el indicador son estáticos.
- Sin nuevas dependencias del proyecto. Playwright se utilizó solo desde una carpeta temporal para QA con Edge headless.

### Sustituir la fotografía

La foto de referencia muestra manos con granos de café, no el establecimiento ni su familia. Autor: [Nathan Dumlao / Unsplash](https://unsplash.com/photos/person-holding-bunch-of-coffee-beans-QLkjP_W4d7c), bajo [licencia Unsplash](https://unsplash.com/license). El crédito y la aclaración aparecen en la portada.

Copias locales WebP en `public/images/inicio/`: 1920 px (355 KB) y 900 px (57 KB). La portada usa `<picture>`, carga prioritaria y dimensiones explícitas. No solicita imágenes o fuentes a servicios externos durante la visita. Para reemplazarla, cambiar `src`, `mobileSrc`, dimensiones, posiciones, crédito y aviso en `src/data/hero.js`.

### Verificación de etapa 2

- `npm run build`: compilación correcta.
- Edge headless / Playwright: 320×568, 390×844, 768×1024, 1280×800 y 1440×900; imagen cargada, un h1 y sin desbordamiento horizontal.
- Las ocho anclas se probaron tanto en móvil como en escritorio, incluyendo el indicador activo y la compensación del encabezado.
- Menú: apertura, cierre al seleccionar, Escape con devolución del foco, navegación con Tab y Enter; funcionamiento en horizontal a 667×375.
- `prefers-reduced-motion`: scroll inmediato y título visible sin espera.
- Sin errores de consola ni excepciones de JavaScript durante las pruebas; capturas revisadas en 390 y 1440 px.

El favicon tipográfico es provisional.

## Etapa 3: Historia y Greca

Historia utiliza una composición editorial con marco de álbum, bloque dedicado al legado de Orlando Araque Arias y línea de tiempo configurable. Greca utiliza fondo verde profundo, año destacado, detalles en tonos cobre y composición asimétrica. Los marcadores de imagen son ornamentos, no recreaciones del establecimiento ni de la máquina.

Archivos principales:

- `src/data/historia.js`: narrativa, fuente, cronología y configuración de imagen.
- `src/data/greca.js`: relato de la máquina, fichas, imagen y colección vacía para una futura galería de detalles.
- `src/components/sections/Historia.jsx` y `Greca.jsx`: presentación de las secciones.
- `src/components/ui/StoryReveal.jsx`: aparición al viewport, una vez por carga; sin movimiento ni espera con `prefers-reduced-motion`.
- `src/components/ui/ArchiveImage.jsx`: fotografía o marcador, incluyendo manejo de errores de carga.
- `src/styles/story.css`: estilos responsive limitados a estas secciones.
- `public/images/historia/archivo-provisional.svg` y `public/images/greca/greca-provisional.svg`: marcadores locales livianos.

`App.jsx` permite que ambas secciones ocupen el ancho completo, conservando el contenedor de las secciones posteriores. No se rediseñaron la portada ni la navegación, y no se añadieron dependencias.

### Fotografías y contenido pendientes

Para cada imagen, colocar un archivo autorizado en su carpeta y configurar `image.src`, `image.alt`, `image.credit` e `image.position` en el archivo de datos correspondiente. Si `src` es `null`, aparece el marcador. Si la fotografía falla, se usa el SVG local; si también falla el SVG, permanece el mensaje y el marco CSS. Las fotografías se cargan de forma diferida y con espacio reservado para evitar saltos.

- Fotografía propia del establecimiento.
- Fotografía auténtica de la greca y fotografías de sus detalles.
- Permisos, créditos y textos alternativos de cada fotografía.
- Confirmación por la familia de la cronología, los datos técnicos, el estado actual de funcionamiento y el nombre comercial.

La compra se presenta como fecha citada por un testimonio; no se calculan antigüedades de propiedad a partir de cifras relativas de la crónica. El intervalo de relevo familiar se conserva como aproximado. No hay citas atribuidas inventadas ni imágenes copiadas del artículo.

### Verificación de etapa 3

- `npm run build`: compilación de producción correcta, sin errores.
- Edge headless / Playwright: 320×568, 390×844, 768×1024 y 1440×900; ambas secciones presentes, un solo h1, ocho secciones, imágenes cargadas y sin scroll horizontal.
- Revelados de fotos, textos, hitos y ornamentos visibles al entrar al viewport; permanecen visibles al volver a la sección.
- Movimiento reducido: todos los bloques visibles sin transformaciones ni esperas.
- Las ocho anclas y el indicador activo siguen funcionando en móvil y escritorio; menú probado también a 667×375.
- Fallos de carga provocados en una página de prueba: una foto fallida muestra el SVG; si también falla el SVG, permanece el aviso con el marco CSS.
- Sin errores de consola ni excepciones en la carga normal. Los errores intencionales de la prueba de fallbacks se aislaron de esa comprobación.
- Capturas de las composiciones revisadas en móvil, tablet y escritorio.

## Etapa 4: Nuestra familia

Sección editorial con título e introducción configurables, fotografía principal horizontal, relato sobre el legado, álbum de integrantes y cita opcional. La composición es vertical en móvil y asimétrica en escritorio. Se reutilizan `ArchiveImage` y `StoryReveal` sin modificar sus implementaciones ni los contenidos históricos anteriores.

Archivos principales:

- `src/data/familia.js`: introducción, continuidad, fotografía, estado vacío, integrantes, cita y pendientes.
- `src/data/family.js`: compatibilidad con la estructura inicial, sin contenido duplicado.
- `src/components/sections/Familia.jsx`: sección y orden de los integrantes.
- `src/components/ui/FamilyMemberCard.jsx`: retrato, descripción y campos condicionales; hover de Motion solo con puntero preciso y sin movimiento reducido.
- `src/styles/family.css`: estilos limitados a Familia.
- `public/images/familia/album-provisional.svg`: marcador ornamental local que no representa a personas reales.
- `App.jsx` y `global.css`: integración del contenedor y del nuevo archivo de estilos.

### Cargar contenido familiar

`familia.integrantes` está vacío deliberadamente. El estado vacío explica que faltan perfiles autorizados; no se crean familiares ficticios. Cada registro usa los campos `id`, `nombre`, `rol`, `descripcion`, `imagen`, `alt`, `destacado` y `orden`. El archivo incluye el esquema completo. `orden` define el orden de lectura y `destacado` permite una tarjeta más amplia en escritorio, sin cambiar su orden semántico.

Campos adicionales:

- `confirmado`: si no es verdadero, el perfil lleva una etiqueta provisional.
- `rolConfirmado`: solo si es verdadero se muestra el rol introducido; en otro caso aparece un vínculo pendiente.
- `aniosVinculacion`: objeto opcional con `texto` y `confirmados`; se muestra exclusivamente con confirmación explícita.
- `credito` y `posicion`: crédito y encuadre del retrato.

Para la fotografía principal, editar `familia.fotografia.src`, `alt`, `credit` y `position`. Los archivos deben ser locales y autorizados. Las imágenes ausentes o fallidas usan el marcador; no se inventan retratos.

La cita está deshabilitada por defecto. Solo se renderiza si `habilitada`, `autentica` y `autorizada` son verdaderos y existen `texto`, `autor` y `fuente`. Estos indicadores registran la confirmación editorial; no verifican automáticamente la autenticidad del testimonio. No hay cita familiar de ejemplo en los datos.

### Verificación de etapa 4

- `npm run build`: compilación correcta, sin dependencias nuevas.
- Edge / Playwright a 320×568, 390×844, 768×1024 y 1440×900: sección, marcadores, un único h1, título h2, estado vacío y sin desbordamiento horizontal.
- Tarjetas probadas con datos sintéticos inyectados exclusivamente en respuestas del navegador de QA: orden, destacado, campos vacíos, rol pendiente y años confirmados/no confirmados.
- Cita oculta sin autorización y visible con todos los indicadores y campos requeridos.
- Revelados al viewport, hover de escritorio y ausencia de movimiento con preferencia reducida comprobados.
- Ocho anclas e indicador activo verificados en móvil y escritorio; menú comprobado también en horizontal.
- Sin errores de consola ni excepciones; capturas revisadas en móvil y escritorio, incluidas tarjetas a tamaño tablet.

Pendientes: fotografía familiar, retratos, nombres completos, vínculos actuales, biografías, créditos y permisos; años documentados y cita autorizada únicamente si se desean incluir. El contexto de 2020 no se usa para identificar propietarios actuales.

## Etapa 5: carta minimalista (revisión)

La sección muestra los 124 productos de las nueve categorías suministradas, con nombres y descripciones literales. Solo presenta texto y separadores: no hay fotografías, tarjetas, precios ni funciones de compra.

Archivos del menú:
- `src/data/menu.js`: arreglo de categorías con `nombre` y `productos`; cada producto contiene únicamente `nombre` y `descripcion`. El orden de los arreglos determina la presentación. `menuPresentacion` contiene los tres textos del encabezado.
- `src/components/sections/Menu.jsx`: composición de la carta y selección de categoría.
- `src/components/ui/MenuCategoryTabs.jsx`: carrusel nativo, selección, centrado limitado a sus extremos y navegación por teclado.
- `src/components/ui/MenuProductList.jsx`: lista de nombres y descripciones, con transición de opacidad de 160 ms.
- `src/styles/menu.css`: fondo crema, tipografía editorial, separadores, una columna móvil y dos desde 768 px.

Se retiraron `MenuProductCard.jsx`, `MenuProductGrid.jsx` y el marcador de fotografía de producto, ya innecesarios. No se modificaron otras secciones ni se añadieron dependencias.

En móvil, el selector admite gestos táctiles y scroll-snap horizontal, sin barra visible. Solo se centra al seleccionar una categoría; no tiene reproducción automática. En escritorio, las categorías se distribuyen en filas centradas. Flechas, Inicio y Fin cambian la selección; Tab accede al panel. El movimiento reducido desactiva el desplazamiento suave y la transición de opacidad.

Verificaciones realizadas:
- `npm run build`: compilación correcta.
- Comparación literal de los 124 nombres y descripciones contra el archivo suministrado y comprobación del esquema simple.
- Revisión de las nueve categorías completas a 320, 390, 768 y 1440 px; sin desbordamiento horizontal.
- Arrastre táctil comprobado mediante eventos táctiles del navegador; scroll-snap, centrado, ausencia de movimiento automático y movimiento reducido verificados.
- Sin imágenes, fotografías, precios ni tarjetas en el menú renderizado.
- Navegación por teclado, ocho anclas y menú de navegación previo comprobados; sin errores de consola.
- Capturas de móvil y escritorio revisadas.

La etapa 6 no se ha iniciado.

## Etapa 5.1: menú compacto, promociones y bienvenida

Esta revisión actualiza el nombre visible a **El Balcón de los Recuerdos**, según la indicación del proyecto, y sustituye la distribución anterior del menú por dos columnas en todas las pantallas. Los 124 productos y sus descripciones permanecen intactos. Nombres: 14–16 px; descripciones: 12–13 px. Los botones de categorías conservan su tamaño táctil.

Se incorpora una sección entre Inicio e Historia con el título «Novedades de nuestro café». Los flyers se muestran completos con `object-fit: contain`, sin deformaciones ni texto superpuesto. El slider utiliza desplazamiento nativo con scroll-snap, controles, indicadores, teclado y gestos táctiles; no tiene autoplay. Con un solo flyer se ocultan controles e indicadores; con un arreglo vacío desaparecen la sección y el modal.

### Archivos

- `src/data/promociones.js`: arreglo local de flyers.
- `src/components/sections/PromotionsSection.jsx`: encabezado y sección.
- `src/components/ui/PromotionsCarousel.jsx`: slider y controles.
- `src/components/ui/PromotionalModal.jsx`: bienvenida, sesión, temporizador y accesibilidad.
- `src/components/ui/PromotionImage.jsx`: imagen completa y estado de error de carga.
- `src/styles/promotions.css`: sección, slider y modal.
- `public/images/promociones/demostracion.svg`: flyer local identificado explícitamente como demostración, sin ofertas inventadas.
- `App.jsx` y `global.css`: integración. `menu.css`: tamaño y columnas. `site.js`, encabezado de `menu.js`, nota de `historia.js` e `index.html`: nombre actualizado. `hero.css`: ajuste mínimo del nombre más largo en el encabezado; el Hero conserva su diseño.

### Incorporar flyers

Guardar archivos en **`public/images/promociones/`** y utilizar rutas como `/images/promociones/promo-01.webp`. Se recomienda WebP optimizado; por ejemplo, 1200×1500 px para un original vertical 4:5, conservando siempre su proporción. JPG o PNG también funcionan. El marco admite flyers verticales u horizontales sin recortarlos. Comprobar la legibilidad del texto en móvil y escribir un `alt` que comunique el contenido del flyer.

```js
export const promociones = [
  {
    imagen: '/images/promociones/promo-01.webp',
    alt: 'Descripción completa del flyer autorizado',
    mostrarEnModal: true,
  },
]
```

El **primer elemento con `mostrarEnModal: true`** aparece en la bienvenida. Cambiar el orden o las banderas para elegir otro; poner todas en `false` desactiva el modal conservando el slider. `promociones = []` oculta ambos. Eliminar un elemento lo retira del slider. El archivo entregado activa el flyer de demostración para poder revisar el comportamiento; sustituirlo cuando exista material real.

### Sesión y accesibilidad

El modal aparece aproximadamente un segundo después del evento de carga. Usa un `<dialog>` modal, foco inicial en X, retención de foco, cierre con Escape, X, fondo o «Continuar explorando» y restauración del foco previo. Bloquea el scroll mientras está abierto y limpia el bloqueo, el temporizador y los listeners al desmontarse. No se abre si ya hay otro diálogo modal.

`sessionStorage` conserva la marca `balcon:welcome-promotion:seen`, por lo que recargar la misma sesión de pestaña no lo vuelve a abrir. Si el almacenamiento está bloqueado, una marca en memoria evita repeticiones durante la carga actual; no se puede garantizar persistencia tras recargar sin almacenamiento. Para volver a probarlo, limpiar esa clave en las herramientas del navegador y recargar. Movimiento reducido elimina transiciones y desplazamiento suave.

### Verificaciones

- `npm run build`: compilación correcta, sin dependencias nuevas.
- 320, 390, 768, 1280 y 1440 px: dos columnas, descripciones dentro de sus límites, nombre visible correcto y sin scroll horizontal.
- Comparación literal de los 124 productos con el contenido suministrado.
- Slider con cero, uno y tres flyers; botones, indicadores, swipe táctil mediante eventos de navegador y ausencia de autoplay.
- Modal: retraso, primera promoción marcada, una instancia, recarga sin repetición, X, Escape, Continuar, retención/restauración del foco y bloqueo/restauración del scroll.
- Almacenamiento bloqueado sin excepciones. Movimiento reducido comprobado.
- Modal completo en 320×568, 667×375 y escritorio; imágenes con `contain`.
- Ocho anclas e indicador activo comprobados en móvil y escritorio. Un único h1. Sin errores de consola en las pruebas.
- Capturas de modal móvil y slider de escritorio revisadas.

Pendiente: reemplazar el flyer de demostración por material promocional autorizado. Según la numeración actual del proyecto, esta integración de menú y promociones corresponde a la fase 6.

## Fase 7: Libro de Recuerdos interactivo

La sección conserva su ubicación y el ID `recuerdos`. Incluye portada, páginas, contraportada, encuadernación, indicador y navegación. Desde 768 px muestra dos páginas interiores; por debajo, una. Una cantidad impar deja una hoja ornamental vacía al final, sin numerarla como otro recuerdo. Sin páginas interiores, se puede pasar directamente de portada a contraportada.

### Archivos y componentes

- `src/data/resenas.js`: encabezado, descripción, rutas de cubiertas y arreglo de páginas.
- `src/components/sections/Recuerdos.jsx`: sección y encabezado.
- `src/components/ui/MemoryBook.jsx`: paginación responsive, botones, teclado, swipe y precarga adyacente.
- `src/components/ui/BookImage.jsx`: página completa con `contain`, placeholder y fallback de error.
- `src/components/ui/BookImageViewer.jsx`: diálogo de ampliación, ajuste completo y zoom para explorar detalles.
- `src/styles/memories.css`: papel, encuadernación, profundidad, responsive y visor. Se importa desde `global.css`.
- `public/images/resenas/portada-libro.svg` y `contraportada-libro.svg`: cubiertas digitales provisionales claramente identificadas.

No se han modificado los componentes de las demás secciones ni añadido dependencias. El archivo antiguo `reviews.js` queda sin uso por esta sección: editar `resenas.js` para configurar el libro.

### Agregar fotografías reales

Guardar las fotografías autorizadas en **`public/images/resenas/`**. WebP o JPG optimizado son adecuados; conservar la resolución suficiente para leer mensajes, sin recortar firmas ni dibujos. Las imágenes verticales y horizontales se muestran completas.

En `src/data/resenas.js`, sustituir los marcadores o añadir elementos a `libroRecuerdos.paginas`:

```js
{ imagen: '/images/resenas/pagina-01.webp', alt: 'Descripción de la página original y su contenido' }
```

El orden del arreglo define el orden de lectura. Solo se necesitan `imagen` y `alt`. Usar `imagen: null` para mantener una página provisional; `paginas: []` para un libro sin interiores. Cambiar `portada` y `contraportada` para incorporar fotografías de las cubiertas auténticas. Los tres interiores entregados son placeholders neutros: no hay reseñas, firmas ni personas inventadas.

### Interacción y rendimiento

- Anterior/Siguiente y flechas de teclado con el foco dentro del libro. Botones deshabilitados en los extremos.
- Swipe horizontal de al menos 60 px, con predominio horizontal sobre vertical; desplazarse verticalmente no pasa hojas.
- Transición 2D corta de opacidad y desplazamiento, sin deformar las fotos ni superponer varias vistas; movimiento reducido elimina la animación.
- Se montan las páginas visibles y solo se precargan imágenes de las vistas adyacentes. No se solicita toda la colección al abrir el libro.
- Ampliación en un diálogo nativo con foco inicial, retención del foco, cierre con Escape/X/fondo y restauración del foco y scroll. El botón «Ampliar detalle» permite desplazarse por la imagen y «Ajustar imagen» vuelve a mostrarla completa.

### Pruebas realizadas

- `npm run build`: producción compilada correctamente.
- Edge/Playwright a 320×568, 390×844, 768×1024 y 1440×900: cubiertas, una/dos páginas, un único h1 y sin desbordamiento horizontal.
- Cero, una y cinco páginas; última hoja impar, inicio/final y navegación inversa.
- Fotografías horizontales de prueba, ampliación, zoom, Escape y devolución del foco. Los datos de prueba solo se inyectaron en el navegador, no en el libro entregado.
- Eventos táctiles reales del navegador: gesto horizontal avanza sin abrir accidentalmente la imagen; gesto vertical no cambia de página.
- Teclado, animación normal, movimiento reducido y ausencia de errores de consola.
- Las ocho anclas y el indicador activo siguen funcionando en móvil y escritorio.
- Capturas revisadas en móvil y escritorio.

Pendiente: fotografías o digitalizaciones auténticas de cubiertas y páginas, permisos de reproducción y descripciones alt adecuadas. La fase 8 no se ha iniciado.
#   e l - b a l c o n - d e - l o s - r e c u e r d o s  
 