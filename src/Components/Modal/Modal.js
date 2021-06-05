import { useEffect, useState } from "react";
import SuccessModal from "../Modal/SuccessModal";
import {
  Badge,
  Modal,
  FormControl,
  InputGroup,
  Row,
  Col,
  Button,
} from "react-bootstrap";

const DialogModal = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);
  const [isPlaced, setPlaced] = useState(false);

  useEffect(() => {
    setCartItems(props.items);
    props.items.map((food) => {
      setTotal(total + food.total);
    });
  }, [props.items]);

  const onShowModalHandler = () => {
    setShow(!show);
    setPlaced(!isPlaced);
  };

  const onPlacedOrderHandler = () => {
    setTotal(0);
    setCartItems([]);
    props.showFunction();
    setShow(!show);
    setPlaced(!isPlaced);
  };

  const onSetCartItemsHandler = (size, orders, actionFlag) => {
    let sum = 0;
    const data = cartItems.map((food) => {
      if (food.item === orders.item) {
        return {
          ...orders,
          quantity: size,
          total: parseFloat(size * food.price).toFixed(2),
        };
      } else {
        return food;
      }
    });
    data.map((food) => {
      sum += parseFloat(food.total);
    });

    setTotal(sum);
    setCartItems(data);
  };

  return (
    <div>
      {cartItems.length > 0 && (
        <Modal
          centered
          show={props.show}
          onHide={(e) => props.showFunction(cartItems, true)}
        >
          <Modal.Header closeButton>
            <h3>Order Summary</h3>{" "}
          </Modal.Header>
          <Modal.Body>
            {cartItems.map((food, index) => {
              return (
                <div key={index}>
                  <Row className="d-flex justify-content-around">
                    <Col xs="5" className="d-flex">
                      <h6>
                        {" "}
                        <img
                          src={
                            food.type === "veg"
                              ? "https://img.icons8.com/color/30/000000/vegetarian-food-symbol.png"
                              : "https://img.icons8.com/fluent/30/000000/non-vegetarian-food-symbol.png"
                          }
                          alt={food.type}
                        />{" "}
                        {food.item}{" "}
                        <Badge variant="primary"> ${food.price}</Badge>
                      </h6>
                    </Col>
                    <Col xs="3">
                      <FormControl
                        type="number"
                        min="1"
                        max=""
                        step="1"
                        defaultValue={food.quantity}
                        onChange={(e) =>
                          onSetCartItemsHandler(
                            e.target.value,
                            food,
                            food.quantity < e.target.value ? true : false
                          )
                        }
                      />
                    </Col>
                    <Col xs="4">
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text id="dollar-sign">$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          value={parseFloat(food.total).toFixed(2)}
                          readOnly
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <hr></hr>
                </div>
              );
            })}

            <div className="d-flex justify-content-between">
              <Modal.Title>Total Amount :</Modal.Title>
              <Modal.Title className="text-danger">
                ${parseFloat(total).toFixed(2)}
              </Modal.Title>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={onPlacedOrderHandler}>
              Place the order
            </Button>
            <Button variant="danger" onClick={props.showFunction}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {cartItems.length === 0 && 
      
      <Modal
      centered
      show={props.show}
      onHide={(e) => props.showFunction(cartItems, true)}
    >
        <Modal.Header></Modal.Header>
      <Modal.Body className="d-flex justify-content-between">
       <h5 className="text-center text-muted">No Items......</h5>
       <Button variant="danger" onClick={props.showFunction}>
          Close
        </Button>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
    

      }
      {isPlaced && (
        <SuccessModal showFunction={onShowModalHandler} show={show} />
      )}
    </div>
  );
};

export default DialogModal;
