// export interface ModelUser {
//     id?: string
//     usuario: string
//     contrasena?: string
//     nombre?: string
//     apellido?: string
//     fecha_creacion?: string
//     fecha_ultima_sesion?: string
// }

export interface ModelUsuario {
    id?: number
    nombre: string
    apellido: string
    fechaNacimiento?: Date
    genero?: string
    telefono?: string
    email?: string
    username: string
    password: string
    activo?: string
    idRol?: number
    nombreRol?: string
    idBitacora?: number
    fechaInsercion?: Date
    idUsuarioInsercion?: number
    fechaUltMod?: Date
    idUsuarioUltMod?: number
}