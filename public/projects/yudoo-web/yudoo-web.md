# YUDOO Web — Digital Process Instruction System

> A manufacturing workstation platform that replaces paper work instructions with live, station-specific digital guides — plus real-time PLC-driven status updates on the shop floor.

![Frontend](https://img.shields.io/badge/Frontend-React%2019%2FVite-blue)
![Backend](https://img.shields.io/badge/Backend-ASP.NET%20Core%20.NET%2010-512BD4)
![Realtime](https://img.shields.io/badge/Realtime-SignalR-orange)
![Status](https://img.shields.io/badge/Status-Internal%20Deployment-lightgrey)

## Quick Facts

|                |                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------------------------- |
| **My Role**    | Full stack developer — built the React frontend and the ASP.NET Core backend, including the SignalR real-time layer |
| **Deployment** | Internal — runs on the company network, not publicly accessible                                                     |
| **Stack**      | React 19 + TypeScript + Vite, ASP.NET Core (.NET 10), Entity Framework Core, SQL Server, SignalR                    |

## The Problem

Before YUDOO Web, the part-by-part build process for UPS units relied on paper-based instructions — any change to a model's build sequence meant manually reprinting and redistributing sheets to every station, with no live visibility into machine status without checking the floor directly.

## What I Built

YUDOO Web is a manufacturing workstation application supporting digital process instructions, daily logs, output monitoring, model and user maintenance, and live PLC-driven station updates pushed over SignalR.

## Architecture

```
[PLC] -> [PlcPollingService] -> [PlcStateCache] -> [SignalR Hub (/plchub)]
                                                            |
                                                [React frontend - live updates]

[React frontend] <--REST--> [ASP.NET Core API] <--EF Core--> [SQL Server]
```

A background `PlcPollingService` continuously reads PLC state and caches it in `PlcStateCache`. Changes are pushed to connected clients in real time through a SignalR hub, so operators see station status update live without refreshing the page — while standard CRUD operations (logs, models, users) go through a conventional REST API.

## Tech Stack

**Frontend:** React 19, TypeScript, Vite 8, React Router, Tailwind CSS

**Backend:** ASP.NET Core (.NET 10), Entity Framework Core, SQL Server, SignalR

**Integrations:** PLC polling service, workstation image sharing over the network

## Engineering Highlights

- **Built a real-time layer with SignalR** so station status reflects live PLC state instead of requiring manual refresh or client-side polling.
- **Model-aware process instruction lookup** — work instructions and images are resolved dynamically based on the selected model and station, rather than hardcoded per line.
- **Background polling service architecture** (`PlcService`, `PlcStateCache`, `PickToLightService`) decouples PLC communication from request/response handling, keeping the API responsive while continuously polling hardware.

## Screenshots

**Dashboard**
![Dashboard](/projects/yudoo-web/Screenshots/Dashboard.png)
The main workstation dashboard providing quick access to production monitoring, process instructions, and operational tools.

**Digital Process Instructions**
![Digital Process Instructions](/projects/yudoo-web/Screenshots/DigitalProcessInstructions.png)
Station-specific process steps and images, loaded dynamically based on the selected model and station.

**Daily Log**
![Daily Log](/projects/yudoo-web/Screenshots/DailyLog.png)
Lets operators and supervisors record and review daily production activity.

**Output Monitoring**
![Output Monitoring](/projects/yudoo-web/Screenshots/OutputMonitoring.png)
Real-time production output visibility.

**User Account Maintenance**
![User Account Maintenance](/projects/yudoo-web/Screenshots/UserAccountMaintenance.png)
Admin interface for managing users, permissions, and workstation access.

**Add Model**
![Add Model](/projects/yudoo-web/Screenshots/AddModel.png)
Manage manufacturing models and master data.

**Add Process**
![Add Process](/projects/yudoo-web/Screenshots/AddProcess.png)
Create and maintain digital process instructions.

**Settings**
![Settings](/projects/yudoo-web/Screenshots/Settings.png)
System configuration and application settings.

## Application Areas

**Frontend routes:** `/login` · `/dashboard` · `/digital-process-instruction` · `/add-new-process` · `/history` · `/dailylog` · `/user-account-maintenance` · `/output-monitoring` · `/settings`

**Backend modules:** User, model, DPI, daily log, output monitoring, station, and settings controllers; repository/service layers; `PlcService`, `PlcStateCache`, `PickToLightService`; `PlcHub` for real-time updates

## Known Limitations & Next Steps

- Some frontend calls are currently hardcoded to a local backend address rather than using relative paths. Planned cleanup: route everything through a single configurable API base URL (or a Vite proxy) so environment changes don't require code edits.
