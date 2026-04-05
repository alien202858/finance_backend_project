# 💰 Finance Backend API

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express.js-Backend-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

---

## 🚀 Overview

A backend system for a finance dashboard with role-based access control, authentication, and financial analytics.

Built to demonstrate strong backend design, clean architecture, and API development skills.

---

## 🛠️ Tech Stack

* ⚙️ Node.js
* 🚀 Express.js
* 🗄️ MongoDB (Mongoose)
* 🔐 JWT Authentication

---

## ✨ Features

### 👤 User Management

* Register & login system
* Role-based access control:

  * 🟢 Admin → full access
  * 🔵 Analyst → read + insights
  * ⚪ Viewer → read-only

---

### 💰 Financial Records

* Create / Update / Delete records (Admin only)
* View records (All users)
* Fields:

  * Amount
  * Type (income / expense)
  * Category
  * Date
  * Notes

---

### 📊 Dashboard Analytics

* 📈 Total income
* 📉 Total expense
* 💼 Net balance

---

### 🔒 Security

* JWT-based authentication
* Middleware-based role authorization
* Protected routes

---

## 📦 Installation

```bash
git clone https://github.com/YOUR_USERNAME/finance-backend.git
cd finance-backend
npm install
npm start
```

---

## ⚙️ Environment Variables

Create `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/financeDB
JWT_SECRET=supersecret
```

---

## 📡 API Endpoints

### 🔐 Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

### 💰 Records

* GET `/api/records`
* POST `/api/records` (Admin only)
* PUT `/api/records/:id`
* DELETE `/api/records/:id`

### 📊 Dashboard

* GET `/api/dashboard/summary`

---

## 🧪 Testing

Use Postman to test APIs.

Add token in headers:

```bash
Authorization: your_token_here
```

---

## 📁 Project Structure

```
src/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
 ├── config/
```

---

## 🎯 Highlights

✔ Clean backend architecture
✔ Role-based access control
✔ RESTful API design
✔ Scalable structure

---

## 👨‍💻 Author

**Aditya Patil**

---

## ⭐ If you like this project

Give it a star on GitHub ⭐
