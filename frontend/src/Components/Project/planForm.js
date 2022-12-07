import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react'

const PlanForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [startDate, setStart] = useState(0)
    const [endDate, setEnd] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const plan = {title, content, startDate, endDate}
        console.log(plan)
        const response = await fetch('http://localhost:5000/api/plan/', {
            method: 'POST',
            body: JSON.stringify(plan),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        console.log("res: ",json)

        if(response.ok) {
            // setError(null)
            setTitle('')
            setStart('')
            setEnd('')
            setContent('')
            console.log("New todo added: ",json)
        }
    }

    return(
        <form className='create_plan' onSubmit={handleSubmit}>
            <h4>Add a plan here</h4>
            <div className='form-group'>
                <label>Title:</label>
                <input type='text'
                       className='form-control'
                       onChange={(e) => setTitle(e.target.value)}
                       value={title} 
                       required />
            </div>
            <div className='form-group'>
                <label>Content:</label>
                <input type='text'
                       className='form-control'
                       onChange={(e) => setContent(e.target.value)}
                       value={content} 
                       required />
            </div>
            <div className='form-grou'>
                <label>Start:</label>
                <DatePicker selected={startDate} onChange={(date) => setStart(date.getTime())} value={startDate}/>
            </div>
            <div className='form-grou'>
                <label>End:</label>
                <DatePicker selected={endDate} onChange={(date) => setEnd(date.getTime())} value={endDate}/>
            </div><br/>
            <button className='btn btn-primary' type='submit'>Add It!</button>
            
        </form>
    )
}
export default PlanForm