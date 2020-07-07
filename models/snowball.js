const mongoose = require('mongoose')

const snowBallSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    numberOfSteps: {
        type: Number,
        default: 100
    },
    currentStep: {
        type: Number,
        default: 0
    },
    owner: {
        type: String
    },
    participants: {
        type: Array
    }
})

snowBallSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.date
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Snowball', snowBallSchema)






