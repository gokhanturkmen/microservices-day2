import { createPool } from 'generic-pool'
import SlowServiceClient from './SlowServiceClient'

const factory = {
    create: () => Promise.resolve(new SlowServiceClient()),
    destroy: (client) => client.close(),
}

// Havuz tanımı (max 5 bağlantı)
const pool = createPool(factory, {
    max: 5,
    min: 2,
    idleTimeoutMillis: 30000,
})

async function callService(i) {
    const client = await pool.acquire()
    try {
        const result = await client.call()
        console.log(`[${i}]`, result)
    } finally {
        pool.release(client)
    }
}

// 10 paralel istek gönderelim (5 havuzda, 5 kuyrukta bekler)
for (let i = 1; i <= 10; i++) {
    callService(i)
}
