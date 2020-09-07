const User = require('../models/user.js')

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const id = req.params.id

            const user = await User
                .findById(id)
                .populate('friends')

            if (!user) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            res.json(user.friends)
        } catch (err) {
            next(err)
        }
    },

    create: async (req, res, next) => {
        try {
            const id = req.params.id
            const newFriend = req.params.id

            const user = await User
                .findById(id)

            if (!user) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            user.friends = user.friends.concat(newFriend)

            const newUser = await User.save()

            res.json(newUser)
        } catch (err) {
            next(err)
        }
    },

    remove: async (req, res, next) => {
        try {
            const id = req.params.id
            const friendId = req.params.friendId

            const user = await User
                .findById(id)

            if (!user) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            user.friends = await user.friends.filter(friend => friend != friendId.id)

            const newUser = await User.save()

            res.json(newUser)
        } catch (err) {
            next(err)
        }
    }
}