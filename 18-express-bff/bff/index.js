import express from 'express'
import fetch from 'node-fetch'
const app = express()
const port = 4000

app.get('/profile', async (req, res) => {
    try {
        const [user, orders] = await Promise.all([
            fetch('http://localhost:4001/api/me').then((res) => res.json()),
            fetch('http://localhost:4002/api/my-orders').then((res) =>
                res.json()
            ),
        ])
        res.json({ user, orders })
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch data' })
    }
})

app.listen(port, () => {
    console.log(`BFF running at http://localhost:${port}`)
})
