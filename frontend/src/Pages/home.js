import Container from "../Components/plantContainer";
import { useState, useEffect } from "react";
import { BushyPlantGenus } from "svg-plant";
import Login from "./login"
import Overview from "../Components/visFront";
import Conn from "../Components/connToGF";
import jwt_decode from 'jwt-decode';



const Home = () => {
    const [token, setToken] = useState("")
    const [gameid, setId] = useState('thesis')
    const [url, setUrl] = useState('http://localhost:8080/gamification')
    const [temp, setTmp] = useState(null)
    const [items, setItems] = useState(null);

    useEffect(() => {
      const items = sessionStorage.getItem('access-token');
      if (items) {
      setItems(items);
      }
      const tmp = jwt_decode(items)
      const tmp2 = tmp['sub']
      setToken(tmp2)
      console.log("token",token)
    }, []);
    useEffect(() => {
        const validate = async() => {
            const cleanUp = false
            
            const response = await fetch('http://localhost:8080/gamification/games/validation', {
                mode: 'cors',
                method: 'POST',
                headers: {
                  //"access-token": items,
                  'Authorization': 'Basic ' + btoa('silyu:'+token),
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                }
              })
            const json = await response.json()
            console.log("res: ",json)
            return () => {
                cleanUp = true
              }
        }
        validate()
    },[items])

    return(
        <div className="container">
            <div className="row">
                <div className="col" >
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