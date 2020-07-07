const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    snowballs: {
        type: Array
    },
    snowball_history: {
        type: Array
    },
    friends: {
        type: Array
    }
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.date
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('user', userSchema)






