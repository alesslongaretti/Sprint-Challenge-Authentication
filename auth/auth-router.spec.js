const request = require('supertest');
const server = require('../api/server.js');

describe('POST / Register', () => {
    it('should return message - problem with db', () => {
        return request(server).post('/api/auth/register')
            .catch(res => {
                expect(res.body).toEqual({message: 'problem with the db'});
            });
        });
    it('should return 500', () => {
        return request(server).post('/api/auth/register')
            .then(res => {
                expect(res.status).toBe(500);
            });
        });
});

describe('POST / Login', () => {
    it('', () => {

    });
    it('', () => {

    });
})