import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

type AccordionProps = {
    title: string
    info: string
}

export default function Accordion({ title, info }: AccordionProps) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='d-flex flex-column'>
      <header className="d-flex justify-content-between my-4">
        <h5 className="col-7">{title}</h5>
        <Button variant="outline-info" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </Button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};
