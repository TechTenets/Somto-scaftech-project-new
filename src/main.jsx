import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootRoute from "./route/RootRoute.jsx";
import App from "./App.jsx";
import About_us from "./pages/About_us/About_us";
import Home from "./pages/Home.jsx";
import Accredition from "./pages/Accreditions/Accredition.jsx";
import Certificate from "./pages/Verify Certificate/Certificate.jsx";
import Contact_Us from "./pages/Contact Us/Contact_Us.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import LiftingOperation from "./pages/Training Faculties/Lifting Operation/Lifting Operation.jsx";
import RopeAccess from "./pages/Training Faculties/RopeAccess/RopeAccess.jsx";
import Scaffolding from "./pages/Training Faculties/NonDestructive/Scaffolding.jsx";
import IWCFDrilling from "./pages/Training Faculties/IWCF/IADC/IWCF Drilling.jsx";
import HealthandSafety from "./pages/Training Faculties/Health and Safety/Health and Safety.jsx";
import EmployabilitySkills from "./pages/Training Faculties/Employability Skills/Employability Skills.jsx";
import FreeResources from "./pages/Online/Free_Resourses/FreeResources.jsx";
import OnlineCourses from "./pages/Online/Online_Courses/OnlineCourses.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootRoute />}>
      <Route path="" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="about_us" element={<About_us />} />
      <Route path="Accredition" element={<Accredition />} />
      <Route path="Training" element={<LiftingOperation />} />
      <Route path="ropeAccess" element={<RopeAccess />} />
      <Route path="nonDestructive" element={<Scaffolding />} />
      <Route path="IWCF/Drilling" element={<IWCFDrilling />} />
      <Route path="health&Safety" element={<HealthandSafety />} />
      <Route path="employability" element={<EmployabilitySkills />} />
      <Route path="Certificate" element={<Certificate />} />
      <Route path="Contact_Us" element={<Contact_Us />} />
      <Route path="/home" element={<FreeResources />} />
      <Route path="onlineCourses" element={<OnlineCourses />} />
      <Route path="Blog" element={<Blog />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
