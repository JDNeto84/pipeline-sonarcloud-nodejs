const request = require('supertest');
const app = require('./app');

describe('Test the app Node.js', () => {
  it('Should return the message "Hello, World!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, World!');
  });
});
