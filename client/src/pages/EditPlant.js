import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const EditPlant = (props) => {
    const { plants } = props;
    const [edit, setEdit] = useState([...plants]);

    const { push } = useHistory();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const id = parseInt(event.target.id);

        setEdit(
            edit.map(item => {
                if (item.id === id) {
                    return { ...item, [name]: value }
                } else {
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
        <EditContainer>
            {plants ?
                plants.map((plant, i) => {
                    return (
                        <FormSection key={i} onSubmit={handleSave} >
                            <Heading>Edit {plant.nickname}</Heading>
                            <label htmlFor="nickname"></label>
                            <Input
                                id={plant.id}
                                type="text"
                                name="nickname"
                                value={edit[i].nickname}
                                onChange={handleChange}
                                placeholder="Nickname"
                            />
                            <label htmlFor="species"></label>
                            <Input
                                id={plant.id}
                                type="text"
                                name="species"
                                value={edit[i].species}
                                onChange={handleChange}
                                placeholder="Species"
                            />
                            <label htmlFor="h2oFrequency"></label>
                            <Input
                                id={plant.id}
                                type="text-field"
                                name="h2oFrequency"
                                value={edit[i].h2oFrequency}
                                onChange={handleChange}
                                placeholder="Schedule"
                            />
                            <label htmlFor="image"></label>
                            <Input
                                id={plant.id}
                                type="text"
                                name="image"
                                value={edit[i].image}
                                onChange={handleChange}
                                placeholder="Image"
                            />
                        </FormSection>)
                }) : undefined}
            <button onClick={handleSave}>save</button>
            <button onClick={()=> push("/addplant") }>add plant</button>
        </>
    )
}

export default EditPlant;