import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="    navegacion">
            <a class="navegacion__enlace navegacion__enlace--activo" href="index.html">Tienda</a>
            <a class="navegacion__enlace" href="paginas/nosotros.html">Nosotros</a>
        </nav>
    )
}

export default NavBar;