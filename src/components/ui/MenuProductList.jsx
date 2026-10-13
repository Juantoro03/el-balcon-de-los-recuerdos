import { motion, useReducedMotion } from 'motion/react'

export default function MenuProductList({ productos }) {
  const reduced = useReducedMotion()
  return (
    <motion.div initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ duration: reduced ? 0 : 0.16 }}>
      {productos.length ? (
        <ul className="menu-product-list">
          {productos.map((producto) => (
            <li key={producto.nombre}>
              <h4>{producto.nombre}</h4>
              <p>{producto.descripcion}</p>
            </li>
          ))}
        </ul>
      ) : <p className="menu-empty">Todavía no hay productos en esta categoría.</p>}
    </motion.div>
  )
}

