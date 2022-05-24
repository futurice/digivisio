import app from './app'

const port = process.env.BACKEND_PORT ?? 3001

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

process.on('SIGINT', () => {
    console.log('byebye...')
    process.exit(0)
})
