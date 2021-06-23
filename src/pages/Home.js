// list of plants
import React, {useEffect} from "react";
import styled from "styled-components";
import PlantCard from "../components/PlantCard";
import {Heading} from "../styles/StyledComponents";

import { connect } from 'react-redux';
import { getPlants } from '../actions';

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

const Home = (props) => {
    // the plants variable holds application state connected to redux store.
    const { plants, getPlants } = props;

    // // get plant data from API
    useEffect(() => {
       getPlants();
    }, [getPlants]);

    return (
        (!plants.data) ?
            <div>
                <Heading>My Plants</Heading>
                <Card>
                    <h2>No plants added yet</h2>
                </Card>
            </div>
            :
            <div>
                <Heading>My Plants</Heading>
                {plants.data.map(plant => {
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

const mapStateToProps = (state) => {
    return {
        plants: state.plants
    }
}

export default connect(mapStateToProps,{getPlants}) (Home);