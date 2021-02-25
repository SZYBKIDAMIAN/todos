import {useState, useEffect} from 'react';
import List from './List'
import useFetch from './useFetch';
import Create from './Create'


const Home = () => {

const {task: tasks, loading, error} = useFetch('https:damian.internship.animativ.dev/api/v1/tasks')

    return ( 
        <div className="home">
            <Create />
            {error && <div className="fetch-error" >Fetch error - we couldn't load tasks</div>}
            {loading && <div className="loading">Loading...</div>}
            {tasks && <List tasks={tasks} />}  
        </div>
    );
}

export default Home;