import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Login from "../Pages/login"

const Navbar = () => {
    return(
        <header>
            <div className="navbar navbar-dark" style={{'backgroundColor' : '#2C454B'}}> 
                <div className="container">
                    <div className="row align-items-center">
                          <div className="col">
                            <Login />
                          </div>
                          <div className="col">
                            <Link to="/"><h2 style={{"color":"#CCCCCC"}}>Home</h2></Link>
                          </div>
                          <div className="col">
                            <Link to="/weekly"><h2 style={{"color":"#CCCCCC"}}>ToDos</h2></Link>
                          </div>
                          <div className="col">
                            <Link to="/project"><h2 style={{"color":"#CCCCCC"}}>Plans</h2></Link>
                          </div>
                    </div>  
                </div>
            </div>
        </header>
    )
}

export default Navbar