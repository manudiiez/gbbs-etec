import React from 'react'
/* ----------------------------- REACT BOOTSTRAP ---------------------------- */
import Accordion from 'react-bootstrap/Accordion';

const FilterItem = ({eventKey, title, children}) => {
  return (
    <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body className='p-0'>
          {children}
        </Accordion.Body>
    </Accordion.Item>
  )
}

export default FilterItem