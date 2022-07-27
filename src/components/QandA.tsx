import { useState } from "react";
import Accordion from "./Accordion";
import accordionData from "../data/accordionData";

export default function QandA() {
  const [questions, setQuestions] = useState(accordionData);

  return (
    <section className="mb-4 p-4 bg-secondary">
      <h2>Q & A</h2>
      <div>
        {questions.map((question) => {
          return <Accordion key={question.id} {...question} />;
        })}
      </div>
    </section>
  );
}
