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
    <article className='d-flex flex-column outline-info'>
      <header className="d-flex justify-content-between align-items-baseline my-4">
        <h5 className="col-7">{title}</h5>
        <Button className='d-flex outline-info' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </Button>
      </header>
      {showInfo && <p className="outline-info">{info}</p>}
    </article>
  );
};
