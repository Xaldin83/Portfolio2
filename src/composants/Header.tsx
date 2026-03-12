import { Link } from "react-router-dom";
import '../styles/Header.scss';

const Navbar = () => (
    <>
        <header>
            <a href="/"><img src="public/img/pixelogo.jpg" alt="Logo du site " /></a>
            <nav className="navbar">
                <Link to="/">Accueil</Link>
                <Link to="/projects">Projets</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    </>
);

export default Navbar;