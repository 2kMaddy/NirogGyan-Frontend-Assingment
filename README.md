# NirogGyan-Frontend-Assingment

🏥 HealthCare – Doctor Consultation Booking
===========================================

HealthCare is a web application that allows users to **book doctors for consultations** based on their **availability**.It provides a **responsive and modern UI**, **real-time availability checking**, and stores **doctor details** in a secure database.

🚀 Features
-----------

*   📅 **Book Doctors by Availability** – Check real-time available slots.
    
*   👨‍⚕️ **Doctor Profiles** – View specialization, consultation fees, and availability.
    
*   💾 **Data Storage** – Store doctor data and booking info in **MongoDB**.
    
*   🎨 **Responsive UI** – Built with **Tailwind CSS** for a clean and modern interface.
    
*   ⚡ **Fast Backend** – **Express.js** handles API requests efficiently.
    
*   🌐 **Full Stack** – **React** for frontend, **Node.js** for runtime.
    

🛠️ Tech Stack
--------------

**Frontend:**

*   React (Vite or CRA)
    
*   Tailwind CSS (for styling)
    

**Backend:**

*   Node.js (Runtime)
    
*   Express.js (Backend Framework)
    

**Database:**

*   MongoDB (Mongoose for ODM)
    

📂 Folder Structure
-------------------

### **Backtend Folder Structure**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   backend/  │  ├─ node_modules/  ├─ src/  │   ├─ models/  │   │   └─ Doctor.ts  │   ├─ routes/  │   │   └─ index.ts  │   ├─ app.ts  │   ├─ controllers.ts  │   ├─ dbConnection.ts  │   └─ index.ts  ├─ .env  ├─ package-lock.json  ├─ package.json  ├─ tsconfig.json   `

### **Frontend Folder Structure**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   frontend/  │  ├─ node_modules/  ├─ public/  │  ├─ src/  │   ├─ assets/                   # Images, icons, static assets  │   │  │   ├─ components/               # Reusable UI components  │   │   ├─ DateTimeSlots.tsx  │   │   ├─ DoctorCard.tsx  │   │   ├─ Navbar.tsx  │   │   └─ SuccessMessage.tsx  │   │  │   ├─ pages/                    # Page-level components  │   │   ├─ DoctorDetail.tsx  │   │   ├─ DoctorsList.tsx  │   │   └─ PatientForm.tsx  │   │  │   ├─ types/                    # TypeScript interfaces/types  │   │   └─ index.ts  │   │  │   ├─ App.tsx                   # Root React component  │   ├─ counter.ts                # Sample or utility component  │   ├─ main.tsx                  # App entry for React  │   ├─ index.css                  # Global styles  │   └─ vite-env.d.ts             # Vite TypeScript support  │  ├─ index.html  ├─ package.json  ├─ eslint.config.js  └─ .gitignore   `