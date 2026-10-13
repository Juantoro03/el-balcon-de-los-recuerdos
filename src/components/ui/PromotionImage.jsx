import { useState } from 'react'

export default function PromotionImage({ promocion, eager = false }) {
  const [failed, setFailed] = useState(false)
  return failed ? (
    <p className="promotion-image-error">No se pudo cargar el flyer. Puedes continuar explorando la página.</p>
  ) : (
    <img src={promocion.imagen} alt={promocion.alt} loading={eager ? 'eager' : 'lazy'}
      decoding="async" width={promocion.width || 1000} height={promocion.height || 1250} onError={() => setFailed(true)} />
  )
}
