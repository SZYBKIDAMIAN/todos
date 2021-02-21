import axios from 'axios';
import {TaskContext} from './TaskContext'
import {useContext} from 'react'

const List = ({tasks}) => {

    const [task, setTask] = useContext(TaskContext);


    const deleteTodoById = (id) => {
    setTask(state => state.filter(i => i.id !== id))
}

    const removeTodo = (id) => {
    axios.delete(`http://localhost:8000/tasks/${id}`)
    .then(() => deleteTodoById(id))
    .catch(err => console.log(err))
}


    return ( 
        <div className="page-container">
        <div className="task-list">
            {tasks.map((task) => (
                <div className="task-preview" key={task.id}>
                    <div className="round">
                    <input type="checkbox" className='box'></input>
                    <label for="checkbox"></label>
                    </div>
                    <p className='para'>{ task.body }</p>
                    <button onClick={removeTodo(task.id)}><span className="material-icons" id='delete-icon'>delete</span></button>
                </div>
            ))}
            </div>
        </div>
    );
    }
export default List;