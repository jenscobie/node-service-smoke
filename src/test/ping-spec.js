var request = require('supertest')('http://docker:3000');

describe('GET /ping', function () {
  it('should return status 200 OK', function (done) {
    request
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
