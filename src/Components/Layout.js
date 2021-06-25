import { Fragment } from "react";
import NavBar from "../UI/Header/NavBar";
import DialogModal from "../UI/DiaglogModal/Modal";
import Notification from "./Notification";

const Layout = (props) => {
  return (
    <Fragment>
      <Notification />
      <NavBar items={props.items} />
      <DialogModal />
      {props.children}
    </Fragment>
  );
};

export default Layout;
