import { site, whatsappUrl } from '../../data/site'

function WhatsAppIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a9 9 0 0 1-13.4 7.9L3 21l1.5-4.7A9 9 0 1 1 21 11.5Z" />
    <path d="m8 7 2 3-1.2 1.2a9 9 0 0 0 4 4L14 14l3 2c-1 3-4 2-7-1S6 9 8 7Z" />
  </svg>
}

export default function ContactLinks({ compact = false }) {
  return <div className={`contact-links${compact ? ' contact-links--compact' : ''}`}>
    <a className="contact-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon />{compact ? 'WhatsApp' : 'Escríbenos por WhatsApp'}
    </a>
    {site.instagramUrl && <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>{compact ? 'Instagram' : 'Síguenos en Instagram'}
    </a>}
  </div>
}
