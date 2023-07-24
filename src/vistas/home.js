export const componenteHome = () => { //crea los componentes de la vista
    const vistaHome =
        `<div class="form-body">
        <h2> Bienvenida (o) a la comunida más grande de fans de Jane Austen</h2>
        <img src="img/jane.png"/>
        <form class="loging-form">
        <input type = "email" placeholder ="Email"/>
        <input type = "password" placeholder="Contraseña"/>
        <button id = "inicio">Inicio sesión</button>
        </form>
        <p class= "hiper">Aún no tienes cuenta <a href="#/registro">registrate aquí.</a></>
        </div>`
        const divElem = document.createElement("div");
    divElem.innerHTML = vistaHome;
return divElem; 
}

export const comportamientoComponenteHome = () =>{//comportamiento de cada vista, por cada componente hay que crear dos funciones 
    const boton = document.getElementById("inicio");
    boton.addEventListener('click', function(){
let cambioPagina = 
            console.log("Prueba");
    })
}