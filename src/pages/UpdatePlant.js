import {axiosWithAuth} from "../utilities/axiosCalls";


const handleDelete = (event) => {
    console.log(plants)
    console.log(event.target.id);
    axiosWithAuth().delete(`https://buildweekplants.herokuapp.com/plants/${event.target.id}`)
        .then(response=> setPlants(response.data))
        .catch(error=> console.log(error))

};