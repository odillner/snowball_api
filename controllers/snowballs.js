const Snowball = require('../models/snowball.js')
const User = require('../models/user.js')

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const snowballs = await Snowball.find({})

            res.json(snowballs)
        } catch (err) {
            next(err)
        }
    },

    create: async (req, res, next) => {
        try {
            const body = req.body

            const user = await User.findById(body.owner)

            const snowball = new Snowball({
                name: body.name,
                owner: body.owner,
                date: new Date(),
            })

            const newSnowball = await snowball.save()

            user.ownSnowballs = user.ownSnowballs.concat(newSnowball.id)
            await user.save()

            res.status(201).json(newSnowball)
        } catch (err) {
            next(err)
        }
    },

    getById: async (req, res, next) => {
        try {
            const snowball = await Snowball.findById(req.params.id)

            if (!snowball) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            res.json(snowball)
        } catch (err) {
            next(err)
        }
    },

    update: async (req, res, next) => {
        try {
            const body = req.body
            const snowball = await Snowball.findOneAndUpdate({_id: req.params.id}, body, {new: true, useFindAndModify: false, runValidators: true})

            if (!snowball) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            res.json(snowball).end()
        } catch (err) {
            next(err)
        }
    },

    remove: async (req, res, next) => {
        try {
            const snowball = await Snowball.findById(req.params.id)

            if (!snowball) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            await Snowball.deleteOne({'_id':req.params.id})

            res.status(200).end()
        } catch (err) {
            next(err)
        }
    },
}