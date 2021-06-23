import React from 'react';

const EditPlant = ({ plants }) => {
    const handleChange = (event) => {
        console.log("hanlde change.")
    }

    return (
        <>
           {plants ? 
            plants.map( plant => {
                return (<form key={plant.id}>
                <h2>Edit {plant.nickname}</h2>
                <label htmlFor="title">Name:</label>
                    <input
                        type="text"
                        name="title"
                        value={plant.nickname}
                        onChange={handleChange}
                    />
                <label htmlFor="title">Species:</label>
                    <input
                        type="text"
                        name="title"
                        value={plant.species}
                        onChange={handleChange}
                    />
                <label htmlFor="title">Schedule:</label>
                    <input
                        type="text"
                        name="title"
                        value={plant.h2oFrequency}
                        onChange={handleChange}
                    />
                <label htmlFor="title">Image:</label>
                    <input
                        type="text"
                        name="title"
                        value={plant.image}
                        onChange={handleChange}
                    />
            </form>)
            }) : undefined}

        </>
    )
}

export default EditPlant;