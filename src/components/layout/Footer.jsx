import { site } from '../../data/site'
import ContactLinks from '../ui/ContactLinks'

export default function Footer() {
  const year = new Intl.DateTimeFormat('es-CO', { timeZone: site.timeZone, year: 'numeric' }).format(new Date())
  return <footer className="site-footer">
    <div className="page-container">
      <div className="footer-content">
        <div><p className="footer-name">{site.name}</p><p className="footer-tagline">{site.tagline}</p><address>{site.address}</address></div>
        <ContactLinks compact />
      </div>
      <p className="footer-copyright">© {year} {site.name}. Todos los derechos reservados.</p>
    </div>
  </footer>
}
