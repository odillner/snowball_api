const User = require('../models/user')
const tokenHelper = require('../utils/tokenHelper')

module.exports = async (req, res, next) => {
    const token = tokenHelper.extract(req)

    if (token && token != 'undefined') {
        try {
            const decodedToken = tokenHelper.decode(token)

            const user = await User.findById(decodedToken.id)

            if (!user) {
                let err = new Error('Invalid token')
                err.name = 'AuthenticationError'
                throw err
            }

            req.authUser = user
        } catch (err) {
            next(err)
        }
    }

    next()
}
