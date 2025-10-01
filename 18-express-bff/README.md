# 18 - Express.js ile BFF (Backend for Frontend)

Bu örnekte, iki mikroservisten gelen veriyi birleştirip tek uç nokta üzerinden sunan bir BFF katmanı oluşturulmuştur.

## 🔧 Kurulum

```bash
npm install express node-fetch
```
Her klasörde ayrı ayrı bu işlemi yap:

```bash
cd api-users && npm install
cd ../api-orders && npm install
cd ../bff && npm install
```

## 🚀 Servisleri Başlat
Her servisi ayrı terminalde başlat:
```bash
cd api-users && node index.js
cd ../api-orders && node index.js
cd ../bff && node index.js
```

## 🌐 Erişim
BFF üzerinden tüm veriyi tek uç noktadan al:

```bash
http://localhost:4000/profile
```

Çıktı:
```json
{
  "user": { "id": 1, "name": "Alice" },
  "orders": [
    { "id": 101, "item": "Laptop", "price": 1200 },
    { "id": 102, "item": "Phone", "price": 800 }
  ]
}
```

## 🧱 Mimaride Kazanım
- UI katmanı için tek uç nokta
- Daha az HTTP çağrısı
- Mobil için daha uygun yanıt formatı
- Frontend mantığı backend'e taşınmış olur

## 🔄 Gerçek Hayatta Kullanım
- Next.js API routes → BFF işlevi görür
- Mobil uygulamalarda backend tek endpoint'e indirgenir
- Web/Mobile için ayrı BFF'ler olabilir