const User = require('../models/user.js')

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const id = req.params.id

            const user = await User
                .findById(id)

            if (!user) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            const friends = user.friends

            let result = []

            for (const friend of friends) {
                const newFriend = await User
                    .findById(friend)

                result = result.concat(newFriend)
            }

            res.json(result)
        } catch (err) {
            next(err)
        }
    },

    create: async (req, res, next) => {
        try {
            const id = req.params.id
            const newFriend = req.body.id

            const user = await User
                .findById(id)

            if (!user) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            const newFriends = user.friends.concat(newFriend)

            let newUser = user
            newUser.friends = newFriends

            const result = await User
                .findOneAndUpdate({_id: id}, newUser, {new: true, useFindAndModify: false})

            res.json(result)
        } catch (err) {
            next(err)
        }
    },

    remove: async (req, res, next) => {
        try {
            const id = req.params.id
            const oldFriend = req.body

            const user = await User
                .findById(id)

            if (!user) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            const newFriends = await user.friends.filter(friend => friend != oldFriend.id)

            let newUser = user
            newUser.friends = newFriends

            const result = await User
                .findOneAndUpdate({_id: id}, newUser, {new: true, useFindAndModify: false})

            res.json(result)
        } catch (err) {
            next(err)
        }
    }
}