# 12 - Yavaş ve Hızlı Servislerin İzolasyonu (Bulkhead Uygulaması)

Bu örnek, **yavaş servislerin**, diğer servisleri **etkilememesi gerektiğini** göstermek için hazırlanmıştır.

## 🎯 Amaç

- `api-slow` → 2 saniyelik gecikme
- `api-fast` → anında yanıt verir
- Her ikisi için ayrı bağlantı havuzları tanımlanır
- Havuzlar sayesinde izolasyon sağlanır

## 🔧 Kurulum

```bash
npm install node-fetch generic-pool
```

## 🚀 Servisleri Başlat
Ayrı terminallerde çalıştır:
```bash
cd api-slow && node index.js
```
```bash
cd ../api-fast && node index.js
```

## 🚀 Test Uygulamasını Çalıştır

```bash
cd ../pool
node index.js
```

## 🔍 Gözlem

- Aynı anda 4 istek gönderilir
- Yavaş servis gecikse bile, hızlı servis zamanında cevap verir
- Eğer havuzlar olmasaydı tüm sistem bloklanabilirdi

## 📌 Sonuç

Yavaş servislerin diğerlerini etkilemesini istemiyorsanız:

- Ayrı bağlantı havuzları
- Ayrı thread/process yönetimi
- Bulkhead Pattern uygulaması