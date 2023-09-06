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
                componentes.comportamientoRegistro();
                return;
            }
        case '#/registroDatos':
            {
                contenedor.appendChild(componentes.componenteRegistroDatos());
                componentes.comportamientoDatos();
                return;
            }
        case '#/libros':
            {
                contenedor.appendChild(componentes.componentePagLibros());
                return;
            }
        case '#/perfil':
            {
                contenedor.appendChild(componentes.componentePagPerfil());
                componentes.comportamientoComponentePerfil();
                return;
            }
        default:
            break;
    }
    //  console.log(router)
}

export { changeView }
