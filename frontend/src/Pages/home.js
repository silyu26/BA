import Container from "../Components/plantContainer";
import { useState } from "react";
import { BushyPlantGenus } from "svg-plant";
import Login from "./login"
import Overview from "../Components/visFront";

const Home = () => {
    const [token, setToken] = useState('silyu:296c4fa5-6674-490c-81a6-de0cf4ec508e')
    const [gameid, setId] = useState('thesis')
    const [url, setUrl] = useState('http://localhost:8080/gamification')
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Container />
                </div>
                <div className="col">
                    <Overview token={token} />
                </div>
            </div>
        </div>
    )
}
export default Home