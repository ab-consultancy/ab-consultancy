# AB Consultancy - Backend API Service

Express.js REST API service supporting the AB Consultancy web platform.

## 📁 Directory Structure
```
backend/
├── src/
│   ├── controllers/
│   │   └── leadsController.js    # Logic for leads & eligibility
│   ├── routes/
│   │   └── api.js                # API routes definition
│   └── server.js                 # Express application entry point
├── .env.example                  # Environment configuration template
├── package.json                  # Dependencies & scripts
└── README.md
```

## 🚀 Setup & Execution

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

### 3. Start Development Server
```bash
npm run dev
```

The server will start on `http://localhost:5000` with hot-reload enabled (`node --watch`).

## 🔌 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Health check & service status |
| `POST` | `/api/leads` | Capture client inquiry or strategy booking |
| `POST` | `/api/eligibility` | Calculate estimated subsidy & margin requirement |
