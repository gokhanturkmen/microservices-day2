import express from 'express'
const app = express()
const port = 4002

app.get('/api/my-orders', (req, res) => {
    res.json([
        { id: 101, item: 'Laptop', price: 1200 },
        { id: 102, item: 'Phone', price: 800 },
    ])
})

app.listen(port, () => {
    console.log(`Order API running at http://localhost:${port}`)
})
