const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
    {
        id: {
            type: Number
        },
        name: { 
            type: String
        }
    }
);

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;