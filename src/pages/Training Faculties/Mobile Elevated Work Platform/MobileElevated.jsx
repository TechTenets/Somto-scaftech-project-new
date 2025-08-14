import React from "react";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const MobileElevated = () => {
  return (
    <div className="w-full mt-20">
      <section>
        <img
          className="w-full h-80 px-5 bg-cover bg-center cursor-pointer"
          src="/Scaftechfork.-2jpg.jpg"
          alt=""
        />

        <div className="text-center bg-gray-100 w-auto h-auto">
          <h1 className="text-4xl text-gray-900 text-center font-bold pt-10 ">
            MOBILE ELEVATED WORK PLATFORM(MEWP) SCISSORS LIFT TRAINING
          </h1>

          <p className="text-sm text-gray-800 py-5">
            <span className="text-blue-950 font-bold text-base">Slogan:</span>{" "}
            Rise Smartly with Confidence with Scaftech
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
            Scaftech Engineering Services’ MEWP Scissor Lift Training prepares
            operators to safely and effectively operate scissor lifts in
            elevated work environments. This comprehensive <br /> course,
            designed by Scaftech Engineering Services, covers equipment
            controls, stability principles, hazard recognition, fall prevention,
            and emergency procedures, ensuring <br /> operators meet
            site-specific and international safety standards upheld by Scaftech
            Engineering Services.
          </p>

          <div className="">
            <h1 className="text-xl text-gray-900 font-bold pt-7 ">
              Pre-requisites
            </h1>
          </div>

          <p className="pt-3">
            ● Physically and medically fit for work at height
          </p>
          <p className="pt-3">● Basic literacy and communication skills</p>
          <p className="pt-3">
            ● Prior general safety or work-at-height awareness (recommended)
          </p>
          <p className="pt-3">
            ● PPE (safety harness, helmet, boots, etc.) must be available for
            practical sessions conducted by Scaftech Engineering Services
          </p>

          <div className="">
            <h1 className="text-xl text-gray-900 font-bold pt-7 ">
              Course Objectives
            </h1>
            <p className="pt-4">
              Participants in Scaftech Engineering Services’ MEWP Scissor Lift
              Training will:
            </p>
          </div>

          <p className="pt-5">
            ● Understand the components, functions, and limitations of scissor
            lifts
          </p>
          <p className="pt-3">
            ● Learn how to conduct pre-use inspections and identify potential
            hazards with guidance from Scaftech Engineering Services
          </p>
          <p className="pt-3">
            ● Operate MEWPs with a focus on balance, load management, and safe
            maneuvering
          </p>
          <p className="pt-3">
            ● Apply safety procedures for elevation, descent, movement, and
            emergency lowering as taught by Scaftech Engineering Services
          </p>
          <p className="pt-3">
            ● Comply with OSHA/ISO/BS EN safety standards and site-specific
            permit protocols
          </p>

          <div className="">
            <h1 className="text-xl text-gray-900 font-bold pt-7 ">
              Target Audience
            </h1>
          </div>

          <p className="pt-3">● Construction Workers & Site Technicians</p>
          <p className="pt-3">● Warehouse & Maintenance Personnel</p>
          <p className="pt-3">● Facility & Utility Contractors</p>
          <p className="pt-3">
            ● Operators involved in elevated tasks or equipment installation
          </p>
          <p className="pt-3">
            ● Safety Officers & Supervisors overseeing aerial lift operations
          </p>

          <div className="">
            <h1 className="text-xl text-gray-900 font-bold pt-7 ">
              Target Industry
            </h1>
          </div>

          <p className="pt-3">● Construction & Civil Engineering</p>
          <p className="pt-3">● Oil & Gas / Power / Telecom Installation</p>
          <p className="pt-3">● Manufacturing / Warehousing / Maintenance</p>
          <p className="pt-3">● Events & Stage Rigging Services</p>
          <p className="pt-3">● Aviation Ground Operations</p>
          <p className="pt-3">
            ● Facility Management & Industrial Cleaning Services
          </p>

          <div className="">
            <h1 className="text-xl text-gray-900 font-bold pt-7 ">
              List of Courses Under Scaftech Engineering Services MEWP Scissor
              Lift Training
            </h1>
          </div>

          <p className="pt-3">● Primelift Safety Resources Training</p>
          <p className="pt-3">● MEWP Scissor Lift Training</p>
          <p className="pt-3">● Manlift training</p>
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

export default MobileElevated;
