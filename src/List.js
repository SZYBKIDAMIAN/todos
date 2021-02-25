import axios from 'axios';
import {TaskContext} from './TaskContext'
import {useContext, useState} from 'react'

const List = ({tasks}) => {


    const [task, setTask] = useContext(TaskContext);
    const [completed, setCompleted] = useState();



    const putCompleted = (id) => {

        let task_id = 0;
        const done = tasks.find((value, index) => {
            task_id = index
            return id === value._id ? true: false;
        }).done

        tasks[task_id].done = !done

    fetch(`https:damian.internship.animativ.dev/api/v1/tasks/${id}`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({done: !done})
        }).then(() => {
        console.log('value changed');
        setTask(tasks);
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
const refresh = () => {
        setTimeout(window.location.reload(), 3000)
    }

    const deleteTodoById = (id) => {
    setTask(state => state.filter(i => i.id !== id))
}

    const removeTodo = (id) => {
    axios.delete(`https:damian.internship.animativ.dev/api/v1/tasks/${id}`) 
    .then(() => deleteTodoById(id))
    .catch(err => console.log(err))
}

    const input = (putCompleted, id, task) => {
        const newPutCompleted = () => {
            putCompleted(id)
        }
        return <input type="checkbox" className='box' defaultChecked={task.done} onClick={newPutCompleted}></input>
    }

    return (
        <div className="page-container">
        <div className="task-list">
            {tasks.map((task) => (
                <div className="task-preview" key={task._id}>
                    <div className="round">
                    {input(putCompleted, task._id, task)}
                    <label for="checkbox"></label>
                    </div>
                    <p className='para'>{ task.name }</p>
                    <button onClick={() => {removeTodo(task._id); refresh();}}><span className="material-icons" id='delete-icon'>delete</span></button>
                </div>
            ))}
            </div>
        </div>
    );
    }
export default List;