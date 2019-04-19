const request = require('supertest');
const server = require('./index.js');

describe('server.js', () => {
  describe('GET/ route', () => {
    it('should return status 200', async () => {
      const res = await request(server).get('/');
      expect(res.status).toEqual(200);
    });

    it('should return  api: running', async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({ api: 'running' });
    });

    it('should return JSON', async () => {
      const res = await request(server).get('/');
      expect(res.type).toEqual('application/json');
    });
  });
});