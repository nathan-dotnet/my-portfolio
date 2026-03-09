A PLC-based automated retrieval system with 500 slot capacity, built with React frontend and SQL Server backend.

![Storage System](https://img.shields.io/badge/Slots-500-blue)
![Database](https://img.shields.io/badge/Database-SQL%20Server-orange)
![Backend](https://img.shields.io/badge/Backend-Node.js%2FExpress-green)

## Features

- **500 Slot Storage Grid** - Visual grid showing occupied/empty slots
- **PLC Integration** - Simulated PLC commands for item retrieval
- **Real-time Sync** - Auto-refresh from SQL Server every 5 seconds
- **Activity Logging** - Complete audit trail of all operations
- **Dark/Light Mode** - Theme toggle support
- **3D Model Viewer** - SMD Tower STL model display

📸 Application Screenshots

🛬 Landing Page
![Landing Page](/projects/smd-tower/Screenshots/LandingPage.png)
💽 Storage
![Storage](/projects/smd-tower/Screenshots/Storage.png)
📋 Item List
![Item List](/projects/smd-tower/Screenshots/ItemList.png)

## Tech Stack

### Frontend

- React 18 + TypeScript
- Vite
- TanStack Query
- Tailwind CSS + shadcn/ui
- Axios
- Sonner
- Three.js / React Three Fiber

### Backend

- Node.js + Express
- mssql (Tedious driver)
- CORS
- dotenv

### Database

- SQL Server (SSMS)
- Tables: `StorageSlots`, `ActivityLogs`
