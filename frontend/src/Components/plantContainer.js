import Zamia from './Plants/zamia'
import Bushy from './Plants/bushy'
import Dragon from './Plants/dragonTree'
import Pilea from './Plants/pilea'
import { useState, useEffect, useMemo } from 'react'
import Render from './Plants/renderOne'

const Container = () => {
    const[seeds, setSeed] = useState(null)
    const[plants, setPlant] = useState(null)
    const[status, setStatus] = useState(null)
    const[count, setCount] = useState(0)
    //const memo = useMemo(() => fetchData(),seeds)

    useEffect(() => {
        let cleanup = false
        const fetchDataS = async ()=> {
            const response = await fetch('http://localhost:5000/api/todo/', {
                method: 'GET'
            })
            if(!cleanup) {
            const json = await response.json()
            //console.log(json)

            let S = []
            let P = []
            let T = []
            let i = 0
            while(i < json.length) {
                S.push(json[i].seed)
                P.push(json[i].plant)
                T.push(json[i].status)
                i++
            }
            setPlant(P)
            setSeed(S)
            setStatus(T)
            setCount(S.length)
            }
            return() => {
                cleanup = true //VERY IMPORTANT!!!------------------CLEAN UP FUNCTION-----------------!!!!!!!!!!!!!!
            }
        }
        fetchDataS()
    },[])
    
    const renderPlant = ()=> {
        let PT = []
        for(let i = 0; i < count; i++) {
            PT.push(<div className='col' key={i}><Render plant={plants[i]} seed={seeds[i]} status = {status[i]} /></div>)
        }
        return PT
    }

    return(
        <div className='container' style={{width: '750px', height: '1000px' }}>
            <div className='row'>
                {renderPlant()}
            </div>
        </div>
    )
}
export default Container