class SlowServiceClient {
    async call() {
        // Yapay gecikme simülasyonu (örnek: uzak servis)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return 'Result from slow service'
    }

    close() {
        // Gerçek uygulamalarda bağlantı kapatma işlemi olur
        return
    }
}

export default SlowServiceClient