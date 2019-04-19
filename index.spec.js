const request = require('supertest');
const server = require('./index.js');

const Name = require('./data/nameModel.js');
const db = require('./dbConfig.js');

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

  describe('name test', () => {
    beforeEach(() => db('name').truncate());

    it('should insert a name', async () => {
      await Name.insert({ name: 'Kels' });
      const name = await db('name');

      expect(name.length).toBe(1);
      expect(name[0].name).toBe('Kels');
    });

    it('should delete name', async () => {
      await Name.insert({ name: 'Kels' });
      const names = await db('name');

      expect(name.length).toBe(1);
      expect(name[0].name).toBe('Kels');

      await Name.remove()

      const name = await db('name');
      expect(name.length).toBe(0);
    });
  });
});