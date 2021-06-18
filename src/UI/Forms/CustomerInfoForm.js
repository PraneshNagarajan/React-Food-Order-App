import { Fragment, useEffect } from "react";
import {
  Col,
  Form,
  FormLabel,
  FormControl,
  FormGroup,
  Row,
} from "react-bootstrap";
import { useFormik } from "formik";

const Values = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

const formValidation = (form) => {
  let error = {};
  //firstname
  if (!form.firstname) {
    error.firstname = "*Required";
  } else if (
    new RegExp(`[^a-zA-z]`).test(form.firstname) ||
    new RegExp(`[\\\\_]`).test(form.firstname)
  ) {
    error.firstname =
      "Integer, WhiteSpaces & Special characters are not allowed";
  }

  //lastname
  if (!form.lastname) {
    error.lastname = "*Required.";
  } else if (
    new RegExp(`[^a-zA-z]`).test(form.lastname) ||
    new RegExp(`[\\\\_]`).test(form.lastname)
  ) {
    error.lastname =
      "Integer, WhiteSpaces & Special characters are not allowed.";
  }

  //email
  if (!form.email) {
    error.email = "*Required.";
  } else if (
    !new RegExp(`^[A-Za-z0-9._:$!%-]+@[A-Za-z0-9_.]+.[A-Za-z]{3,4}$`).test(
      form.email
    )
  ) {
    error.email = "*Invaild Format.";
  }

  //phone
  if (!form.phone) {
    error.phone = "*Required.";
  } else if (String(form.phone).length !== 10) {
    error.phone = "Number must be 10 digits. Not > or < 10 digits.";
  }

  //address
  if (!form.address) {
    error.address = "*Required.";
  }

  //city
  if (!form.city) {
    error.city = "*Required.";
  } else if (
    new RegExp(`[^a-zA-z]`).test(form.city) ||
    new RegExp(`[\\\\_]`).test(form.city)
  ) {
    error.city = "Integer, WhiteSpaces & Special characters are not allowed.";
  }

  //state
  if (!form.state) {
    error.state = "*Required.";
  } else if (
    new RegExp(`[^a-zA-z]`).test(form.state) ||
    new RegExp(`[\\\\_]`).test(form.state)
  ) {
    error.state = "Integer, WhiteSpaces & Special characters are not allowed.";
  }

  //zip
  if (!form.zip) {
    error.zip = "*Required.";
  }
  return error;
};

const CustomerInfo = (props) => {
  const formik = useFormik({ initialValues: Values, validate: formValidation });
  useEffect(() => {
    props.getFunction(!(formik.dirty && formik.isValid), formik.values);
  }, [formik.dirty, formik.isValid]);
  return (
    <Fragment>
      <Form>
        <Row>
          <Col md="6">
            <FormGroup>
              <FormLabel htmlFor="firstname">Firstname</FormLabel>
              <FormControl
                isValid={
                  (formik.touched.firstname ||
                    formik.values.firstname.length > 0) &&
                  !formik.errors.firstname
                }
                isInvalid={
                  (formik.touched.firstname ||
                    formik.values.firstname.length > 0) &&
                  formik.errors.firstname
                }
                type="text"
                name="firstname"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {/* if use autoComplete to fiil form check length of input ortherwise don't get valdidate */}
              {(formik.touched.firstname ||
                formik.values.firstname.length > 0) &&
                formik.errors.firstname && (
                  <p className="text-danger">{formik.errors.firstname}</p>
                )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <FormLabel htmlFor="lastname">Lastname</FormLabel>
              <FormControl
                isInvalid={
                  (formik.touched.lastname ||
                    formik.values.lastname.length > 0) &&
                  formik.errors.lastname
                }
                isValid={
                  (formik.touched.lastname ||
                    formik.values.lastname.length > 0) &&
                  !formik.errors.lastname
                }
                type="text"
                name="lastname"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {(formik.touched.lastname || formik.values.lastname.length > 0) &&
                formik.errors.lastname && (
                  <p className="text-danger">{formik.errors.lastname}</p>
                )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl
                isInvalid={
                  (formik.touched.email || formik.values.email.length > 0) &&
                  formik.errors.email
                }
                isValid={
                  (formik.touched.email || formik.values.email.length > 0) &&
                  !formik.errors.email
                }
                autoComplete="on"
                type="email"
                name="email"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {(formik.touched.email || formik.values.email.length > 0) &&
                formik.errors.email && (
                  <p className="text-danger">{formik.errors.email}</p>
                )}
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <FormControl
                isInvalid={
                  (formik.touched.phone ||
                    String(formik.values.phone).length > 0) &&
                  formik.errors.phone
                }
                isValid={
                  (formik.touched.phone ||
                    String(formik.values.phone).length > 0) &&
                  !formik.errors.phone
                }
                type="number"
                name="phone"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {(formik.touched.phone ||
                String(formik.values.phone).length > 0) &&
                formik.errors.phone && (
                  <p className="text-danger">{formik.errors.phone}</p>
                )}
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <FormLabel htmlFor="address">Addresss</FormLabel>
              <FormControl
                isInvalid={
                  (formik.touched.ad || formik.values.address.length > 0) &&
                  formik.errors.address
                }
                isValid={
                  (formik.touched.address ||
                    formik.values.address.length > 0) &&
                  !formik.errors.address
                }
                type="text"
                name="address"
                placeholder="Flat no, Street, Landmark..."
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {(formik.touched.address || formik.values.address.length > 0) &&
                formik.errors.address && (
                  <p className="text-danger">{formik.errors.address}</p>
                )}
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <FormLabel htmlFor="city">City </FormLabel>
              <FormControl
                isInvalid={
                  (formik.touched.city || formik.values.city.length > 0) &&
                  formik.errors.city
                }
                isValid={
                  (formik.touched.city || formik.values.city.length > 0) &&
                  !formik.errors.city
                }
                type="text"
                name="city"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {(formik.touched.city || formik.values.city.length > 0) &&
                formik.errors.city && (
                  <p className="text-danger">{formik.errors.city}</p>
                )}
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <FormLabel htmlFor="state">State</FormLabel>
              <FormControl
                isInvalid={
                  (formik.touched.state || formik.values.state.length > 0) &&
                  formik.errors.state
                }
                isValid={
                  (formik.touched.state || formik.values.state.length > 0) &&
                  !formik.errors.state
                }
                type="text"
                name="state"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {(formik.touched.state || formik.values.state.length > 0) &&
                formik.errors.state && (
                  <p className="text-danger">{formik.errors.state}</p>
                )}
            </FormGroup>
          </Col>
          <Col md="4">
            <FormGroup>
              <FormLabel htmlFor="zip">Zip</FormLabel>
              <FormControl
                isInvalid={
                  (formik.touched.zip ||
                    String(formik.values.zip).length > 0) &&
                  formik.errors.zip
                }
                isValid={
                  (formik.touched.zip ||
                    String(formik.values.zip).length > 0) &&
                  !formik.errors.zip
                }
                type="number"
                name="zip"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {(formik.touched.zip || String(formik.values.zip).length > 0) && (
                <p className="text-danger">{formik.errors.zip}</p>
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
