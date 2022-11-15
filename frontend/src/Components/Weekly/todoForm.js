import {useState} from 'react'
import ErrorMessage from './error';
import 'bootstrap/dist/css/bootstrap.css';

const TodoForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [comment, setComment] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const todo = {title, content, comment}
        const response = await fetch('http://localhost:5000/api/todo/', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(response.ok) {
            setError(null)
            setTitle('')
            setComment('')
            setContent('')

            console.log("New todo added: ",json)
            //window.location.reload()
        }
    }
    
    return(
        <form className='create_todo' onSubmit={handleSubmit}>
            <h4>Add a todo here</h4>
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
            <div className='form-group'>
                <label>Comment:</label>
                <input type='text'
                       className='form-control'
                       onChange={(e) => setComment(e.target.value)}
                       value={comment} 
                       required />
            </div><br/>
            <button className='btn btn-primary' type='submit'>Add It!</button>
            {error && <ErrorMessage e={error} />}
        </form>
    )
}
export default TodoForm