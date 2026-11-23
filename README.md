# AB Consultancy - MSME & Government Scheme Advisory Platform

A full-stack, production-grade advisory and web platform for **AB Consultancy**, delivering advisory services for Indian MSMEs, manufacturers, and corporate groups seeking government subsidies, term loans, and infrastructure grants.

---

## 🏗️ Architecture & Directory Structure

The project is structured into modular frontend and backend packages:

```
new ABC/
├── frontend/                     # React + Vite client application
│   ├── src/                      # UI components, pages, hooks, assets
│   ├── public/                   # Production icons, brand logos, posters
│   ├── index.html                # Single-page application entry
│   ├── vite.config.js            # Vite build configuration
│   ├── tailwind.config.js        # Design tokens, color palette, responsive breakpoints
│   └── package.json              # Frontend dependencies & scripts
│
├── backend/                      # Node.js / Express REST API service
│   ├── src/
│   │   ├── controllers/          # Business logic (leads, calculations)
│   │   ├── routes/               # API route declarations
│   │   └── server.js             # Express server entry point
│   ├── .env.example              # Environment variables template
│   └── package.json              # Backend dependencies & scripts
│
├── services images/              # Original service artwork & reference posters
├── DESIGN_RULES.md               # Design tokens, spacing rhythm, and layout standards
├── package.json                  # Root orchestrator scripts
└── README.md                     # Platform overview & documentation
```

---

## ⚡ Quick Start

### 1. Run Frontend Development Server
From the project root:
```bash
npm run dev
```
*(Runs `vite` on `http://localhost:5173`)*

### 2. Build Frontend for Production
```bash
npm run build
```
*(Outputs optimized static assets to `frontend/dist`)*

### 3. Run Backend API Server
First configure dependencies and environment in `backend/`:
```bash
cd backend
npm install
npm run dev
```
*(Runs Express server on `http://localhost:5000`)*

Or run directly from the root workspace:
```bash
npm run backend
```

---

## 📐 Design Specifications

Review [frontend/DESIGN_RULES.md](file:///c:/Users/ASUS/OneDrive/Pictures/ドキュメント/Desktop/new%20ABC/frontend/DESIGN_RULES.md) for full design system details, typography scale, color tokens, and responsiveness guidelines.
