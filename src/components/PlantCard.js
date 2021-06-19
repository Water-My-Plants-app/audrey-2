import React from 'react';

const PlantCard = ({title,species,schedule,image}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{species}</p>
            <h4>{schedule}</h4>
        </div>
    );
};

export default PlantCard;