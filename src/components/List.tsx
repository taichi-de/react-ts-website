import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import ListRendering from "../components/ListRendering";
import Alert from "./Alert";

type Item = {
  id: string;
};

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(list));
  } else {
    return [];
  }
};

export default function List() {
  const [name, setName] = useState<string>("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editID, setEditID] = useState<string | null>(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      setList(
        list.map((item: Item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };

  const removeItem = (id: string) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item: Item) => item.id !== id));
  };

  const editItem = (id: string) => {
    const specificItem = list.find((item: Item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="">
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h4>Shopping list</h4>
        <div>
          <input
            type="text"
            className="p-1"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button type="submit" variant="outline-light">
            {isEditing ? "edit" : "submit"}
          </Button>
        </div>
      </form>
      {list.length > 0 && (
        <>
          <div className="justify-content-between align-items-baseline my-2">
            <ListRendering
              items={list}
              removeItem={removeItem}
              editItem={editItem}
            />
          </div>
          <Button variant="outline-danger" onClick={clearList}>
            clear items
          </Button>
        </>
      )}
    </section>
  );
}
