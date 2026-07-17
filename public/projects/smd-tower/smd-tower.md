# SMD Tower - Automated Storage Management System

An intelligent storage control system with PLC integration, real-time synchronization, and intuitive web interface for managing a 500-slot automated storage tower.

![Architecture](https://img.shields.io/badge/Architecture-Full%20Stack-blue)
![Database](https://img.shields.io/badge/Database-SQL%20Server-orange)
![Backend](https://img.shields.io/badge/Backend-ASP.NET%20Core-512BD4)
![Frontend](https://img.shields.io/badge/Frontend-React%2FTypeScript-61DAFB)
![PLC](https://img.shields.io/badge/PLC-Keyence-FF6600)

## Overview

SMD Tower is a comprehensive storage management system that bridges enterprise web technology with industrial automation. It provides real-time control and monitoring of an automated storage tower through:

- **React + TypeScript** modern web interface
- **ASP.NET Core** REST API backend
- **SQL Server** persistent storage
- **Keyence PLC** TCP/IP communication for hardware control

## Key Features

### Storage Management
- **500-Slot Storage Grid** with real-time status monitoring
- **Slot Registration & Retrieval** workflow
- **Bulk Import** via Excel spreadsheet
- **Item Tracking** with metadata and history

### PLC Control
- **Direct TCP/IP Communication** with Keyence PLC
- **Multi-Axis Control** for Z, X, and R axes
- **Coordinated Move Sequences** (X=0 → Z/R move → final X position)
- **Servo Reset & Control Flow** after movements

### System Operations
- **Real-time Data Sync** (5-second intervals)
- **Comprehensive Activity Logs** for auditing
- **Health Monitoring** and status indicators
- **Theme Toggle** (Light/Dark mode)

### Developer Features
- **RESTful API** with comprehensive endpoints
- **Type-safe Frontend** with TypeScript
- **Database Migrations** support
- **Health Check** endpoints

## Tech Stack

### Frontend
- **React 18** + TypeScript for type-safe UI
- **Vite** for fast builds and HMR
- **TanStack Query** for server state management
- **Tailwind CSS** + **shadcn/ui** for styling
- **Axios** for HTTP requests
- **Lucide React** for icons
- **Sonner** for toast notifications

### Backend
- **.NET 10** with ASP.NET Core
- **C#** for backend logic
- **SQL Server** driver for database access
- **TCP Socket Communication** for PLC integration
- **CORS** enabled for frontend integration

### Database
- **SQL Server** database
- **Schema Migrations** support
- Core tables: `StorageSlots`, `ActivityLogs`, `ExcelFiles`, `ExcelItems`

### PLC Communication
- **Keyence PLC** over TCP/IP protocol
- **MR/DM Device Addressing** for motion and register values
- **Configurable IP & Port** via settings

## Project Structure

```
SMDTower/
├── frontend/                 # React TypeScript application
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/            # Page components
│   │   ├── hooks/            # Custom hooks
│   │   ├── lib/              # Utilities & API client
│   │   └── types/            # TypeScript definitions
│   └── package.json
├── backend/                  # ASP.NET Core API
│   ├── Controllers/          # API endpoints
│   ├── Models/               # Data models
│   ├── Data/                 # Database access
│   ├── Plc/                  # PLC communication
│   ├── Excel/                # Excel import service
│   └── Program.cs            # Application entry point
└── README.md
```

## Getting Started

### Prerequisites
- **.NET SDK 10.0** or later
- **Node.js 18+** and npm
- **SQL Server** (local or remote)
- **Keyence PLC** (accessible from backend host)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Configure database connection in `appsettings.Development.json`:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=YOUR_SERVER;Database=SMDTower;Trusted_Connection=true;"
  }
}
```

3. Configure PLC settings:
```json
{
  "Plc": {
    "Host": "172.29.7.108",
    "Port": 8501
  }
}
```

4. Run the application:
```bash
dotnet run
```

The backend API will start on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Configure API endpoint in `.env` (if needed):
```
VITE_API_URL=http://localhost:5000
```

4. Start development server:
```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

## API Endpoints

### Slots
- `GET /api/slots` - Get all storage slots
- `GET /api/slots/{slotId}` - Get specific slot details
- `POST /api/slots` - Register new item
- `PUT /api/slots/{slotId}` - Update slot
- `DELETE /api/slots/{slotId}` - Clear slot

### PLC Control
- `POST /api/plc/move` - Execute coordinated move
- `POST /api/plc/axis-control` - Direct axis control
- `GET /api/plc/status` - Get PLC status

### Activity
- `GET /api/logs` - Get activity logs
- `GET /api/stats` - Get system statistics

### Excel Import
- `POST /api/excel/upload` - Upload and process Excel file
- `GET /api/excel/items` - Get imported items

### Health
- `GET /health` - Health check endpoint

## Database Schema

### StorageSlots
Tracks individual storage slot status and contents

### ActivityLogs
Records all system operations and user actions

### ExcelFiles & ExcelItems
Stores bulk import data and results

## Configuration

### Development vs Production
- **appsettings.Development.json** - Local development settings
- **appsettings.json** - Production/default settings

Key configurations:
- Database connection string
- PLC host and port
- CORS policies
- Logging levels

## Building for Production

### Backend
```bash
cd backend
dotnet publish -c Release -o ./publish
```

### Frontend
```bash
cd frontend
npm run build
```

## Troubleshooting

### PLC Connection Issues
- Verify PLC IP and port in configuration
- Check network connectivity to PLC
- Review logs for TCP connection errors

### Database Issues
- Ensure SQL Server is running
- Verify connection string and credentials
- Run migrations if schema is missing

### Frontend Build Issues
- Clear `node_modules` and reinstall: `npm install`
- Clear Vite cache: `rm -rf dist`

## Development

### Running Tests
```bash
cd backend
dotnet test
```

### Code Style
- Backend: C# .NET conventions
- Frontend: TypeScript with ESLint

## Usage Workflow

### Storage Operations
1. **Register Item**: Add an item to an empty slot via the dashboard
2. **Bulk Import**: Upload Excel file for batch registration
3. **Retrieve Item**: Locate and retrieve item from storage
4. **Manual Control**: Direct PLC axis control for maintenance

### PLC Axis Controls
- **Z Axis**: Vertical movement (up/down)
- **X Axis**: Horizontal movement (push/pull)
- **R Axis**: Rotation control
- **Reset & Servo**: System controls for position reset and servo engagement

## License

MIT

## Support

For issues or questions about the project, please open an issue on GitHub.

