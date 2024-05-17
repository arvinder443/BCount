import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
             <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/main" className="navbar-link">Home</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}