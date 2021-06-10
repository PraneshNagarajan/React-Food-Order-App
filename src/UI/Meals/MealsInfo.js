import React from 'react'
import {Card} from 'react-bootstrap'
const MealsInfo = () => {
    return(
        <div className="cart-main text-white">
        <Card bg="dark">
          <Card.Body className="text-center">
            <Card.Title>Delicious Food, Delivered to you</Card.Title>
            <Card.Text>
              Choose your meal from broad selection of available meals and enjoy
              your delicious luch or dinner at home.
            </Card.Text>
            <Card.Text>
              All your meals are cooked with high quality of ingredients, No
              used oils, Just-In-Time and of course by experienced chefs.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
}
// memo - memorization , check previous value and current value is changed only this component would re-render, 
// e.g passing props but it doesn't change so, if parent component re-render based on state change. so child component would also re-render.
// but, if child comp not get any new value. why re-render. it would be enhance performence.
// but it doesn't work if pass function as props. because it's non-primitive(function, array). every time rerender pointer address get differ.
// but boolean,string,num (primitive). it holds the value not memory location address.
// if use memo in modal component doesn't work , because it has function as props. every time variable get re-initize of rendering
//        <DialogModal
//         datas={cartItems}
//         show={isShow}
//         showFunction={onShowModalHandler}
//       />
export default React.memo(MealsInfo)