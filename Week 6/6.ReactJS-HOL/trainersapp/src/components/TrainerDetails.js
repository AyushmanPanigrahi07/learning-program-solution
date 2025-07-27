import React from 'react';
import { useParams } from 'react-router-dom';
import trainersMock from '../trainersmock';

const TrainerDetails = () => {
    const { id } = useParams(); 
    const trainer = trainersMock.find(t => t.trainerId === id);

    if (!trainer) {
        return <h2>Trainer not found!</h2>;
    }

    return (
        <div>
            <h3>Trainers Details</h3>
            <h4>{trainer.name} ({trainer.technology})</h4>
            <p>{trainer.email}</p>
            <p>{trainer.phone}</p>
            <h4>Skills</h4>
            <ul>
                {trainer.skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
        </div>
    );
};

export default TrainerDetails;