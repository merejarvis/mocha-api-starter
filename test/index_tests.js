// done used as get / is a callback under tacos controller. suertest allows http test

const request = require('supertest')
const expect = require('chai').expect
const app = require('../index')

describe('GET static pages', function () {
describe('GET /', function () {
  it('should respond 200', function(done){
    request(app)
    .get('/')
    .expect(200, done)
  })
})
  describe('/about', function () {
    it('should respond 404', function(done){
      request(app)
      .get('/about')
      .expect(404, done)
    })
})
})

describe('CRUD TACO route', function () {
  describe('GET /tacos', function () {
  it('should return all tacos', function(done){
    request(app)
    .get('/tacos')
    .end(function (err,response){
      console.log('body is this:', response.body, 'status is this:', response.status)
      expect(response.status).to.equal(200)
      expect(response.body).to.be.a('array')//here 2 expects as they are from the same logical group
      if (response.body.length) {
        expect(response.body[2]).to.have.property('calory')
      }
      done()
    })
  })

})
  describe('POST /tacos', function () {
    it('should create new taco', function(done){
      request(app)
      .post('/tacos')
      .send({
        name: 'Parmes',
        amount: 1000,
      })
      .end(function (err, res){
        done()
      })
    })
})
})
