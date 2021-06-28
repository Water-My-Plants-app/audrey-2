import React, { useState } from 'react';
import { axiosWithAuth } from '../utilities/axiosCalls';
import { useHistory } from 'react-router-dom';
import { EditContainer, FormSection, Input, Heading} from '../styles/StyledComponents';

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
        const id = edit.map( item => item.id);
        id.forEach(id => {
            axiosWithAuth()
            .put(`/api/plants/${id}`, edit[id -1])
            .then(res => {
                push("/home")
                window.location.reload();
            })
            .catch(err => console.log(err))
        })

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
                            <label htmlFor="h2o_frequency"></label>
                            <Input
                                id={plant.id}
                                type="text-field"
                                name="h2o_frequency"
                                value={edit[i].h2o_frequency}
                                onChange={handleChange}
                                placeholder="Schedule"
                            />                            
                        </FormSection>)
                }) : undefined}
            <button onClick={handleSave}>save</button>
            <button onClick={()=> push("/addplant") }>add plant</button>
        </EditContainer>
    )
}

export default EditPlant;