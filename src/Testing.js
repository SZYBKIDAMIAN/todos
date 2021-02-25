import { useEffect, useState} from 'react'
import React from 'react'


const Testing = () => {


    const [tasks, setTasks] = useState([])
    

  useEffect(() => {
    fetch('https:damian.internship.animativ.dev/api/v1/tasks')
    .then(res => {
            if(!res.ok) {
                throw Error("Fetch error - we couldn't load tasks");
            }
            return res.json();
        })
    .then(data => {
            setTasks(data.tasks);
            console.log(data);
        })
    .catch(err => {
        console.log(err.message);
    })
}, []);
return (
    <div className="todos">
      {tasks.map((task) => (
        <h3>{task.name}</h3>
      ))}
    </div>
);
}
export default Testing;