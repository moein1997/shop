import {Link} from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./nav.css" 
import SearchBar from "./Searchabr";
const Nav = () =>{
    return(
        <div className="navbar navbar-dark navbar-expand-lg">
            <div className="container">
                <ul>
                    <li>
                        <Link to="/" className="navbar-brand">Online Shop</Link>
                        <img className="logo" src={"logo.webp"} alt={"logo"}/>
                    </li>
                </ul>
                <SearchBar/>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className="nav-link">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav