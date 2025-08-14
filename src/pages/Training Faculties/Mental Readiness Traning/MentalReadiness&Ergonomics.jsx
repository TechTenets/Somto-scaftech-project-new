import React from "react";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const MentalReadiness = () => {
  return (
    <div className="w-full mt-20">
      <section>
        <img
          className="w-full h-80 px-5 bg-cover bg-center cursor-pointer"
          src="/scaftech-hire.jpg"
          alt=""
        />

        <div className="text-center bg-gray-100 w-auto h-auto">
          <h1 className="text-4xl text-gray-900 text-center font-bold pt-10 ">
            MENTAL READINESS AND ERGONOMICS TRAINING
          </h1>

          <p className="text-sm text-gray-800 py-5">
            <span className="text-blue-950 font-bold text-base">Slogan:</span>{" "}
            Hazard Awareness Ensures Safety
          </p>
          {/* <button className="rounded-md border-2 text-base font-medium mb-10 text-gray-950 border-black border-solid p-3 mt-5 hover:text-white hover:bg-blue-900">
                         View Courses 
                    </button> */}
        </div>

        <div className="text-center">
          <h1 className="text-2xl text-gray-900 text-center font-bold pt-7 ">
            Course Contents Overview
          </h1>
        </div>

        <article className="pl-15 text-sm text-gray-800 py-10">
          <p>
            Scaftech Engineering Services’ Mental Readiness & Ergonomics
            Training equips workers with the psychological resilience and
            physical awareness needed to perform safely, <br /> efficiently, and
            sustainably. This expertly designed program by Scaftech Engineering
            Services combines mental alertness strategies, stress management,
            and ergonomic best <br /> practices to reduce fatigue, boost focus,
            and prevent musculoskeletal injuries and burnout, ensuring a
            healthier and more productive workforce.
          </p>

          <div className="">
            <h1 className="text-xl text-gray-900 font-bold pt-7 ">
              Pre-requisites
            </h1>
          </div>

          <p className="pt-3">● Open to all employees across departments</p>
          <p className="pt-3">
            ● No prior technical or safety training required
          </p>
          <p className="pt-3">
            ● Willingness to engage in self-awareness and workplace safety
            practices promoted by Scaftech Engineering Services
          </p>
          <p className="pt-3">
            ● Basic literacy and interest in health and performance
          </p>

          <div className="">
            <h1 className="text-xl text-gray-900 font-bold pt-7 ">
              Course Objectives
            </h1>
            <p className="pt-4">
              Participants in Scaftech Engineering Services’ Mental Readiness &
              Ergonomics Training will:
            </p>
          </div>

          <p className="pt-5">
            ● Understand the role of mental readiness in accident prevention and
            job performance
          </p>
          <p className="pt-3">
            ● Learn techniques to manage stress, stay alert, and boost mental
            focus with guidance from Scaftech Engineering Services
          </p>
          <p className="pt-3">
            ● Identify and correct ergonomic hazards in the workplace
          </p>
          <p className="pt-3">
            ● Apply posture, lifting, and workstation setup techniques to reduce
            strain and fatigue, as taught by Scaftech Engineering Services
          </p>
          <p className="pt-3">
            ● Promote a culture of wellness, early symptom reporting, and
            self-care
          </p>
          <p className="pt-5">
            ● Support safe decision-making under pressure and in high-risk tasks
            aligned with Scaftech Engineering Services’ standards
          </p>

          <div className="">
            <h1 className="text-xl text-gray-900 font-bold pt-7 ">
              Target Audience
            </h1>
          </div>

          <p className="pt-3">● Frontline Workers & Equipment Operators</p>
          <p className="pt-3">● Office Staff & Admin Teams</p>
          <p className="pt-3">● HSE Officers & Safety Coordinators</p>
          <p className="pt-3">● Line Supervisors & Shift Leaders</p>
          <p className="pt-3">● HR & Occupational Health Teams</p>
          <p className="pt-3">● Remote or Isolated Workers</p>

          <div className="">
            <h1 className="text-xl text-gray-900 font-bold pt-7 ">
              Target Industry
            </h1>
          </div>

          <p className="pt-3">● Oil & Gas / Manufacturing / Construction</p>
          <p className="pt-3">● Logistics & Warehouse Operations</p>
          <p className="pt-3">● Healthcare & Emergency Services</p>
          <p className="pt-3">● Engineering & Power Utilities</p>
          <p className="pt-3">● Government & NGOs</p>
          <p className="pt-3">● Office & Administrative Workplaces</p>

          <div className="">
            <h1 className="text-xl text-gray-900 font-bold pt-7 ">
              List of Courses Under Scaftech Engineering Services Mental
              Readiness and Ergonomics Training
            </h1>
          </div>

          <p className="pt-3">● Corporate Ergonomics Program</p>
          <p className="pt-3">● Basic Workplace Ergonomics Training</p>
          <p className="pt-3">● Participatory Ergonomics Team Training</p>
        </article>

        <section>
          <div className="font-bold text-2xl text-blue-950 pt-30 text-center">
            <h1>ACCREDITATIONS AND PROFESSIONAL MEMBERSHIPS</h1>
          </div>

          <div className="pl-45 pt-4">
            <img src="/images/gallery/Accreditation.jpg" alt="" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default MentalReadiness;
