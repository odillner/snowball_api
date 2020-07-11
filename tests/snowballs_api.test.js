const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const User = require('../models/user')
const Snowball = require('../models/snowball')

const {initialUsers, singleSnowball, initialSnowballs} = require('./test_helpers')

beforeAll(async () => {
    await User.deleteMany({})

    for (const user of initialUsers) {
        await api
            .post('/api/users')
            .send(user)
    }
})

beforeEach(async () => {
    await Snowball.deleteMany({})

    for (const snowball of initialSnowballs) {
        await api
            .post('/api/snowballs')
            .send(snowball)
    }
})

describe('getting snowballs', () => {
    test('snowballs are returned as json', async () => {
        await api
            .get('/api/snowballs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('all snowballs returned', async () => {
        const response = await api.get('/api/snowballs')

        const expected = initialSnowballs.map(snowball => snowball.name)

        const contents = response.body.map(snowball => snowball.name)

        expect(response.body).toHaveLength(initialSnowballs.length)
        expect(contents).toEqual(expected)
    })

    test('a specific snowball is returned', async () => {
        const response = await api.get('/api/snowballs')

        const contents = response.body.map(snowball => snowball.name)

        expect(contents).toContain(initialSnowballs[0].name)
    })

    test('snowball "_id" property is properly transformed', async () => {
        const response = await api.get('/api/snowballs')

        expect(response.body[0].id).toBeDefined()
    })
})

describe('adding snowballs', () => {
    test('a valid snowball can be added', async () => {
        await api
            .post('/api/snowballs')
            .send(singleSnowball)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        const response = await api.get('/api/snowballs')

        const contents = response.body.map(snowball => snowball.name)

        expect(response.body).toHaveLength(initialSnowballs.length + 1)
        expect(contents).toContain(
            singleSnowball.name
        )
    })

    test('snowball without name is not added', async () => {
        const newSnowball = {}

        await api
            .post('/api/snowballs')
            .send(newSnowball)
            .expect(400)

        const response = await api.get('/api/snowballs')

        expect(response.body).toHaveLength(initialSnowballs.length)
    })

    test('snowball without password is not added', async () => {
        const newSnowball = {name: 'asdfasdfasd'}

        await api
            .post('/api/snowballs')
            .send(newSnowball)
            .expect(400)

        const response = await api.get('/api/snowballs')

        expect(response.body).toHaveLength(initialSnowballs.length)
    })
})

describe('reading/manipulating specific snowballs', () => {
    test('specific snowball with valid id is fetched', async () => {
        const specificSnowball = initialSnowballs[0]

        const response = await api.get('/api/snowballs/' + specificSnowball._id)

        expect(response.body.name).toEqual(specificSnowball.name)
    })

    test('specific snowball with invalid id is not fetched', async () => {
        const invalidId = 'asd'

        await api
            .get('/api/snowballs/' + invalidId)
            .expect(400)
    })

    test('specific snowball with valid but nonexistant id is not fetched', async () => {
        const validNonExistantId = '5a422aa71b54a676234d17f2'

        await api
            .get('/api/snowballs/' + validNonExistantId)
            .expect(404)
    })

    test('specific snowball with valid id is updated', async () => {
        const specificSnowball = initialSnowballs[0]

        const response = await api
            .put('/api/snowballs/' + specificSnowball._id)
            .send(specificSnowball)
            .expect(200)

        expect(response.body.name).toEqual(specificSnowball.name)
    })

    test('specific snowball with invalid id is not updated', async () => {
        const invalidId = 'asd'
        const specificSnowball = initialSnowballs[0]

        await api
            .put('/api/snowballs/' + invalidId)
            .send(specificSnowball)
            .expect(400)
    })


    test('specific snowball with valid but nonexistant id is not updated', async () => {
        const validNonExistantId = '5a422aa71b54a676234d17f0'
        const specificSnowball = initialSnowballs[0]

        await api
            .put('/api/snowballs/' + validNonExistantId)
            .send(specificSnowball)
            .expect(404)
    })

    test('a specific snowball with valid id is deleted', async () => {
        const specificSnowball = initialSnowballs[0]

        await api
            .delete('/api/snowballs/' + specificSnowball._id)
            .expect(200)

        const snowballs = await api.get('/api/snowballs')

        expect(snowballs.body).toHaveLength(initialSnowballs.length-1)
    })

    test('a specific snowball with invalid id is not deleted', async () => {
        const invalidId = 'asd'

        await api
            .delete('/api/snowballs/' + invalidId)
            .expect(400)

        const snowballs = await api.get('/api/snowballs')

        expect(snowballs.body).toHaveLength(initialSnowballs.length)
    })

    test('specific snowball with valid but nonexistant id is not deleted', async () => {
        const validNonExistantId = '5a422aa71b54a676234d17f2'

        await api
            .get('/api/snowballs/' + validNonExistantId)
            .expect(404)

        const snowballs = await api.get('/api/snowballs')

        expect(snowballs.body).toHaveLength(initialSnowballs.length)
    })

})

afterAll(() => {
    mongoose.connection.close()
})