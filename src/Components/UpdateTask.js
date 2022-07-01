import React from 'react';
import { useParams} from 'react-router-dom';

const UpdateTask = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>Updating Task { id}</h1>
        </div>
    );
};

export default UpdateTask;