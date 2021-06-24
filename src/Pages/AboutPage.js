import { Fragment } from "react";
import DialogModal from "../UI/DiaglogModal/Modal";
import NavBar from "../UI/Header/NavBar";
import Notification from "../Components/Notification";

const AboutPage = (props) => {
  return (
    <Fragment>
      <Notification />
      <NavBar items={props.items} />
      <DialogModal />
      <h4>About Page</h4>
    </Fragment>
  );
};

export default AboutPage;
