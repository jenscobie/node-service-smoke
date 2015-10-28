var request = require('supertest')(process.env.SMOKE_TEST_BASE_URL);

describe('GET /ping', function () {
  it('should return status 200 OK', function (done) {
    request
      .get('/')
      .expect(200, done);
  });
});
