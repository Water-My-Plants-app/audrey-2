const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
    'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 7;

let plantList = [
    {
        id: '001',
        nickname: 'Amaryllis',
        species : 'Hippeastrum ',
        h2oFrequency: 'Water when top soil becomes dry.',
        image: 'Url',

    },
    {
        id: '002',
        nickname: 'African violet',
        species : 'Saintpaulia ',
        h2oFrequency: 'water them once the soil becomes slightly dry to the' +
            ' touch.',
        image: 'Url',
    },
    {
        id: '003',
        nickname: 'Gerbera',
        species : 'Gebera Jamesonii',
        h2oFrequency: 'Once the soil becomes slightly dry to the touch provide water',
        image: 'Url',
    },
    {
        id: '004',
        nickname: 'Spider Lily ',
        species : 'Hymenocallis littoralis ',
        h2oFrequency: 'Soil should be kept moist, but never soggy.',
        image: 'Url',
    },
    {
        id: '005',
        nickname: 'Medusa Plant',
        species : 'Tillandsia Caput Medusae',
        h2oFrequency: 'You can also give the plant a good soak with a watering can once a month',
        image: 'Url',
    },
    {
        id: '006',
        nickname: 'Boston Fern',
        species : ' Nephrolepis Exaltata \'Bostoniensis\' ',
        h2oFrequency: 'Moist soil at all times is advisable, without the soil becoming soggy. ',
        image: 'Url',
    }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
    const { authorization } = req.headers;
    if (authorization === token) {
        next();
    } else {
        res.status(403).json({ error: 'User must be logged in to do that.' });
    }
}

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'test user' && password === 'password') {
        req.loggedIn = true;
        res.status(200).json({
            payload: token
        });
    } else {
        res
            .status(403)
            .json({ error: 'Username or Password incorrect. Please see Readme' });
    }
});

app.get('/plants', authenticator, (req, res) => {
    setTimeout(() => {
        res.send(plantList);
    }, 1000);
});

app.get('/plants/:id', authenticator, (req, res) => {
    const plant = plantList.find(f => f.id == req.params.id);

    if (plant) {
        res.status(200).json(plant);
    } else {
        res.status(404).send({ msg: 'Plant not found' });
    }
});

app.post('/plants', authenticator, (req, res) => {
    const plant = { id: getNextId(), ...req.body };

    plantList = [...plantList, plant];

    res.send(plantList);
});

app.put('/plants/:id', authenticator, (req, res) => {
    const { id } = req.params;

    const plantIndex = plantList.findIndex(f => f.id == id);

    if (plantIndex > -1) {
        const plant = { ...plantList[plantIndex], ...req.body };

        plantList = [
            ...plantList.slice(0, plantIndex),
            plant,
            ...plantList.slice(plantIndex + 1)
        ];
        res.send(plantList);
    } else {
        res.status(404).send({ msg: 'Plant not found' });
    }
});

app.delete('/plants/:id', authenticator, (req, res) => {
    const { id } = req.params;

    plantList = plantList.filter(f => f.id !== Number(id));

    res.send(plantList);
});

function getNextId() {
    return nextId++;
}

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});