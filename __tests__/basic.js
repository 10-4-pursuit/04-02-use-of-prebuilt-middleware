// tests/server.test.js
const request = require('supertest');
const app = require('../server/src/index'); // Adjust the path as needed to import your Express app

describe('Express Middleware Integration', () => {
  
  // Test for CORS headers
  test('CORS should be enabled for all responses', async () => {
    const response = await request(app).get('/'); // Using a simple GET request to test CORS
    expect(response.headers['access-control-allow-origin']).toEqual('*');
  });

  // Test for JSON parsing middleware
  test('Server should parse JSON payloads', async () => {
    const testData = { key: 'value' };
    const response = await request(app)
      .post('/submit-data')
      .send(testData)
      .expect('Content-Type', /json/)
      .expect(200);

    // Assuming the server echoes back the received JSON data
    expect(response.body).toEqual(expect.objectContaining(testData));
  });

  // Test for logging request body and acknowledging data submission
  test('POST to `/submit-data` should log payload and acknowledge data submission', async () => {
    const testData = { message: 'This is a test' };
    const response = await request(app)
      .post('/submit-data')
      .send(testData)
      .expect(200);

    // Check for a specific acknowledgment message
    expect(response.text).toContain('Data received');
  });

});
