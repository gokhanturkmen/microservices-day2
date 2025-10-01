# 11 - Bulkhead Pattern: generic-pool ile İzolasyon

Bu örnek, `generic-pool` kütüphanesi ile **Bulkhead** (bölmeli yapı) pattern'inin nasıl uygulanabileceğini göstermektedir.

## 🎯 Amaç

Servisleri aşırı yüklenmeden korumak için bağlantı havuzu oluşturulur.  
Havuz dışına çıkan istekler bekletilir veya zaman aşımına uğratılır.

## 🔧 Kurulum

```bash
npm install generic-pool
```

## 🚀 Çalıştırma

```bash
node index.js
```

Çıktı yaklaşık 10 saniye sürecektir çünkü aynı anda sadece 5 istek işlenebilir.

## 🧱 Yapı

- SlowServiceClient → yapay olarak gecikmeli bir servis
- generic-pool → servis nesneleri için havuz yönetimi sağlar
- Havuz → aynı anda 5 servis çalıştırır, diğerlerini sırada bekletir

## 🔍 Gözlem

İlk 5 istek hemen işlenir, kalan 5 istek havuzdan yer boşalınca sırayla devam eder.

Bu yapı sayesinde:

- Sistemin aşırı yüklenmesi engellenir
- İzolasyon sayesinde diğer servisler etkilenmez (bulkhead mantığı)

# 📌 Notlar

Gerçek sistemlerde bu yapı:

- HTTP Client bağlantı havuzları
- Database pool yönetimi
- Message queue consumer havuzları

gibi durumlar için uygundur.