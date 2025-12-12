# ❤️ Medicine Donation Management System (CCCD)

**Note:** This repository contains the original source code developed during the Hackathon. The project was subsequently developed into a full production release which is currently in use. While the production code is private, you can interact with the finished system via the **Training Environment** linked below.

---

## 📂 Original Hackathon Resources

Below are the design artifacts and setup instructions from the original Hackathon submission.

### Project Setup

```sh
npm install
```

### Server

```sh
npm run dev
```

### Video

```sh
https://youtu.be/EMbOHDd_wzE
```

### Design

```sh
https://www.figma.com/design/W2L6NYhz5QGoNMjIU0SHM4/Hackaton-2024?node-id=0-1&t=jO7hvNcEhNapZPW1-1
```

### MER
```sh
https://dbdiagram.io/d/66ed9ceda0828f8aa68890e1
```

---

## 🎮 Live Demo (Training Environment)

Explore the full functionality of the finished application in our test environment:

🔗 [**Access here**](https://slfront-frj1y8978-santos-luzardos-projects.vercel.app)

### 🔐 Test Credentials
Use these credentials to explore the different user roles defined in the system:

| Role | Username / Document | Password | Access Level |
| :--- | :--- | :--- | :--- |
| **Administrator** | V11111111 | V11111111 | Full access: Inventory, Users, Statistics |
| **Donor** | J34567832 | J34567832 | View impact statistics & profile |
| **Patient** | V12000222 | V12000222 | View assigned treatments & schedule |

>⚠️ Important Note: This environment is running on a free Render service, which automatically spins down (goes to sleep) after periods of inactivity. If you receive an "Invalid Credentials" error or a timeout on your first login attempt, please wait about a minute for the service to wake up and restart, then try again. It will work normally once the instance is active.

---

## 📖 About The Project

This system was designed to optimize the distribution of medicines in communities with chronic patients, such as **Santos Luzardo**. It solves the logistical challenge of managing donations, tracking expiration dates, and ensuring patients receive their assigned treatments on time.

### Key Features by Module

The system is divided into three specialized portals:

#### 👨‍⚕️ 1. Administrator Module
The core of the system for logistical management.
* **User Management:** Register and manage Patients, Donors, and other Administrators.
* **Inventory Control:** Track medicine stock, manage batches/lots, and monitor expiration dates (available, expiring, expired).
* **Distribution:** Assign medicines to specific patients and mark treatments as delivered.
* **Reports & Analytics:** Visualize real-time stats on demographics, prevalent pathologies (Diabetes, Hypertension, Cancer), and donation impact.

#### 🎁 2. Donor Module
Designed to provide transparency and encourage recurring donations.
* **Impact Tracking:** Donors can view how many people have benefitted from their contributions.
* **Status Monitoring:** Track the status of donated medicines (Delivered vs. Pending).

#### 🏥 3. Patient Module
Empowers beneficiaries to manage their own health schedule.
* **Treatment Dashboard:** View active prescriptions and check availability status ("Available" vs. "Not Available").
* **Schedule:** Check programmed delivery dates for upcoming medication.

---

## 🛠️ Accessibility & UI
* **Authentication:** Secure login via Document ID (V/E/J) and password.
* **Dark Mode:** Built-in support for Light and Dark themes for better accessibility.

---
## 👥 Project Team
### 🚀 Phase 2: Completion & Deployment (August 2025)
_The team responsible for finalizing the system, conducting user testing, and deploying the production environment for the community service requirement._
- Rosalinda Abreu
- María Escobar
- Neri Carballo
- Fausto Camacho

### 💡 Phase 1: Original Hackathon Team
_The original creators who designed the architecture, Figma prototypes, and built the MVP during the CCCB hackathon._
- Rosalinda Abreu
- Abrahan Almao
- Andres Alvarez
- Neri Carballo

