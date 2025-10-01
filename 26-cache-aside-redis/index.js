import { createClient } from 'redis';
import { getUserFromDB } from './db';
const client = createClient();

client.connect();

async function getUser(id) {
  const cacheKey = `user:${id}`;

  // Redis'te var mı kontrol et
  let data = await client.get(cacheKey);
  if (data) {
    console.log(`CACHE HIT: ${cacheKey}`);
    return JSON.parse(data);
  }

  console.log(`CACHE MISS: ${cacheKey}`);
  const user = await getUserFromDB(id);
  if (user) {
    await client.set(cacheKey, JSON.stringify(user), {
      EX: 60 // 60 saniyelik TTL
    });
  }

  return user;
}

// Test
(async () => {
  console.log(await getUser(1)); // ilk çağrı DB'den
  console.log(await getUser(1)); // ikinci çağrı cache'ten
})();
