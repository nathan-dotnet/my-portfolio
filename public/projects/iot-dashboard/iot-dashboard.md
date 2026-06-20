# IoT Engineering Dashboard — Real-Time Factory Monitoring

> A full-stack monitoring system that gives engineers live visibility into PLC-connected machinery across seven production lines — replacing manual floor checks with real-time dashboards and automated alerts.

![Backend](https://img.shields.io/badge/Backend-ASP.NET%20Core%20MVC-512BD4)
![Database](https://img.shields.io/badge/Database-SQL%20Server-orange)
![Edge](https://img.shields.io/badge/Edge-Raspberry%20Pi%205-red)
![PLC](https://img.shields.io/badge/PLC-Keyence-blue)
![Status](https://img.shields.io/badge/Status-Internal%20Deployment-lightgrey)

## Quick Facts

|                |                                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| **My Role**    | Full stack developer — built the ASP.NET Core backend, dashboards, and Raspberry Pi data collection layer |
| **Deployment** | Internal — runs on the company network, not publicly accessible                                           |
| **Stack**      | Raspberry Pi 5 (Python), ASP.NET Core 8 MVC (C#), SQL Server, Razor/Bootstrap/Chart.js                    |

## The Problem

Before this dashboard existed, engineers had no centralized way to see machine status or power data across the seven production lines — checking on a line meant physically walking the floor, and issues were often caught late, after they'd already affected output.

## What I Built

A comprehensive dashboard system for monitoring Keyence PLC-connected industrial machinery in real time, covering seven production areas: P1FA Oil Proof, P1SA Winding, P1FA Wire Harness, P1SA Circuit, P1SA Press, P1SA Molding, and Power Monitoring.

## Architecture

```
[Keyence PLC] --TCP--> [Raspberry Pi 5 / Python collector]
                                |
                       [SQL Server (central DB)]
                                |
            [ASP.NET Core MVC web app] --> [Razor dashboards / Chart.js]
                                |
                    [Email alerts via MailKit]
```

Edge devices (Raspberry Pi 5 running Python) read sensor and status data directly from the PLCs over a socket protocol and write structured records into SQL Server. The ASP.NET Core MVC app then queries that data, applies business logic, and renders live dashboards, historical reports, and alerts.

## Tech Stack

| Layer         | Technology                         |
| ------------- | ---------------------------------- |
| Edge Device   | Raspberry Pi 5 (Python 3.x)        |
| PLC Interface | Keyence PLC via socket             |
| Backend       | ASP.NET Core MVC (.NET 8), C#      |
| Data Access   | Entity Framework Core / Dapper     |
| Database      | Microsoft SQL Server               |
| Frontend      | Razor, Bootstrap, jQuery, Chart.js |
| Notifications | MailKit (email alerts)             |

## Engineering Highlights

- **Designed a multi-stage data pipeline** spanning edge hardware (Raspberry Pi), a central database, and a web layer — handling everything from raw PLC reads to formatted dashboards.
- **Built error logging and alerting** (e.g. `CircuitErrorLog`, `PressErrorLog`) so engineers get notified automatically instead of discovering issues on a floor walk.
- **Modular controller/view structure** makes it straightforward to onboard a new production line or metric without touching existing modules.

## Screenshots

🏠 **Machine List**
![EIM Machine List](/projects/iot-dashboard/Screenshots/EIMMachineList.png)

📊 **Live KPI Dashboard**
![P1-O EIM33 Dashboard](/projects/iot-dashboard/Screenshots/P1-O-EIM33Dashboard.png)

📈 **Production Histogram**
![P1-O EIM33 Histogram](/projects/iot-dashboard/Screenshots/P1-O-EIM33Histogram.png)

🧵 **Wire Harness Monitoring**
![P1FA Harness](/projects/iot-dashboard/Screenshots/P1FAHarness.png)

🔌 **Circuit Monitoring**
![P1SA Circuit](/projects/iot-dashboard/Screenshots/P1SACircuit.png)

🏭 **Molding Monitoring**
![P1SA Molding](/projects/iot-dashboard/Screenshots/P1SAMolding.png)

🏗 **Press Monitoring**
![P1SA Press](/projects/iot-dashboard/Screenshots/P1SAPress.png)

🧶 **Winding Monitoring**
![P1SA Winding](/projects/iot-dashboard/Screenshots/P1SAWinding.png)

⚡ **Power Monitoring — Monthly Trend**
![Power Monitoring Monthly Trend](/projects/iot-dashboard/Screenshots/PowerMonitoringMT.png)

⚡ **Power Monitoring — PQ Analysis**
![Power Monitoring PQAnalysis](/projects/iot-dashboard/Screenshots/PowerMonitoringPQ.png)

⚡ **Power Monitoring — Voltage Summary**
![Power Monitoring Voltage Summary](/projects/iot-dashboard/Screenshots/PowerMonitoringVS.png)

## Key Features

- Real-time charts and tables per production area, including power monitoring metrics
- Historical trend reports
- Automated error logging with per-line counters
- Email alerts via a background `VoltageMailerService`
- Modular controllers/views for easy expansion to new lines or metrics

## Project Structure

```
IoTEngineeringDashboard/
├── Controllers/   # MVC controllers grouped by production area
├── Models/        # Data models and DTOs
├── Data/          # EF Core DbContext + connection config
├── Services/      # Background services (e.g. VoltageMailerService)
└── Views/         # Razor view templates
```
