import { changeView } from './controlador-vista/index.js'
//import './fireBase.js';


const init = () => {
    changeView(window.location.hash)
window.addEventListener('hashchange', () => 
changeView(window.location.hash))
}

window.addEventListener('load', init);