import { Accordion } from 'react-bootstrap';

export const AcordionProject = ({ id, activeAccordion, setActiveAccordion, description, nombreHeader, onToggle }) => {

  const toggleAccordion = () => { 
    const isExpanded = activeAccordion.includes(id);
    setActiveAccordion(id, !isExpanded); // Llama a la función de manejo del acordeón con el estado actual
    onToggle(!isExpanded); // Llama al onToggle con el estado invertido
  };

  return (
    <Accordion className="accordion-transition" activeKey={activeAccordion} flush>
      <Accordion.Item eventKey={id}>
        <Accordion.Header 
          onClick={toggleAccordion}
        >
          {nombreHeader}
        </Accordion.Header>
        <Accordion.Body>
          {description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
