const mongoose = require("mongoose");

const listClansSchema = new mongoose.Schema(
    {
        tag: {
            type: String
        },
        name: { 
            type: String
        },
        location: { 
            id: {
                type: Number
            },
            name: {
                type: String
            }
        },
        clanLevel: {
            type: Number
        },
        members: {
            type: Number
        },
        clanPoints: {
            type: Number
        },
        rank: {
            type: Number
        },
        previousRank: {
            type: Number
        }
    }
);

const ListClans = mongoose.model('ListClans', listClansSchema);
module.exports = ListClans;