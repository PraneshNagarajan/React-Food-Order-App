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

export default MealsInfo