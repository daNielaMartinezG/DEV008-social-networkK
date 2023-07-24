import { componentes } from '../vistas/index' //aqui se ejecutan las funciones
const changeView = (router) => {
    const contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = "";
    switch (router) {
        case '#/inicio':
            {
                contenedor.appendChild(componentes.vistaHome());
                componentes.comportamientoHome();
                return;
            }
        case '#/registro':
            {
                contenedor.appendChild(componentes.componenteRegistro());
                return;
            }
        case '#/registroDatos':
            {
                contenedor.appendChild(componentes.componenteRegistroDatos());
                return;
            }
        case '#/pagInicio':
        {
            contenedor.appendChild(componentes.componentePagInicio());
        }
        default:
            break;
    }
    console.log(router)
}

export { changeView }
