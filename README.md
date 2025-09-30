
🔐 Node.js Authentication Microservice






A complete authentication system featuring JWT tokens, refresh tokens, and MongoDB storage.

📦 Features

User Registration with email/password

Secure Login with JWT tokens

Single active session per user (login allowed from one device only)

Access Tokens (15-minute expiry)

Refresh Tokens (7-day expiry)

Refresh Token stored in MongoDB (only one per user)

Logout endpoint (removes refresh token → user can log in again)

Protected Routes with middleware

HTTP-only Cookies for security

Password Hashing using bcryptjs

Error Handling middleware


🚀 Quick Start

Prerequisites

Node.js 18+

MongoDB 6+

Git


Installation

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

🔑 Authentication Flow

1. Register → POST /api/auth/register

Creates a new user.



2. Login → POST /api/auth/login

If user already has a refresh token stored, login is denied with "user already logged in".

Otherwise, generates new access + refresh tokens and stores refresh token in DB.



3. Refresh → POST /api/auth/refresh

Validates refresh token from cookies.

Rotates refresh token (replaces old one in DB).

Issues new access + refresh tokens.



4. Logout → POST /api/auth/logout

Deletes the user’s refresh token from DB.

Clears cookies.

User can now log in again from any device.




