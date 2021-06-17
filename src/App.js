import axios from 'axios';

function App() {
    axios.post('https://water-my-plants-node.herokuapp.com/',
        {
            username: 'testUser',
            password: 'password',
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))

  return (
    <div className="App">
        <h1>hello there...</h1>
    </div>
  );
}

export default App;
