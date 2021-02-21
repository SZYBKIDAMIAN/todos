import { useState, useEffect, useContext } from 'react'
import {TaskContext} from './TaskContext'

const useFetch = (url) => {

    const [task, setTask] = useContext(TaskContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
    fetch(url)
    .then(res => {
            if(!res.ok) {
                throw Error("Fetch error - we couldn't load tasks");
            }
            return res.json();
        })
    .then(data => {
            setTask(data);
            setLoading(false);
            setError(null);
        })
    .catch(err => {
        setLoading(false);
        setError(err.message);
    })
}, []);
    

    

return {task, loading, error}
}

export default useFetch;