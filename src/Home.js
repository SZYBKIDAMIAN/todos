import {useState, useEffect} from 'react';
import List from './List'
import useFetch from './useFetch';
import Create from './Create'

const Home = () => {

const {task: tasks, loading, error} = useFetch('http://localhost:8000/tasks')

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