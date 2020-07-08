const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        maxlength: 20,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
    },
    snowballs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Snowball'
        }
    ],
    snowball_history: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Snowball History'
        }
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Friends'
        }
    ],
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('user', userSchema)






