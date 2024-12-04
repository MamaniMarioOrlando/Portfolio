import React, { useEffect } from 'react';
import anime from 'animejs';


export const Tarjeta = () => {

    const contenidos = [
        {
          title: 'Sobre mí',
          description: 'Soy estudiante de <span className="highlight">Ingeniería en Informática</span> en la Universidad Nacional Arturo Jauretche, con sólidos conocimientos en '
                        +'<span className="highlight">Python, Java, C#</span> y bases de datos relacionales como <span className="highlight"> MySQL</span>. Manejo tecnologías backend como '
                        +'<span className="highlight">Spring Boot</span>, desarrollando servicios RESTful y aplicaciones escalables.'
        },
        {
          title: 'Formación Complementaria',
          description: ' Participé en un curso intensivo de <span className="highlight">Desarrollo Web Full Stack</span> con Digital House, trabajando con <span className="highlight">React, Node.js, Express, HTML, CSS</span> y metodologías ágiles como SCRUM. Además, cuento con experiencia en <span className="highlight">Microsoft Power Platform</span>, creando soluciones empresariales con Power Apps, Power Automate y SharePoint.'
        },
        {
            title: 'Objetivo',
            description: 'Busco una oportunidad en el desarrollo web o backend para seguir aprendiendo y aportar al éxito de proyectos innovadores. Mi meta es crecer profesionalmente en un entorno dinámico y desafiante.',
        },
      ];
      
      useEffect(()=>{
        //Crea la animacion para el titulo
        anime({
          targets: ".card-tarjeta",
          translateX: [-550,0],
          opacity: [0,1],
          duration: 1000,
          easing: "linear",
        });
      },[])


  return (
    <>
        {
            contenidos.map((item,index)=>{
                return(
                    <div className='card-tarjeta' key={index}>
                        <h2>{item.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                    </div>
                )
            })
        }
    </>
  )
}
