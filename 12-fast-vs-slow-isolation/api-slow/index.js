import { createServer } from 'http'
const port = 3004

createServer((req, res) => {
    setTimeout(() => {
        res.end('Slow response after 2s')
    }, 2000)
}).listen(port, () => {
    console.log(`Slow service running at http://localhost:${port}`)
})
