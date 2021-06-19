// list of plants
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
// import { Link } from "react-router-dom";
import PlantCard from "../components/PlantCard";
import {Heading} from "../styles/StyledComponents";

const Card = styled.div`
  text-align: center;
  width: 90%;
  margin: 3rem auto;
  padding: 10px;
  background-color: #d4d4aa;
  color: #000;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: #fff;
    color: #fff;
  }
`;

const Home = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    // get plant data from database
    useEffect(() => {
        console.log('home component has loaded')
        axios.get('https://buildweekplants.herokuapp.com/plants')
            .then(response => setPlants(response.data))
            .catch(error => console.log(error));
    }, []);

    const handleDelete = event => {
        setLoading(true);
        event.preventDefault();
        // console.log(event.target.value);
        axios
            .delete(
                `https://buildweekplants.herokuapp.com/${event.target.value}`
            )
            .then(response => {
                // console.log(response.data);
                setPlants(response);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        (plants.length < 0) ?
            <div>
                <Heading>My Plants</Heading>
                <Card>
                    <h2>No plants added yet</h2>
                </Card>
            </div>
            :
            <div>
                <Heading>My Plants</Heading>
                {plants.map(plant => {
                    console.log(plant)
                    return (
                        <PlantCard
                            title={plant.nickname}
                            species={plant.species}
                            schedule={plant.h2oFrequency}
                            key={plant.id}
                            handleDelete={handleDelete}
                        />
                    );
                })}
            </div>
    );
}
export default Home;