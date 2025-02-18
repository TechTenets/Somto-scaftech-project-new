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

      <div className="flex p-5 justify-around overflow-hidden ">
        <div className="bg-gray-100 rounded-sm w-70 h-50 p-5 ease-in-out text-blue-900 m-4 hover:bg-gray-400 hover:scale-105 transform transition duration-75 ">
          <div className="bg-blue-400 p-2 items-center w-1/6 rounded-full">
            <DensityMediumRoundedIcon />
          </div>
          <h1 className="font-bold pt-5 text-lg font-serif">
            Full Course List
          </h1>
          <p className="pt-2 pb-1 font-medium ">
            Click to see a comprehensive list of all our Training Programmes.
          </p>
        </div>

        <div className="bg-gray-50 rounded-sm w-70 h-50 p-5 ease-in-out text-blue-900 m-4 hover:bg-gray-400 hover:scale-105 transform transition duration-75">
          <div className="bg-blue-400 p-2  w-1/6 rounded-full">
            <CalendarTodayRoundedIcon />
          </div>
          <h1 className="font-bold pt-5 font-serif text-lg">
            2025 Training Calender
          </h1>
          <p className="pt-2 pb-1 font-medium ">
            Click to view and download our training Schedule.
          </p>
        </div>

        <div className="bg-gray-50 rounded-sm w-70 h-50 p-5 ease-in-out text-blue-900 m-4 hover:bg-gray-400 hover:scale-105 transform transition duration-75">
          <div className="bg-blue-400 p-2  w-1/6 rounded-full">
            <TurnedInRoundedIcon />
          </div>
          <h1 className="font-bold pt-5 font-serif text-lg">
            Weekly Course Booking
          </h1>
          <p className="pt-2 pb-1 font-medium ">
            Click to view and register for any of our upcoming trainings.
          </p>
        </div>
      </div>

      <section>
        <div className="text-center font-semibold text-3xl text-blue-950 pt-15 pb-8">
          <h1>Our Traninig Faculties</h1>
        </div>

        <div className="flex justify-between">
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
        <div className="flex justify-between p-4">
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

        <div className="flex justify-between">
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

        <div className="flex justify-between">
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

      <section>
        <div className="text-center font-serif font-bold text-3xl text-blue-950 pt-15 pb-3">
          <h1>Why Choose JCI </h1>
        </div>

        <div className="font-semibold  text-base text-blue-950 text-center pb-5">
          <p>
            We are steadfast in our commitment to providing high-quality
            training programs that enable corporate <br />
            organizations enhance the competence of their personnel, while also
            empowering individuals to reach their full potential.
          </p>
        </div>

        <div className="flex p-5 justify-around overflow-hidden ">
          <div className="bg-gray-200 rounded-sm w-96 h-full hover:bg-gray-400 p-5 ease-in-out text-blue-900 m-4 hover:scale-105 transform transition duration-75">
            <div className="flex justify-center items-center">
              <div className="">
                <PublicRoundedIcon />
              </div>
            </div>
            <h1 className="font-bold text-2xl pt-5 font-serif">
              Industry Recognized Certifications
            </h1>
            <p className="pt-2 pb-1 text-xs  font-normal ">
              We have gained accreditation from recognized bodies <br />
              to train assess and certify personnel in the oil and gas <br />
              industry..
            </p>
          </div>

          <div className="bg-gray-200 rounded-sm w-96 h-full ease-in-out hover:bg-gray-400 p-5 text-blue-900 m-4 hover:scale-105 transform transition duration-75">
            <div className="flex justify-center items-center">
              <div className="">
                <KeyOffRoundedIcon />
              </div>
            </div>
            <h1 className="font-bold font-serif pt-5 text-2xl ">
              Hands-on Practical Training
            </h1>
            <p className="pt-2 pb-1 text-xs  font-normal ">
              We prioritize hands-on learning to prepare students for <br />
              real-world scenarios, making them job-ready from day <br /> one.
            </p>
          </div>

          <div className="bg-gray-200 rounded-sm w-96 h-full ease-in-out p-5 text-blue-900 m-4 hover:bg-gray-400 hover:scale-105 transform transition duration-75">
            <div className="flex justify-center items-center">
              <div className="">
                <GroupAddSharpIcon />
              </div>
            </div>
            <h1 className="font-bold font-serif pt-5 text-2xl ">
              Certified & Experienced Instructors
            </h1>
            <p className="pt-2 pb-1 text-xs  font-normal ">
              Our trainings are led by certified and highly <br />
              experienced instructors with years of industry <br /> experience.
            </p>
          </div>
        </div>
      </section>

      <section className=" mt-10 mb-10 bg-gray-200 swiperImageSection">
        <div className="swiperImageSection_div1">
          <Imageslider />
        </div>

        <div className="text-blue-900  swiperImageSection_div2">
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

          <button className="rounded-md border-2 text-base font-medium border-black border-solid p-3 mt-5 hover:text-white hover:bg-blue-900">
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
    </div>
  );
};

export default Home;
