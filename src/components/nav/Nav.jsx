import { Link } from "react-router-dom";

export default function Nav() {
    
    
    return <>
        <div>
            <Link to="/">
                <h1>Blanca Amorós</h1>
            </Link>
            <ul>
                <li>
                <input type="checkbox" id="work"></input>
                <label htmlFor="work">Work</label>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/shop" target="_blank">Shop</Link>
                </li>
            </ul>
        </div>
    </>
}