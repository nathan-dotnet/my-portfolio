# SMD Tower - Smart Storage Control Panel

A PLC-driven smart storage system with a 500-slot grid, manual PLC controls, Excel import, and SQL Server sync.

![Slots](https://img.shields.io/badge/Slots-500-blue)
![Database](https://img.shields.io/badge/Database-SQL%20Server-orange)
![Backend](https://img.shields.io/badge/Backend-Node.js%2FExpress-green)
![Frontend](https://img.shields.io/badge/Frontend-React%2FTypeScript-blue)
![PLC](https://img.shields.io/badge/PLC-Keyence-blue)

## Overview

SMD Tower provides an operational interface for an automated retrieval system. It combines:

- a React + TypeScript frontend
- a Node.js + Express backend
- SQL Server database storage
- direct TCP communication with a Keyence PLC

The app supports slot registration, retrieval, manual PLC axis control, quick move sequences, and Excel bulk import.

## Features

- **500 Slot Storage Grid** with live status
- **PLC Integration** through TCP/IP
- **Manual PLC Control** for Z, X, and R axes
- **Quick Move Sequence** with X=0 first, then Z/R move, then final X move
- **Reset + Servo Flow** after move commands
- **Excel Upload** for batch slot registration
- **Real-time Sync** every 5 seconds
- **Activity Logs** for all operations
- **Theme Toggle** for light/dark mode
- **Slot Management** for registration, retrieval, and clearing

🛬 Landing Page
![Landing Page](/projects/smd-tower/Screenshots/LandingPage.png)
💽 Storage
![Storage](/projects/smd-tower/Screenshots/Storage.png)
📋 Item List
![Item List](/projects/smd-tower/Screenshots/ItemList.png)
📤 Excel Upload
![Excel Upload](/projects/smd-tower/Screenshots/ExcelUpload.png)
✏️ Manual Entry
![Manual Entry](/projects/smd-tower/Screenshots/ManualList.png)
🎮 Manual Jug
![Manual Jug](/projects/smd-tower/Screenshots/ManualJug.png)
✅ Uploaded Items
![Uploaded Items](/projects/smd-tower/Screenshots/UploadedList.png)

## Tech Stack

### Frontend

- React 18 + TypeScript
- Vite
- TanStack Query
- Tailwind CSS + shadcn/ui
- Axios
- Sonner
- Lucide React

### Backend

- Node.js + Express
- mssql (SQL Server driver)
- TCP socket PLC client
- dotenv
- CORS
- Multer

### Database

- SQL Server
- Main tables: `StorageSlots`, `ActivityLogs`, `ExcelFiles`, `ExcelItems`

### PLC Communication

- Keyence PLC over TCP/IP
- Default PLC IP: `172.29.7.108` //example only
- Default PLC Port: `8501` //example only
- MR/DM device addressing for motion and register values

## Installation & Setup

### Prerequisites

- Node.js 18+
- SQL Server
- Keyence PLC accessible from the backend host

### Backend Setup

```bash
cd backend
npm install
# Create and configure .env
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Database Setup

1. Create a SQL Server database (e.g. `db_SMDTower`)
2. Run the migration script:

```bash
node schemaMigration.js
```

3. Configure the connection string in `backend/.env`

### PLC Setup

- `PLC_IP=172.29.7.108` //example only
- `PLC_PORT=8501` //example only

## Usage

### Storage Workflow

1. Upload Excel to register multiple items
2. Register an item into an empty slot
3. Retrieve an item from an occupied slot
4. Use Manual tab for direct PLC axis control

### Manual PLC Controls

- **Z axis**: `MR003` / `MR005` (up fast/slow), `MR002` / `MR004` (down fast/slow)
- **X axis**: `MR103` / `MR105` (pull fast/slow), `MR104` / `MR102` (push slow/fast)
- **R axis**: `MR203`, `MR205`, `MR204`, `MR202`
- **Reset**: `MR304`
- **Servo**: `MR306`
- **Move trigger**: `MR1305`

### Quick Move Sequence

The quick move route performs:

1. Move X to `0` while preserving current Z/R
2. Trigger `MR1305`
3. Move Z/R to target coordinates with X still at `0`
4. Trigger `MR1305`
5. Move X to the final target
6. Trigger `MR1305`
7. Run reset `MR304` and servo `MR306`

## API Endpoints

### Slots

- `GET /api/slots` - get all slots
- `GET /api/slots/:slotNumber` - get slot details
- `PUT /api/slots/:slotNumber` - update slot data
- `PUT /api/slots/clear/:slotNumber` - clear slot contents
- `GET /api/slots/empty/first` - first empty slot

### PLC

- `POST /api/plc/move` - move machine to saved slot coordinates
- `POST /api/plc/set` - manual MR device write
- `POST /api/plc/manual` - pulse a PLC device for a duration
- `GET /api/plc/read/:device` - read a PLC device value
- `POST /api/slots/:slotNumber/plc-axis-values` - save current PLC axis values to slot
- `POST /api/slots/:slotNumber/move-axis-values` - move using saved slot axis values
- `POST /api/slots/:slotNumber/quick-move` - quick move sequence (X=0 first)

### Excel

- `POST /api/excel/upload` - upload Excel file
- `GET /api/excel/files` - list uploaded files
- `GET /api/excel/files/:fileId/items` - list file items
- `POST /api/excel/files/:fileId/process` - process file data
- `DELETE /api/excel/files/:fileId` - delete uploaded file

## Project Structure

```
SMDTower/
├── backend/
│   ├── server.js          # Main Express server
│   ├── plc.js             # PLC communication helpers
│   ├── db.js              # Database connection helper
│   ├── schemaMigration.js # DB schema setup
│   ├── plcManual.js       # CLI helper for manual PLC commands
│   └── excelService.js    # Excel import logic
├── frontend/
│   ├── src/
│   │   ├── components/    # Shared React components
│   │   ├── pages/         # Main page views
│   │   ├── lib/           # API client and utilities
│   │   ├── hooks/         # Custom hooks
│   │   ├── types/         # TypeScript types
│   │   └── utils/         # Utility functions
│   └── public/            # Static assets
└── README.md
```

## Notes

- Keep the PLC connected while using the UI.
- Manual controls now track toggle state for direct device activation.
- The quick move route is optimized to move X to zero before Z/R movement.
