import React, { useState } from 'react';

const EditPlant = (props) => {
    const { plants } = props;
    const [edit, setEdit] = useState(
        plants.map( item => {
            return{
                id: item.id,
                nickname: item.nickname,
                species: item.species,
                h2oFrequency: item.h2oFrequency,
                image: item.image
            }
        })
    );

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const id = parseInt(event.target.id);

        setEdit(
            edit.map( item => {
                if (item.id === id){
                    return {...item,[name]: value}
                }else {
                    return item
                }
            })
        )
        
    }

    const handleSave = (event) => {
        event.preventDefault();
        console.log("saved", edit)
    }

    return (
        <>
           {plants ? 
            plants.map( (plant,i) => {
                return (
                <form key={i} onSubmit={handleSave} >
                <h2>Edit {plant.nickname}</h2>
                <label htmlFor="nickname">Name:</label>
                    <input
                        id={plant.id}
                        type="text"
                        name="nickname"
                        value={edit[i].nickname}
                        onChange={handleChange}
                    />
                <label htmlFor="species">Species:</label>
                    <input
                        id={plant.id}
                        type="text"
                        name="species"
                        value={edit[i].species}
                        onChange={handleChange}
                    />
                <label htmlFor="h2oFrequency">Schedule:</label>
                    <input
                        id={plant.id}
                        type="text-field"
                        name="h2oFrequency"
                        value={edit[i].h2oFrequency}
                        onChange={handleChange}
                    />
                <label htmlFor="image">Image:</label>
                    <input
                        id={plant.id}
                        type="text"
                        name="image"
                        value={edit[i].image}
                        onChange={handleChange}
                    />
            </form>)
            }) : undefined}

            <button onClick={handleSave}>save</button>
        </>
    )
}

export default EditPlant;