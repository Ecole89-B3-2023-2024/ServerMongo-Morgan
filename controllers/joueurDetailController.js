const express = require('express');
const ListJoueurs = require('../models/ListJoueurs');
const JoueurDetail = require('../models/JoueurDetail');
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
        JoueurDetail.insertMany(data)
    } catch (error) {
        console.error(error);
    }
}

router.get('/:id', async(req, res) => {
    try {
        const tag_id = '#' + req.params.id;
        const joueur = await JoueurDetail.findOne({ tag: tag_id});
        return res
            .status(201)
            .json({ status: 201, result: joueur});
    } catch (err) {
        return res
            .status(500)
            .json({ message: err.message });
    }
})

router.post('/new', async(req, res) => {
    try {
        listJoueurs = await ListJoueurs.find().select('-_id tag');
        for (joueur of listJoueurs) {
            joueur = joueur.tag;
            if (joueur) {
                url = process.env.COC_URI + 'players/' + encodeURIComponent(joueur);
                fecthAndStoreData(url);
            }
        }
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