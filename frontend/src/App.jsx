import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Appointments from "./pages/Appointments";
import Appointment from "./pages/Appointment";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/doctors/:speciality" element={<Doctors/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/appointments" element={<Appointments/>}/>
        <Route path="/appointment/:docId" element={<Appointment/>}/>
      </Routes>
    </div>
  );
};

export default App;
