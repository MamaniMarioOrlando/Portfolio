import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./project.css";
import proyecto1 from '../../assets/proyectosImg/proyecto1.png';
import proyecto2 from '../../assets/proyectosImg/imagenProyecto2.png';
import proyecto3 from '../../assets/proyectosImg/imagenProyecto3.png';
import { AcordionProject } from './AcordionProject';


export const Projects = () => {
  
  const projects = [
    {
      id: 1,
      title: 'Fashion Brand',
      description: 'E-Commerce para una tienda de ropa, un proyecto que me ha permitido poner en práctica y reforzar habilidades clave en PowerApps, SharePoint, y PowerAutomate',
      image: proyecto1,
    },
    {
      id: 2,
      title: 'Dashboard Layout Project',
      description: 'Este es un proyecto de Dashboard Layout creado con React, que proporciona una interfaz de usuario para administrar contenido en un panel de administración.',
      image: proyecto2,
    },
    {
      id: 3,
      title: 'Barbería Alura',
      description: 'Este proyecto es un sitio web diseñado para mostrar los servicios y productos de una barbería ficticia, proporcionando una experiencia visual atractiva y moderna.',
      image: proyecto3,
    },
  ];

  return (
    <div className="container">
      <div className="row">
          <div className="d-flex flex-wrap justify-content-center gap-4 p-4">
            {projects.map((project, index) => (
              <Card 
                className={`translucent-card`}
                style={{ width: '18rem' }} 
                key={index}>
                <Card.Img 
                  className='imgCard' 
                  variant="top" 
                  src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <AcordionProject 
                    id={project.id}
                    description ={project.description} 
                    nombreHeader="Mas sobre el proyecto" 
                  />
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
      </div>
    </div>
  );
};
