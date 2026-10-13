export const familia = {
  encabezado: 'EL CORAZÓN DE NUESTRA HISTORIA',
  titulo: 'Detrás de cada taza, una historia familiar',
  introduccion: 'La crónica de Diners de 2020 enlaza la historia del café con la familia Araque y el recuerdo de Orlando Araque Arias. Un relato en el que el trabajo cotidiano y la memoria familiar se encuentran.',
  continuidad: {
    encabezado: 'UN LEGADO COMPARTIDO',
    titulo: 'Los recuerdos también se heredan',
    texto: 'En aquel relato, conservar la greca era una forma de honrar a Orlando. Las voces de sus hijos permiten acercarse a esa historia; los vínculos y las responsabilidades actuales están pendientes de confirmación.',
  },
  fotografia: {
    src: '/images/familia/equipo-cafe-mostrador.webp',
    alt: 'Tres personas comparten un libro abierto detrás del mostrador, junto a la greca.',
    width: 941, height: 1672,
    fit: 'cover',
    frameRatio: '5 / 4',
    fallback: '/images/familia/album-provisional.svg',
    fallbackAlt: 'Marco de álbum provisional reservado para una fotografía familiar autorizada.',
    placeholderTitle: 'Un álbum por compartir',
    placeholderLabel: 'Fotografía familiar pendiente',
    caption: '03 / La memoria familiar',
    credit: null,
    position: 'center',
  },
  album: {
    encabezado: 'LAS PERSONAS, SUS RECUERDOS',
    titulo: 'Páginas de nuestro álbum',
    vacioTitulo: 'Las próximas páginas tienen rostro',
    vacioTexto: 'Este espacio espera los retratos y las historias que la familia quiera compartir. Los nombres, vínculos y biografías se incorporarán cuando estén confirmados.',
    vacioNota: 'Perfiles y fotografías pendientes de autorización',
  },
  integrantes: [],
  cita: {
    habilitada: false,
    autentica: false,
    autorizada: false,
    texto: '',
    autor: '',
    fuente: '', // Referencia verificable o identificación del testimonio autorizado.
  },
  notaFuente: 'Contexto histórico publicado en 2020. No identifica a los propietarios actuales.',
  pendientes: ['Fotografía familiar autorizada y crédito', 'Nombres, vínculos y biografías confirmados', 'Retratos con descripciones alt', 'Años de vinculación, si están documentados', 'Cita real y permiso de reproducción, si se desea incluir'],
}

// Esquema de un integrante (no añadir personas ficticias a la colección):
// {
//   id: string, nombre: string | null, rol: string | null,
//   descripcion: string | null, imagen: string | null, alt: string,
//   destacado: boolean, orden: number,
//   confirmado: boolean, rolConfirmado: boolean,
//   credito: string | null, posicion: string,
//   aniosVinculacion: { texto: string, confirmados: boolean } | null
// }
// No se muestran roles ni años como ciertos sin sus indicadores de confirmación.

export const retratoProvisional = {
  fallback: '/images/familia/album-provisional.svg',
  fallbackAlt: 'Marco provisional para un retrato autorizado; no representa a una persona.',
  placeholderTitle: 'Un rostro por retratar',
  placeholderLabel: 'Retrato pendiente',
}
