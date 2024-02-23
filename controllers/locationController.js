const express = require('express');
const Location = require('../models/Location');
const ListClans = require('../models/ListClans');
const ListJoueurs = require('../models/ListJoueurs');
const router = express.Router();
require('dotenv').config()

async function fecthAndStoreData(url) {
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${process.env.COC_TOKEN}`
            }
        });
        const data = await response.json();
        Location.insertMany(data)
    } catch (error) {
        console.error(error);
    }
}

router.get('/', async(req, res) => {
    try {
        const locations = await Location.find();
        return res
            .status(201)
            .json({ status: 201, items: locations});
    } catch (err) {
        return res
            .status(500)
            .json({ message: err.message });
    }
})

router.get('/:id/rankings/clans', async(req, res) => {
    try {
        const clans = await ListClans.find({ 'location.id': req.params.id});
        return res
            .status(201)
            .json({ status: 201, items: clans});
    } catch (err) {
        return res
            .status(500)
            .json({ message: err.message });
    }
})

router.get('/:id/rankings/players', async(req, res) => {
    try {
        console.log(req.params.id);
        const joueur = await ListJoueurs.find();
        return res
            .status(201)
            .json({ status: 201, items: joueur});
    } catch (err) {
        return res
            .status(500)
            .json({ message: err.message });
    }
})

router.get('/new', async(req, res) => {
    try {
        url = process.env.COC_URI + 'locations/32000087';
        fecthAndStoreData(url);
        return res
            .status(201)
            .json({ status: 201 });
    } catch (err) {
        return res
            .status(500)
            .json({ message: err.message });
    }
})

module.exports = router;