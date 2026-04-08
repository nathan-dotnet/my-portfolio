A comprehensive full-stack dashboard tailored for monitoring **Keyence PLC-connected industrial machinery** in real time. The system integrates
**Raspberry Pi devices**, **Python data collectors**, and an **ASP.NET Core MVC web application** written in **C#**, backed by **SQL Server**.
It is used in smart manufacturing lines covering multiple factory areas including P1FA Oil Proof, P1SA Winding, P1FA Wire Harness, P1SA Circuit, P1SA Press, P1SA Molding, and Power Monitoring\.

---

## Architecture Overview

### Workflow

1. Edge devices (Raspberry Pi 5) running Python scripts connect to Keyence PLCs.
2. Sensor and status information are read over a socket protocol and formatted into structured records.
3. Data is pushed into a central SQL Server database.
4. The ASP.NET Core MVC web app queries the database, applies business logic, and renders dashboards.
5. Users access the web interface for live charts, tables, alerts, and historic reports.

### System Components

- **Raspberry Pi 5 (Python)** Collector process that communicates with PLCs and writes to SQL Server.
- **Backend & API** ASP.NET Core 8.0 MVC application using EF Core / Dapper for data access.
- **Database** Microsoft SQL Server stores both realtime and historical machine data.
- **Frontend** Razor views with HTML/JS/CSS provide interactive dashboards and administration pages.
- **Email Service** VoltageMailerService sends notifications (MailKit).

---

## Technology Stack

| Layer             | Technology                         |
| ----------------- | ---------------------------------- |
| Edge Device       | Raspberry Pi 5 (Python 3.x)        |
| Data Collector    | Custom Python script               |
| PLC Interface     | Keyence PLC via socket             |
| Backend Framework | ASP.NET Core MVC (net8.0)          |
| Language          | C#                                 |
| ORM/Data Access   | Entity Framework Core / Dapper     |
| Database          | Microsoft SQL Server               |
| Frontend          | Razor, Bootstrap, jQuery, Chart.js |
| Email             | MailKit                            |
| IDE               | Visual Studio 2022/2023            |

---

## Coverage & Monitoring Areas

- **P1FA Oil Proof**
- **P1SA Winding**
- **P1FA Wire Harness**
- **P1SA Circuit**
- **P1SA Press**
- **P1SA Molding**
- **Power Monitoring**

## Project Structure

- Controllers/ MVC controllers grouped by functional area.
- Models/ Data models and DTOs; subfolders mirror controllers.
- Data/ DbContextParameters and EF Core context definitions.
- Services/ Background services such as VoltageMailerService.
- Views/ Razor view templates.

## Getting Started

### Prerequisites

- Visual Studio 2022 or later with **.NET 8.0 SDK**, **ASP.NET and web development** workload.
- SQL Server (Express or full) accessible to the application.
- (Optional) A RaspberryPi5 device running the PLC data collector script.
- Connection strings configured in appsettings.json.

### Configuration

Edit appsettings.json to supply your database endpoints and any other
settings (e.g., mail server credentials). Example:
`json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=SERVER_NAME;Database=db_RaspberryPiHMI;User ID=sa;Password=YourPassword;TrustServerCertificate=True",
    "EMSConnection": "Server=SERVER_NAME;Database=dbEMS;User ID=sa;Password=YourPassword;TrustServerCertificate=True",
    "PowerMonitoringConnection": "Server=SERVER_NAME;Database=db_PowerMonitoring;User ID=sa;Password=YourPassword;TrustServerCertificate=True"
  }
}
`

### Build & Run

1. Open the solution:
   `bash
git clone https://github.com/SDPPEPI/Oil-Proof-Dashboard.git
cd "IoT Engineering Dashboard"
start IoT\ Engineering\ Dashboard.sln
`
2. Restore NuGet packages (Visual Studio will do this automatically).
3. Build the solution (Build > Build Solution).
4. Run with IIS Express (F5) or publish to a host.

### Access the Dashboard

Browse to https://localhost:5001 (or the configured URL) to view
realtime metrics, navigate between areas, and access administrative pages.

---

## Database

Migrations are not included; the schema is assumed to already exist. The
application uses EF Core with connection strings defined above. Use your own
scripts or tools (SSMS) to create tables matching the models in Models/.

---

📸 Application Screenshots
🏠 EIM Machine List

Displays connected machines and their operational status.

![EIM Machine List](/projects/iot-dashboard/Screenshots/EIMMachineList.png)
📊 P1-O EIM33 Dashboard

Real-time KPI monitoring and machine performance overview.

![P1-O EIM33 Dashboard](/projects/iot-dashboard/Screenshots/P1-O-EIM33Dashboard.png)
📈 P1-O EIM33 Histogram

Production distribution and performance analysis visualization.

![P1-O EIM33 Histogram](/projects/iot-dashboard/Screenshots/P1-O-EIM33Histogram.png)
🧵 P1FA Wire Harness Monitoring
![P1FA Harness](/projects/iot-dashboard/Screenshots/P1FAHarness.png)
🔌 P1SA Circuit Monitoring
![P1SA Circuit](/projects/iot-dashboard/Screenshots/P1SACircuit.png)
🏭 P1SA Molding Monitoring
![P1SA Molding](/projects/iot-dashboard/Screenshots/P1SAMolding.png)
🏗 P1SA Press Monitoring
![P1SA Press](/projects/iot-dashboard/Screenshots/P1SAPress.png)
🧶 P1SA Winding Monitoring
![P1SA Winding](/projects/iot-dashboard/Screenshots/P1SAWinding.png)
⚡ Power Monitoring – Monthly Trend
![Power Monitoring Monthly Trend](/projects/iot-dashboard/Screenshots/PowerMonitoringMT.png)
⚡ Power Monitoring – PQAnalysis
![Power Monitoring PQAnalysis](/projects/iot-dashboard/Screenshots/PowerMonitoringPQ.png)
⚡ Power Monitoring – Voltage Summary
![Power Monitoring Voltage Summary](/projects/iot-dashboard/Screenshots/PowerMonitoringVS.png)

---

## Features

- Real-time charts and tables per production area (including power monitoring metrics)
- Historical trend reports
- Error logging with counters (CircuitErrorLog, PressErrorLog, etc.)
- Email alerts via VoltageMailerService
- Modular controllers and views make it easy to add new lines or metrics

---

## Contributing

1. Fork the repository.
2. Create a feature branch (feature/).
3. Make changes and ensure the application builds.
4. Submit a pull request with a clear description.

---

## License

This project does not contain an explicit license file. First assume that the
source is proprietary to the organization unless otherwise specified.

---
