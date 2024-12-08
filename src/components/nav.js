import {Link} from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faShoppingCart,faSignIn,faSignOut } from "@fortawesome/free-solid-svg-icons";
import "./nav.css" 
import SearchBar from "./Searchabr";
import { ShopContext } from "../context/shopContext";
import { useContext } from "react";

const Nav = () =>{
    const {cartItems} = useContext(ShopContext)
    const itemCount = cartItems.reduce((prev,current)=>{
        return prev + current.count
    },0)
    return(
        <div className="navbar navbar-dark navbar-expand-lg">
            <div className="container">
                <ul>
                    <li>
                        <Link to="/signin" className="singin_icon">
                            <p>sign-in</p><FontAwesomeIcon icon={faSignIn} />
                        </Link>
                    {/* </li>
                    <li> */}
                        <Link to="/signup" className="singup_icon">
                            <FontAwesomeIcon icon={faSignOut} /><p>sign-up</p>
                        </Link>
                    </li>
                </ul>
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
                            <FontAwesomeIcon className="icon" icon={faShoppingCart} />
                            {itemCount > 0 && <span className="cart-items-count">{itemCount}</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav