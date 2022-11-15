import Navbar from "../Components/navbar";
import Container from "../Components/plantContainer";
import Render from "../Components/Plants/renderOne";

const Home = () => {
    return(
        <div>
            
            <Render plant="Zamia" seed={12} />
        </div>
    )
}
export default Home