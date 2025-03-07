import ContactForm from "../components/ContactForm";
import Header from "../components/Header/Header";
import SwiperComp from "../components/Swiper/SwiperComp";
import DensityMediumRoundedIcon from "@mui/icons-material/DensityMediumRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import TurnedInRoundedIcon from "@mui/icons-material/TurnedInRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import KeyOffRoundedIcon from "@mui/icons-material/KeyOffRounded";
import GroupAddSharpIcon from "@mui/icons-material/GroupAddSharp";
import Imageslider from "../components/Imageslider";
import "./style.css";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import GraphicEqTwoToneIcon from "@mui/icons-material/GraphicEqTwoTone";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PinDropIcon from "@mui/icons-material/PinDrop";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="searchBar" data-script="search-bar">
        <div className="searchBar--overlay"></div>
        <div className="container searchBar--container">
          <div className="searchBar--wrapper">
            <div className="arrow"></div>
            <button className="searchBar--close" aria-label="close">
              <span className="visibility-hidden">close</span>
              <i className="icon-close-light"></i>
            </button>
          </div>
        </div>
      </div>
      <main
        id="main-content"
        className="main-content page-type"
        data-analytics='{"templateType":"Home","contentType":"Home","audienceSegment":"(not set)","language":"English"}'
        data-page-type="Home"
      ></main>

      <div className="grid grid-cols-1 p-5 gap-20 px-20 justify-around overflow-hidden  xl:grid-cols-3 md:grid-cols-2">
        <div className="bg-[#0b1b2bcc] rounded-sm w-full h-80 p-5 ease-in-out text-white m-4 hover:bg-gray-100 hover:text-[#0b1b2bcc] hover:scale-105 transform transition duration-75 ">
          <div className="bg-gray-200 p-2 items-center w-1/6 rounded-full">
            <DensityMediumRoundedIcon />
          </div>
          <h1 className="font-bold pt-5 text-2xl font-sans">
            Full Course List
          </h1>
          <p className="pt-2 pb-1 font-light text-sm">
            Click to see a comprehensive list of all our Training Programmes.
          </p>
        </div>

        <div className="bg-[#0b1b2bcc] rounded-sm  h-80 p-5 ease-in-out text-white m-4 hover:bg-gray-100 hover:text-[#0b1b2bcc] hover:scale-105 transform transition duration-75">
          <div className="bg-gray-200 p-2  w-1/6 rounded-full">
            <CalendarTodayRoundedIcon />
          </div>
          <h1 className="font-bold pt-5 font-sans text-2xl">
            2025 Training Calender
          </h1>
          <p className="pt-2 pb-1 font-light text-sm">
            Click to view and download our training Schedule.
          </p>
        </div>

        <div className="bg-[#0b1b2bcc] rounded-sm  h-80 p-5 ease-in-out text-white m-4 hover:bg-gray-100 hover:text-[#0b1b2bcc] hover:scale-105 transform transition duration-75">
          <div className="bg-gray-200 p-2  w-1/6 rounded-full">
            <TurnedInRoundedIcon />
          </div>
          <h1 className="font-bold pt-5 font-sans text-2xl">
            Weekly Course Booking
          </h1>
          <p className="pt-2 pb-1 font-light text-sm">
            Click to view and register for any of our upcoming trainings.
          </p>
        </div>
      </div>

      <section>
        <div className="text-center font-semibold text-3xl text-blue-950 pt-15 pb-8">
          <h1>Our Traninig Faculties</h1>
        </div>

        <div className="grid grid-cols-1  gap-5  justify-between overflow-hidden  xl:grid-cols-3 md:grid-cols-2">
          <div className="flex-col p-2">
            <div>
              <img src="/jc img 1.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>IWCF Drilling Courses</h1>
            </div>
            <div className="font-medium text-blue-950">
              <p>9 Courses</p>
            </div>
          </div>

          <div className="flex-col p-2">
            <div>
              <img src="/jc-img2.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Lifting Operations</h1>
            </div>
            <div className="font-medium text-blue-950">
              <p>54 Courses</p>
            </div>
          </div>
          <div className="flex-col p-2">
            <div>
              <img src="/jc-img3.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Employabilty Skills</h1>
            </div>
            <div className="font-medium text-blue-950">
              <p>32 Courses</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1  gap-5  justify-between overflow-hidden  xl:grid-cols-3 md:grid-cols-2 p-4">
          <div className="flex-col p-2">
            <div>
              <img src="/jc-img4.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Healthy & Safety</h1>
            </div>
            <div className="font-medium text-blue-950">
              <p>23 Courses</p>
            </div>
          </div>

          <div className="flex-col p-2">
            <div>
              <img src="/jc-5.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Rope Access</h1>
            </div>
            <div className="font-medium text-blue-950">
              <p>3 Courses</p>
            </div>
          </div>
          <div className="flex-col p-2">
            <div className="items-baseline">
              <img src="/jc-img6.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-15 pl-3 ">
              <h1>ASNT NDT INSPECTION</h1>
            </div>
            <div className="font-medium text-blue-950 pl-3">
              <p>6 Courses</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="text-center font-semibold text-3xl text-blue-950 pt-20 pb-4">
          <h1>ACCREDITATIONS</h1>
        </div>

        <p className="font-bold text-blue-950 text-center">
          Click on any accreditation logo to find the course that best supports
          your career ambitions and certification needs.
        </p>

        <div className="grid grid-cols-1 justify-between xl:grid-cols-5 md:grid-cols-2">
          <div className=" p-2">
            <div>
              <img src="/images/opito-1.jpg" alt="" />
            </div>
          </div>

          <div className=" p-2">
            <div>
              <img src="/images/IOSH-2.png" alt="" />
            </div>
          </div>

          <div className=" p-2">
            <div>
              <img src="/images/NPORS-3.png" alt="" />
            </div>
          </div>

          <div className=" p-2">
            <div>
              <img src="/images/IWCF-4.png" alt="" />
            </div>
          </div>
          <div className=" p-2">
            <div>
              <img src="/images/IADC-5.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-between xl:grid-cols-5 md:grid-cols-2">
          <div className=" p-2">
            <div>
              <img src="/images/leea-6.png" alt="" />
            </div>
          </div>

          <div className=" p-2">
            <div>
              <img src="/images/nuprc-7.png" alt="" />
            </div>
          </div>

          <div className=" p-2">
            <div>
              <img src="/images/IADC-8.jpg" alt="" />
            </div>
          </div>

          <div className=" p-2">
            <div>
              <img src="/images/ASNT-9.jpg" alt="" />
            </div>
          </div>
          <div className=" p-2">
            <div>
              <img src="public/images/IRATA-10.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-10">
        <div className="text-center font-serif font-bold text-3xl text-blue-950 pt-15 pb-3">
          <h1>Why Choose JCI </h1>
        </div>

        <div className="font-semibold xl:text-base md:text-xs  text-base text-blue-950 text-center pb-15">
          <p>
            We are steadfast in our commitment to providing high-quality
            training programs that enable corporate <br />
            organizations enhance the competence of their personnel, while also
            empowering individuals to reach their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 justify-around   xl:grid-cols-3 md:grid-cols-2 ">
          <div className="bg-gray-100 rounded-sm w-96 h-96 hover:bg-[#0b1b2bcc] hover:text-white p-5 ease-in-out text-[#0b1b2bcc] hover:scale-105 transform transition duration-75 ">
            <div className="flex justify-center items-center">
              <div className="">
                <PublicRoundedIcon />
              </div>
            </div>
            <h1 className="font-bold text-2xl pt-5 font-sans">
              Industry Recognized Certifications
            </h1>
            <p className="pt-4 pb-1 text-sm  font-light ">
              We have gained accreditation from recognized bodies to train
              assess and certify personnel in the oil and gas industry..
            </p>
          </div>

          <div className="bg-gray-100 rounded-sm w-96 h-96 hover:bg-[#0b1b2bcc] hover:text-white p-5 ease-in-out text-[#0b1b2bcc] hover:scale-105 transform transition duration-75">
            <div className="flex justify-center items-center">
              <div className="">
                <KeyOffRoundedIcon />
              </div>
            </div>
            <h1 className="font-bold text-2xl pt-5 font-sans ">
              Hands-on Practical Training
            </h1>
            <p className="pt-4 pb-1 text-sm  font-light ">
              We prioritize hands-on learning to prepare students for real-world
              scenarios, making them job-ready from day one.
            </p>
          </div>

          <div className="bg-gray-100 rounded-sm w-96 h-96 hover:bg-[#0b1b2bcc] hover:text-white p-5 ease-in-out text-[#0b1b2bcc] hover:scale-105 transform transition duration-75">
            <div className="flex justify-center items-center">
              <div className="">
                <GroupAddSharpIcon />
              </div>
            </div>
            <h1 className="font-bold text-2xl pt-5 font-sans ">
              Certified & Experienced Instructors
            </h1>
            <p className="pt-4 pb-1 text-sm  font-light ">
              Our trainings are led by certified and highly experienced
              instructors with years of industry experience.
            </p>
          </div>
        </div>
      </section>

      <section className=" mt-20 mb-10 bg-[#0b1b2bcc] swiperImageSection">
        <div className="swiperImageSection_div1">
          <Imageslider />
        </div>

        <div className="text-white  swiperImageSection_div2">
          <h1 className="pb-4  font-bold text-2xl">
            Driving Competence and Growth in <br />
            Africa's Oil & Gas Industry Through <br />
            Specialized Training Services
          </h1>

          <p className="text-base font-medium">
            For 23 years, JC International has been delivering specialist <br />
            training services to the Oil & Gas, Marine, and Construction <br />
            industries. Our vision is to become Africa's leading Oil & Gas{" "}
            <br />
            training provider by offering high-quality programs that <br />
            enhance corporate personnel competence and empower <br />
            individuals of all ages to reach their full potential.
          </p>

          <button className="rounded-md border-2 text-base font-medium border-black border-solid p-3 mt-5 hover:text-white hover:bg-black">
            Enrol Now
          </button>
        </div>
      </section>

      <section>
        <div className="text-center font-semibold text-3xl text-blue-950  pb-4">
          <h1>Explore Popular Courses</h1>
        </div>
        <div className="font-bold text-gray-600 text-center">
          <p>
            All our courses are fully accredited by relevant regulatory bodies.
          </p>
        </div>

        <div className="flex justify-between pl-4 pr-4 pt-4 pb-15">
          <div className="font-semibold text-3xl text-blue-950">
            <p>Popular Courses</p>
          </div>
          <div className="text-blue-950 font-semibold text-sm rounded-full bg-gray-200 p-4 ">
            <button>Featured Courses</button>
          </div>
        </div>

        <div className="flex justify-between overflow-hidden">
          <div className="flex-col ease-in-out p-2 hover:scale-105 transform transition duration-75">
            <div>
              <img src="/images/Image-A.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Rotary Drilling</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              Expert
            </div>

            <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div>
          </div>

          <div className="flex-col p-2 ease-in-out hover:scale-105 transform transition duration-75">
            <div>
              <img src="/images/IMG-scaled.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Appointed Persons for Lifting...</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              Expert
            </div>

            <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div>
          </div>
          <div className="flex-col p-2 ease-in-out hover:scale-105 transform transition duration-75">
            <div>
              <img src="/images/jci-img.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Powered Industrial Trucks</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              Expert
            </div>

            <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div>
          </div>
          <div className="flex-col p-2 ease-in-out hover:scale-105 transform transition duration-75">
            <div>
              <img src="/images/LIFTING-SLINGING.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Lifting And Slinging</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div>

            <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div>
          </div>
          <div className="flex-col p-2 ease-in-out hover:scale-105 transform transition duration-75">
            <div>
              <img src="/ICPDigital.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>IADC Wellsharp</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              Expert
            </div>

            <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div>
          </div>
          <div className="flex-col p-2 ease-in-out hover:scale-105 transform transition duration-75">
            <div>
              <img src="/JC-IWCF.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Introduction to Well Control</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              Expert
            </div>

            <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex-col p-2 ease-in-out hover:scale-105 transform transition duration-75">
            <div>
              <img src="/images/Well-Control.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>IWCF Well Intervention</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div>

            <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div>
          </div>

          <div className="flex-col p-2 ease-in-out hover:scale-105 transform transition duration-75">
            <div>
              <img src="/jci-24.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Cargo Carrying Unit Inspection</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div>

            <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div>
          </div>
          <div className="flex-col p-2 ease-in-out hover:scale-105 transform transition duration-75">
            <div>
              <img src="public/Stuck-Pipe.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Stuck Pipe Prevention</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div>

            <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div>
          </div>
          <div className="flex-col p-2 ease-in-out hover:scale-105 transform transition duration-75">
            <div>
              <img src="/images/jci-9-26.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Basic/Advanced Fire Fighting</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div>

            <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div>
          </div>
          <div className="flex-col p-2 ease-in-out hover:scale-105 transform transition duration-75">
            <div>
              <img src="/images/FALL-PROTECTION.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Fall Protection</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div>

            <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div>
          </div>
          <div className="flex-col p-2 ease-in-out hover:scale-105 transform transition duration-75">
            <div>
              <img src="/OPERATOR.jpg" alt="" />
            </div>
            <div className="text-blue-950 text-sm font-medium pt-5 ">
              <h1>Banksman & Slinger</h1>
            </div>
            <div className="text-gray-400 p-3">
              <InfoTwoToneIcon />2 Days
            </div>

            <div className="text-gray-400 p-1">
              <GraphicEqTwoToneIcon />
              All Levels
            </div>

            <div className="text-gray-400 pt-5 pb-2">
              <AccountCircleTwoToneIcon />
              JCI
            </div>
          </div>
        </div>
        <div className="text-center text-blue-900 p-7">
          <button className="rounded-md border-2 text-base font-medium border-black border-solid p-3 mt-5 hover:text-white hover:bg-blue-900">
            View All Courses
          </button>
        </div>
      </section>

      <section className="bg-gray-200 pt-30">
        <div className="flex justify-between pl-4 pr-4 pt-4 pb-15">
          <div className="font-semibold text-3xl text-blue-950">
            <p>Upcoming Trainings</p>
            <div>
              <p className="text-blue-950 text-sm p-3 font-medium">Trainings</p>
            </div>
          </div>
          <button className="rounded-md text-blue-900 border-2 text-base font-medium border-black border-solid p-3 mt-5 hover:text-white hover:bg-blue-900">
            View All Training
          </button>
        </div>

        <div className="flex justify-around">
          <div className="flex-wrap content-start relative ">
            <div className="bg-white rounded w-80 h-80 m-2 flex-col">
              <img
                className="w-40 h-32 place-items-start rounded"
                src="/jc-img2.jpg"
                alt="Rope Access Training"
              />
              <div className="text-blue-950 font-medium p-4">
                <WorkOutlineIcon />
                February 10, 2025
              </div>
              <div className="font-semibold text-2xl text-blue-950 p-2">
                <p>Forklift Training</p>
              </div>
              <div className="text-blue-900 font-medium p-2">
                <PinDropIcon />
                Lagos
              </div>
            </div>
          </div>

          <div className="flex-wrap content-start relative ">
            <div className="bg-white rounded w-80 h-80 m-2 flex-col">
              <img
                className="w-40 h-32 place-items-start rounded"
                src="/Banksman.jpg"
                alt="Forklift Training"
              />
              <div className="text-blue-950 font-medium p-4">
                <WorkOutlineIcon />
                February 10, 2025
              </div>
              <div className="font-semibold text-2xl text-blue-950 p-2">
                <p>OPITO Banksman & Slinger(Initial)</p>
              </div>
              <div className="text-blue-900 font-medium p-2">
                <PinDropIcon />
                Lagos
              </div>
            </div>
          </div>

          <div className="flex-wrap content-start relative ">
            <div className="bg-white rounded w-80 h-80 m-2 flex-col">
              <img
                className="w-40 h-32 place-items-start rounded"
                src="/Rope-access.png"
                alt=""
              />
              <div className="text-blue-950 font-medium p-4">
                <WorkOutlineIcon />
                February 10, 2025
              </div>
              <div className="font-semibold text-2xl text-blue-950 p-2">
                <p>Rope Access Training</p>
              </div>
              <div className="text-blue-900 font-medium p-2">
                <PinDropIcon />
                Lagos
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around">
          <div className="flex-wrap content-start relative ">
            <div className="bg-white rounded w-80 h-80 m-2 flex-col">
              <img
                className="w-40 h-32 place-items-start rounded"
                src="/IMG_3807.jpg"
                alt="Rope Access Training"
              />
              <div className="text-blue-950 font-medium p-4">
                <WorkOutlineIcon />
                February 10, 2025
              </div>
              <div className="font-semibold text-2xl text-blue-950 p-2">
                <p>Appointed Person For Lifting Operations-APLO</p>
              </div>
              <div className="text-blue-900 font-medium p-2">
                <PinDropIcon />
                Lagos
              </div>
            </div>
          </div>

          <div className="flex-wrap content-start relative ">
            <div className="bg-white rounded w-80 h-80 m-2 flex-col">
              <img
                className="w-40 h-32 place-items-start rounded"
                src="/images/WhatsApp-Image.jpg"
                alt="Forklift Training"
              />
              <div className="text-blue-950 font-medium p-4">
                <WorkOutlineIcon />
                November 25, 2024
              </div>
              <div className="font-semibold text-2xl text-blue-950 p-2">
                <p>Rope Access Training</p>
              </div>
              <div className="text-blue-900 font-medium p-2">
                <PinDropIcon />
                Port Harcort
              </div>
            </div>
          </div>

          <div className="flex-wrap content-start relative ">
            <div className="bg-white rounded w-80 h-80 m-2 flex-col">
              <img
                className="w-40 h-32 place-items-start rounded"
                src="/images/IMG_5765.jpg"
                alt=""
              />
              <div className="text-blue-950 font-medium p-4">
                <WorkOutlineIcon />
                October 31, 2024
              </div>
              <div className="font-semibold text-2xl text-blue-950 p-2">
                <p>Crane Lift Supervisor</p>
              </div>
              <div className="text-blue-900 font-medium p-2">
                <PinDropIcon />
                Uganda
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around">
          <div className="flex-wrap content-start relative ">
            <div className="bg-white rounded w-80 h-80 m-2 flex-col">
              <img
                className="w-40 h-32 place-items-start rounded"
                src="/jci-drive.jpg"
                alt="Rope Access Training"
              />
              <div className="text-blue-950 font-medium p-4">
                <WorkOutlineIcon />
                October 28, 2024
              </div>
              <div className="font-semibold text-2xl text-blue-950 p-2">
                <p>Forklift Training</p>
              </div>
              <div className="text-blue-900 font-medium p-2">
                <PinDropIcon />
                Lagos
              </div>
            </div>
          </div>

          <div className="flex-wrap content-start relative pb-20 ">
            <div className="bg-white rounded w-80 h-80 m-2 flex-col">
              <img
                className="w-40 h-32 place-items-start rounded"
                src="/Banksman.jpg"
                alt="Forklift Training"
              />
              <div className="text-blue-950 font-medium p-4">
                <WorkOutlineIcon />
                February 10, 2025
              </div>
              <div className="font-semibold text-2xl text-blue-950 p-2">
                <p>OPITO Riggers Training</p>
              </div>
              <div className="text-blue-900 font-medium p-2">
                <PinDropIcon />
                Port Harcort
              </div>
            </div>
          </div>

          {/* <div className="flex-wrap content-start relative ">
            <div className="bg-white rounded w-80 h-80 m-5 flex-col">
              <img className="w-40 h-32 place-items-start rounded" src="/Rope-access.jpg" alt=""/>
              <div className="text-blue-950 font-medium p-4">
              <WorkOutlineIcon  />
              February 10, 2025
            </div>
            <div className="font-semibold text-2xl text-blue-950 p-2">
                <p>
                Rope Access Training
                </p>
            </div>
            <div className="text-blue-900 font-medium p-2">
            <PinDropIcon  />
            Lagos
            </div>
            </div>
        </div> */}
        </div>
      </section>

      <section className="bg-[#0b1b2bcc] w-full pb-10  ">
        <div className="font-sans font-medium text-white text-2xl text-center pt-10">
          <h1>What our students are saying</h1>

          <p className="text-sm font-serif pt-2 pb-10 text-amber-100 font-normal">
            We have a track record of Excellence
          </p>
        </div>

        <div className="flex justify-around">
          <div className=" h-auto w-lg">
            <div className="text-black bg-white mb-5 flex flex-col">
              <div className=" text-amber-600 p-2 flex justify-center">
                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarHalfIcon />
              </div>

              <div className="pb-5 flex">
                <div>
                  <img
                    className="rounded-full w-md h-3/4 p-4"
                    src="/pikaso.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="pt-5 pb-2 font-medium font-serif text-base">
                    Working with JCI for OPITO Riggers training has been a game
                    changer for us. Their commitment to safety is evident in
                    every session, and we feel confident knowing our team is
                    well- prepared
                  </p>

                  <h1 className="text-blue-950 font-mono text-sm">
                    Olawale Philip
                  </h1>

                  <div>Competence Development Manager</div>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-auto w-lg">
            <div className="text-black bg-white mb-5 flex flex-col">
              <div className=" text-amber-600 p-2 flex justify-center">
                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarHalfIcon />
              </div>

              <div className="pb-5 flex">
                <div>
                  <img
                    className="rounded-full w-md h-3/4 p-4"
                    src="/pikaso_2.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="pt-5 pb-2 font-medium font-serif text-base">
                    Thanks to JCI's NDT training, our inspection processes have
                    improved significantly. The practical exercises provided us
                    with the confidence to apply our knowledge effectively.
                  </p>

                  <h1 className="text-blue-950 font-mono text-sm">
                    Effiong Bassey
                  </h1>

                  <div>QAQC Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around">
          <div className=" h-auto w-lg">
            <div className="text-black bg-white mb-5 flex flex-col">
              <div className=" text-amber-600 p-2 flex justify-center">
                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarHalfIcon />
              </div>

              <div className="pb-5 flex">
                <div>
                  <img
                    className="rounded-full w-md h-3/4 p-4"
                    src="/pikaso_3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="pt-5 pb-2 font-medium font-serif text-base">
                    Completing the IWCF course at JCI was a pivotal moment for
                    our team. The knowledge gained about well control is
                    invaluable, and the training environment was both supportive
                    and professional.
                  </p>

                  <h1 className="text-blue-950 font-mono text-sm">
                    Emmanuel Bode
                  </h1>

                  <div>Drilling Manager</div>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-auto w-lg">
            <div className="text-black bg-white mb-5 flex flex-col">
              <div className=" text-amber-600 p-2 flex justify-center">
                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarIcon />

                <StarHalfIcon />
              </div>

              <div className="pb-5 flex">
                <div>
                  <img
                    className="rounded-full w-md h-3/4 p-4"
                    src="/NPORS-1.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="pt-5 pb-2 font-medium font-serif text-base">
                    I had a wonderful experience completing my OPITO trainings
                    (Rigger Stage 1 and Banksman Stage 3) and obtaining a
                    Forklift Competence certificate. I extend my sincere thanks
                    to all the JCI staff.
                  </p>

                  <h1 className="text-blue-950 font-mono text-sm">
                    Brhim Salam Sidi Moussa
                  </h1>

                  <div>Rigger Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" mb-10 bg-white swiperImageSection">
        <div className="text-blue-900  swiperImageSection_div2">
          <h1 className="pb-4  font-bold text-2xl">Are You an Organization?</h1>

          <p className="text-sm text-gray-600 font-medium">
            We specialize in providing fully customized training programs <br />
            designed to align with your company's unique goals, challenges,{" "}
            <br />
            and operational requirements. Whether you need to enhance <br />
            technical skills, boost safety compliance, or upskill your <br />
            workforce, we create training that's built around what <br />
            matters most to your business.
          </p>

          <p className="text-sm text-gray-600 pt-3 font-medium">
            We offer the flexibility to deliver training both on-site at <br />
            your company location and at our own training facility.
          </p>

          <button className="rounded-md border-2 text-base text-gray-600 font-medium border-black border-solid p-3 mt-5 hover:text-white hover:bg-blue-900">
            Contact Us
          </button>
        </div>

        <div className="w-3/4">
          <img src="/jci-25.jpg" alt="" />
        </div>
      </section>

      <section>
        <div className="text-center text-black text-sm font-serif">
          <p>Trusted by the world's best</p>
        </div>

        <div className="flex pl-10 pt-5 pb-5 justify-between ">
          <img src="/images/gallery/saipem.jpg" alt="Saipem logo" />

          <img src="/images/gallery/exxonmobil.jpg" alt="exxonmobil logo" />

          <img
            src="/images/gallery/total-energies.jpg"
            alt="total-energies logo"
          />

          <img src="/images/gallery/chevron.jpg" alt="chevron logo" />

          <img src="/images/gallery/sep.jpg" alt="Seplat logo" />

          <img src="/images/gallery/odenl.jpg" alt="Odenl logo" />
        </div>
      </section>

      <section>
        <div className="font-bold text-2xl text-blue-950 pt-30 text-center">
          <h1>ACCREDITATIONS AND PROFESSIONAL MEMBERSHIPS</h1>
        </div>

        <div className="pl-45 pt-4">
          <img src="/images/gallery/Accreditation.jpg" alt="" />
        </div>
      </section>

      <section>
        <div className="font-bold text-2xl text-blue-950 pt-45 pb-40 text-center">
          <h1>Latest News</h1>
        </div>

        <div className="flex gap-10 p-8 ">
          <div className="flex-col">
            <img className="rounded-b-lg" src="/JCI53.png" alt="" />

            <p className="font-light pt-3 pb-2 text-blue-950 ">
              Non-Destructive Testing
            </p>

            <h1 className="text-blue-950 font-semibold text-base">
              NDT Career Guide: Explore Industry Opportunities.
            </h1>

            <p className="text-blue-950 p-2">February 4, 2025</p>
          </div>

          <div className="flex-col">
            <img className="rounded-b-lg" src="/Image-2025.jpg" alt="" />

            <p className="font-light pt-3 pb-2  text-blue-950">Training</p>

            <h1 className="text-blue-950 font-semibold text-base">
              Master the Art of Lifting with JC International's <br />
              Appointed Person for Lifting Operations Training.
            </h1>

            <p className="text-blue-950 p-2">January 24, 2025</p>
          </div>

          <div className="flex-col  ">
            <div className="flex gap-5">
              <img
                className="rounded-lg w-1/4 h-1/6 mb-5"
                src="/HeimlichManeuver.jpg"
                alt=""
              />
              <div className="flex-col">
                <p className="font-light pt-3 pb-2  text-blue-950">
                  Health and Safety
                </p>

                <h1 className="text-blue-950 font-semibold text-base">
                  The Heimlich Maneuver: A Life- <br />
                  Saving Skill To Rescue A.
                </h1>

                <p className="text-blue-950 p-2">January 14, 2025</p>
              </div>
            </div>

            <div className="flex gap-5">
              <img
                className="rounded-lg w-1/4 mb-5 h-1/6"
                src="/Mobile-crane3.jpg"
                alt=""
              />
              <div className="flex-col">
                <p className="font-light pt-3 pb-2  text-blue-950">Training</p>

                <h1 className="text-blue-950 font-semibold text-base">
                  Master Mobile Crane Operations with JC...
                </h1>

                <p className="text-blue-950 p-2">December 20, 2024</p>
              </div>
            </div>

            <div className="flex gap-5">
              <img
                className="rounded-lg w-1/3 h-1/4"
                src="/PRA716.jpg"
                alt=""
              />
              <div className="flex-col">
                <p className="font-light pt-3 pb-2  text-blue-950">Training</p>

                <h1 className="text-blue-950 font-semibold text-base">
                  Standard Best Practices For Rope Access Operations.
                </h1>

                <p className="text-blue-950 p-2">December 6, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
