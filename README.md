# 🔐 PasswordVault - Your Own Password Manager

A simple password manager web application built as a practice project to improve skills in **React**, **Tailwind CSS**, **Express.js**, and **MongoDB**.  
This project allows users to store, edit, and delete passwords directly in their own secure vault.  
_(Currently a **work in progress** — features and security will be expanded soon.)_

![Project Status](https://img.shields.io/badge/status-in%20development-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🚀 Features

### Current Features

- ✅ Add new passwords (URL, username, password)
- ✅ View all stored passwords
- ✅ Edit existing passwords
- ✅ Delete passwords from vault
- ✅ MongoDB integration with Express routes

### Planned Features

- 🔒 User authentication system (JWT)
- 🔐 Password encryption (bcrypt)
- 🔍 Search & filter functionality
- 📱 Improved responsive design

---

## 🛠 Tech Stack

### Frontend

| Technology        | Purpose            |
| ----------------- | ------------------ |
| ⚛️ React.js       | Component-based UI |
| 🎨 Tailwind CSS   | Responsive styling |
| 🔔 React Toastify | User notifications |

### Backend

| Technology    | Purpose                       |
| ------------- | ----------------------------- |
| 🖥️ Node.js    | Runtime environment           |
| 🚀 Express.js | REST API server               |
| 🗄️ MongoDB    | Database storage              |
| 🌐 CORS       | Cross-origin resource sharing |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB Atlas account or local MongoDB instance
- npm/yarn

### Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/password-manager.git
cd password-manager
```

### 2️⃣ Install dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
npm install
```

### 3️⃣ Configure Environment Variables

#### Create a .env file in the backend folder with:

```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
DB_NAME=your_database_name
```

### 4️⃣ Run the app

#### Backend

```bash
cd backend
npm run dev

```

#### Frontend

```bash
cd frontend
npm run dev

```

## 🔮 Upcoming Features & Security Improvements

This is an ongoing project, and the next goals are:

User Authentication System  
Login & registration pages  
JWT-based session handling  
Role-based access control (only logged-in users can access their vault)  
Password Security  
Hash passwords before storing (bcrypt)  
Encryption for stored data  
Secure HTTPS setup  
UI/UX Improvements  
Search & filter passwords  
Improved responsive layout

## 🤝 Contribution

This is mainly a personal practice project, but suggestions and improvements are welcome!

## 📜 License

This project is open source and available under the MIT License.

## 📞 Contact

For questions or suggestions, please open an issue or contact the directly.  
📧 hiteshminhas24@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/hitesh-kumar-248540270)
