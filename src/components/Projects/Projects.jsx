import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import proyecto1 from '../../assets/proyectosImg/proyecto1.png';
import proyecto2 from '../../assets/proyectosImg/imagenProyecto2.png';
import proyecto3 from '../../assets/proyectosImg/imagenProyecto3.png';
import { AcordionProject } from './AcordionProject';
import { useState } from 'react';
import "./project.css";
import { Technologies } from './Technologies';

export const Projects = () => {

  const [activeAccordions, setActiveAccordions] = useState([]); // Estado global de acordeones activos
  
  const projects = [
    {
      id: 1,
      title: 'Fashion Brand',
      description: 'E-Commerce para una tienda de ropa, un proyecto que me ha permitido poner en práctica y reforzar habilidades clave en PowerApps, SharePoint, y PowerAutomate',
      image: proyecto1,
      technologies: ['PowerApps', 'SharePoint', 'PowerAutomate']
    },
    {
      id: 2,
      title: 'Dashboard Layout Project',
      description: 'Este es un proyecto de Dashboard Layout creado con React, que proporciona una interfaz de usuario para administrar contenido en un panel de administración.',
      image: proyecto2,
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 3,
      title: 'Barbería Alura',
      description: 'Este proyecto es un sitio web diseñado para mostrar los servicios y productos de una barbería ficticia, proporcionando una experiencia visual atractiva y moderna.',
      image: proyecto3,
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
  ];

  const handleAccordionToggle = (id, isExpanded) => {
    if (isExpanded) {
      setActiveAccordions(prev => [...prev, id]);
    } else {
      setActiveAccordions(prev => prev.filter(activeId => activeId !== id));
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex flex-wrap justify-content-center gap-4 p-4">
          {projects.map((project) => {
            const isExpanded = activeAccordions.includes(`desc-${project.id}`) || activeAccordions.includes(`tech-${project.id}`);
            return (
              <Card 
                className={`translucent-card ${isExpanded ? 'expanded' : ''}`}
                style={{
                  width: '18rem',
                  height: isExpanded ? 'auto' : '32rem', // Altura dinámica
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                key={project.id}>
                <Card.Img 
                  className='imgCard' 
                  variant="top" 
                  src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <AcordionProject 
                    id={`desc-${project.id}`}
                    activeAccordion={activeAccordions}
                    setActiveAccordion={handleAccordionToggle}
                    description={project.description}
                    nombreHeader="Más sobre el proyecto"
                    onToggle={(isExpanded) => handleAccordionToggle(`desc-${project.id}`, isExpanded)}
                  />
                  <AcordionProject 
                    id={`tech-${project.id}`}
                    activeAccordion={activeAccordions}
                    setActiveAccordion={handleAccordionToggle}
                    description={<Technologies technologies={project.technologies} />}
                    nombreHeader="Tecnologías utilizadas"
                    onToggle={(isExpanded) => handleAccordionToggle(`tech-${project.id}`, isExpanded)}
                  />
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
