import { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ItemContex from '../../Datas/Item-contex'
import {CartToggleActions} from '../../store/redux-toolkit/cartToggleRedux'

const SuccessModal = (props) => {
  const itemCxt = useContext(ItemContex)
  const show = useSelector(state => state.cartToggle.modal.show)
  const dispatch = useDispatch()
  const onShowModalHandler = () => {
    dispatch(CartToggleActions.modalToggle())
  };

  return (
    <Modal show={show} onHide={onShowModalHandler}>
      <Modal.Header closeButton>
        <h3>
          Order status : <span className="text-success">Success</span>
        </h3>
      </Modal.Header>
      <Modal.Body>
        <h5>Your order has been placed.</h5>
        <span className="d-flex">
          {" "}
          <h5>
            Your order ID : <strong>#785432</strong>
          </h5>
        </span>
        <Modal.Title className="text-center text-success">
          Thanks for Ordering
        </Modal.Title>
        <h5 className="text-center text-success font-italic text-muted">
          Happy Food !!!!
        </h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={itemCxt.clearCart}>Track your order</Button>
        <Button variant="danger" onClick={(e) => props.showFunction()}>
          close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessModal;
