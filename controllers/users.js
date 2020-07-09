const User = require('../models/user.js')
const Snowball = require('../models/snowball.js')

const bcrypt = require('bcrypt')

module.exports = {
    list: async (req, res, next) => {
        try {
            const users = await User
                .find({}).populate('own_snowballs')

            res.json(users)
        } catch (err) {
            next(err)
        }
    },

    create: async (req, res, next) => {
        try {
            const body = req.body

            if (!body.password) {
                let err = new Error('No password field')
                err.name = 'ValidationError'
                throw err
            }

            if (body.password.length < 8) {
                let err = new Error('Too short password')
                err.name = 'ValidationError'
                throw err
            }

            const saltRounds = 10
            const passwordHash = await bcrypt.hash(body.password, saltRounds)

            const user = new User({
                username: body.username,
                name: body.name,
                email: body.email,
                passwordHash,
            })

            const result = await user.save()

            res.status(201).json(result)
        } catch (err) {
            next(err)
        }
    },

    read: async (req, res, next) => {
        try {
            const id = req.params.id

            const user = await User
                .findById(id)
                .populate('snowballs')

            if (!user) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            res.json(user)
        } catch (err) {
            next(err)
        }
    },

    update: async (req, res, next) => {
        try {
            const id = req.params.id
            const body = req.body

            const user = await User
                .findOneAndUpdate({_id: id}, body, {new: true, useFindAndModify: false, runValidators: true})

            if (!user) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            res.json(user)
        } catch (err) {
            next(err)
        }
    },

    remove: async (req, res, next) => {
        try {
            const id = req.params.id

            const player = await User
                .findById(id)

            if (!player) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            await User
                .deleteOne({'_id':id})
            await Snowball
                .deleteMany({'owner':id})

            res.status(200).end()
        } catch (err) {
            next(err)
        }
    },
}