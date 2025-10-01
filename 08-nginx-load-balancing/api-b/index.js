import { createServer } from 'http'
const port = 3002

createServer((req, res) => {
    res.end('Response from API B (port 3002)')
}).listen(port, () => {
    console.log(`API B running at http://localhost:${port}`)
})
