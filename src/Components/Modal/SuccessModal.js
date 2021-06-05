import { Modal, Button } from "react-bootstrap"

const SuccessModal = (props) => {
    return (
        <Modal show={props.show} onHide={e => props.showFunction()}>
            <Modal.Header closeButton>
                <h3>Order status : <span className="text-success">Success</span></h3>
            </Modal.Header>
            <Modal.Body>
                <h5>Your order has been placed.</h5>
               <span className="d-flex"> <h5>Your order ID : <strong>#785432</strong></h5></span>
                <Modal.Title className="text-center text-success">Thanks for Ordering</Modal.Title>
                <h5 className="text-center text-success font-italic text-muted">Happy Food !!!!</h5>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary">Track your order</Button>
                <Button variant="danger" onClick={e => props.showFunction()}>close</Button>
            </Modal.Footer>
        </Modal>
    )
        
}

export default SuccessModal