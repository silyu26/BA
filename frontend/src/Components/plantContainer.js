import Zamia from './Plants/zamia'
import Bushy from './Plants/bushy'
import Dragon from './Plants/dragonTree'
import Pilea from './Plants/pilea'
import { useState, useEffect } from 'react'
import Render from './Plants/renderOne'

const Container = () => {
    const[seeds, setSeed] = useState(null)
    const[plants, setPlant] = useState(null)

    useEffect(() => {
        const fetchData = async ()=> {
            const response = await fetch('http://localhost:5000/api/todo/', {
                method: 'GET'
            })
            const json = await response.json()

            let S = []
            let P = []
            let i = 0
            while(i < json.length) {
                S.push(json[i].seed)
                P.push(json[i].plant)
                i++
            }
            setSeed(S)
            setPlant(P)
        }
        fetchData()
    },[])
    
    const renderPlant = ()=> {
        let PT = []
        for(let i = 0; i < seeds.length; i++) {
            PT.push(<Render plant={plants[i]} seed={seeds[i]}/>)
        }
        return PT
    }

    return(
        <div>
            {renderPlant()}
        </div>
    )
}
export default Container