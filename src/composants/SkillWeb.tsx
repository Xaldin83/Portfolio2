import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";


import '../styles/global.scss';

import data_web from '../data/langages_web.json';

type Langage ={
    id: number;
    name:string;
    image: string;
};


const Langages_web = () => {

    const [langages, setLangage] = useState<Langage[]>([]);

    useEffect(()=>{
        setLangage(data_web)
    }, []);

    

    return(
        <>

                    <div className="langage-list">
                        {langages.map((langage) => (
                                <SkillCard
                                key={langage.id}
                                name={langage.name}
                                image={langage.image}
                                />
                            ))}
                    </div>

        </>
    );
};

export default Langages_web;
