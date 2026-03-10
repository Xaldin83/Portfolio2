import { Link } from "react-router-dom";
import Footer from "../composants/Footer";
import Navbar from "../composants/Header";
import Langages_programmation from "../composants/SkillProgrammation";
import Langages_web from "../composants/SkillWeb";
import Langages_BDD from "../composants/Skill_BDD";
import Langages_others from "../composants/SkillOther";

import '../styles/Home.scss';

const Home = () =>{
    return (
        <>

        <html lang="fr">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Accueil</title>
        </head>

            <Navbar/>

            <main>
                <h1>Bienvenue sur mon portfolio</h1>

                <section id="presentation">
                    <h2>Qui suis-je?</h2>
                    <p>J'me présente, je m'appelle Marius. <br />
                        J'voudrais bien réussir ma vie, être aimé.<br />
                        Être beau, gagner de l'argent,<br />
                        Puis surtout être intelligent.<br />
                        Mais pour tout ça il faudrait que j'bosse à plein temps...<br /><br />
                        J'suis développeur, je développe pour mes copains.<br />
                        J'veux faire des application et que ça tourne bien, tourne bien.<br />
                        J'veux écrire un programme dans le vent<br />
                        D'un air gai, chic et entraînant,<br />
                        Pour facilité dans les entreprise de Monsieur Durand.</p>
                </section>

                <section id="competences">
                    <h2>Mes compétences</h2>
                    <article>
                        <h3>Langage de programmation</h3>
                        <div>
                            <Langages_programmation/>
                        </div>
                    </article>
                    <article>
                        <h3>Langage web</h3>
                        <div>
                            <Langages_web/>
                        </div>
                    </article>
                    <article>
                        <h3>Base de données</h3>
                        <div>
                            <Langages_BDD/>
                        </div>
                    </article>
                    <article>
                        <h3>Autres</h3>
                        <div>
                            <Langages_others/>
                        </div>
                    </article>
                </section>

                <section id="formations">
                    <h2>Mes formations</h2>
                    <ul>
                        <li><a href="https://formations.univ-tln.fr/fr/offre-de-formation/licence-XA/licence-informatique-LOY3GIYS.html">Université de Toulon - Licence Informatique et Science du numérique</a></li>
                        <li><a href="https://laplateforme.io/prf-var-langage-informatique/">Ecole La Plateforme - Langage informatique à la carte</a></li>
                    </ul>
                </section>

                <section id="contact">
                    <h2>Contact & Projets</h2>
                    <div>
                        <article>
                            <h3>Me contacter</h3>
                            <Link to="/contact">Contact</Link>
                        </article>
                        <article>
                            <h3>Voir les projets</h3>
                            <Link to="/projects">Projets</Link>
                        </article>
                    </div>
                </section>

            </main>

        <Footer/>
        </html>
        </>
)};

export default Home;