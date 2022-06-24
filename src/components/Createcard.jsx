import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ToDoLists from "./ToDoLists";

const text = "text";
const newStyleCard = {
  width: "400px",
  height: "600px",
  maxHeight: "100%",
  overFlow: "hidden",
};
const cardTitle = {
  backgroundColor: "#198754",
  color: "light",
  fontSize: "40px",
  borderRadius: "25px",
};
const cardBody = {
  backgroundColor: "#ddd",
};
const CreateCard = () => {
  const [items, setItems] = useState([]);
  const [inputList, setinputList] = useState("");
  const itemEvent = (event) => {
    setinputList(event.target.value);
  };
  const listofItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList("");
  };
  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElm, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <Card style={newStyleCard} className="newStyleCard">
        <Card.Body style={cardBody} className="cardBody">
          <Card.Title style={cardTitle} className="cardTitle">
            ToDo List
          </Card.Title>
          <div className="text-btn">
            <div className="form__group field">
              <input
                type={text}
                className="add-todo-text form__field"
                id="add-todo"
                name="todo"
                placeholder="Add a Items"
                onChange={itemEvent}
                value={inputList}
              />
              <Button
                type="button"
                variant="success"
                className="add-todo-btn"
                onClick={listofItem}
              >
                Add
              </Button>
              <ol>
                {/* <li>{inputList}</li> */}
                {items.map((itemval, index) => {
                  return (
                    <ToDoLists
                      key={index}
                      id={index}
                      text={itemval}
                      onSelect={deleteItem}
                    />
                  );
                })}
              </ol>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default CreateCard;
