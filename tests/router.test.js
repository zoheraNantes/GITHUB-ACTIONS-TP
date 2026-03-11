const request = require('supertest')
const app = require("../src/app")
 
describe('GET /api/health', ()=> {
    it('return status ok', async ()=> {
        const res = await request(app).get('/api/health')
        expect(res.statusCode).toBe(200)
        expect(res.body.status).toBe('ok')
    })
})
 
describe('GET /api/greet/:name', ()=> {
    it('greet the given name', async ()=>{
        const res = await request(app).get('/api/greet/Yoann')
        expect(res.statusCode).toBe(200)
        expect(res.body.message).toBe('Hello, Yoann!')
    })
})