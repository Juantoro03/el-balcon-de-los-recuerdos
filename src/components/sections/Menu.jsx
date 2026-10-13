import { useState } from 'react'
import { menu, menuPresentacion } from '../../data/menu'
import StoryReveal from '../ui/StoryReveal'
import MenuCategoryTabs from '../ui/MenuCategoryTabs'
import MenuProductList from '../ui/MenuProductList'

export default function Menu() {
  const [seleccionada, setSeleccionada] = useState(0)
  const indice = seleccionada < menu.length ? seleccionada : 0
  const categoria = menu[indice]
  return (
    <section id="menu" className="menu-section" tabIndex={-1} aria-labelledby="menu-title">
      <div className="page-container">
        <StoryReveal className="menu-intro">
          <p className="menu-eyebrow">{menuPresentacion.encabezado}</p>
          <h2 id="menu-title">{menuPresentacion.titulo}</h2>
          <p className="menu-introduction">{menuPresentacion.descripcion}</p>
          <span className="menu-flourish" aria-hidden="true">✦</span>
        </StoryReveal>
        {categoria ? (
          <>
            <MenuCategoryTabs categorias={menu} activa={indice} onChange={setSeleccionada} />
            <div id="menu-product-panel" className="menu-panel" role="tabpanel"
              aria-labelledby={'menu-tab-' + indice} tabIndex={0}>
              <h3 className="menu-category-title">{categoria.nombre}</h3>
              <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
                {categoria.nombre}: {categoria.productos.length} productos
              </p>
              <MenuProductList key={categoria.nombre} productos={categoria.productos} />
            </div>
          </>
        ) : <p className="menu-empty">La carta estará disponible próximamente.</p>}
      </div>
    </section>
  )
}
