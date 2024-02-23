const mongoose = require("mongoose");

const clanDetailSchema = new mongoose.Schema(
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
            },
            countryCode: {
                type: String
            }
        },
        clan: [{
            tag: {
                type: String
            },
            name: {
                type: String
            },
            clanLevel: {
                type: Number
            }
        }],
        clanLevel: {
            type: Number
        },
        members: {
            type: Number
        },
        description: {
            type: String
        },
        clanPoints: {
            type: Number
        }
    }
);

const ClanDetail = mongoose.model('ClanDetail', clanDetailSchema);
module.exports = ClanDetail;