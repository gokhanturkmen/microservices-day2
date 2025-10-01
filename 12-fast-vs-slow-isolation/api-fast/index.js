import { createServer } from 'http'
const port = 3003

createServer((req, res) => {
    res.end('Fast response')
}).listen(port, () => {
    console.log(`Fast service running at http://localhost:${port}`)
})
