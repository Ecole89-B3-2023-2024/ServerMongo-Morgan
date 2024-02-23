const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const mongoose = require('mongoose');
const locationController = require('./controllers/locationController');
const listClansController = require('./controllers/listClansController');
const listJoueursController = require('./controllers/listJoueursController');
const clanDetailController = require('./controllers/clanDetailController');
const joueurDetailController = require('./controllers/joueurDetailController');

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("connection à la BDD établie"))
    .catch((error) => console.log(error));

app.use(cors());

app.use(express.json());

app.use('/locations', locationController);
app.use('/listClans', listClansController);
app.use('/listJoueurs', listJoueursController);
app.use('/clans', clanDetailController);
app.use('/players', joueurDetailController);

app.listen(port, () => console.log(`Le serveur répond sur le port ${port}`));