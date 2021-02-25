import React, {useState,useContext, createContext} from 'react'
export const TaskContext = createContext();
export const TaskProvider = (props) => {
const [task, setTask] = useState(null);
    return (
    <TaskContext.Provider value={[task,setTask]}>{props.children}</TaskContext.Provider>
    );
}

