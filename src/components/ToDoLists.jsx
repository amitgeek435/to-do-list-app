import Button from "react-bootstrap/esm/Button";

const ToDoLists = (props) => {
  return (
    <>
      <div className="item-list">
        <Button
          variant="danger"
          className="delete-item"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          x
        </Button>
        <li id={props.id}>{props.text}</li>
      </div>
    </>
  );
};
export default ToDoLists;
