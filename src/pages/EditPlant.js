import React, {useEffect} from 'react';

import { connect } from 'react-redux';
import { getPlants } from '../actions';

const EditPlant = (props) => {

    const { plants, getPlants } = props;

    useEffect(() => {
            getPlants();
    }, [getPlants]);
console.log(props)

    return (
        <>
           {plants.data ? 
            plants.data.map( plant => {
                return (<form>
                <h2>Edit {plant.nickname}</h2>
                <label htmlFor="title">Name:</label>
                    <input
                        type="text"
                        name="title"
                        value={plant.nickname}
                    />
                <label htmlFor="title">Species:</label>
                    <input
                        type="text"
                        name="title"
                        value={plant.species}
                    />
                <label htmlFor="title">Schedule:</label>
                    <input
                        type="text"
                        name="title"
                        value={plant.h2oFrequency}
                    />
                <label htmlFor="title">Image:</label>
                    <input
                        type="text"
                        name="title"
                        value={plant.image}
                    />
            </form>)
            }) : undefined}

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        plants: state.plants
    }
}

export default connect(mapStateToProps, {getPlants}) (EditPlant);