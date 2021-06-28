// list of plants
import React from "react";
import styled from "styled-components";
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

const Home = ({ plants }) => {

    return (
        (!plants) ?
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
                            schedule={plant.h2o_frequency}
                            id={plant.id}
                            key={plant.id}
                        />
                    );
                })}
            </div>
    );
}

export default Home;