const mongoose = require("mongoose");

const listJoueursSchema = new mongoose.Schema(
    {
        tag: {
            type: String
        },
        name: { 
            type: String
        },
        clan: { 
            tag: {
                type: String
            },
            name: {
                type: String
            }
        },
        league: { 
            id: {
                type: Number
            },
            name: {
                type: String
            }
        },
        expLevel: {
            type: Number
        },
        trophies: {
            type: Number
        },
        attackWins: {
            type: Number
        },
        defenseWins: {
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

const ListJoueurs = mongoose.model('ListJoueurs', listJoueursSchema);
module.exports = ListJoueurs;