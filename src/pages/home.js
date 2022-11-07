import { Link } from "react-router-dom"
export const Home = () => {
    return (
        <div>
            <img src="../assets/notepad.jpg" className="note-img" />
            <p className="txt">Express your thoughts and write them down!</p>
            <Link to="/notes"><button id="primary-btn">Write now</button></Link>
        </div>
    )
}