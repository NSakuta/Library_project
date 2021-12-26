import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand bg-dark mb-3">
            <div className="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/books">
                            Books
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/add-book">
                            Add book
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

