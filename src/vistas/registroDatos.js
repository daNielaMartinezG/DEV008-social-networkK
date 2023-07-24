export const componenteRegistroDatos = () => {
    const vistaRegistroDatos = 
    `<div class="form-body">
    <h2> Crea tu perfil </h2>
    <form class="loging-form">
    <p class="texto">¿Cómo te gusta que te llamen?</p>
    <input type = "text"/>
    <p class="texto">¿Cuál es tu libro favorito? </p>
    <input type = "text"/>
    <p class="texto">¿Quién es tu caballero Austen? </p>
    <input type = "text"/>
    </form>
    <a href="#/pagInicio" class="menu_link"><button id = "prueba">Siguiente</button></a></p>
    </div>`

    const divElemRegistroDatos = document.createElement("div");
    divElemRegistroDatos.innerHTML = vistaRegistroDatos;
    return divElemRegistroDatos;
}
