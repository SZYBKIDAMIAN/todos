import {useState} from 'react';


const Create = () => {
    const [body, setBody] = useState('');

    const handleSubmit = () => {
        
        const task = {body};

        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(task)
        }).then(() => {
        console.log('new task added');
        })
        }
        return ( 
        <div className="create">
            <form onSubmit={handleSubmit}>
                <input className='create-input' placeholder='Nowe zadanie' type="text" onChange={(e) => {
                    setBody(e.target.value);
                }} required value={body}/>
            <button>Dodaj</button>
            </form>
        </div>
        );

        

        }

export default Create;