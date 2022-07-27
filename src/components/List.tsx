import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { v4 as uuidV4 } from 'uuid';
import ListRendering from "../components/ListRendering";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && isEditing) {
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
    } else {
      const newItem = { id: uuidV4(), title: name };

      setList([...list, newItem]);
      setName("");
    }
  };

  const clearList = () => {
    setList([]);
  };

  const removeItem = (id: string) => {
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
    <section className="mb-4 p-4 bg-secondary">
      <h2>List</h2>
      <form onSubmit={handleSubmit}>
        <h4>Shopping list</h4>
        <div>
          <input
            type="text"
            className="p-1"
            placeholder="ex) eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-testid="list"
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
