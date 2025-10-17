# 🚀 SFET Template: NestJS + Next.js + Prisma

A full-stack monorepo setup built with **NestJS**, **Next.js**, and **Prisma** — seamlessly integrated with **PostgreSQL** (via **Neon**) for high-performance development.  
Perfect foundation for scalable apps like the **Student Fund & Expense Tracker (SFET)**.  

---

## ✨ Features

✅ **Monorepo** powered by **Turborepo**  
⚙️ **NestJS Backend** — REST API-ready  
🎨 **Next.js Frontend** — App Router + Tailwind CSS  
🧩 **Prisma ORM** — clean database management  
🗄️ **PostgreSQL/Neon Support**  
🧑‍💻 **Pre-configured** for local & cloud development  

---

## 🧰 Prerequisites

Before starting, ensure you have:

| Tool | Description | Install |
|------|--------------|----------|
| 🟢 Node.js | v18 or later | [Download Node.js](https://nodejs.org/) |
| 📦 pnpm | Package manager | `npm install -g pnpm` |
| 🔗 Git | Version control | [Install Git](https://git-scm.com/downloads) |
| 🐘 PostgreSQL Client | (e.g., `psql`) | Included with PostgreSQL |
| ☁️ Neon Account | Cloud PostgreSQL | [Create Neon Account](https://neon.tech/) |

---

## ⚡ Installation Steps

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/sfet-template.git your-project-name
cd your-project-name
```

### 2️⃣ Install Dependencies
```bash
pnpm install
```

### 3️⃣ Set Up Environment Variables
 Copy .env.example → .env
```bash
cp .env.example .env
```
 Update your database URL:
 ```bash
DATABASE_URL="postgresql://your_user:your_password@your_host:your_port/your_db?sslmode=require"
```
- ⚠️ Note: Never commit your .env file! (Ensure it’s listed in .gitignore)

---

## 🧠 Initialize Prisma
- Generate Prisma client and apply migrations:

```bash
pnpm dlx prisma generate
pnpm dlx prisma migrate dev --name init
```

### 🌱 Seed the Database (Optional)
- Populate your database with sample data:

```bash
pnpm dlx ts-node prisma/seed.ts
```

--- 

## 🧪 Test Database Connection (Neon)
Make sure your Neon connection works properly before running the app.

### Option 1 — Using Prisma CLI
```bash
pnpm dlx prisma db pull
```
  ✅ If successful, you’ll see your schema loaded.

### Option 2 — Using psql
From your terminal:
```bash
psql "postgresql://your_user:your_password@your_host:your_port/your_db?sslmode=require"
```
If connected successfully, you’ll see:
```makefile
your_db=#
```

### Option 3 — Test Script
Add this quick script to /scripts/test-db.ts:

```bash
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Database connection successful!');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}
testConnection();
```

Run it with:
```bash
pnpm dlx ts-node scripts/test-db.ts
```
--- 

## 🧭 Run the Project


### 🛠️ Backend (NestJS)
```bash
cd apps/api
pnpm run start:dev
```
---
Backend available at: 👉 http://localhost:3000

### 💻 Frontend (Next.js)
```bash
cd apps/web
pnpm run dev

```
---
Frontend available at: 👉 http://localhost:3001

## 📁 Project Structure
```bash
Project_Name/
├── apps/
│   ├── api/         # NestJS backend
│   └── web/         # Next.js frontend
├── prisma/          # Prisma schema and seeds
├── packages/        # Shared modules
├── turbo.json       # Turborepo config
└── .env             # Environment variables

```
