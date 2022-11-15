import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <header>
            <div className="navbar navbar-dark" style={{'backgroundColor' : '#224466'}}> 
                <div className="container">
                    <div className="row align-items-center">
                          <div className="col">
                            <Link to="/"><h2 style={{"color":"orange"}}>Home</h2></Link>
                          </div>
                          <div className="col">
                            <Link to="/weekly"><h2 style={{"color":"orange"}}>ToDos</h2></Link>
                          </div>
                          <div className="col">
                            <Link to="/project"><h2 style={{"color":"orange"}}>Plans</h2></Link>
                          </div>
                    </div>  
                </div>
            </div>
        </header>
    )
}

export default Navbar