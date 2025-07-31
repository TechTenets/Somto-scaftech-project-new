import { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import "./dropdown.css";
const Nav = () => {
  const [isSide, setIsSide] = useState(false);
  const navlinks = [
    {
      label: "Home",
      link: "/home",
    },
    {
      label: "About_us",
      link: "/about_us",
    },
    {
      label: "Accreditions",
      link: "/Accredition",
    },
    {
      label: "Training Faculties",
      link: "/Training ",
    },

    {
      label: "Verify Certificate",
      link: "/Certificate",
    },

    {
      label: "Online",
      link: "/Online",
    },

    {
      label: "Contact_Us",
      link: "/contact_Us",
    },

    {
      label: "Blog",
      link: "/Blog",
    },
  ];

  // const toggleIsSide = () => {
  //   setIsSide(!isSide);
  // };

  return (
    <div className="z-[100000] pt-4  lg:pt-8 flex md:justify-between justify-between  text-[#0b1b2bcc] font-semibold text-sm leading-6 dark:text-black-200 bg-white hover:bg-[#0b1b2bcc] hover:text-white px-10  absolute top-0 right-0 w-full group  gap-20">
      <a href="/" className="flex items-center gap-5 ">
        <img
          src="/images/Scarftech-logo.webp"
          alt="Scarftech"
          className="max-w-[100px] pb-4"
        />
        <img src="image/ISO-9001.png" alt="" className="max-w-[100px]" />
      </a>
      <div className="flex  group  ">
        <button
          type="button"
          className="text-slate-500 hover:text-slate-600 w-8 h-8 -my-1 flex items-end justify-end md:hidden dark:hover:text-slate-300"
        >
          <TiThMenu onClick={() => setIsSide(true)} />
        </button>

        <div className="hidden md:flex items-center pr-10">
          <nav>
            <ul className="flex gap-5">
              <li className="cursor-pointer">
                <Link to={"/home"} className="font-semibold hover:text-black ">
                  {" "}
                  Home
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to={"/about_us"}
                  className="font-semibold hover:text-black"
                >
                  {" "}
                  About Us
                </Link>
              </li>
              <li className="">
                <Link
                  to={"/Accredition"}
                  className="font-semibold hover:text-black "
                >
                  {" "}
                  Accreditions
                </Link>
              </li>
              <li className="dropdown">
                <div className="font-semibold hover:text-black">
                  {" "}
                  Training Faculties
                  <KeyboardArrowDownRoundedIcon />
                  <div className="dropdown-content scroll-smooth">
                    <a href="/Welding">Welding Traning</a>
                    <a href="/inspector">QA/QC Inspector Traning</a>
                    <a href="/HeavyEquipment">Heavy Equipment Training</a>
                    <a href="/Blasting&Painting">Blasting and Painting Traning</a>
                    <a href="/health&Safety">Health And Safety Traning</a>
                    <a href="/work&height">Work at Height(Scaffolding Inspector,Supervisors,Foremen)</a>
                    <a href="/OSHA">OSHA Traning</a>
                    <a href="/lifthing&basicrigger">Lifting Operations Traning & Basic Rigger</a>
                    <a href="/towercrane">Tower Crane Traning</a>
                    <a href="/mobileElevated">Mobile Elevated Work Platform(MEWP) Scissors Lift Traning</a>
                    <a href="/Permittowork">Permit to work</a>
                    <a href="/Rigger">Rigger Traning</a>
                    {/* <a href="/LiftingSpecialist">Lifting Specialist Traning</a> */}
                    <a href="/Scaffold">Scaffold Training</a>
                    <a href="/NDT">NDT Traning (Non-Destructive Testing)</a>
                    <a href="/leadership&Accountability">Leadership and Accountability Traning</a>
                    <a href="/Defensive&Hazard">Defensive Driving & Harzard Awareness Traning</a>
                    <a href="/MentalReadiness&Ergonomics">Mental Readiness and Ergonomics Traning</a>
                    <a href="/SystemAudit&Analysis">System Audit and Skills Gap Analysis Traning</a>
                    <a href="/EquipmentOperation&Maintenace">Equipment Operation and Maintenace Traning</a>
                    <a href="/SustainableConstruction">Sustainable Construction Management Traning</a>
                    <a href="/Safety">Safety (HSE) Traning</a>
                    <a href="/ConfinedSpace">Confined Space and WAH Traning</a>
                    <a href="/SkilledOperation&Leadership">Skilled Operation and Leadership Traning</a>
                    <a href="/Customized">Customized Traning (according to client specification)</a>
                  </div>
                </div>
              </li>
              <li className="">
                <Link
                  to={"/ClientTestimonials"}
                  className="font-semibold hover:text-black"
                >
                  {" "}
                  Client Testimonials
                </Link>
              </li>
              {/* <li className="dropdown">
                <div className="font-semibold  hover:text-black">
                  {" "}
                  Online
                  <KeyboardArrowDownRoundedIcon />
                  <div className="dropdown-content">
                    <a href="/home">Free Resources</a>
                    <a href="/onlineCourses">Online Courses</a>
                  </div>
                </div>
              </li> */}
              <li className="">
                <Link
                  to={"/contact_Us"}
                  className="font-semibold hover:text-black"
                >
                  {" "}
                  Call to Action
                </Link>
              </li>
              <li className="">
                <Link to={"/Blog"} className="font-semibold hover:text-black">
                  {" "}
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        // className={clsx(
        //   " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
        //   isSideMenuOpen && "translate-x-0"
        // )}
        className={` absolute  h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all
              ${isSide && "translate-x-0"}
            `}
      >
        <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-3/5 flex  ">
          <IoCloseOutline
            onClick={() => setIsSide(false)}
            className="mt-0 mb-8 text-3xl cursor-pointer"
          />

          {navlinks.map((d, i) => (
            <Link
              onClick={() => setIsSide(false)}
              key={i}
              className="font-bold"
              to={d.link}
            >
              {d.label}
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Nav;
