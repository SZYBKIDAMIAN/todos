import {useState} from 'react';


const Create = () => {
    const [name, setName] = useState('');

    

    const handleSubmit = () => {
        
        const task = {name};
        fetch('https:damian.internship.animativ.dev/api/v1/tasks', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(task)
        }).then(() => {
        console.log('new task added');
        })
        .catch((err) => {
            console.log(err.message)
        })
        }
        return ( 
        <div className="create">
            <form onSubmit={handleSubmit}>
                <input className='create-input' placeholder='Nowe zadanie' type="text" onChange={(e) => {
                    setName(e.target.value);
                }} required value={name}/>
            <button>Dodaj</button>
            </form>
        </div>
        );

        

        }

export default Create;