import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'; // Asegúrate de importar los iconos necesarios

const technologyIcons = {
    'HTML': <FaHtml5 />,
    'CSS': <FaCss3Alt />,
     'JavaScript': <FaJs />, 
     'React': <FaReact />,
      'Node.js': <FaNodeJs />,
   };
export const Technologies = ({ technologies }) => {

    if (!technologies) {
         console.error("Technologies prop is undefined");
          return null; }
  return (
    <div className="technologies-list">
         {technologies.map(tech => ( 
            <div key={tech} className="technology-icon">
                 {technologyIcons[tech] || tech} {/* Muestra el icono si existe, sino el nombre */} 
                 </div> ))}
             </div>
  )
}
