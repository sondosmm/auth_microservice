# 🔐 Node.js Authentication Microservice

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![Express](https://img.shields.io/badge/Express-5%2B-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-7%2B-blue)
![JWT](https://img.shields.io/badge/JWT-Auth-orange)

A complete authentication system featuring JWT tokens, refresh tokens, and MongoDB storage.

## 📦 Features
- **User Registration** with email/password
- **Secure Login** with JWT tokens
- **Access Tokens** (15-minute expiry)
- **Refresh Tokens** (7-day expiry)
- **Protected Routes** with middleware
- **HTTP-only Cookies** for security
- **Password Hashing** using bcryptjs
- **Error Handling** middleware

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB 6+
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/auth-microservice.git
cd auth-microservice/auth

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your credentials

# Start the development server
npm run dev
