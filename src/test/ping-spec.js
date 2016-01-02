var request = require('supertest')(process.env.SMOKE_TEST_BASE_URL);

describe('GET /ping', function () {
  it('should return status 200 OK', function (done) {
    request
      .get('/ping')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
