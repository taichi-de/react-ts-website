import { Container } from "react-bootstrap";
import Review from "./components/Review";
import Accordion from "./components/Accordion";
import accordionData from "./accordionData"
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState(accordionData)
  return (
    <Container>
      <section className="p-2">
        <h2 className="mx-auto">Reviews</h2>
        <Review />
      </section>

      <section className="p-2">
        <h2 className="my-2">Accordion</h2>
        {questions.map((question) => {
          return <Accordion key={question.id} {...question} />;
        })}
      </section>

      <section>
        <div className="m-2">Hello</div>
      </section>

      <section>
        <div className="m-2">Hello</div>
      </section>
    </Container>
  );
}

export default App;
