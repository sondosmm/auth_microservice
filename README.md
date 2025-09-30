# 🔐 Node.js Authentication Microservice

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![Express](https://img.shields.io/badge/Express-5%2B-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-7%2B-blue)
![JWT](https://img.shields.io/badge/JWT-Auth-orange)

A lightweight authentication system using Node.js, Express, MongoDB, and JWT.

## 📦 Features
- User registration & login
- Single-device login (one active session per user)
- Access tokens (15m) + refresh tokens (7d)
- Logout removes refresh token
- Protected routes with middleware
- HTTP-only cookies & bcrypt password hashing

## 🔑 Flow
1. POST /register → create account  
2. POST /login → login (fails if already logged in elsewhere)  
3. POST /refresh → get new access token  
4. POST /logout → clear refresh token  

## 🚀 Quick Start
```bash
git clone https://github.com/sondosmm/auth-microservice.git
cd auth-microservice/auth
npm install
cp .env.example .env   # update with your values
npm run dev