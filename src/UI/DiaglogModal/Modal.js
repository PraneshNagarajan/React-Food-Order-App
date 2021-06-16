import { useContext, useEffect, useState } from "react";
import ItemContext from "../../Datas/Item-contex";
import SuccessModal from "./SuccessModal";
import {
  Badge,
  Modal,
  FormControl,
  InputGroup,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import CustomerInfo from "../Forms/CustomerInfoForm";
import { Fragment } from "react";
import useInput from "../../Hooks/input-hook";

const DialogModal = (props) => {
  const inputHook = useInput()
  const ItemCxt = useContext(ItemContext);
  const [show, setShow] = useState(false);
  const [isPlaced, setPlaced] = useState(false);
  const isValid = inputHook.isFormValid

  const onShowModalHandler = () => {
    setShow(!show);
    setPlaced(!isPlaced);
  };

  const onPlacedOrderHandler = () => {
    props.showFunction();
    setShow(!show);
    setPlaced(!isPlaced);
  };

  return (
    <div>
      {props.datas.item.length > 0 && (
        <Modal centered show={props.show} onHide={props.showFunction} keyboard={false} backdrop="static"
        >
          <Modal.Header closeButton>
            <h3>Order Summary</h3>{" "}
          </Modal.Header>
          <Modal.Body>
            {props.datas.item.map((food, index) => {
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
                              ItemCxt.addCart({ ...food, size: 1 })
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
                              ItemCxt.removeCart({ ...food, size: 1 })
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
                          <InputGroup.Text id="dollar-sign">$</InputGroup.Text>
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
            <CustomerInfo/>
            <div className="d-flex justify-content-between">
              <Modal.Title>Total Amount :</Modal.Title>
              <Modal.Title className="text-danger">
                {`$ ${parseFloat(props.datas.total).toFixed(2)}`}
              </Modal.Title>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={onPlacedOrderHandler} onClick={inputHook.submitEventHandler}  disabled={!isValid}>
              Place the order 
            </Button>
            <Button variant="danger" onClick={props.showFunction}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {(props.datas.item.length === 0 || props.error) && 
        <Modal
          centered
          show={props.show || props.error}
          backdrop="static"
          keyboard={false}
          onHide={props.showFunction}
        >
          <Modal.Header></Modal.Header>
          <Modal.Body
            className={props.show ? `d-flex justify-content-between` : ``}
          >
            <h5
              className={`text-center ${
                !props.show ? `text-danger font-bold` : `text-muted`
              }`}
            >
              {!props.show ? props.error : "No Items......"}
            </h5>
            {props.show && 
              <Button variant="danger" onClick={props.showFunction}>
                Close
              </Button>
            }
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
