const req = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () =>{
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    
    afterAll(async () => {
        connection.destroy();
    });

    it('sould be able to create a new ONG', async () => {
        const res = await req(app)
         .post('/ongs')
         .send({
            name : "4patinhas",
            email  : "teste@teste.com",
            whatsapp : "027987747291",
            city : "vitoria",
            uf : "es"
        });

        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toHaveLength(8);
    });
});