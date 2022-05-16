import express, { Express, Request, Response } from 'express'
import { getRandomNumber } from './stuff/random'

const app: Express = express()
const port = 3001

app.get('/', (_req: Request, res: Response) => {
    res.send('huzzaah')
})

app.get('/random', (_req: Request, res: Response) => {
    res.send(getRandomNumber())
})

app.listen(port, () => {
    console.log(`Running on https://localhost:${port}`)
})

process.on('SIGINT', () => {
    console.log('byebye...')
    process.exit(0)
})
