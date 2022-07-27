import { useState } from "react";
import { Button } from "react-bootstrap";
import data from "../data/textData";

export default function RandomText() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let amount = Number(count);
    if (count <= 0) {
      amount = 0;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className="mb-4 p-4">
      <h2>Random Text Maker</h2>
      <form className="" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs: </label>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="mx-2"
        />
        <Button variant="outline-warning" type="submit">
          generate
        </Button>
      </form>
      <article className="my-4">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}
