import React, { useState } from 'react';

const PlantCard = (props) => {
    const [editing, setEditing] = useState(false);

    const {title, id, species, schedule, image} = props;
    return (
        <div>
            <div key={id}>
                <h1>{title}</h1>
                <p>{species}</p>
                <h4>{schedule}</h4>
            </div>
        </div>
    );
};

export default PlantCard;