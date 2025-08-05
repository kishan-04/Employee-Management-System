# Employee Management System (EMS)

A backend application built with **Node.js**, **Express**, and **MongoDB** to manage employee records using a RESTful API.

---

## 📁 Project Structure

```

EMS/
├── backend/
│   ├── controllers/         # Request handling logic
│   ├── models/              # Mongoose models
│   ├── db.js                # MongoDB connection setup
│   ├── index.js             # Application entry point
│   ├── .env                 # Environment configuration
│   ├── package.json         # Project metadata and scripts
├── .vscode/                 # Editor config (optional)

````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/EMS.git
cd EMS/backend
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file inside the `backend/` folder:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

> Replace the URI with your MongoDB Atlas/local connection string.

### 4. Start the Server

```bash
node index.js
```

Server will run on: `http://localhost:5000`


## 📂 .gitignore Example

Make sure the following are added to `.gitignore`:

```
node_modules/
.env
```

## 📝 License

This project is licensed under the MIT License
```
