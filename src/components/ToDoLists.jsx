import Button from "react-bootstrap/esm/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Tooltip } from "@mui/material";

const ToDoLists = (props) => {
  const tltpTitle = "Delete " + props.text;
  return (
    <>
      <div className="item-list">
        <Tooltip title={tltpTitle}>
          <Button
            variant="danger"
            className="delete-item"
            onClick={() => {
              props.onSelect(props.id);
            }}
          >
            <DeleteForeverIcon />
          </Button>
        </Tooltip>
        <li id={props.id}>{props.text}</li>
      </div>
    </>
  );
};
export default ToDoLists;
