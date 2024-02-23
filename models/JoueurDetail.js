const mongoose = require("mongoose");

const joueurDetailSchema = new mongoose.Schema(
    {
        tag: {
            type: String
        },
        name: { 
            type: String
        },
        role: { 
            type: String
        },
        townHallLevel: { 
            type: Number
        },
        trophies: { 
            type: Number
        },
        bestTrophies: { 
            type: Number
        },
        builderHallLevel: { 
            type: Number
        },
        builderBaseTrophies: { 
            type: Number
        },
        bestBuilderBaseTrophies: { 
            type: Number
        },
        warStars: { 
            type: Number
        },
        attackWins: { 
            type: Number
        },
        defenseWins: { 
            type: Number
        },
        warPreference: { 
            type: String
        },
        donations: { 
            type: Number
        },
        donationsReceived: { 
            type: Number
        },
        clanCapitalContributions: { 
            type: Number
        },
        clan: {
            tag: {
                type: String
            },
            name: {
                type: String
            },
            clanLevel: {
                type: Number
            }
        },
        league: {
            name: {
                type: String
            }
        },
        legendStatistics: {
            legendStatistics: {
                type: Number
            },
            currentSeason: {
                rank: {
                    type: String
                },
                trophies: {
                    type: Number
                }
            },
            bestSeason: {
                rank: {
                    type: String
                },
                trophies: {
                    type: Number
                }
            },
            previousSeason: {
                rank: {
                    type: String
                },
                trophies: {
                    type: Number
                }
            }
        }
    }
);

const JoueurDetail = mongoose.model('JoueurDetail', joueurDetailSchema);
module.exports = JoueurDetail;