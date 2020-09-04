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
        ref: 'User',
        required: true
    },
    finished: {
        type: Boolean,
        default: false
    },
    failed: {
        type: Boolean,
        default: false
    },
    oddsTarget: {
        type: Number,
        default: 1
    },
    currentStake: {
        type: Number,
        default: 1
    },
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    steps: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Play'
        }
    ],
})

snowBallSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

snowBallSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Snowball', snowBallSchema)






