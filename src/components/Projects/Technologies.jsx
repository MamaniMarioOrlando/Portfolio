import sharepoint from '../../assets/ImgIconos/iconsSharepoint.png';
import html from '../../assets/ImgIconos/Html.svg';
import css from '../../assets/ImgIconos/Css.svg';
import github from '../../assets/ImgIconos/Github.svg';
import js from '../../assets/ImgIconos/Javascript.svg';
import java from '../../assets/ImgIconos/Java.svg';
import mongo from '../../assets/ImgIconos/Mongodb.svg';
import mysql from '../../assets/ImgIconos/Mysql.svg';
import react from '../../assets/ImgIconos/React.svg';
import node from '../../assets/ImgIconos/Nodejs.svg';
import powerapp from '../../assets/ImgIconos/iconPoweApp.png';
import powerautomate from '../../assets/ImgIconos/iconsPowerAutomate.png';

const technologyIcons = {
'HTML': html,
'SharePoint': sharepoint,
'CSS': css,
'GitHub': github,
'JavaScript': js,
'Java': java,
'MongoDB': mongo,
'Mysql': mysql,
'PowerApp': powerapp,
'PowerAutomate': powerautomate,
'React': react,
'Node.js': node,
};

export const Technologies = ({ technologies }) => {
if (!technologies || !Array.isArray(technologies)) {
    console.error("Technologies prop is missing or not an array");
    return null;
    }

    return (
        <div className="technologies-list">
            {technologies.map(tech => (
                <div key={tech} className="technology-icon">
                    {technologyIcons[tech] ? (
                        <img src={technologyIcons[tech]} alt={tech} className="tech-icon" />
                    ) : (
                        tech // Si no hay imagen, muestra el nombre
                    )}
                </div>
            ))}
        </div>
    );
};
