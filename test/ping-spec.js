var uri = process.env.SERVICE_BASE_URI;
var request = require('supertest')(uri);

describe(`GET ${uri}/ping`, function () {
  it('should return status 200 OK', function (done) {
    request
      .get('/ping')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
