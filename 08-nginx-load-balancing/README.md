# 08 - Nginx ile Load Balancing (Round Robin / Least Conn)

Bu örnek, iki küçük HTTP sunucusunu bir Nginx Load Balancer arkasına yerleştirerek isteklerin dağılımını göstermeyi amaçlar.

## 🧱 Yapı

- `api-a` → 127.0.0.1:3001 portunda döner
- `api-b` → 127.0.0.1:3002 portunda döner
- Nginx → 127.0.0.1:8080 portunda dinler ve istekleri yukarıdaki servislere yönlendirir

## 🚀 Çalıştırma Adımları

### 1. Servisleri Başlat

Ayrı terminallerde çalıştır:

```bash
# API A
cd api-a
node index.js

# API B
cd api-b
node index.js
```

### 2. Nginx Yükle (Ubuntu için)
```bash
sudo apt update
sudo apt install nginx
```

### 3. Nginx Konfigürasyonunu Uygula
```bash
sudo cp nginx/nginx.conf /etc/nginx/nginx.conf
sudo nginx -t
sudo systemctl restart nginx
```

### 4. Tarayıcıdan veya curl ile Test Et
```bash
curl http://localhost:8080
# Çıktı sırayla API A ve API B'den gelir
```

## 🔄 Least Connections Modu (Opsiyonel)
nginx.conf içindeki upstream bloğuna least_conn; satırını ekleyerek Round Robin yerine Least Connections kullanabilirsiniz.

```bash
upstream api {
    least_conn;
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
}
```
Değişiklik sonrası yeniden başlatmayı unutmayın:
```bash
sudo systemctl restart nginx
```