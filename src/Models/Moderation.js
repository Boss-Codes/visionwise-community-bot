const { mongoose } = require('mongoose'); 

const Moderation = new mongoose.Schema({
    _id: Shcmea.Types.ObjectId,
    id: String,
    type: String,
    userId: String,
    username: String,
    moderatorID: String,
    moderatorUsername: String,
    reason: String,
    time: String
})

module.exports = mongoose.model('Moderation', Moderation)