import { createPool as _createPool } from 'generic-pool'
import SharedServiceClient from './SharedServiceClient'

function createPool(name, url, max) {
    const factory = {
        create: () => Promise.resolve(new SharedServiceClient(url)),
        destroy: (client) => client.close(),
    }

    return _createPool(factory, {
        max: max,
        min: 1,
        idleTimeoutMillis: 30000,
    })
}

const slowPool = createPool('slow', 'http://localhost:3004', 2)
const fastPool = createPool('fast', 'http://localhost:3003', 2)

async function test(index) {
    const fast = await fastPool.acquire()
    const slow = await slowPool.acquire()
    try {
        const [res1, res2] = await Promise.all([fast.call(), slow.call()])
        console.log(`[${index}]`, res1, '|', res2)
    } finally {
        fastPool.release(fast)
        slowPool.release(slow)
    }
}

for (let i = 1; i <= 4; i++) {
    test(i)
}
