import { Routes, Route } from "react-router-dom";
import DoctorsList from "./pages/DoctorsList";
import DoctorDetail from "./pages/DoctorDetail";
import PatientForm from "./pages/PatientForm";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<DoctorsList />} />
        <Route path="/doctor/:id" element={<DoctorDetail />} />
        <Route path="/patient-form/:id" element={<PatientForm />} />
      </Routes>
    </main>
  );
}

export default App;
