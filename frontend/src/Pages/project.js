import Chart from "../Components/Project/gantt"
import PlanForm from "../Components/Project/planForm"

const Project = () => {
    return(
        <div className="container" >
            <div className="row">
                <div className="col">
                  <Chart />
                </div>
                <div className="col">
                  <PlanForm />
                </div>    
            </div>
        </div>
    )
}
export default Project