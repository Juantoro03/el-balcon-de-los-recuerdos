export const historicalSource = {
  title: 'El Balcón de los Recuerdos: el café de Salento con una greca de 115 años',
  publisher: 'Revista Diners',
  author: 'Claudia Milena González Bernal',
  publishedAt: '2020-01-02',
  displayDate: '2 de enero de 2020',
  url: 'https://revistadiners.com.co/estilo-de-vida/el-balcon-de-los-recuerdos-el-cafe-de-salento-que-conserva-una-greca-de-115-anos/',
  establishmentNameInArticle: 'El Balcón de los Recuerdos',
}

export const historia = {
  eyebrow: 'NUESTRA ESENCIA',
  title: 'Una historia que se sirve en cada taza',
  introduction: 'En una esquina de la Calle Real de Salento, la crónica de Diners retrata un café ligado a la familia Araque. Su arquitectura y sus objetos acompañan una memoria compartida.',
  image: {
    src: '/images/historia/fundador-retrato-sin-marco.webp',
    alt: 'Retrato de don Orlando Araque junto a la histórica máquina de café Victoria Arduino.',
    width: 1448, height: 1086,
    fit: 'contain',
    fallback: '/images/historia/archivo-provisional.svg',
    fallbackAlt: 'Marco ornamental provisional reservado para una fotografía del establecimiento.',
    placeholderTitle: 'Un lugar para los recuerdos',
    placeholderLabel: 'Fotografía del establecimiento pendiente',
    caption: '01 / Don Orlando Araque',
    credit: null,
    position: 'center',
  },
  timelineTitle: 'Las páginas de una historia familiar',
  timelineNote: 'Fechas según los testimonios recogidos en 2020; los intervalos conservan su carácter aproximado.',
  milestones: [
    { id: 'adquisicion', date: '1970', precision: 'Año citado en el testimonio', title: 'Una greca llega a la familia', text: 'Martha sitúa en ese año la compra de la máquina por su padre.' },
    { id: 'hermanos', date: '1981–1982', precision: 'Intervalo aproximado', title: 'El relevo familiar', text: 'Juan Carlos ubica entonces el paso del negocio a los hermanos.' },
    { id: 'cronica', date: '2020', precision: 'Publicación documentada', title: 'Una memoria que se cuenta', text: 'Diners publica el relato del establecimiento y su greca.' },
  ],
  legacy: {
    eyebrow: 'EL LEGADO',
    name: 'Orlando Araque Arias',
    text: 'Para la familia, conservar la máquina era una manera de recordar a Orlando Araque Arias. La crónica relaciona el café con su trabajo y su perseverancia.',
    closing: 'La memoria también tiene un lugar en la mesa.',
  },
  sourceNote: 'Relato histórico publicado por Revista Diners en 2020.',
  pending: ['Fotografía autorizada del establecimiento', 'Confirmación familiar de la cronología y del nombre comercial'],
}
