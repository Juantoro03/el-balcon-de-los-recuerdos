import { useState } from 'react'

function ArchiveImageContent({ image, tone }) {
  const [failed, setFailed] = useState(false)
  const [fallbackFailed, setFallbackFailed] = useState(false)
  const placeholder = !image.src || failed
  const src = placeholder ? image.fallback : image.src
  return (
    <figure className={'archive-image archive-image--' + tone}>
      <div className={'archive-image-frame' + (placeholder ? ' is-placeholder' : '')}
        style={!placeholder && image.width && image.height ? { aspectRatio: image.frameRatio || `${image.width} / ${image.height}` } : undefined}>
        {!fallbackFailed && <img src={src}
          alt={placeholder ? image.fallbackAlt : image.alt}
          width={placeholder ? 800 : image.width || 800} height={placeholder ? 1000 : image.height || 1000} loading="lazy" decoding="async"
          style={{ objectPosition: image.position, objectFit: placeholder ? undefined : image.fit }}
          onError={() => placeholder ? setFallbackFailed(true) : setFailed(true)} />}
        {placeholder && <div className="archive-image-notice">
          <span className="archive-image-mark" aria-hidden="true">✦</span>
          <p>{image.placeholderTitle}</p>
          <span>{image.placeholderLabel}</span>
        </div>}
      </div>
      <figcaption>
        <span>{image.caption}</span>
        <span>{placeholder ? 'Composición provisional' : image.credit}</span>
      </figcaption>
    </figure>
  )
}

export default function ArchiveImage({ image, tone = 'paper' }) {
  // Reiniciar los errores cuando se cambia la imagen configurable.
  return <ArchiveImageContent key={image.src || image.fallback} image={image} tone={tone} />
}
