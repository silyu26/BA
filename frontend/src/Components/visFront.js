import 'bootstrap/dist/css/bootstrap.css';
import { useState,useEffect } from "react";

const Overview = ({token}) => {
    const [point,setPoint] = useState(null)
    const [levelName,setLevelName] = useState(' ')
    const [level,setLevel] = useState(null)
    const [rank,setRank] = useState(null)
    const [nextLN,setNextLN] = useState(' ')
    const [nextLP,setNextLP] = useState(null)

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

    return(
        <div className='Overview container'>
            <div className='row'>
                <h1 className='col-xs'>Hi Silyu!</h1>
                <p className='col-xs'>Current Points: {point}</p>
                <p className='col-xs'>Current Level: {level}-{levelName}</p>
                <p className='col-xs'>Next Level: {nextLN} at {nextLP} points!</p>
                <p className='col-xs'>Current Achievement:</p>
                <p className='col-xs'>Current Streaks:</p>
                <p className='col-xs'>Current Badges:</p>
            </div>
        </div>
    )
}

export default Overview