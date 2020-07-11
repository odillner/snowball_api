const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const User = require('../models/user')

const {singleUser, initialUsers} = require('./test_helpers')


beforeEach(async () => {
    await User.deleteMany({})

    for (const user of initialUsers) {
        const newUser = new User(user)
        await newUser.save()
    }
})

describe('getting users', () => {
    test('users are returned as json', async () => {
        await api
            .get('/api/users')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('all users returned', async () => {
        const response = await api.get('/api/users')

        const expected = initialUsers.map(user => user.username)

        const contents = response.body.map(user => user.username)

        expect(response.body).toHaveLength(initialUsers.length)
        expect(contents).toEqual(expected)
    })

    test('a specific user is returned', async () => {
        const response = await api.get('/api/users')

        const contents = response.body.map(user => user.username)

        expect(contents).toContain(initialUsers[0].username)
    })

    test('user "_id" property is properly transformed', async () => {
        const response = await api.get('/api/users')

        expect(response.body[0].id).toBeDefined()
    })
})

describe('adding users', () => {
    test('a valid user can be added', async () => {
        await api
            .post('/api/users')
            .send(singleUser)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        const response = await api.get('/api/users')

        const contents = response.body.map(user => user.username)

        expect(response.body).toHaveLength(initialUsers.length + 1)
        expect(contents).toContain(
            singleUser.username
        )
    })

    test('user without username is not added', async () => {
        const newUser = {email: 'aasdfsadfasdsd', password: 'asdasdfasdf'}

        await api
            .post('/api/users')
            .send(newUser)
            .expect(400)

        const response = await api.get('/api/users')

        expect(response.body).toHaveLength(initialUsers.length)
    })

    test('user without password is not added', async () => {
        const newUser = {email: 'asasdfsadfd', username: 'asdfasdfasd'}

        await api
            .post('/api/users')
            .send(newUser)
            .expect(400)

        const response = await api.get('/api/users')

        expect(response.body).toHaveLength(initialUsers.length)
    })
})

describe('reading/manipulating specific users', () => {
    test('specific user with valid id is fetched', async () => {
        const specificUser = initialUsers[0]

        const response = await api.get('/api/users/' + specificUser._id)

        expect(response.body.username).toEqual(specificUser.username)
    })

    test('specific user with invalid id is not fetched', async () => {
        const invalidId = 'asd'

        await api
            .get('/api/users/' + invalidId)
            .expect(400)
    })

    test('specific user with valid but nonexistant id is not fetched', async () => {
        const validNonExistantId = '5a422aa71b54a676234d17f2'

        await api
            .get('/api/users/' + validNonExistantId)
            .expect(404)
    })

    test('specific user with valid id is updated', async () => {
        const specificUser = initialUsers[0]

        const response = await api
            .put('/api/users/' + specificUser._id)
            .send(specificUser)
            .expect(200)

        expect(response.body.username).toEqual(specificUser.username)
    })

    test('specific user with invalid id is not updated', async () => {
        const invalidId = 'asd'
        const specificUser = initialUsers[0]

        await api
            .put('/api/users/' + invalidId)
            .send(specificUser)
            .expect(400)
    })


    test('specific user with valid but nonexistant id is not updated', async () => {
        const validNonExistantId = '5a422aa71b54a676234d17f0'
        const specificUser = initialUsers[0]

        await api
            .put('/api/users/' + validNonExistantId)
            .send(specificUser)
            .expect(404)
    })

    test('a specific user with valid id is deleted', async () => {
        const specificUser = initialUsers[0]

        await api
            .delete('/api/users/' + specificUser._id)
            .expect(200)

        const users = await api.get('/api/users')

        expect(users.body).toHaveLength(initialUsers.length-1)
    })

    test('a specific user with invalid id is not deleted', async () => {
        const invalidId = 'asd'

        await api
            .delete('/api/users/' + invalidId)
            .expect(400)

        const users = await api.get('/api/users')

        expect(users.body).toHaveLength(initialUsers.length)
    })

    test('specific user with valid but nonexistant id is not deleted', async () => {
        const validNonExistantId = '5a422aa71b54a676234d17f2'

        await api
            .get('/api/users/' + validNonExistantId)
            .expect(404)

        const users = await api.get('/api/users')

        expect(users.body).toHaveLength(initialUsers.length)
    })

})

afterAll(() => {
    mongoose.connection.close()
})