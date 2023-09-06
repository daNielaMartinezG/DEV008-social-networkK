import {comportamientoComponenteHome, componenteHome} from './home.js'//aqui se van a guardar los objetos
import {componenteRegistro, comportamientoRegistro} from './registro.js'
import {componenteRegistroDatos, comportamientoDatos} from './registroDatos.js'
import {componentePagLibros} from './libros.js'
import {componentePagPerfil, comportamientoComponentePerfil } from './perfil.js'
const componentes = {
    vistaHome: componenteHome, //mismo nombre para no confundirme
    comportamientoHome: comportamientoComponenteHome,

    componenteRegistro: componenteRegistro,
    comportamientoRegistro: comportamientoRegistro,

    componenteRegistroDatos: componenteRegistroDatos,
    comportamientoDatos: comportamientoDatos,
    
    componentePagLibros: componentePagLibros,

    componentePagPerfil:componentePagPerfil,
    comportamientoComponentePerfil: comportamientoComponentePerfil,

}

export { componentes }; 