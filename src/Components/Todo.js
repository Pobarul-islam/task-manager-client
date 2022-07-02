import React from 'react';
const Todo = () => {
    const handleAddTask = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const user = { name };


        // send data to the server

        fetch('https://kinder-poutine-83209.herokuapp.com/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('Your Task Added Successfully !!')
                event.target.reset();
        })
    }
    return (
        <div className='card'>
            <h1 className='text-2xl '>Please Add a new Task</h1>
            <form className='mt-5' onSubmit={handleAddTask}>
                <input type="text" name='name' placeholder="Add Your Task" class="input input-bordered" required />
                <input className='btn ml-2' type="submit" value={'Add Task'} /> <br />
                
            </form>
    
            
        </div>
        
    );
};

export default Todo;