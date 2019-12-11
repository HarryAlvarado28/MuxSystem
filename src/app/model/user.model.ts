export interface ModelUsuario {
    id?: number
    nombre?: string
    apellido?: string
    fechaNacimiento?: Date
    genero?: string
    telefono?: string
    email?: string
    username?: string
    password?: string
    activo?: string
    idRol?: number
    nombreRol?: string
    idBitacora?: number
    fechaInsercion?: Date
    idUsuarioInsercion?: number
    fechaUltMod?: Date
    idUsuarioUltMod?: number
}