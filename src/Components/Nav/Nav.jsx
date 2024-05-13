import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav2.css";

function Navbar() {
    const navRef = useRef();
    const [activeDropdown, setActiveDropdown] = useState(null);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    
    };

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    return (
        <header className="headerNav">
            <img className="logoNav" src="public\img\logos\Logo Oficial CitaMonte.png" alt="Logo"></img>
            <nav className="navNav" ref={navRef}>
                <ul>
                    <li>
                        <a href="/" className="active">Home</a>
                    </li>
                    <li className="dropdown" onMouseEnter={() => toggleDropdown("ministerios")} onMouseLeave={() => toggleDropdown("ministerios")}>
                        <a href="#ministerios">Ministerios <img className="flechita" src="public\img\iconos\flecha-hacia-abajo (1).png" width="10px" alt="Flecha hacia abajo"></img></a>
                        {activeDropdown === "ministerios" && (
                            <ul className="dropdown-menu">
                                <li><a href="/hombres">Discipulado de Hombres</a></li>
                                <li><a href="/matrimonios">Matrimonios</a></li>
                                <li><a href="/citakids">Iglesia para Niños</a></li>
                                <li><a href="/jovenes">Reunión de Jóvenes</a></li>
                                <li><a href="/reuniones">Reuniones Generales</a></li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a href="/nosotros">Nosotros</a>
                    </li>
                    <li className="dropdown" onMouseEnter={() => toggleDropdown("vidaIglesia")} onMouseLeave={() => toggleDropdown("vidaIglesia")}>
                        <a href="#vida-iglesia">Vida de la iglesia <img className="flechita" src="public\img\iconos\flecha-hacia-abajo (1).png" width="10px" alt="Flecha hacia abajo"></img></a>
                        {activeDropdown === "vidaIglesia" && (
                            <ul className="dropdown-menu">
                                <li><a href="/novedades">Avisos Importantes</a></li>
                                <li><a href="/calendario">Calendario</a></li>
                                <li><a href="/campamento">Campamentos</a></li>
                                <li><a href="/musicos">Escuela de Musicos</a></li>
                                <li><a href="/galeria">Galeria </a></li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a href="/motivos">Pedidos de Oracion</a>
                    </li>
                    <li>
                        <a href="/contacto">Contacto</a>
                    </li>
                    <li>
                        <a href="/soynuevo">Soy Nuevo</a>
                    </li>
                </ul>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
