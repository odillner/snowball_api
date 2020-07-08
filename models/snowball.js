const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner',
        required: true
    },
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Participants'
        }
    ],
})

snowBallSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.date
        delete returnedObject.__v
    }
})

snowBallSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Snowball', snowBallSchema)






