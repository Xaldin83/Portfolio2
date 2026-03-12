import { useEffect, useState } from "react";
import ProjectCard from "../composants/ProjectCard";
import Navbar from "../composants/Header";
import Footer from "../composants/Footer";

import '../styles/global.scss';
import '../styles/Projects.scss';


import data from '../data/projects.json';

type Project ={
    id: number;
    title: string;
    description: string;
    image: string;
    link:string;
};

const Projects = () => {

    const [projects, setProjects] = useState<Project[]>([]);
    const [search, setSearch] = useState('');

    useEffect(()=>{
        setProjects(data)
    }, []);

    const filteredProjects = projects.filter((project) =>
        project.title.toLowerCase().includes(search.toLowerCase())
    );

    return(
        <>

        <html lang="fr">
            <head>
                =
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Projets</title>
            </head>
            <body>
                
                <Navbar/>

                <section>
                    <article>
                        <h1>Mes projets</h1>

                        <input
                            type="text"
                            placeholder="Rechercher un projet..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            />
                    </article>
                    <div className="project-list">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                link={project.link}
                                />
                            ))
                        ) : (
                            <p>Aucun projet ne correspond à votre recherche.</p>
                        )}
                    </div>
                </section>
                <Footer/>
            </body>
        </html>
        </>
    );
};

export default Projects;