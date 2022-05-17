import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express'
import { RegisterRoutes } from './routes';
import swaggerUi from 'swagger-ui-express'
import openApiJson from './openapi/swagger.json'

const app: Express = express()
const port = 3001

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

RegisterRoutes(app);

app.get('/openapi.json', (_req: Request, res: Response) => res.send(openApiJson));

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(openApiJson));

app.listen(port, () => {
    console.log(`Running on https://localhost:${port}`)
})

process.on('SIGINT', () => {
    console.log('byebye...')
    process.exit(0)
})
