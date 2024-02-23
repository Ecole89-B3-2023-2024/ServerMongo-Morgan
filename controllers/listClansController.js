const express = require('express');
const ListClans = require('../models/ListClans');
const Location = require('../models/Location');
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
        ListClans.insertMany(data.items)
    } catch (error) {
        console.error(error);
    }
}

router.post('/new', async(req, res) => {
    try {
        listLoc = await Location.find().select('-_id id');
        for (loc of listLoc) {
            loc = loc.id.toString();
            url = process.env.COC_URI + 'locations/' + loc + '/rankings/clans';

            fecthAndStoreData(url);
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