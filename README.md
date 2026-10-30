# ADITYA BITES — Advanced Food Delivery Platform

**Designed & Developed by Aditya Anand · 2026**

A full-stack food ordering platform inspired by the convenience of modern food-delivery apps, with original ADITYA BITES branding.

## Stack
- Frontend: React, Vite, React Router, Lucide React
- Backend: Node.js, Express, MongoDB, Mongoose
- Authentication: JWT + bcrypt
- Demo payment: simulated payment flow (no real money is charged)

## Included
- Responsive customer storefront with search, cuisine filters, restaurant cards and menus
- Cart with quantity controls, coupon support and delivery-fee calculation
- Signup/login, customer profile and saved addresses
- Checkout with COD or clearly-labelled demo online payment
- Order placement, order history, status timeline and reorder
- Restaurant dashboard APIs and starter UI route
- Delivery partner dashboard APIs and starter UI route
- Admin dashboard APIs, restaurant/order/user management and sales summary
- Seed data, demo accounts, validation, error handling and environment configuration

> This is a portfolio-ready development project, not a production clone of Swiggy. Real payment gateway, live GPS tracking, SMS/push notifications, maps, cloud image hosting, KYC and production security require provider credentials and additional deployment work.

## Requirements
- Node.js 18+
- MongoDB Community Server or MongoDB Atlas

## 1. Configure backend
```bash
cd server
npm install
copy .env.example .env
```
On macOS/Linux use `cp .env.example .env`.
Set `MONGODB_URI` and `JWT_SECRET` in `.env`.

## 2. Seed demo data
```bash
npm run seed
```

## 3. Start backend
```bash
npm run dev
```
API: `http://localhost:5000/api`

## 4. Start frontend (new terminal)
```bash
cd client
npm install
npm run dev
```
Open `http://localhost:5173`.

## Demo accounts
All demo passwords: `Demo@123`

| Role | Email |
|---|---|
| Customer | customer@adityabites.in |
| Admin | admin@adityabites.in |
| Restaurant | restaurant@adityabites.in |
| Delivery partner | delivery@adityabites.in |

Change passwords and secrets before deploying. Seed data is for local demonstration only.

## Useful API routes
- `GET /api/health`
- `GET /api/restaurants`
- `GET /api/restaurants/:id`
- `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me`
- `POST /api/orders`, `GET /api/orders/my`, `GET /api/orders/:id`
- `GET /api/admin/overview`, `GET /api/admin/orders`
- `GET /api/restaurant/orders`, `PATCH /api/restaurant/orders/:id/status`
- `GET /api/delivery/orders`, `PATCH /api/delivery/orders/:id/status`

## Project structure
```text
aditya-bites-advanced/
  client/
    src/
      components/
      context/
      pages/
      styles/
  server/
    src/
      middleware/
      models/
      routes/
      seed/
```

## Before public deployment
1. Use a strong unique JWT secret and production MongoDB database.
2. Add rate limiting, email verification, password reset and audit logs.
3. Integrate a real payment provider (Razorpay/Stripe) using server-side signature verification.
4. Add a maps provider and consent-based location tracking for delivery.
5. Configure HTTPS, secure cookies, CORS allowlist, backups and monitoring.
6. Replace demo images with licensed assets and add privacy/terms/refund policies.
