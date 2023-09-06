export const componentePagLibros = () =>{
    const vistaPagLibros =
    `<div>
    <nav class="nav">
    
      <ul class = "nav-menu">
        <li class = "nav-menu-item">
          <a class ="nav-menu-link" href="#/pagInicio">INICIO</a>
        </li>
        <li class = "nav-menu-item">
          <a class ="nav-menu-link" href="#/libros">LIBROS</a>
        </li>
        <li class = "nav-menu-item">
          <a class ="nav-menu-link" href="#/perfil">PERFIL</a>
        </li>
        <li class = "nav-menu-item">
          <a class ="nav-menu-link" href="#/inicio">Cerrar sesión</a>
        </li>
      </ul>
    </nav>
    </div>

 PAGINA DE LIBROS 
    `
    
 const divComponteL = document.createElement("div");
    divComponteL.innerHTML = vistaPagLibros;
    return divComponteL;

}

