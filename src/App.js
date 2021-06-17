import axios from 'axios';

function App() {
    axios.get('https://www.dnd5eapi.co/api/monsters')
        .then(response => console.log(response))
        .catch(error => console.log(error))

    return (
        <div className="App">
            <h1>hello there...</h1>
        </div>
    );
}

export default App;
