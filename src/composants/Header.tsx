import { Link } from "react-router-dom";
// import '../styles/Header.scss';

const Navbar = () => (
    <>
        <img src="public/img/logo.png" alt="Logo du portfolio" />
        <nav className="navbar">
            <Link to="/">Acceuil</Link>
            <Link to="/projects">Projets</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </>
);

export default Navbar;