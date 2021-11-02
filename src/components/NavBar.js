import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom";

const NavBar = () => {
    
    return(
            <Navbar bg="dark" variant="dark" className="p-3" >
                    <Navbar.Brand to="/">Tasks React</Navbar.Brand>
                <Nav>
                    <Nav.Item>
                    <Link className="nav-link" to="/">Tasks List</Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Link className="nav-link" to="/tasks/new">Create Task</Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
    )
}

export default NavBar