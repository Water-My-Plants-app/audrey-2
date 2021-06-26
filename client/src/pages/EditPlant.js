import React, { useState } from 'react';
import styled from 'styled-components';
import {
    Input,
    Button,
    Heading,
} from '../styles/StyledComponents'

const EditContainer = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: .5rem 0;
  margin: 1rem auto;
  background-color: #C1FFA6;
  color: #000;
  border: 1px solid grey;
  border-radius: 2rem;
  -webkit-box-shadow:0 .5rem .5rem grey;
  -moz-box-shadow:0 .5rem .5rem grey;
  box-shadow:0 1rem 1rem grey;
`;

const FormSection = styled.div`
 display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  padding: 1rem 0;
  margin: 1rem auto;
  background-color: #C1FFA6;
  color: #000;
  border: 1px solid grey;
  border-radius: 2rem;
  -webkit-box-shadow:0 .5rem .5rem grey;
  -moz-box-shadow:0 .5rem .5rem grey;
  box-shadow:0 1rem 1rem grey;
`;


const EditPlant = (props) => {
    const { plants } = props;
    const [edit, setEdit] = useState([...plants]);

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

            <Button onClick={handleSave}>save</Button>
        </EditContainer>

    )
}

export default EditPlant;