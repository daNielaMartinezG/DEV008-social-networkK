import {componenteHome, comportamientoComponenteHome} from './home.js'//aqui se van a guardar los objetos
import {componenteRegistro} from './registro.js'
import {componenteRegistroDatos} from './registroDatos.js'
import {componentePagInicio} from './inicio.js'
const componentes = {
    vistaHome: componenteHome, //mismo nombre para no confundirme
    comportamientoHome: comportamientoComponenteHome,
    componenteRegistro: componenteRegistro,
    componenteRegistroDatos: componenteRegistroDatos,
    componentePagInicio: componentePagInicio,

}

export { componentes }; 