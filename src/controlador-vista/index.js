import {componentes} from '../vistas/index'
const changeView = (router) => {
    const conteniner = document.getElementById('contenedor'); 
   
    switch (router){
        case '#/inicio' : {return contenedor.appendChild(componentes.home ())}
        default:
        break;
    }
console.log(router)
}

export {changeView}
