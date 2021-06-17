import { Spinner } from "react-bootstrap"
import './Spinners.css'
const Spinners = (props) => {
    return(
        <div className={props.type}>
            <Spinner className="spinner-body" animation="border" variant="primary">
            </Spinner>
        </div>
    )
}
export default Spinners