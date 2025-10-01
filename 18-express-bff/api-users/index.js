import express from 'express'
const app = express()
const port = 4001

app.get('/api/me', (req, res) => {
    res.json({ id: 1, name: 'Alice' })
})

app.listen(port, () => {
    console.log(`User API running at http://localhost:${port}`)
})
