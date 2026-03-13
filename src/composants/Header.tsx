import { Link } from "react-router-dom";
import '../styles/Header.scss';
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const handleBurger = () => {
        setToggle(!toggle)
    }
    
    return (
    <>
        <header>
            <article>
                <a href="/"><img src="./img/pixelogo.jpg" alt="Logo du site " /></a>
                <nav className={`navbar ${toggle ? 'active' : ''}`}>
                    <Link to="/">Accueil</Link>
                    <Link to="/projects">Projets</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <div>
                    <a href="https://github.com/Xaldin83"><FiGithub/></a>
                    <a href="https://www.linkedin.com/in/marius-pichon-491a2a3aa/"><CiLinkedin/></a>

                </div>
                <GiHamburgerMenu id="burgerMenu" onClick={handleBurger}/>
            </article>
            
        </header>
    </>
)}


export default Navbar;