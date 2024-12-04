import { useState } from 'react';
import { Accordion } from 'react-bootstrap';


export const AcordionProject = ({id, description, nombreHeader}) => {
    const [activeAccordion, setActiveAccorfion] = useState(null);

    const toggleAccordion = (currentId) => {
        setActiveAccorfion(activeAccordion === currentId ? null : currentId)
    }
    return (
    <Accordion flush>
        <Accordion.Item eventKey={id}>
            <Accordion.Header onClick={() => toggleAccordion(id)}>{nombreHeader}</Accordion.Header>
            <Accordion.Body>
                {description}
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
  )
}
