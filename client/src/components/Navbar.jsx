import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <header className="navbar">

        <input type="checkbox" id="toggle"/>
        <label htmlFor="toggle"><img src="/img/hamburger_menu.svg" alt="" /></label>
            <nav className="submenu">    
                <ul>
                    <li>
                        <Link to="/store">Store</Link>
                    </li>
                    <li>
                        <Link to="/albums">Albums</Link>
                    </li>
                    <li>
                        <Link to="/support">Support</Link>
                    </li>
                    <li>
                        <Link to="/history">History</Link>
                    </li>
                    <li>
                        <Link to="/concerts">Concerts</Link>
                    </li>
                    
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                </ul>
                <section>
                    <button>
                        <Link to="/register" href="">Register</Link>
                    </button>
                    <button>
                        <Link to="/login" href="">Login</Link>
                    </button>
                </section>
                    <span>Register for more information</span>
            </nav>

            <section>
                <span>EN</span>
                <img src="/img/usaFlag.svg" alt="" />
            </section>
        </header>
    )
}