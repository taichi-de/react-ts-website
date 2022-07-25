import { Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

type Item = {
  id: string;
  title: string;
};

type ListRenderingProrps = {
  items: Item[];
  removeItem: (id: string) => void;
  editItem: (id: string) => void;
};

export default function ListRendering({
  items,
  removeItem,
  editItem,
}: ListRenderingProrps) {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="d-flex justify-content-between" key={id}>
            <p className="title" style={{color: "white"}}>・{title}</p>
            <div className="mr-2">
              <Button
                type="button"
                variant="outline-light"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </Button>
              <Button
                type="button"
                variant="outline-light"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </Button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
