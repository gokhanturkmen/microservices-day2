import { createServer } from 'http'
const port = 3001

createServer((req, res) => {
    res.end('Response from API A (port 3001)')
}).listen(port, () => {
    console.log(`API A running at http://localhost:${port}`)
})
