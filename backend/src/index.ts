import bodyParser from 'body-parser'
import express, { Express, NextFunction, Request, Response } from 'express'
import { RegisterRoutes } from './openapi/routes'
import swaggerUi from 'swagger-ui-express'
import openApiJson from './openapi/swagger.json'
import cors from 'cors'
import './controllers/searchController'
import './controllers/LearningMaterialsController'
import './controllers/searchHistoryController'
import { NotAuthenticatedError } from './middlewares/authenticationMiddleware'
import { ValidateError } from 'tsoa'

const port = process.env.BACKEND_PORT ?? 3001

const app: Express = express()

if (process.env.CORS_ORIGIN) {
    console.log(`Enabling CORS for ${process.env.CORS_ORIGIN}`)
    app.use(cors({ origin: process.env.CORS_ORIGIN, methods: ['POST'] }))
}

app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
)
app.use(bodyParser.json())

RegisterRoutes(app)

app.get('/api/openapi.json', (_req: Request, res: Response) => res.send(openApiJson))

app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(openApiJson))

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err.stack)

    if (err instanceof NotAuthenticatedError) {
        return res.status(401).send(err.message)
    } else if (err instanceof ValidateError) {
        return res.status(400).json({
            message: 'Validation Failed',
            details: err?.fields,
        })
    } else {
        return res.status(500).json({
            message: 'Internal Server Error',
        })
    }
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

process.on('SIGINT', () => {
    console.log('byebye...')
    process.exit(0)
})
