import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import ArchiveImage from './ArchiveImage'
import { retratoProvisional } from '../../data/familia'

export default function FamilyMemberCard({ integrante }) {
  const reduced = useReducedMotion()
  const [canHover, setCanHover] = useState(false)
  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setCanHover(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  const image = {
    ...retratoProvisional,
    src: integrante.imagen || null,
    alt: integrante.alt || (integrante.nombre ? 'Retrato de ' + integrante.nombre : 'Retrato familiar'),
    position: integrante.posicion || 'center',
    caption: 'Retrato del álbum',
    credit: integrante.credito || null,
  }
  return (
    <motion.article className="family-card"
      whileHover={canHover && !reduced ? { y: -4 } : undefined}
      animate={reduced ? { y: 0 } : undefined}
      transition={{ duration: reduced ? 0 : 0.2 }}>
      <ArchiveImage image={image} />
      <div className="family-card-copy">
        {!integrante.confirmado && <p className="family-pending-label">Perfil provisional · por confirmar</p>}
        <h3>{integrante.nombre || 'Nombre pendiente'}</h3>
        <p className="family-member-role">{integrante.rolConfirmado && integrante.rol ? integrante.rol : 'Vínculo con la cafetería por confirmar'}</p>
        <p className="family-member-description">{integrante.descripcion || 'Historia personal pendiente de confirmar con la familia.'}</p>
        {integrante.aniosVinculacion?.confirmados === true && integrante.aniosVinculacion.texto && (
          <p className="family-member-years">{integrante.aniosVinculacion.texto}</p>
        )}
      </div>
    </motion.article>
  )
}

