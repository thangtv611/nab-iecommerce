const mongoose = require('mongoose');

const {Schema} = mongoose;

module.exports = mongoose.model('Activity', new Schema({
    username      : String,
    searchCriteria: String,
    agentInfo     : String,
    createdAt     : {
        type: Date,
        default: Date.now()
    }
}));