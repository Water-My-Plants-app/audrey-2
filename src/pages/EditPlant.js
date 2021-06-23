import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';


const EditPlant = () => {

    const [ plantInfo, setPlantInfo ] = useState({title:'',image:'',schedule:'',species:'',id:''});
    const history = useHistory();

    useEffect(() => {
            setPlantInfo(history.location.state.plant)
    }, []);


    return (

        <>
            <form>
                <h2>Edit {plantInfo.title}</h2>
                <label htmlFor="title">Name:
                    <input
                        type="text"
                        name="title"
                        value={plantInfo.title}

                    />
                </label>
            </form>
        </>

    )
}

export default EditPlant;