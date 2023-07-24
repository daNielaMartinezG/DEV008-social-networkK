export const componentePagInicio = () => {
    const vistaPagInicio = 
    `
     <nav class="menu">
    <ul class="menu_links">
    <li class="meni_item">
      <a href="#/inicio" class="menu_link">INICIO</a>
    </li>
    <li>
      <a href="#/registro" class="menu_link">REGISTRO</a>
    </li>
    <li>
      <a href="#/registroDatos" class="menu_link">Registro Datos</a>
    </li>
    </ul>
  </nav>`

    const divElemInicio = document.createElement("div");
    divElemInicio.innerHTML = vistaPagInicio;
    return divElemInicio;
}