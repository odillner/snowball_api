const Snowball = require('../models/snowball.js')

module.exports = {
    list: async (req, res, next) => {
        try {
            const snowballs = await Snowball.find({})

            res.json(snowballs).end()
        } catch (err) {
            next(err)
        }
    },

    create: async (req, res, next) => {
        try {
            const snowball = new Snowball(req.body)

            const result = await snowball.save()

            res.status(201).json(result).end()
        } catch (err) {
            next(err)
        }
    },

    read: async (req, res, next) => {
        try {
            const snowball = await Snowball.findById(req.params.id)

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

    update: async (req, res, next) => {
        try {
            const snowball = await Snowball.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, useFindAndModify: false, runValidators: true})

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