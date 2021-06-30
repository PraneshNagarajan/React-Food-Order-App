import {Fragment, useState} from'react'
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  FormLabel,
  Col,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import useHttp from "../Hooks/http-hook";
import { AuthActions } from "../store/redux-toolkit/loginRedux";
import Spinner from '../Components/Spinner';
import { useHistory } from 'react-router-dom';

 


const LoginPage = () => {
  const history = useHistory()
  const [response, setResponse] = useState([])
  const [error, setError] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const http = useHttp()
  const dispatch = useDispatch();
  //redux
  //---------
  // const error = useSelector(state => state.errorMsg)

  //Redux-toolkit
  //---------------
  const submitHandler = (event) => {
    setIsLoading(true)
    event.preventDefault();
    // redux
    //-------------
    // dispatch({
    //   type: "login",
    //   payload: {
    //     username: event.target.username.value,
    //     password: event.target.password.value,
    //   },
    // });
 http.request({
   url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD7o0MxhS16ZJtYkTis3dfOxykT4CzebcI",
   method: "POST",
   body: {
     email: event.target.username.value,
     password: event.target.password.value,
     returnSecureToken: true
   }
 }, (res) => {
   setError('')
     setIsLoading(false)
     if(res.idToken) {
      dispatch(AuthActions.login({
        token: res.idToken,
        expires : res.expiresIn,
        isLogged: true
      }))
      sessionStorage.setItem('token', res.idToken)
      sessionStorage.setItem('expireTime', new Date(new Date().getTime() + 600000))
      history.push({
        pathname: '/homePage'
      })
     } else {
       setError(res)
     }

 })
    // redux-toolkit
    //-----------------
  };
  return (
    <Form onSubmit={submitHandler} className="d-flex justify-content-center mt-5 p-5">
     { isLoading && <Fragment>
      <Spinner type="spinner-style-2"></Spinner>
     </Fragment>  }
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
