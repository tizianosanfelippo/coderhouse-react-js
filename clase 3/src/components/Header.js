const Header = () => {
    return (
        <header id="main-header" className="header">
        <h1 className="titulo">Tienda de mascotas</h1>
        <div className="correcionhome">
        <ul>
        <li><a href="pages/Quienessomos.html">Quienes somos</a></li>
        <li><a href="pages/Productos.html">Productos</a>
          <ul>
              <li><a href="">Cuchas</a></li>
              <li><a href="">Juguetes</a></li>
          </ul>
      </li>
      <li><a href="pages/Contacto.html">Contacto</a></li>
      <li><a href="pages/Favoritos.html"><img src="/favoritos.png" alt="favoritos"></img></a></li>
      <li><a href="pages/Carrito.html"><img src="/Carrito.png" alt="carritodecompras"></img></a></li>

        </ul>


        </div>
        </header>
    )
}

export default Header