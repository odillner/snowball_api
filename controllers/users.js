const User = require('../models/user.js')

module.exports = {
    list: async (req, res, next) => {
        try {
            const users = await User.find({})

            res.json(users).end()
        } catch (err) {
            next(err)
        }
    },

    create: async (req, res, next) => {
        try {
            const user = new User(req.body)

            const result = await user.save()

            res.status(201).json(result).end()
        } catch (err) {
            next(err)
        }
    },

    read: async (req, res, next) => {
        try {
            const user = await User.findById(req.params.id)

            if (!user) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            res.json(user).end()
        } catch (err) {
            next(err)
        }
    },

    update: async (req, res, next) => {
        try {
            const user = await User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, useFindAndModify: false, runValidators: true})

            if (!user) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            res.json(user).end()
        } catch (err) {
            next(err)
        }
    },

    remove: async (req, res, next) => {
        try {
            const player = await User.findById(req.params.id)

            if (!player) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            await User.deleteOne({'_id':req.params.id})

            res.status(200).end()
        } catch (err) {
            next(err)
        }
    },
}