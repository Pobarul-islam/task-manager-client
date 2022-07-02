import { list } from 'postcss';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const CompletedTask = () => {
 
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
        .then(data=>setTasks(data))
    }, [])
    
    const handleTaskDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?')
       
        if (proceed) {
            console.log('deleting task', id)
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = tasks.filter(task => task._id !== id);
                        setTasks(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <h1>Complete task {tasks.length}</h1>
            
            <ul>
                {
                    tasks.map(tasks => <li
                        key={tasks._id}
                    >{tasks.name}
                        <Link to={`/update/${tasks._id}`}><button className='btn ml-4 mt-4'>Update</button></Link>
                  
                        <button onClick={()=>handleTaskDelete(tasks._id)} className='btn btn-base ml-4 p-3'>Delete</button>
                       
                    </li>)
                }
            </ul>
        </div>
    );
};

export default CompletedTask;