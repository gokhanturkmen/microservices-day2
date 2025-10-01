import fetch from 'node-fetch'

class SharedServiceClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    async call() {
        const res = await fetch(this.baseUrl)
        return await res.text()
    }

    close() {
        // Gerekirse bağlantı sonlandırılır
    }
}

export default SharedServiceClient
