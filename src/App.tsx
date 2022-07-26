import { Container } from "react-bootstrap";
import Review from "./components/Review";
import Accordion from "./components/Accordion";
import accordionData from "./data/accordionData";
import { useState } from "react";
import RandomText from "./components/RandomText";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import menuElems from "./data/menuData";
import "./App.css"

const allCategories = [
  "all",
  ...new Set(menuElems.map((menuElem) => menuElem.category)),
];

function App() {
  const [questions, setQuestions] = useState(accordionData);
  const [menuItems, setMenuItems] = useState(menuElems);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(menuElems);
      return;
    }
    const newItems = menuElems.filter(
      (menuElem) => menuElem.category === category
    );
    setMenuItems(newItems);
  };

  return (
    <Container className="bg-light p-0">
      <section className="mb-4 p-4">
        <h2>Reviews</h2>
        <div>
          <Review />
        </div>
      </section>

      <section className="mb-4 p-4 bg-secondary">
        <h2>Accordion</h2>
        <div>
          {questions.map((question) => {
            return <Accordion key={question.id} {...question} />;
          })}
        </div>
      </section>

      <section className="mb-4 p-4">
        <h2>Random Text Maker</h2>
        <div>
          <RandomText />
        </div>
      </section>

      <section className="mb-4 p-4 bg-secondary">
        <h2>List</h2>
        <div>
          <List />
        </div>
      </section>

      {/* <section className="mb-4 p-4">
        <h2>Menu</h2>
        <div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu menuElems={menuItems} />
        </div>
      </section> */}

      <section className="mb-4 p-4">
        <h2>Navbar</h2>
        <div>
          <Navbar />
        </div>
      </section>
    </Container>
  );
}

export default App;
