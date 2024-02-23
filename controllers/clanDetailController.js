const express = require('express');
const ListClans = require('../models/ListClans');
const ClanDetail = require('../models/ClanDetail');
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
        ClanDetail.insertMany(data)
    } catch (error) {
        console.error(error);
    }
}

router.get('/:id', async(req, res) => {
    try {
        const tag_id = '#' + req.params.id;
        const joueur = await ClanDetail.findOne({ tag: tag_id});
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
        listClans = await ListClans.find().select('-_id tag');
        for (clan of listClans) {
            clan = clan.tag;
            if (clan) {
                url = process.env.COC_URI + 'clans/' + encodeURIComponent(clan);
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