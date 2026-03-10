import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";


import '../styles/global.scss';

import data_programmation from '../data/langages_others.json';

type Langage ={
    id: number;
    name:string;
    image: string;
};

const Langages_others = () => {

    const [langages, setLangage] = useState<Langage[]>([]);

    useEffect(()=>{
        setLangage(data_programmation)
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


export default Langages_others;
