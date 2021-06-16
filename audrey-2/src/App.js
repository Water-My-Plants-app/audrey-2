import axios from 'axios';

function App() {
    axios.post('http://localhost:5000/login',
        {
            username: 'test user',
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
