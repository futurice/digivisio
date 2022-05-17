import express, { Express, Request, Response } from 'express'
import { getRandomNumber } from './stuff/random'
import swaggerUi from 'swagger-ui-express'
import openApiJson from './openapi.json'

const app: Express = express()
const port = 3001

app.get('/', (_req: Request, res: Response) => {
    res.send('huzzaah')
})

app.get('/random', (_req: Request, res: Response) => {
    res.send({ random: getRandomNumber() })
})

// todo there has to be a better way of auto generating this with node
app.get('/openapi.json', (_req: Request, res: Response) => {
    res.send(openApiJson)
})

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(openApiJson));


app.listen(port, () => {
    console.log(`Running on https://localhost:${port}`)
})

process.on('SIGINT', () => {
    console.log('byebye...')
    process.exit(0)
})
