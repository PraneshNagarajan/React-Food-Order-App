import { Navbar } from "react-bootstrap";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  return (
    <Fragment>
      {notification.flag && (
        <Navbar bg={notification.bg} sticky="top">
          <Navbar.Brand className="mr-auto">
            {notification.status}....
          </Navbar.Brand>
          <Navbar.Brand>{notification.error}</Navbar.Brand>
        </Navbar>
      )}
    </Fragment>
  );
};
export default Notification;
