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
                  <div className="dropdown-content">
                    <a href="/Training">Lifting Operation Traning</a>
                    <a href="/ropeAccess">Rope Access/ScaffoldingTraning</a>
                    <a href="/nonDestructive">Non Destructive Testing (NDT)</a>
                    <a href="/IWCF/Drilling">IWCF/IADC Drilling Traning</a>
                    <a href="/health&Safety">Health And Safety Traning</a>
                    <a href="/employability">Employability Skills Traning</a>
                  </div>
                </div>
              </li>
              <li className="">
                <Link
                  to={"/Certificate"}
                  className="font-semibold hover:text-black"
                >
                  {" "}
                  Verify Certificate
                </Link>
              </li>
              <li className="dropdown">
                <div className="font-semibold  hover:text-black">
                  {" "}
                  Online
                  <KeyboardArrowDownRoundedIcon />
                  <div className="dropdown-content">
                    <a href="/home">Free Resources</a>
                    <a href="/onlineCourses">Online Courses</a>
                  </div>
                </div>
              </li>
              <li className="">
                <Link
                  to={"/contact_Us"}
                  className="font-semibold hover:text-black"
                >
                  {" "}
                  Contact
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
