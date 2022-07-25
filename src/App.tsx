import { Container } from "react-bootstrap";
import Review from "./components/Review";
import Accordion from "./components/Accordion";
import accordionData from "./accordionData";
import { useState } from "react";
import RandomText from "./components/RandomText";

function App() {
  const [questions, setQuestions] = useState(accordionData);

  return (
    <Container>
      <section className="p-2">
        <h2 className="mx-auto">Reviews</h2>
        <div className="t">
          <Review />
        </div>
      </section>

      <section className="p-2">
        <h2 className="my-2">Accordion</h2>
        <div className="">
          {questions.map((question) => {
            return <Accordion key={question.id} {...question} />;
          })}
        </div>
      </section>

      <section>
        <h2 className="m-2">Random Text Maker</h2>
        <div className="">
          <RandomText />
        </div>
      </section>
    </Container>
  );
}

export default App;
