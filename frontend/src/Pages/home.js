import Container from "../Components/plantContainer";
import { React, useState, useEffect, useContext } from "react";
import { BushyPlantGenus } from "svg-plant";
import Login from "./login"
import Overview from "../Components/visFront";
import Conn from "../Components/connToGF";
import jwt_decode from 'jwt-decode';
import MyContext from "../Components/myContext";



const Home = () => {
    const [tokens, setToken] = useState("")
    // const [gameid, setId] = useState('thesis')
    // const [url, setUrl] = useState('http://localhost:8080/gamification')
    const [name, setName] = useState('')


    useEffect(() => {
        const newInterval = () => {
          const token = sessionStorage.getItem('access-token');
          if (!token) {
            
          } else {
            setToken(token)
            const tmp = jwt_decode(token)
            setName(tmp['given_name'])
            console.log("working")
          }
        }
        const checkToken = setTimeout(newInterval, 1000)
    
        return () => {
          if(tokens) {
            clearTimeout(checkToken); // Clean up the interval when the component unmounts
            console.log("cleaning up")
          }
          }
    }, []);
    /*
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
    */

    return(
        <div className="container">
            <div className="row">
                <div className="col" >
                    <Container />
                </div>
                <div className="col-3">
                    <Overview name={name} />
                </div>
            </div>
            
        </div>
    )
}
export default Home