const request = require('supertest');
const app = require('./app');

describe('Test the app Node.js', () => {
  let server;

  beforeAll(() => {
    server = app.listen(3000);
  });

  afterAll((done) => {
    if (server) {
      server.close(done);
    } else {
      done();
    }
  });

  it('Should return the message "Hello, World! "', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, World!');
  });
});
