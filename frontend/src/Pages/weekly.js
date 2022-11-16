import TodoForm from "../Components/Weekly/todoForm";
import Trello from "../Components/Weekly/trello";

const Weekly = () => {
    return(
        <div className="container" style={{'backgroundColor': '#789ABC'}}>
            <div className="row">
                <div className="col">
                  <Trello />
                </div>
                <div className="col">
                  <TodoForm />
                </div>    
            </div>
        </div>
    )
}
export default Weekly