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
import LiftingOperation from "./pages/Training Faculties/Lifting Operation & Basic Rigger/LiftingOperations.jsx";
import RopeAccess from "./pages/Training Faculties/QA/QC Training/Inspector Training.jsx";
import Scaffolding from "./pages/Training Faculties/Heavy Equipment Training/Cranes,Forklifs,Trailors.jsx";
import IWCFDrilling from "./pages/Training Faculties/IWCF/Blasting and Painting Training/Blastingandpainting.jsx";
import HealthandSafety from "./pages/Training Faculties/Health and Safety/Health and Safety.jsx";
import EmployabilitySkills from "./pages/Training Faculties/Work at Height/ScaffoldingInspection.jsx";
import FreeResources from "./pages/Online/Free_Resourses/FreeResources.jsx";
import OnlineCourses from "./pages/Online/Online_Courses/OnlineCourses.jsx";
import WeldingTraning from "./pages/Training Faculties/Welding Training/WeldingTraning.jsx";
import QAQCInpector from "./pages/Training Faculties/QA/QC Training/Inspector Training.jsx";
import EarthMovingEquipment from "./pages/Training Faculties/Heavy Equipment Training/Cranes,Forklifs,Trailors.jsx";
import BlastingandPainting from "./pages/Training Faculties/IWCF/Blasting and Painting Training/Blastingandpainting.jsx";
import WorkatHeight from "./pages/Training Faculties/Work at Height/ScaffoldingInspection.jsx";
import Osha from "./pages/Training Faculties/OSHA/OSHA.jsx";
import TowerCrane from "./pages/Training Faculties/Tower Crane Training/TowerCrane.jsx";
import MobileElevated from "./pages/Training Faculties/Mobile Elevated Work Platform/MobileElevated.jsx";
import FireWarden from "./pages/Training Faculties/Fire Warden and Marshal Traning/FireWarden.jsx";
import Rigger from "./pages/Training Faculties/Rigger/Rigger.jsx";
import LiftingSpecialist from "./pages/Training Faculties/IWCF copy/Lifting Specialist/LiftingSpecailist.jsx";
import NDT from "./pages/Training Faculties/Non-Destructive-Testing Traning/NDT.jsx";
import LeadershipAccount from "./pages/Training Faculties/Leadership and Accountability/LeadershipandAccountability.jsx";
import DefensiveDriving from "./pages/Training Faculties/Defensive Driving & Harzard/DefensiveDriving&Hazard.jsx";
import MentalReadiness from "./pages/Training Faculties/Mental Readiness Traning/MentalReadiness&Ergonomics.jsx";
import SystemAudit from "./pages/Training Faculties/System Audit and Gap Traning/SystemAudit&Skills.jsx";
import EquipmentOperation from "./pages/Training Faculties/Equipment Operation/EquipOperation.jsx";
import SustainableConstruction from "./pages/Training Faculties/Sustainable Contruction Traning/SustainableConstruction.jsx";
import Safety from "./pages/Training Faculties/Safety HSE Traning/Safety.jsx";
import ConfinedSpace from "./pages/Training Faculties/Confined Space Traning/ConfinedSpace.jsx";
import SkilledOperation from "./pages/Training Faculties/Skilled Operation Traning/SkilledOperation.jsx";
import Customized from "./pages/Training Faculties/Customized Traning/Customized.jsx";
import ClientTestimonials from "./pages/Verify Certificate/Certificate.jsx";
import CalltoAction from "./pages/Contact Us/Contact_Us.jsx";
import LiftingPlan from "./pages/Training Faculties/Lifting Plan Traning/LiftingPlan.jsx";
import HeavyEquipment from "./pages/Training Faculties/Heavy Equipment Training/Cranes,Forklifs,Trailors.jsx";
import Permittowork from "./pages/Training Faculties/Fire Warden and Marshal Traning/FireWarden.jsx";
import Scaffold from "./pages/Training Faculties/Lifting Plan Traning/LiftingPlan.jsx";
import TermsofServices from "./pages/Training Faculties/Terms of Services/termsofservices.jsx";
import PrivacyPolicy from "./pages/Training Faculties/Privacy Policy/privacypolicy.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootRoute />}>
      <Route path="" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="about_us" element={<About_us />} />
      <Route path="Accredition" element={<Accredition />} />
      <Route path="Welding" element={<WeldingTraning />} />
      <Route path="Inspector" element={<QAQCInpector />} />
      <Route path="HeavyEquipment" element={<HeavyEquipment />} />
      <Route path="Blasting&Painting" element={<BlastingandPainting />} />
      <Route path="health&Safety" element={<HealthandSafety />} />
      <Route path="work&height" element={<WorkatHeight />} />
      <Route path="OSHA" element={<Osha />} />
      <Route path="lifthing&basicrigger" element={<LiftingOperation />} />
      <Route path="towercrane" element={<TowerCrane />} />
      <Route path="mobileElevated" element={<MobileElevated />} />
      <Route path="Permittowork" element={<Permittowork />} />
      <Route path="Rigger" element={<Rigger />} />
      {/* <Route path="LiftingSpecialist" element={<LiftingSpecialist />} /> */}
      <Route path="Scaffold" element={<Scaffold />} />
      <Route path="NDT" element={<NDT />} />
      <Route path="leadership&Accountability" element={<LeadershipAccount />} />
      <Route path="Defensive&Hazard" element={<DefensiveDriving />} />
      <Route path="MentalReadiness&Ergonomics" element={<MentalReadiness />} />
      <Route path="SystemAudit&Analysis" element={<SystemAudit />} />
      <Route
        path="EquipmentOperation&Maintenace"
        element={<EquipmentOperation />}
      />
      <Route
        path="SustainableConstruction"
        element={<SustainableConstruction />}
      />
      <Route path="Safety" element={<Safety />} />
      <Route path="ConfinedSpace" element={<ConfinedSpace />} />
      <Route
        path="SkilledOperation&Leadership"
        element={<SkilledOperation />}
      />
      <Route path="Customized" element={<Customized />} />
      <Route path="ClientTestimonials" element={<ClientTestimonials />} />
      <Route path="Contact_Us" element={<CalltoAction />} />
      <Route path="TermsOfServices" element={<TermsofServices />} />
       <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
      {/* <Route path="/home" element={<FreeResources />} />
      <Route path="onlineCourses" element={<OnlineCourses />} /> */}
      <Route path="Blog" element={<Blog />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
