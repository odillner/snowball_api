const snowballs = require('../controllers/snowballs')
const users = require('../controllers/users')

module.exports = (app) => {
    app.route('/api/snowballs')
        .get(snowballs.list)
        .post(snowballs.create)

    app.route('/api/snowballs/:id')
        .get(snowballs.read)
        .put(snowballs.update)
        .delete(snowballs.remove)

    app.route('/api/users')
        .get(users.list)
        .post(users.create)

    app.route('/api/users/:id')
        .get(users.read)
        .put(users.update)
        .delete(users.remove)

}