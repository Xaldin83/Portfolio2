import Footer from "../composants/Footer";
import Navbar from "../composants/Header";
import '../styles/Home.scss';

const Home = () =>{
    return (
        <>

        <html lang="fr">
        <head>
            <meta charset="UTF-8" />
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
                        <ul>
                            <li class="langage" id="python">python</li>
                            <li class="langage" id="c">c</li>
                            <li class="langage" id="c++">c++</li>
                            <li class="langage" id="bash">bash</li>
                        </ul>
                    </article>
                    <article>
                        <h3>Langage web</h3>
                        <ul>
                            <li class="langage" id="html">html</li>
                            <li class="langage" id="css">css</li>
                            <li class="langage" id="javascript">javascript</li>
                            <li class="langage" id="php">php</li>
                        </ul>
                    </article>
                    <article>
                        <h3>Base de données</h3>
                        <ul>
                            <li class="langage" id="postgres">postgres</li>
                            <li class="langage" id="mongodb">mongodb</li>
                            <li class="langage" id="mysql">mysql</li>
                        </ul>
                    </article>
                    <article>
                        <h3>Autres</h3>
                        <ul>
                            <li class="langage" id="wordpress">wordpress</li>
                            <li class="langage" id="latex">latex</li>
                        </ul>
                    </article>
                </section>

                <section id="formations">
                    <h2>Mes formations</h2>
                    <p></p>
                </section>

                <section id="links">
                    <h2>Les liens complémentaires</h2>
                    <p></p>
                </section>

                <section id="contact">
                    <h2>Les liens complémentaires</h2>
                    <p></p>
                </section>
            </main>

        <Footer/>
        </html>
        </>
)};

export default Home;