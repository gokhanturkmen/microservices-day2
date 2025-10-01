// Gerçek veritabanı yerine sahte bir kaynak
const users = {
    1: { id: 1, name: 'Alice' },
    2: { id: 2, name: 'Bob' },
}

async function getUserFromDB(id) {
    console.log(`DB: Getting user ${id}`)
    await new Promise((resolve) => setTimeout(resolve, 100)) // yapay gecikme
    return users[id] || null
}

export default { getUserFromDB }
