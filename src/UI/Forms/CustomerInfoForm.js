import { Fragment} from "react";
import {
  Col,
  Form,
  FormLabel,
  FormControl,
  FormGroup,
  Row,
} from "react-bootstrap";
import useInput from "../../Hooks/input-hook";

const CustomerInfo = () => {
  const inputHook = useInput();
  const inputForm = inputHook.inputForm;

  return (
    <Fragment>
      <Form onSubmit={inputHook.submitEventHandler}>
        <Row>
          <Col md="6">
            <FormGroup>
              <FormLabel htmlFor="first name">Firstname</FormLabel>
              <FormControl
                isInvalid={inputForm[0].isInvalid}
                isValid={inputForm[0].valid}
                type="text"
                name="first name"
                required
                onChange={inputHook.changeEventHandler}
                onBlur={inputHook.blurEventHandler}
              />
              {inputForm[0].isInvalid && (
                <p className="text-danger">*{inputForm[0].error}</p>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <FormLabel htmlFor="last name">Lastname</FormLabel>
              <FormControl
                isInvalid={inputForm[1].isInvalid}
                isValid={inputForm[1].valid}
                type="text"
                name="last name"
                required
                onChange={inputHook.changeEventHandler}
                onBlur={inputHook.blurEventHandler}
              />
              {inputForm[1].isInvalid && (
                <p className="text-danger">*{inputForm[1].error}</p>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl
                isInvalid={inputForm[2].isInvalid}
                isValid={inputForm[2].valid}
                type="email"
                name="email"
                required
                onChange={inputHook.changeEventHandler}
                onBlur={inputHook.blurEventHandler}
              />
              {inputForm[2].isInvalid && (
                <p className="text-danger">*{inputForm[2].error}</p>
              )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <FormControl
              isInvalid={inputForm[3].isInvalid}
              isValid={inputForm[3].valid}
                type="number"
                name="phone"
                minLength={10}
                maxLength={10}
                required
                onChange={inputHook.changeEventHandler}
                onBlur={inputHook.blurEventHandler}
                />
                {inputForm[3].isInvalid && (
                  <p className="text-danger">*{inputForm[3].error}</p>
                )}
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <FormLabel htmlFor="address">Addresss</FormLabel>
              <FormControl
              isInvalid={inputForm[4].isInvalid}
              isValid={inputForm[4].valid}
                type="text"
                name="address"
                placeholder="Flat no, Street, Landmark..."
                required
                onChange={inputHook.changeEventHandler}
                onBlur={inputHook.blurEventHandler}
                />
                {inputForm[4].isInvalid && (
                  <p className="text-danger">*{inputForm[4].error}</p>
                )}
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <FormLabel htmlFor="city">City </FormLabel>
              <FormControl
              isInvalid={inputForm[5].isInvalid}
              isValid={inputForm[5].valid}
                type="text"
                name="city"
                required
                onChange={inputHook.changeEventHandler}
                onBlur={inputHook.blurEventHandler}
                />
                {inputForm[5].isInvalid && (
                  <p className="text-danger">*{inputForm[5].error}</p>
                )}
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <FormLabel htmlFor="state">State</FormLabel>
              <FormControl
              isInvalid={inputForm[6].isInvalid}
              isValid={inputForm[6].valid}
                type="text"
                name="state"
                required
                onChange={inputHook.changeEventHandler}
                onBlur={inputHook.blurEventHandler}
                />
                {inputForm[6].isInvalid && (
                  <p className="text-danger">*{inputForm[6].error}</p>
                )}
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <FormLabel htmlFor="zip">Zip</FormLabel>
              <FormControl
              isInvalid={inputForm[7].isInvalid}
              isValid={inputForm[7].valid}
                type="number"
                name="zip"
                required
                onChange={inputHook.changeEventHandler}
                onBlur={inputHook.blurEventHandler}
                />
                {inputForm[7].isInvalid && (
                  <p className="text-danger">*{inputForm[7].error}</p>
                )}
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <hr></hr>
    </Fragment>
  );
};

export default CustomerInfo;
