const mongoose = require('mongoose')

const playSchema = mongoose.Schema({
    play: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    snowball: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Snowball',
    },
    result: {
        type: Boolean,
        default: true
    },
    finished: {
        type: Boolean,
        default: false
    },
    odds: {
        type: Number,
    },
})

playSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Play', playSchema)






