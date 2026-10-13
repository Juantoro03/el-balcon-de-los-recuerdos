// Compatibilidad con la etapa 1; editar el contenido en familia.js.
import { familia } from "./familia"

export const family = {
  status: "provisional",
  members: familia.integrantes,
  pending: familia.pendientes,
}
