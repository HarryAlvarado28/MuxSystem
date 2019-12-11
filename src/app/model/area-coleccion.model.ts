import { ModelColecciones } from './coleccion.model';

export interface ModelAreaColeccion {
    id?: string
    nombre?: string
    descripcion?: string
    idBitacora?: number
    fechaInsercion?: Date
    idUsuarioInsercion?: number
    fechaUltMod?: Date
    idUsuarioUltMod?: number
    coleccion?: ModelColecciones
}

