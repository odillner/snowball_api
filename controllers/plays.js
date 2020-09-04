const Play = require('../models/play.js')
const Snowball = require('../models/snowball.js')

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const plays = await Play.find({})

            res.json(plays)
        } catch (err) {
            next(err)
        }
    },

    create: async (req, res, next) => {
        try {
            const body = req.body
            const id = req.params.id

            const snowball = await Snowball.findById(id)

            const play = new Play({...body, snowball: id})

            const newPlay = await play.save()

            snowball.plays = snowball.concat(newPlay.id)
            await snowball.save()

            res.status(201).json(newPlay)
        } catch (err) {
            next(err)
        }
    },

    getById: async (req, res, next) => {
        try {
            const play = await Play.findById(req.params.id)

            if (!play) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            res.json(play)
        } catch (err) {
            next(err)
        }
    },

    update: async (req, res, next) => {
        try {
            const body = req.body
            const play = await Play.findOneAndUpdate({_id: req.params.id}, body, {new: true, useFindAndModify: false, runValidators: true})

            if (!play) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            res.json(play).end()
        } catch (err) {
            next(err)
        }
    },

    remove: async (req, res, next) => {
        try {
            const play = await Play.findById(req.params.id)

            if (!play) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            await Play.deleteOne({'_id':req.params.id})

            res.status(200).end()
        } catch (err) {
            next(err)
        }
    },
}