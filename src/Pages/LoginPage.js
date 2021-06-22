import {
  Form,
  FormGroup,
  FormControl,
  Button,
  FormLabel,
  Col,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.errorMsg)
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: "login",
      payload: {
        username: event.target.username.value,
        password: event.target.password.value,
      },
    });
  };
  return (
    <Form onSubmit={submitHandler} className="d-flex justify-content-center mt-5 p-5">
      <Col md="6">
        <FormGroup>
          <FormLabel htmlFor="username">Username</FormLabel>
          <FormControl type="text" name="username"></FormControl>
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormControl type="password" name="password"></FormControl>
          </FormGroup>
        </FormGroup>
        <Button type="submit">Submit</Button>
        {error.length > 0 && <p className="text-danger mt-5">*{error}</p>}
      </Col>
    </Form>
  );
};

export default LoginPage;
