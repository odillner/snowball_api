const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')

module.exports = {
    auth: async (req, res, next) => {
        try {
            const body = req.body

            const user = await User.findOne({username: body.username})

            const passwordCorrect = user === null
                ? false
                : await bcrypt.compare(body.password, user.passwordHash)

            if (!(user && passwordCorrect)) {
                let err = new Error('Username or password incorrect')
                err.name = 'AuthorizationError'
                throw err
            }

            const userForToken = {
                username: user.username,
                id: user._id,
            }

            const token = jwt.sign(userForToken, process.env.SECRET)

            res
                .status(200)
                .send({token, user})

        } catch (err) {
            next(err)
        }
    }
}