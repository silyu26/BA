import 'bootstrap/dist/css/bootstrap.css';
import { useState,useEffect } from "react";

const Overview = ({name}) => {
    const [point,setPoint] = useState(null)
    const [levelName,setLevelName] = useState(' ')
    const [level,setLevel] = useState(null)
    const [rank,setRank] = useState(null)
    const [nextLN,setNextLN] = useState(' ')
    const [nextLP,setNextLP] = useState(null)

    /*
    useEffect(() => {
        const fetchStatus = async ()=> {
            const response = await fetch('http://localhost:8080/gamification/visualization/status/thesis/silyu', {
                mode: 'cors',
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + btoa(token),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            const json = await response.json()
            if(response.ok) {
                const point_json = (json.memberPoint)
                setPoint(point_json)
                const levelN_json = (json.memberLevelName)
                setLevelName(levelN_json)
                const nLevelN_json = (json.nextLevelName)
                setNextLN(nLevelN_json)
                const nLevelP_json = (json.nextLevelPoint)
                setNextLP(nLevelP_json)
                const level_json = (json.memberLevel)
                setLevel(level_json)
                const rank_json = (json.rank)
                setRank(rank_json)
            }
        }

        fetchStatus()
    }, [])

    const handleClick = async ()=> {
        const response = await fetch('http://localhost:8080/gamification/visualization/actions/thesis/first/silyu', {
                mode: 'cors',
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + btoa(token),
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            console.log(response)
            const json = await response.json()

    }
    */

    return(
        <div className='Overview container'>
            <div className='row'>
                <h1 className='col-xs' style={{color: '#2C454B'}}>Hi {name}!</h1>
                <div className='col-xs' style={{color: '#92E3A9'}}>Current Points: <p style={{color: '#CDAF7B'}}>666{point}</p></div>
                <div className='col-xs' style={{color: '#92E3A9'}}>Current Level: <p style={{color: '#CDAF7B'}}>Newbie{level}-{levelName}</p></div>
                <div className='col-xs' style={{color: '#92E3A9'}}>Next Level: <p style={{color: '#CDAF7B'}}>Starter{nextLN} at 999{nextLP} points!{point}</p></div>
                <div className='col-xs' style={{color: '#92E3A9'}}>
                    Current Achievement:
                    <p style={{color: '#CDAF7B'}}>Welcome!</p> 
                    <p style={{color: '#CDAF7B'}}>First ToDo Added!</p>
                    <p style={{color: '#CDAF7B'}}>First Plan Added!</p>
                </div>
                <div className='col-xs' style={{color: '#92E3A9'}}>
                    Current Badges:
                    <div>
                        <img src={require('./Pics/Badges/badges1.1.jpg')} style={{width:'50px',height:'50px'}} alt="badges1.1"></img>
                        <img src={require('./Pics/Badges/badges1.2.jpg')} style={{width:'50px',height:'50px'}} alt="badges1.1"></img>
                        <img src={require('./Pics/Badges/badges1.3.jpg')} style={{width:'50px',height:'50px'}} alt="badges1.1"></img>
                        <img src={require('./Pics/Badges/badges2.3.jpg')} style={{width:'50px',height:'50px'}} alt="badges1.1"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview