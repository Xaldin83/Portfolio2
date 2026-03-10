

type SkillProps = {
    name: string;
    image: string;
};

const SkillCard: React.FC<SkillProps> = ({ name, image }) => (
        <article className="skill-card">
            <span className="logo-wrapper" data-name={name}><img src={image} height="70" alt={name}/></span>
        </article>
);

export default SkillCard;