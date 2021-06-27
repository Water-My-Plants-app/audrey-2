import React from 'react';
import { useHistory } from 'react-router-dom';

const PlantCard = (props) => {
    const history = useHistory();
    const {title, id, species, schedule, image} = props;

    return (
        <div>
            <div key={id} onClick={()=>history.push(`/plants/${id}`,{plant:{title,id,species,schedule,image}})}>
                <h1>{title}</h1>
                <p>{species}</p>
                <h4>{schedule}</h4>
            </div>
        </div>
    );
};

export default PlantCard;