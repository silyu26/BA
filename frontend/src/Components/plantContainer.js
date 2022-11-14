import Zamia from './Plants/zamia'
import Bushy from './Plants/bushy'
import Dragon from './Plants/dragonTree'
import Pilea from './Plants/pilea'

const Container = () => {
    return(
        <div>
            <Bushy seedd="12" />
            <Dragon seedd="12" />
            <Pilea seedd="12" />
            <Zamia seedd="12" />
        </div>
    )
}
export default Container