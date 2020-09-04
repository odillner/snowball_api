const snowballs = require('../controllers/snowballs')
const users = require('../controllers/users')
const friends = require('../controllers/friends')
const plays = require('../controllers/plays')
const login = require('../controllers/login')

module.exports = (app) => {
    app.route('/api/snowballs')
        .get(snowballs.getAll)
        .post(snowballs.create)

    app.route('/api/snowballs/:id')
        .get(snowballs.getById)
        .put(snowballs.update)
        .delete(snowballs.remove)

    app.route('/api/snowballs/:id/plays')
        .get(plays.getAll)
        .post(plays.create)

    app.route('/api/plays/:id')
        .get(plays.getById)
        .post(plays.remove)

    app.route('/api/users')
        .get(users.getAll)
        .post(users.create)

    app.route('/api/users/:id')
        .get(users.getById)
        .put(users.update)
        .delete(users.remove)

    app.route('/api/users/name/:name')
        .get(users.getByName)

    app.route('/api/users/:id/friends/')
        .get(friends.getAll)
        .post(friends.create)
        .delete(friends.remove)

    app.route('/api/login/')
        .post(login.auth)

}