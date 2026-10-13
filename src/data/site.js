export const site = {
  name: 'El Balcón de los Recuerdos',
  nameStatus: 'Nombre confirmado para el proyecto',
  location: 'Salento, Quindío, Colombia',
  address: 'Cl. 6, Salento, Quindío, Colombia',
  timeZone: 'America/Bogota',
  hours: [
    { day: 'Lunes', open: '08:00', close: '21:00' },
    { day: 'Martes', open: '08:00', close: '21:00' },
    { day: 'Miércoles', open: null, close: null },
    { day: 'Jueves', open: '08:00', close: '21:00' },
    { day: 'Viernes', open: '08:00', close: '21:00' },
    { day: 'Sábado', open: '07:00', close: '23:00' },
    { day: 'Domingo', open: '07:00', close: '23:00' },
  ],
  // Los festivos tienen prioridad, incluso cuando coinciden con miércoles.
  holidayHours: { day: 'Festivos colombianos', open: '07:00', close: '23:00' },
  phone: '+57 316 531 4004',
  whatsappNumber: '573165314004',
  instagramUrl: 'https://www.instagram.com/balcondelosrecuerdos/',
  facebookUrl: null,
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=El%20Balc%C3%B3n%20de%20los%20Recuerdos%2C%20Cl.%206%2C%20Salento%2C%20Quind%C3%ADo%2C%20Colombia',
  // Pendiente: verificar la ficha exacta antes de incorporar un iframe oficial.
  mapEmbedUrl: null,
  tagline: 'Donde cada taza cuenta una historia.',
}

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(`Hola, vi la página web de ${site.name} y quisiera recibir más información`)}`

export function formatHours({ open, close }) {
  if (!open || !close) return 'Cerrado'
  const formatTime = value => {
    const [hour, minute] = value.split(':').map(Number)
    return `${hour % 12 || 12}:${String(minute).padStart(2, '0')} ${hour < 12 ? 'a. m.' : 'p. m.'}`
  }
  return `${formatTime(open)}–${formatTime(close)}`
}

export const navigation = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'historia', label: 'Nuestra historia' },
  { id: 'greca', label: 'La greca de 1905' },
  { id: 'familia', label: 'Nuestra familia' },
  { id: 'menu', label: 'Nuestro menú' },
  { id: 'recuerdos', label: 'Libro de recuerdos' },
  { id: 'galeria', label: 'Galería' },
  { id: 'visitanos', label: 'Visítanos' },
]
