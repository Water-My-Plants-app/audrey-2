// list of plants
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {axiosWithAuth} from "../utilities/axiosCalls";
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
    // const [loading, setLoading] = useState(true);

    // get plant data from API
    useEffect(() => {
        axiosWithAuth()
            .get('https://buildweekplants.herokuapp.com/plants')
            .then(response => setPlants(response.data))
            .catch(error => console.log(error));
    }, []);

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
                    return (
                        <PlantCard
                            title={plant.nickname}
                            species={plant.species}
                            schedule={plant.h2oFrequency}
                            id={plant.id}
                            key={plant.id}
                        />
                    );
                })}
            </div>
    );
}
export default Home;