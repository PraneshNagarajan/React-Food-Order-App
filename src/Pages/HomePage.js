import "./HomePage.css";
import NavBar from "../Components/NavBar/NavBar";
import DialogModal from "../Components/Modal/Modal";
import { Card, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import mealsImage from "../images/meals.jpg";
import { useContext, useReducer, useState } from "react";
import ItemContext from "../Datas/Item-contex";

const cartHandler = (state, action) => {
  if (action.type === "ADD") {
    const match = state.filter((food) => food.item === action.payload.item);
    const datas = state.filter((food) => food.item !== action.payload.item);
    return match.length > 0
      ? [
          ...datas,
          {
            ...action.payload,
            quantity: match["0"].quantity + action.payload.quantity,
            total: match["0"].total + action.payload.total,
          },
        ]
      : [...datas, action.payload];
  } else {
    return state.filter((food) => food.item !== action.payload.item);
  }
};

const HomePage = () => {
  const [isShow, setShow] = useState(false);
  const items = useContext(ItemContext);
  const [count, setCount] = useState(0);
  const [cartItems, CartDispatcher] = useReducer(cartHandler, []);
  const onAddQuantityHandler = (value) => {
    setCount(value);
  };
  const onShowModalHandler = () => {
    setShow(!isShow);
  };
  return (
    <div className="main">
      <NavBar showFunction={onShowModalHandler} size={cartItems.length} />
      <Card>
        <Card.Img src={mealsImage}></Card.Img>
      </Card>

      <div className="cart-main text-white">
        <Card bg="dark">
          <Card.Body className="text-center">
            <Card.Title>Delicious Food, Delivered to you</Card.Title>
            <Card.Text>
              Choose your meal from broad selection of available meals and enjoy
              your delicious luch or dinner at home.
            </Card.Text>
            <Card.Text>
              All your meals are cooked with high quality of ingredients, No
              used oils, Just-In-Time and of course by experienced chefs.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="cart-item p-5 my-5">
        <Card>
          <Card.Body className="scroll">
            {items.map((food, index) => {
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
                          onChange={(e) => onAddQuantityHandler(e.target.value)}
                        />
                      </div>
                      <div className="d-flex justify-content-end w-75">
                        <Button
                          variant="primary"
                          onClick={() =>
                            CartDispatcher({
                              type: count > 0 ? "ADD" : "DEL",
                              payload: {
                                ...food,
                                quantity: Number(count),
                                total: count * food.price,
                              },
                            })
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
            {items.map((food, index) => {
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
                          onChange={(e) => onAddQuantityHandler(e.target.value)}
                        />
                      </div>
                      <div className="d-flex justify-content-end w-75">
                        <Button
                          variant="primary"
                          onClick={() =>
                            CartDispatcher({
                              type: count > 0 ? "ADD" : "DEL",
                              payload: {
                                ...food,
                                quantity: count,
                                total: count * food.price,
                              },
                            })
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
            {items.map((food, index) => {
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
                          onChange={(e) => onAddQuantityHandler(e.target.value)}
                        />
                      </div>
                      <div className="d-flex justify-content-end w-75">
                        <Button
                          variant="primary"
                          onClick={() =>
                            CartDispatcher({
                              type: count > 0 ? "ADD" : "DEL",
                              payload: {
                                ...food,
                                quantity: count,
                                total: count * food.price,
                              },
                            })
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
      <DialogModal
        items={cartItems}
        show={isShow}
        showFunction={onShowModalHandler}
      />
    </div>
  );
};

export default HomePage;
