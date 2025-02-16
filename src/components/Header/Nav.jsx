import { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const Nav = () => {
  const [isSide, setIsSide] = useState(false);
  const navlinks = [
    {
        label: "Home",
        link: "/home",
      },
    {
      label: "Accreditions",
      link: "/Accredition",
    },
    {
      label: "About Us",
      link: "/about-us",
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
      label: "Contact-us",
      link: "/contact-us",
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
    <div className="z-[100000] pt-4  lg:pt-8 flex md:justify-between justify-between  backdrop-contrast-50 backdrop-brightness-50 drop-shadow-2xl  text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200 bg-transparent  px-10 hover:bg-blue-500 absolute top-0 right-0 w-full group">
      <a href="/" className="flex items-center gap-5">
        <img src="/LOGO int.png" alt="" className="max-w-[100px] pb-4" />
        <img src="image/ISO-9001.png" alt="" className="max-w-[100px]" />
        {/* <p className="text-sm font-normal text-white group-hover:text-black" >ISO 9001:2015 <br />
            (Quality Management System) <br />
            Office address: No. 43 Trans Amadi Road, Oginigba Phc</p> */}
      </a>
      <div className="flex  group ">
        <button
          type="button"
          className="text-slate-500 hover:text-slate-600 w-8 h-8 -my-1 flex items-center justify-center md:hidden dark:hover:text-slate-300"
        >
          <TiThMenu onClick={() => setIsSide(true)} />
        </button>

        <div className="hidden md:flex items-center pr-10">
          <nav>
            <ul className="flex gap-5">
            <li className="">
                <Link
                  to={"/home"}
                  className="font-semibold text-white group-hover:text-emerald-100 "
                >
                  {" "}
                  Home
                </Link>
                </li>
              <li className="">
                <Link
                  to={"/Accredition"}
                  className="font-semibold text-white group-hover:text-emerald-100 "
                >
                  {" "}
                  Accreditions
                </Link>
              </li>
              <li className="">
                <Link
                  to={"/about-us"}
                  className="font-semibold text-white group-hover:text-emerald-100"
                >
                  {" "}
                  About Us
                </Link>
              </li>
              <li className="">
                <Link
                  to={"/Training"}
                  className="font-semibold text-white group-hover:text-emerald-100"
                >
                  {" "}
                  Training Faculties
                  <KeyboardArrowDownRoundedIcon />
                </Link>
              </li>
              <li className="">
                <Link
                  to={"/Certificate"}
                  className="font-semibold text-white group-hover:text-emerald-100"
                >
                  {" "}
                  Verify Certificate
                </Link>
              </li>
              <li className="">
                <Link
                  to={"/Online"}
                  className="font-semibold text-white group-hover:text-emerald-100"
                >
                  {" "}
                  Online
                  <KeyboardArrowDownRoundedIcon />
                </Link>
              </li>
              <li className="">
                <Link
                  to={"/contact-us"}
                  className="font-semibold text-white group-hover:text-emerald-100"
                >
                  {" "}
                  Contact
                </Link>
              </li>
              <li className="">
                <Link
                  to={"/Blog"}
                  className="font-semibold text-white group-hover:text-emerald-100"
                >
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
        className={`fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all
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
