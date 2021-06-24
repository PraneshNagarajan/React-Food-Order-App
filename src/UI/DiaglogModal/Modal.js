import { useState, Fragment } from "react";
import useHttp from "../../Hooks/http-hook";
import { CartItemActions } from "../../store/redux-toolkit/CartItemRedux";
import { CartToggleActions } from "../../store/redux-toolkit/cartToggleRedux";
import { useDispatch, useSelector } from "react-redux";
import {
  Badge,
  Modal,
  FormControl,
  InputGroup,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import SuccessModal from "./SuccessModal";
import Spinners from "../../Components/Spinner";
import CustomerInfo from "../Forms/CustomerInfoForm";

const DialogModal = (props) => {
  const http = useHttp();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.item);
  const total = useSelector((state) => state.cartItems.total);
  const show = useSelector((state) => state.cartToggle.cart.show);
  const [isDisabled, setIsDisabled] = useState(true);
  const [customerInfo, setCustomerInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onAddCartItemsHandler = (item) => {
    //setCartDispatcher({ type: "ADD", item: item });
    dispatch(CartItemActions.addItems(item));
  };

  const onRemoveCartItemsHandler = (item) => {
    //setCartDispatcher({ type: "REMOVE", item: item });
    dispatch(CartItemActions.removeItems(item));
  };

  const getDataHandler = (formStatus, customerData) => {
    setIsDisabled(formStatus);
    setCustomerInfo(customerData);
  };

  const cartToggleHandler = () => {
    dispatch(CartToggleActions.cartToggle());
  };

  const modalToggleHandler = () => {
    dispatch(CartToggleActions.modalToggle());
  };

  const onPlacedOrderHandler = () => {
    setIsLoading(true);
    http.request(
      {
        url: "https://react-shop-82e08-default-rtdb.firebaseio.com/placedOrders.json",
        method: "POST",
        body: {
          items: props.items,
          customerInfo,
        },
      },
      () => {
        setIsLoading(false);
        cartToggleHandler();
        modalToggleHandler();
      }
    );
  };

  return (
    <Fragment>
      {cartItems.length > 0 && (
        <Modal
          centered
          show={show}
          onHide={cartToggleHandler}
          keyboard={false}
          backdrop="static"
        >
          <Modal.Header closeButton>
            <h3>Order Summary</h3>{" "}
          </Modal.Header>
          <Modal.Body>
            {!isLoading && (
              <div>
                {cartItems.map((food, index) => {
                  return (
                    // no nested loop might be affect performance. so use Fragment from single root wrapper .this will effect in DOM
                    <Fragment key={index}>
                      <Row className="d-flex justify-content-around">
                        <Col xs="4" sm="5" className="d-flex">
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
                        <Col xs="4" sm="3">
                          <InputGroup>
                            <InputGroup.Prepend>
                              <Button
                                size="sm"
                                variant="success"
                                onClick={(e) =>
                                  onAddCartItemsHandler({ ...food, size: 1 })
                                }
                              >
                                +
                              </Button>
                            </InputGroup.Prepend>
                            <FormControl value={food.size} />
                            <InputGroup.Append>
                              <Button
                                size="sm"
                                variant="danger"
                                onClick={(e) =>
                                  onRemoveCartItemsHandler({ ...food, size: 1 })
                                }
                              >
                                -
                              </Button>
                            </InputGroup.Append>
                          </InputGroup>
                        </Col>
                        <Col xs="4" sm="4">
                          <InputGroup>
                            <InputGroup.Prepend>
                              <InputGroup.Text id="dollar-sign">
                                $
                              </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              value={parseFloat(food.amount).toFixed(2)}
                              readOnly
                            />
                          </InputGroup>
                        </Col>
                      </Row>
                      <hr></hr>
                    </Fragment>
                  );
                })}
                <CustomerInfo getFunction={getDataHandler} />
                <div className="d-flex justify-content-between">
                  <Modal.Title>Total Amount :</Modal.Title>
                  <Modal.Title className="text-danger">
                    {`$ ${parseFloat(total).toFixed(2)}`}
                  </Modal.Title>
                </div>
              </div>
            )}
            {isLoading && <Spinners type="spinner-style-1"></Spinners>}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={onPlacedOrderHandler}
              disabled={isDisabled}
            >
              Place the order
            </Button>
            <Button variant="danger" onClick={cartToggleHandler}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {cartItems.length === 0 && (
        <Modal
          centered
          show={show}
          backdrop="static"
          keyboard={false}
          onHide={cartToggleHandler}
        >
          <Modal.Header></Modal.Header>
          <Modal.Body className="d-flex justify-content-between">
            <h5 className="text-center text-danger font-bold text-muted">
              {"No Items......"}
            </h5>
            {show && (
              <Button variant="danger" onClick={cartToggleHandler}>
                Close
              </Button>
            )}
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      )}
      <SuccessModal />
    </Fragment>
  );
};

export default DialogModal;
