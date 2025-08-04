# 🏥 HealthCare – Doctor Consultation Booking

HealthCare is a **full-stack web application** that allows users to **book doctors for consultations** based on real-time availability.  
It provides a **responsive and modern UI**, **real-time availability checking**, and **securely stores doctor and booking data**.

---

### 🌐 Live Demo
[Health Care](https://nirog-gyan-frontend-assingment.vercel.app/)


## 🚀 Features

- **📅 Book Doctors by Availability** – Check **real-time available slots** and book instantly.
- **👨‍⚕️ Doctor Profiles** – View **specialization, consultation fees, and availability**.
- **💾 Data Storage** – Store doctor and booking information in **MongoDB** securely.
- **🎨 Responsive UI** – Built with **Tailwind CSS** for a clean and modern interface.
- **⚡ Fast Backend** – **Express.js** efficiently handles API requests.
- **🌐 Full Stack** – **React + Node.js** with TypeScript for type safety.

---

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ **React** (Vite / CRA)
- 🎨 **Tailwind CSS** (for modern UI styling)
- ⌨️ **TypeScript** (for type safety)

### **Backend**
- 🟢 **Node.js** (Runtime)
- 🚏 **Express.js** (Backend Framework)
- ⌨️ **TypeScript** (for type-safe backend development)

### **Database**
- 🍃 **MongoDB** (Database)
- 🐍 **Mongoose** (ODM for MongoDB)

---

## 📂 Folder Structure

### **Backend Folder Structure**
```
backend/
├─ node_modules/
├─ src/
│ ├─ models/
│ │ └─ Doctor.ts
│ ├─ routes/
│ │ └─ index.ts
│ ├─ app.ts
│ ├─ controllers.ts
│ ├─ dbConnection.ts
│ └─ index.ts
├─ .env
├─ package-lock.json
├─ package.json
├─ tsconfig.json
```

### **Frontend Folder Structure**
```
frontend/
│
├─ node_modules/
├─ public/
│
├─ src/
│ ├─ assets/ # Images, icons, static assets
│ ├─ components/ # Reusable UI components
│ │ ├─ DateTimeSlots.tsx
│ │ ├─ DoctorCard.tsx
│ │ ├─ Navbar.tsx
│ │ └─ SuccessMessage.tsx
│ ├─ pages/ # Page-level components
│ │ ├─ DoctorDetail.tsx
│ │ ├─ DoctorsList.tsx
│ │ └─ PatientForm.tsx
│ ├─ types/ # TypeScript interfaces/types
│ │ └─ index.ts
│ ├─ App.tsx # Root React component
│ ├─ counter.ts # Sample or utility component
│ ├─ main.tsx # App entry for React
│ ├─ index.css # Global styles
│ └─ vite-env.d.ts # Vite TypeScript support
│
├─ index.html
├─ package.json
├─ eslint.config.js
└─ .gitignore
```
