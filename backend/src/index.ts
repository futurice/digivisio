import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express'
import { RegisterRoutes } from './openapi/routes';
import swaggerUi from 'swagger-ui-express';
import openApiJson from './openapi/swagger.json';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config()
const port = process.env.BACKEND_PORT ?? 3001


const app: Express = express()

app.use(cors({ origin: process.env.CORS_ORIGIN, methods: ['POST'] }));

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
    console.log(`Running on http://localhost:${port}`)
})

process.on('SIGINT', () => {
    console.log('byebye...')
    process.exit(0)
})
