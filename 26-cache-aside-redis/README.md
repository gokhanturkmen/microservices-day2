# 26 - Redis ile Cache-Aside (Lazy Loading)

Bu örnek, en yaygın cache stratejisi olan **Cache-Aside** yapısını göstermektedir.

## 📌 Amaç

Veri Redis cache'te varsa oradan okunur, yoksa veritabanından çekilir ve cache'e yazılır.

## 🧱 Kullanılanlar

- `redis` → node.js Redis istemcisi
- `db.js` → örnek veri kaynağı
- `index.js` → cache işlemi

## 🔧 Kurulum

1. Redis kurulumu (Ubuntu):
```bash
sudo apt update
sudo apt install redis
sudo systemctl start redis
```
2. Node modülleri:
```bash
npm install redis
```

## 🚀 Çalıştır
```bash
node index.js
```

Çıktı:

```yaml
CACHE MISS: user:1
DB: Getting user 1
{ id: 1, name: 'Alice' }

CACHE HIT: user:1
{ id: 1, name: 'Alice' }
```

## 🔁 Mantık
1. Cache kontrol edilir
2. Yoksa DB'den alınır
3. Cache'e yazılır
4. Döndürülür

## 🧠 Gelişmiş Senaryolar
- TTL sona erdiğinde veri yenilenir
- EX süresi ile cache temiz kalır
- Yazma işlemlerinde del ile cache temizlenebilir

## 📌 Uygulama Alanları

- Kullanıcı profili
- Kategori listeleri
- Sabit ve sık erişilen veri

Cache verinizin gerçekliği kadar doğrudur. Bu yüzden güncellenme stratejisi düşünülmelidir.