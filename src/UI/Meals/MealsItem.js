import { useEffect, useState, useCallback } from "react";
import { Card, FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import useHttp from "../../Hooks/http-hook";
import Spinners from "../../Components/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { CartItemActions } from "../../store/redux-toolkit/CartItemRedux";

const MealsItem = () => {
  const [size, setSize] = useState(0);
  const [items, setItems] = useState([]);
  const { request: httpRequest, error: httpError } = useHttp();
  const dispatch = useDispatch();

  const onAddCartItemsHandler = (item) => {
    //setCartDispatcher({ type: "ADD", item: item });
    dispatch(CartItemActions.addItems(item));
  };

  const getItemSizeHandler = (event) => {
    setSize(+event.target.value);
  };

  useEffect(() => {
    httpRequest(
      {
        url: "https://react-shop-82e08-default-rtdb.firebaseio.com/ItemList.json",
        method: "GET",
      },
      getData
    );
  }, []);

  const getData = useCallback((response) => {
    setItems(response.length > 0 ? response : []);
  });

  return (
    <div className="cart-item p-5 my-5">
      <Card>
        <Card.Body className="scroll">
          {items.length === 0 && <Spinners type="spinner-style-1"></Spinners>}
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
                        onChange={(e) => getItemSizeHandler(e)}
                      />
                    </div>
                    <div className="d-flex justify-content-end w-75">
                      <Button
                        variant="primary"
                        onClick={() =>
                          onAddCartItemsHandler({
                            id: index,
                            ...food,
                            size: size,
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
          {httpError.length > 0 && <h5 className="text-danger">{httpError}</h5>}
        </Card.Body>
      </Card>
    </div>
  );
};
export default MealsItem;
