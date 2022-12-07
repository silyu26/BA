import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Login from "../Pages/login"

const Navbar = () => {
    return(
        <header>
            <div className="navbar navbar-dark" style={{'backgroundColor' : '#F3ECBE'}}> 
                <div className="container">
                    <div className="row align-items-center">
                          <div className="col">
                            <Login />
                          </div>
                          <div className="col">
                            <Link to="/"><h2 style={{"color":"#59291B"}}>Home</h2></Link>
                          </div>
                          <div className="col">
                            <Link to="/weekly"><h2 style={{"color":"#59291B"}}>ToDos</h2></Link>
                          </div>
                          <div className="col">
                            <Link to="/project"><h2 style={{"color":"#59291B"}}>Plans</h2></Link>
                          </div>
                    </div>  
                </div>
            </div>
        </header>
    )
}

export default Navbar