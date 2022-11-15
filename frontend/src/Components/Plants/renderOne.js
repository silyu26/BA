import Zamia from './zamia'
import Bushy from './bushy'
import Dragon from './dragonTree'
import Pilea from './pilea'

const Render = (props) => {
    let p = props.plant
    let s = props.seed
    const renderRandomPlant = () => {
        switch(p) {
            case "Zamia":
                return <Zamia seedd={s} />
            case "Bushy":
                return <Bushy seedd={s} />
            case "Dragon": 
                return <Dragon seedd={s} />
            case "Pilea":
                return <Pilea seedd={s} />
            default: 
                return null   
        }
    }

    return(
        <div>
            {renderRandomPlant()}
        </div>
    )
}
export default Render