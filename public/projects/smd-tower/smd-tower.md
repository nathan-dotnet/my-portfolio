# SMD Tower — Smart Storage Control Panel

> A factory-floor inventory system that lets operators register, locate, and retrieve up to 500 SMD reel slots — and drives the storage tower's PLC directly from the web app.

![Slots](https://img.shields.io/badge/Slots-500-blue)
![Database](https://img.shields.io/badge/Database-SQL%20Server-orange)
![Backend](https://img.shields.io/badge/Backend-Node.js%2FExpress-green)
![Frontend](https://img.shields.io/badge/Frontend-React%2FTypeScript-blue)
![PLC](https://img.shields.io/badge/PLC-Keyence-blue)
![Status](https://img.shields.io/badge/Status-Internal%20Deployment-lightgrey)

## Quick Facts

|                |                                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| **My Role**    | Full stack developer — designed and built the frontend, backend API, database schema, and PLC integration |
| **Deployment** | Internal — runs on the company network, not publicly accessible                                           |
| **Stack**      | React + TypeScript, Node.js/Express, SQL Server, Keyence PLC (TCP/IP)                                     |

## The Problem

Before SMD Tower, reel retrieval was a fully manual process — operators had to physically search through trays to locate items, which was slow and prone to mis-picks. The engineering team built SMD Tower to automate this with a PLC-driven storage and retrieval system, controlled through a single web interface.

## What I Built

SMD Tower is the operational interface for an automated SMD reel storage and retrieval system. It combines a React + TypeScript frontend, a Node.js + Express backend, SQL Server for persistence, and direct TCP communication with a Keyence PLC that physically drives the storage tower.

The system supports:

- A **500-slot storage grid** with live occupancy status
- **Manual PLC axis control** (Z, X, R) for direct machine operation
- A **quick-move sequence** that safely orders axis movement (X to zero first, then Z/R, then final X) to avoid collisions
- **Excel bulk import** for registering large batches of items at once
- **Real-time sync** with the PLC every 5 seconds
- Full **activity logging** of every operation

## Architecture

```
[Web UI] <--> [Express API] <--> [SQL Server]
                   |
           [TCP Socket Client] <--> [Keyence PLC]
```

The frontend talks to the backend over REST. The backend owns both the database connection and the live PLC socket connection, so the frontend never talks to the PLC directly — this keeps the safety-critical movement logic (the quick-move sequence) in one place, on the server, instead of duplicated across UI code.

## Tech Stack

**Frontend:** React 18, TypeScript, Vite, TanStack Query, Tailwind CSS + shadcn/ui, Axios, Sonner, Lucide React

**Backend:** Node.js, Express, `mssql` driver, custom TCP socket client for PLC communication, Multer (file uploads), CORS, dotenv

**Database:** SQL Server — core tables: `StorageSlots`, `ActivityLogs`, `ExcelFiles`, `ExcelItems`

**Hardware Integration:** Keyence PLC over TCP/IP, using MR (relay) and DM (register) device addressing for motion control

## Engineering Highlights

- **Designed the quick-move sequence** to physically protect the machine — forcing the X axis to zero before any Z/R movement prevents the arm from colliding with the storage rack.
- **Built the PLC TCP client from scratch** — a raw socket protocol implementation, not an off-the-shelf SDK.
- **Excel import pipeline** parses and validates bulk uploads before writing to SQL Server, with per-row error handling so one bad row doesn't fail the whole batch.

## Screenshots

🛬 **Landing Page**
![Landing Page](/projects/smd-tower/Screenshots/LandingPage.png)

💽 **Storage Grid**
![Storage](/projects/smd-tower/Screenshots/Storage.png)

📋 **Item List**
![Item List](/projects/smd-tower/Screenshots/ItemList.png)

📤 **Excel Upload**
![Excel Upload](/projects/smd-tower/Screenshots/ExcelUpload.png)

✏️ **Manual Entry**
![Manual Entry](/projects/smd-tower/Screenshots/ManualList.png)

🎮 **Manual Jog Controls**
![Manual Jog](/projects/smd-tower/Screenshots/ManualJug.png)

✅ **Uploaded Items**
![Uploaded Items](/projects/smd-tower/Screenshots/UploadedList.png)

## API Reference

### Slots

| Method | Endpoint                       | Description         |
| ------ | ------------------------------ | ------------------- |
| GET    | `/api/slots`                   | Get all slots       |
| GET    | `/api/slots/:slotNumber`       | Get slot details    |
| PUT    | `/api/slots/:slotNumber`       | Update slot data    |
| PUT    | `/api/slots/clear/:slotNumber` | Clear slot contents |
| GET    | `/api/slots/empty/first`       | First empty slot    |

### PLC

| Method | Endpoint                                  | Description                            |
| ------ | ----------------------------------------- | -------------------------------------- |
| POST   | `/api/plc/move`                           | Move machine to saved slot coordinates |
| POST   | `/api/plc/set`                            | Manual MR device write                 |
| POST   | `/api/plc/manual`                         | Pulse a PLC device for a duration      |
| GET    | `/api/plc/read/:device`                   | Read a PLC device value                |
| POST   | `/api/slots/:slotNumber/plc-axis-values`  | Save current PLC axis values to slot   |
| POST   | `/api/slots/:slotNumber/move-axis-values` | Move using saved slot axis values      |
| POST   | `/api/slots/:slotNumber/quick-move`       | Run the quick-move sequence            |

### Excel

| Method | Endpoint                           | Description          |
| ------ | ---------------------------------- | -------------------- |
| POST   | `/api/excel/upload`                | Upload Excel file    |
| GET    | `/api/excel/files`                 | List uploaded files  |
| GET    | `/api/excel/files/:fileId/items`   | List file items      |
| POST   | `/api/excel/files/:fileId/process` | Process file data    |
| DELETE | `/api/excel/files/:fileId`         | Delete uploaded file |

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
│   └── src/
│       ├── components/    # Shared React components
│       ├── pages/         # Main page views
│       ├── lib/           # API client and utilities
│       ├── hooks/         # Custom hooks
│       ├── types/         # TypeScript types
│       └── utils/         # Utility functions
└── README.md
```

## PLC Connection (example values, not real network addresses)

```
PLC_IP=192.168.1.100
PLC_PORT=8501
```
