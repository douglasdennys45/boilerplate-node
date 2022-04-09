import request from 'supertest'
import app from '@/infrastructure/server/api/config/app'

describe('CORS Middleware', () => {
  test('Should enable CORS', async () => {
    app.get('/test_cors', (_: any, res: any) => {
      res.send()
    })
    await request(app)
      .get('/test_cors')
      .expect('access-control-allow-origin', '*')
  })
})