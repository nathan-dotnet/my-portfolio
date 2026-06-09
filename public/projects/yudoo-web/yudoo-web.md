# YUDOO Web

YUDOO Web is a manufacturing workstation application with a React/Vite frontend and an ASP.NET Core backend. It supports digital process instructions, daily logs, output monitoring, model maintenance, user maintenance, PLC polling, and real-time workstation updates through SignalR.

## What is included

- Station-specific digital work instructions and image loading
- Model availability validation for process entry and save flows
- PLC polling and live station-state updates
- Daily log, output monitoring, and user management modules
- Backend services and repositories for SQL Server-backed workstation workflows

## Application Screenshots

### Dashboard

![Dashboard](/projects/yudoo-web/screenshots/Dashboard.png)

The main workstation dashboard providing quick access to production monitoring, process instructions, and operational tools.

---

### Digital Process Instructions

![Digital Process Instructions](/projects/yudoo-web/screenshots/DigitalProcessInstructions.png)

Displays workstation-specific process steps, work instructions, and images loaded dynamically based on the selected model and station.

---

### Daily Log

![Daily Log](/projects/yudoo-web/screenshots/DailyLog.png)

Allows operators and supervisors to record and review daily production activities and operational notes.

---

### Output Monitoring

![Output Monitoring](/projects/yudoo-web/screenshots/OutputMonitoring.png)

Provides real-time production output visibility and monitoring for manufacturing operations.

---

### User Account Maintenance

![User Account Maintenance](/projects/yudoo-web/screenshots/UserAccountMaintenance.png)

Administrative interface for managing users, permissions, and workstation access.

---

### Add Model

![Add Model](/projects/yudoo-web/screenshots/AddModel.png)

Manage manufacturing models and maintain production-related master data.

---

### Add Process

![Add Process](/projects/yudoo-web/screenshots/AddProcess.png)

Create and maintain digital process instructions and workstation workflows.

---

### Settings

![Settings](/projects/yudoo-web/screenshots/Settings.png)

System configuration and application settings management.

## Current project layout

- backend/ # ASP.NET Core API, services, repositories, SignalR hub
- frontend/ # React + TypeScript + Vite application
- yudoo-backend.sln # Backend solution file
- ARCHITECTURE_FLOW_DIAGRAM.md
- IMPLEMENTATION_COMPLETE.md
- QUICK_REFERENCE.md
- README.md

## Tech stack

- Frontend: React 19, TypeScript, Vite 8, React Router, Tailwind CSS
- Backend: ASP.NET Core (.NET 10), Entity Framework Core, SQL Server, SignalR
- Integrations: PLC polling service and workstation image sharing over the network

## Prerequisites

- Node.js and npm
- .NET SDK 10.0 or compatible with the backend target framework
- SQL Server access for the configured database
- Access to the PLC and workstation image share if you want the full production flow

## Quick start

### Backend

- powershell
- cd backend
- dotnet restore
- dotnet run --launch-profile http

The API runs at:

- http://localhost:5017

Key backend entry points:

- REST controllers under `/api/...`
- SignalR hub at `/plchub`
- Static workstation images served from `/images`
- Background PLC polling via `PlcPollingService`

### Frontend

- powershell
- cd frontend
- npm install
- npm run dev

The frontend dev server runs at:

- http://localhost:5173

## Common development commands

Backend:

- powershell
- cd backend
- dotnet build
- dotnet run --launch-profile http

Frontend:

- powershell
- cd frontend
- npm install
- npm run dev
- npm run build
- npm run lint
- npm run preview

## Configuration notes

Backend settings are stored in:

- backend/appsettings.json

Important values to review before running locally or deploying:

- `ConnectionStrings:DefaultConnection` for SQL Server
- `Plc:IpAddress` and `Plc:Port` for PLC communication
- The network image path used for workstation pictures in `backend/Program.cs`

## Main application areas

Frontend routes currently used by the app:

- `/login`
- `/dashboard`
- `/digital-process-instruction`
- `/add-new-process`
- `/history`
- `/dailylog`
- `/user-account-maintenance`
- `/output-monitoring`
- `/settings`

Backend modules include:

- User, model, DPI, daily log, output monitoring, station, and settings controllers
- Repository and service layers for database-backed operations
- `PlcService`, `PlcStateCache`, and `PickToLightService`
- `PlcHub` for real-time station updates

## Recent implementation highlights

The current codebase includes the following updates:

- Station-specific step and image lookup for digital process instruction screens
- Model availability validation with UI status messages and button state handling
- Improved workstation-specific image path resolution for the DPI flow

## Notes

- Some frontend calls are hardcoded to `http://localhost:5017`, while others use relative `/api/...` paths.
- If the backend host changes, update the frontend configuration or add a Vite proxy layer.
- Do not commit real production credentials in `backend/appsettings.json`; use environment-specific settings or secure secret storage for deployment.
