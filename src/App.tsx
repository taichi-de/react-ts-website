import "./App.css";
import { Container } from "react-bootstrap";
import Review from "./components/Review";
import RandomText from "./components/RandomText";
import List from "./components/List";
import Navbar from "./components/Navbar";
import QandA from "./components/QandA";

function App() {
  return (
    <Container className="bg-light p-0">
      <Review />
      <QandA />
      <RandomText />
      <List />
      <Navbar />
    </Container>
  );
}

export default App;
