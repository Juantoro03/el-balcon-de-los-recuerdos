import { useState } from 'react'

export default function BookImage({ imagen, alt, placeholder, onZoom }) {
  const [failed, setFailed] = useState(false)
  if (!imagen || failed) return (
    <div className="book-placeholder">
      <span aria-hidden="true">✦</span><p>{placeholder}</p>
      <small>{failed ? 'Fotografía no disponible' : 'Fotografía original pendiente'}</small>
    </div>
  )
  return (
    <button className="book-image-button" type="button" onClick={onZoom} aria-label={'Ampliar: ' + alt}>
      <img src={imagen} alt={alt} loading="lazy" decoding="async" width="800" height="1100" onError={() => setFailed(true)} />
      <span className="book-image-hint">Ampliar imagen</span>
    </button>
  )
}

