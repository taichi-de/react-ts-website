import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import people from "../data/reviewData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (num: number) => {
    if (num > people.length - 1) {
      return 0;
    } else if (num < 0) {
      return people.length - 1;
    }
    return num;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <Container>
      <Card className="bg-dark w-50 text-white mx-auto">
        <Card.Img
          variant="top"
          src={image}
          alt="Card image"
          height="400px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="flex-column">
          <Card.Title className="justify-content-between align-items-baseline mb-4">
            <span className="ms-2">{name}</span>
            <Card.Text className="ms-2 text-muted">{job}</Card.Text>
            <Card.Text className="ms-2 text-muted">{text}</Card.Text>
          </Card.Title>
        </Card.Body>
        <div className="mb-3 mx-auto">
          <Button variant="success" className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </Button>
          <Button variant="success" className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </Button>
        </div>
      </Card>
    </Container>
  );
}
