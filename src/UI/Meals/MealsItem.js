// import './MealsItem.css'
import { useState } from "react";
import { Card, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Spinners from "../../Components/Spinner";

const MealsItem = (props) => {
  const [size, setSize] = useState(0);
  const itemcxt = props.value;

  const getItemSizeHandler = (event) => {
    setSize(+event.target.value);
  };

  return (
    <div className="cart-item p-5 my-5">
      <Card>
        <Card.Body className="scroll">
          {itemcxt.items.length === 0 && (
            <Spinners type="spinner-style-1"></Spinners>
          )}
          {itemcxt.items.map((food, index) => {
            return (
              <div key={index}>
                <div className="d-flex justify-content-between">
                  <div>
                    <Card.Title>{food.item}</Card.Title>
                    <Card.Text className="font-italic text-muted">
                      {food.about}
                    </Card.Text>
                    <Card.Title className="text-danger">
                      ${food.price}
                    </Card.Title>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between mb-2">
                      <Card.Title className="mr-2">Amount</Card.Title>
                      <FormControl
                        type="number"
                        min="1"
                        max=""
                        step="1"
                        onChange={(e) => getItemSizeHandler(e)}
                      />
                    </div>
                    <div className="d-flex justify-content-end w-75">
                      <Button
                        variant="primary"
                        onClick={() =>
                          itemcxt.addCart({ id: index, ...food, size: size })
                        }
                      >
                        <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>{" "}
                        ADD
                      </Button>
                    </div>
                  </div>
                </div>
                <hr></hr>
              </div>
            );
          })}
        </Card.Body>
      </Card>
    </div>
  );
};
export default MealsItem;
