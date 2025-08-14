import ContactForm from "../components/ContactForm";
import Header from "../components/Header/Header";
import SwiperComp from "../components/Swiper/SwiperComp";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import KeyOffRoundedIcon from "@mui/icons-material/KeyOffRounded";
import GroupAddSharpIcon from "@mui/icons-material/GroupAddSharp";
import Imageslider from "../components/Imageslider";
import "./style.css";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PinDropIcon from "@mui/icons-material/PinDrop";
import Marquee from "react-fast-marquee";
import Slidder from "../Slidder/Slidder";
// import Imageslider from "../ImageSlide/Imageslide.jsx";

const Home = () => {
  const stats = [
    { number: "500+", label: "GRADUATES PLACED" },
    { number: "15+", label: "YEARS EXPERIENCE" },
    { number: "98%", label: "SUCCESS RATE" },
    { number: "50+", label: "INDUSTRY PARTNERS" },
  ];

  return (
    <div className="overflow-hidden">
      <Header />
      {/* <div className="searchBar" data-script="search-bar">
        <div className="searchBar--overlay"></div>
        <div className="container searchBar--container">
          <div className="searchBar--wrapper">
            <div className="arrow"></div>
            <button className="searchBar--close" aria-label="close">
              <span className="visibility-hidden"></span>
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
      ></main> */}

      {/* <div className="grid grid-cols-1 p-5 gap-20 px-20 justify-around overflow-hidden  xl:grid-cols-3 md:grid-cols-2">
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
      </div> */}

      <div
        className="
                bg-[#0a192f] text-white py-12 px-6 text-center
                bg-[url('/images/mobile-pic.jpg')] bg-cover bg-center
                sm:bg-[url('/images/desktop-pic.jpg')]
              "
      >
        <h2 className="text-2xl md:text-3xl font-bold text-green-400">
          Ready to Engineer Your Future?
        </h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Join thousands of successful engineers who started their journey with
          Scaftech Academy. Take the first step toward mastering your craft and
          advancing your career.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact_Us">
            {" "}
            <button className="bg-green-500 hover:bg-green-600 cursor-pointer text-white font-semibold py-3 px-6 rounded-full transition">
              ENROLL NOW
            </button>
          </a>

          <a href="https://calendly.com/consult-scaftechservices/30-minute-consultation-with-a-scaftech-representative">
            <button className="border border-green-500 hover:bg-green-500 hover:text-white text-green-400 cursor-pointer font-semibold py-3 px-6 rounded-full transition">
              SCHEDULE CONSULTATION
            </button>
          </a>
        </div>
      </div>

      <div
        className="
                bg-black py-10 
                bg-[url('/images/mobile-pic.jpg')] bg-cover bg-center
                sm:bg-[url('/images/desktop-pic.jpg')]
              "
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((item, index) => (
              <div key={index}>
                <h2 className="text-green-500 text-3xl sm:text-4xl font-bold">
                  {item.number}
                </h2>
                <p className="text-white mt-2 text-xs sm:text-sm tracking-wider">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section
        className="
            bg-[#ffffff] px-8 py-8 
            bg-[url('/images/mobile-pic.jpg')] bg-cover bg-center
            sm:bg-[url('/images/desktop-pic.jpg')]
          "
      >
        <Marquee speed={80} gradient={false} autoFill={true} direction="left">
          <img
            src="/winpart.png"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/Zenilum.jpg"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/Vita.jpg"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/British.jpg"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/red-round.png"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/nigerite.png"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/Lafarge.png"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/ITB.jpg"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/Desnky.jpg"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/Daystar-power.png"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/Dangote.png"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/cfao-equip.jpg"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
          <img
            src="/Smartflow.png"
            alt=""
            className="h-8 sm:h-10 max-w-[80px] sm:max-w-[100px] object-contain mx-2"
          />
        </Marquee>
      </section>

      <section className="bg-[#242e2a] h-auto">
        {/* Heading */}
        <div className="text-center font-bold text-3xl sm:text-4xl md:text-5xl text-white pt-10 pb-8">
          <h1>
            Our Training
            <span className="text-[#2b9766]"> Faculties</span>
          </h1>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center px-4">
          {/* Card 1 */}
          <div
            className="relative w-full sm:w-[45%] lg:w-[30%] h-96 bg-cover bg-center flex items-center justify-start px-8"
            style={{
              backgroundImage: `url('/scaftek-fold-2.jpg')`,
            }}
          >
            <div className="bg-white bg-opacity-25 p-6 rounded-lg shadow-lg max-w-sm">
              <a href="/Scaffold">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Scalffold Training courses
                </h2>
                <p className="text-sm text-gray-700 mb-1">23 Courses</p>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative w-full sm:w-[45%] lg:w-[30%] h-96 bg-cover bg-center flex items-center justify-start px-8"
            style={{
              backgroundImage: `url('public/hightension.jpg')`,
            }}
          >
            <div className="bg-white bg-opacity-25 p-6 rounded-lg shadow-lg max-w-sm">
              <a href="/towercrane">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Tower Crane Training
                </h2>
                <p className="text-sm text-gray-700 mb-1">3 Courses</p>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="relative w-full sm:w-[45%] lg:w-[30%] h-96 bg-cover bg-center flex items-center justify-start px-8"
            style={{
              backgroundImage: `url('/ndt-3.jpg')`,
            }}
          >
            <div className="bg-white bg-opacity-25 p-6 rounded-lg shadow-lg max-w-sm">
              <a href="/NDT">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  ASNT NDT INSPECTION
                </h2>
                <p className="text-sm text-gray-700 mb-1">6 Courses</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-[#242e2a] h-auto">
  <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
    <div className="grid grid-cols-1 gap-5 justify-between overflow-hidden sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 p-4">
      <div className="flex-col p-2">
        <div>
          <img src="public/scaftek-fold-2.jpg" alt="Scaffold" className="h-80" />
        </div>
        <div className="text-white text-sm font-medium pt-5">
          <h1>Scalffold Training courses</h1>
        </div>
        <div className="font-medium text-white">
          <p>23 Courses</p>
        </div>
      </div>

      <div className="flex-col p-2">
        <div>
          <img src="public/hydro-10.jpg" alt="towercrane" className="h-80" />
        </div>
        <div className="text-white text-sm font-medium pt-5">
          <h1>Tower Crane</h1>
        </div>
        <div className="font-medium text-white">
          <p>3 Courses</p>
        </div>
      </div>

      <div className="flex-col p-2">
        <div>
          <img src="public/ndt-3.jpg" alt="ASNT NDT INSPECTION" className="h-80"/>
        </div>
        <div className="text-white text-sm font-medium pt-5 pl-3">
          <h1>ASNT NDT INSPECTION</h1>
        </div>
        <div className="font-medium text-white pl-3">
          <p>6 Courses</p>
        </div>
      </div>
    </div>
  </div>
</section> */}

      <section className="bg-[#0d182d] min-h-[300px]">
        <div className="text-center font-semibold text-4xl text-white pt-20 pb-4">
          <h1>ACCREDITATIONS</h1>
        </div>

        <p className="font-semibold text-sm text-gray-200 text-center">
          Click on any accreditation logo to find the course that best supports
          your career ambitions and certification needs.
        </p>

        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
          <div className="self-center  pl-25 pb-5 w-5/6 pt-10 h-auto">
            <img
              className="rounded-md shadow-2xl "
              src="/images/gallery/Scaftech-logo.jpg"
              alt="Opito"
            />
          </div>

          {/* <div className="p-2">
        <div>
          <img src="/images/IOSH-2.png" alt="IOSH" />
        </div>
      </div>

      <div className="p-2">
        <div>
          <img src="/images/NPORS-3.png" alt="NPORS" />
        </div>
      </div>

      <div className="p-2">
        <div>
          <img src="/images/IWCF-4.png" alt="IWCF" />
        </div>
      </div>

      <div className="p-2">
        <div>
          <img src="/images/IADC-5.jpg" alt="IADC" />
        </div>
      </div> */}

          {/* <div className="grid grid-cols-1 gap-5 justify-between sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
      <div className="p-2">
        <div>
          <img src="/images/leea-6.png" alt="LEEA" />
        </div>
      </div>

      <div className="p-2">
        <div>
          <img src="/images/nuprc-7.png" alt="NUPRC" />
        </div>
      </div>

      <div className="p-2">
        <div>
          <img src="/images/IADC-8.jpg" alt="IADC" />
        </div>
      </div>

      <div className="p-2">
        <div>
          <img src="/images/ASNT-9.jpg" alt="ASNT" />
        </div>
      </div>

      <div className="p-2">
        <div>
          <img src="/images/IRATA-10.png" alt="IRATA" />
        </div>
      </div>
    </div> */}
        </div>
      </section>

      <section className="bg-[#201134] w-full min-h-[300px] h-auto py-10 pl-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
          <div className="text-center font-serif text-clamp leading-[-1] font-bold text-3xl text-white pt-15 pb-3">
            <h1>
              Why Choose <span className="text-[#07bc0c]">Scaftech</span>
            </h1>
          </div>

          <div className="font-semibold xl:text-base md:text-xs text-base text-gray-300 text-center pb-15">
            <p>
              We are steadfast in our commitment to providing high-quality
              training programs that enable corporate <br />
              organizations enhance the competence of their personnel, while
              also empowering individuals to reach their full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-15 justify-between xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-5">
            <div className="bg-gray-100 rounded-3xl w-full h-64 hover:bg-[#0b1b2bcc] hover:text-white p-5 ease-in-out text-[#0b1b2bcc] hover:scale-105 transform transition duration-75">
              <div>
                <PublicRoundedIcon className="items-start" />
              </div>

              <h1 className="font-bold text-lg pt-5 font-sans">
                Industry Recognized Certifications
              </h1>
              <p className="pt-4 pb-1 text-sm font-light">
                We have gained accreditation from recognized bodies to train
                assess and certify personnel in the oil and gas industry..
              </p>
            </div>

            <div className="bg-gray-100 rounded-3xl w-full h-64 hover:bg-[#0b1b2bcc] hover:text-white p-5 ease-in-out text-[#0b1b2bcc] hover:scale-105 transform transition duration-75">
              <div>
                <KeyOffRoundedIcon className="items-start" />
              </div>

              <h1 className="font-bold text-lg pt-5 font-sans">
                Hands-on Practical Training
              </h1>
              <p className="pt-4 pb-1 text-sm font-light">
                We prioritize hands-on learning to prepare students for
                real-world scenarios, making them job-ready from day one.
              </p>
            </div>

            <div className="bg-gray-100 rounded-3xl w-full h-64 hover:bg-[#0b1b2bcc] hover:text-white p-5 ease-in-out text-[#0b1b2bcc] hover:scale-105 transform transition duration-75">
              <div>
                <GroupAddSharpIcon className="items-start" />
              </div>

              <h1 className="font-bold text-lg pt-5 font-sans">
                Certified & Experienced Instructors
              </h1>
              <p className="pt-4 pb-1 text-sm font-light">
                Our trainings are led by certified and highly experienced
                instructors with years of industry experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1b2bcc] swiperImageSection">
        <div className="container mx-auto flex px-4 md:px-8 lg:px-16 xl:px-20">
          <div className="swiperImageSection_div1">
            <Imageslider />
          </div>

          <div className="text-white swiperImageSection_div2">
            <h1 className="pb-4 font-bold text-2xl">
              Driving Competence and Growth in <br />
              Africa's Oil & Gas Industry Through <br />
              Specialized Training Services
            </h1>

            <p className="text-base font-medium">
              For 23 years, Scaftech has been delivering specialist <br />
              training services to the Oil & Gas, Marine, and Construction{" "}
              <br />
              industries. Our vision is to become Africa's leading Oil & Gas{" "}
              <br />
              training provider by offering high-quality programs that <br />
              enhance corporate personnel competence and empower <br />
              individuals of all ages to reach their full potential.
            </p>

            <a href="/contact_Us">
              <button className="rounded-md border-2 text-base cursor-pointer font-medium border-black border-solid p-3 mt-5 hover:text-white hover:bg-black">
                Enrol Now
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#242e2a] h-auto pb-5">
        {/* Title */}
        <div className="text-center font-semibold text-2xl sm:text-3xl md:text-4xl text-white py-6 sm:py-10">
          <h1>
            Explore Popular
            <span className="text-[#2b9766]"> Courses</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="font-bold text-gray-300 text-center text-sm sm:text-base md:text-lg px-4">
          <p>
            All our courses are fully accredited by relevant regulatory bodies.
          </p>
        </div>

        {/* Heading Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 pt-4 pb-10">
          <div className="font-semibold text-xl sm:text-2xl md:text-3xl text-white text-center sm:text-left">
            <p>Popular Courses</p>
          </div>
          <div className="text-black font-semibold text-xs sm:text-sm rounded-full bg-gray-200 px-5 py-2 text-center">
            <button>Featured Courses</button>
          </div>
        </div>

        {/* Slider */}
        <Slidder />

        {/* Button */}
        {/* <div className="text-center text-white p-4 sm:p-7">
    <button className="rounded-md border-2 text-sm sm:text-base font-medium border-gray-300 border-solid px-4 py-2 sm:px-6 sm:py-3 mt-5 hover:text-white hover:bg-blue-900">
      View All Courses
    </button>
  </div> */}
      </section>

      <section className="bg-[#201134] w-full pb-8 min-h-[300px] h-auto ">
        <div className="text-center justify-between pl-4 pr-4 pt-20 pb-15">
          <div className="font-semibold text-4xl text-white">
            <p>Upcoming Trainings</p>
            <div>
              <p className="text-gray-300 text-sm p-3 font-medium">Trainings</p>
            </div>
          </div>
          {/* <button className="rounded-md text-gray-500 border-2 text-base font-medium border-gray-200 border-solid p-3 mt-5 hover:text-white hover:bg-blue-900">
      View All Training
    </button> */}
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center px-4">
          {/* Card 1 */}
          <div
            className="relative w-full sm:w-[45%] lg:w-[30%] h-96 bg-cover bg-center flex items-end justify-start px-8"
            style={{
              backgroundImage: `url('/Scaftechfork.-7.jpg')`,
            }}
          >
            <div className="bg-white bg-opacity-25 p-6 rounded-lg shadow-lg max-w-sm">
              <div className="text-blue-950 font-medium p-4">
                <WorkOutlineIcon />
                February 10, 2025
              </div>
              <a href="/SystemAudit&Analysis">
                <div className="font-semibold text-2xl text-blue-950 p-2">
                  <p>System Audit Training</p>
                </div>
              </a>
              <div className="text-blue-900 font-medium p-2">
                <PinDropIcon />
                Lagos
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative w-full sm:w-[45%] lg:w-[30%] h-96 bg-cover bg-center flex items-end justify-start px-8"
            style={{
              backgroundImage: `url('/Scaftechfork.-3.jpg')`,
            }}
          >
            <div className="bg-white bg-opacity-25 p-6 rounded-lg shadow-lg max-w-sm">
              <div className="text-blue-950 font-medium p-4">
                <WorkOutlineIcon />
                February 10, 2025
              </div>
              <a href="/MobileElevated">
                <div className="font-semibold text-2xl text-blue-950 p-2">
                  <p>Mobile ELavated Training</p>
                </div>
              </a>
              <div className="text-blue-900 font-medium p-2">
                <PinDropIcon />
                Port Harcourt
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="relative w-full sm:w-[45%] lg:w-[30%] h-96 bg-cover bg-center flex items-end justify-start px-8"
            style={{
              backgroundImage: `url('/Scaftechfork.-5.jpg')`,
            }}
          >
            <div className="bg-white bg-opacity-25 p-6 rounded-lg shadow-lg max-w-sm">
              <div className="text-blue-950 font-medium p-4">
                <WorkOutlineIcon />
                February 10, 2025
              </div>
              <a href="/MentalReadiness&Ergonomics">
                <div className="font-semibold text-2xl text-blue-950 p-2">
                  <p>Ergonomics Training</p>
                </div>
              </a>
              <div className="text-blue-900 font-medium p-2">
                <PinDropIcon />
                Abuja
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-wrap justify-around">
          <div className="flex content-start relative w-full px-5 pb-5 ">
            <div className="bg-white rounded w-full h-80 m-2 flex-col">
              <img
                className="w-40 h-32 place-items-start rounded"
                src="public/Scaftechfork.-7.jpg"
                alt="systemaudit Training"
              />
              <div className="text-blue-950 font-medium p-4">
                <WorkOutlineIcon />
                February 10, 2025
              </div>
              <a href="/SystemAudit&Analysis">
                <div className="font-semibold text-2xl text-blue-950 p-2">
                  <p>System Audit Training</p>
                </div>
              </a>
              <div className="text-blue-900 font-medium p-2">
                <PinDropIcon />
                Lagos
              </div>
            </div>
            <div className="bg-white rounded w-full h-80 m-2 flex-col">
              <img
                className="w-40 h-32 place-items-start rounded"
                src="public/Scaftechfork.-3.jpg"
                alt="mobileElevated"
              />
              <div className="text-blue-950 font-medium p-4">
                <WorkOutlineIcon />
                February 10, 2025
              </div>
              <a href="/MobileElevated">
                <div className="font-semibold text-2xl text-blue-950 p-2">
                  <p>Mobile ELavated</p>
                </div>
              </a>
              <div className="text-blue-900 font-medium p-2">
                <PinDropIcon />
                Port Harcourt
              </div>
            </div>
            <div className="bg-white rounded w-full h-80 m-2 flex-col">
              <img
                className="w-40 h-32 place-items-start rounded"
                src="public/Scaftechfork.-5.jpg"
                alt="ergonomics"
              />
              <div className="text-blue-950 font-medium p-4">
                <WorkOutlineIcon />
                February 10, 2025
              </div>
              <a href="/MentalReadiness&Ergonomics">
                <div className="font-semibold text-2xl text-blue-950 p-2">
                  <p>Ergonomics Training</p>
                </div>
              </a>
              <div className="text-blue-900 font-medium p-2">
                <PinDropIcon />
                Abuja
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* 
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
      </section> */}

      <section className="bg-[#242e2a] h-auto swiperImageSection">
        <div className="text-white swiperImageSection_div2 max-w-screen-xl mx-auto px-4">
          <h1 className="pb-4 font-bold text-4xl">Are You an Organization?</h1>

          <p className="text-sm text-gray-100 font-medium">
            We specialize in providing fully customized training programs <br />
            designed to align with your company's unique goals, challenges,{" "}
            <br />
            and operational requirements. Whether you need to enhance <br />
            technical skills, boost safety compliance, or upskill your <br />
            workforce, we create training that's built around what <br />
            matters most to your business.
          </p>

          <p className="text-sm text-gray-100 pt-3 font-medium">
            We offer the flexibility to deliver training both on-site at <br />
            your company location and at our own training facility.
          </p>

          <a href="/contact_Us">
            <button className="rounded-md border-2 text-base text-gray-300 font-medium border-gray-200 border-solid p-3 cursor-pointer mt-5 hover:text-white hover:bg-blue-900">
              Contact Us
            </button>
          </a>
        </div>

        <div className="w-3/4  mx-auto">
          <img src="public/academy-1.jpg" alt="" />
        </div>
      </section>

      {/* <section className="bg-[#242e2a] h-auto py-10">
  <div className="font-bold text-2xl text-white text-center">
    <h1>ACCREDITATIONS AND PROFESSIONAL MEMBERSHIPS</h1>
  </div>

  <div className="pl-45 pt-4">
    <img src="/images/gallery/Accreditation.jpg" alt="" />
  </div>
</section> */}

      <section className="bg-[#4b5563] h-auto">
        <div className="font-bold text-4xl text-white pt-45 pb-40 text-center">
          <h1>Latest News</h1>
        </div>

        <div className="flex gap-10 p-8 flex-wrap">
          <div className="flex-col max-w-xs">
            <img className="rounded-b-lg" src="public/ndt-5.jpg" alt="" />
            <p className="font-light pt-3 pb-2 text-white">
              Non-Destructive Testing
            </p>
            <h1 className="text-white font-semibold text-base">
              NDT Career Guide: Explore Industry Opportunities.
            </h1>
            <p className="text-white p-2">February 4, 2025</p>
          </div>

          <div className="flex-col max-w-xs">
            <img className="rounded-b-lg" src="public/lift-2.jpg" alt="" />
            <p className="font-light pt-3 pb-2 text-white">Training</p>
            <h1 className="text-white font-semibold text-base">
              Master the Art of Lifting with Scaftech <br />
              Appointed Person for Lifting Operations Training.
            </h1>
            <p className="text-white p-2">January 24, 2025</p>
          </div>

          <div className="flex-col max-w-xs">
            <div className="flex gap-5">
              <img
                className="rounded-lg w-1/4 h-1/6 mb-5"
                src="public/safetyman-2.jpg"
                alt=""
              />
              <div className="flex-col">
                <p className="font-light pt-3 pb-2 text-white">
                  Health and Safety
                </p>
                <h1 className="text-white font-semibold text-base">
                  The Heimlich Maneuver: A Life- <br />
                  Saving Skill To Rescue A.
                </h1>
                <p className="text-white p-2">January 14, 2025</p>
              </div>
            </div>

            <div className="flex gap-5">
              <img
                className="rounded-lg w-1/4 mb-5 h-1/6"
                src="public/lifting-4.jpg"
                alt=""
              />
              <div className="flex-col">
                <p className="font-light pt-3 pb-2 text-white">Training</p>
                <h1 className="text-white font-semibold text-base">
                  Master Mobile Crane Operations with Scaftech...
                </h1>
                <p className="text-white p-2">December 20, 2024</p>
              </div>
            </div>

            <div className="flex gap-5">
              <img
                className="rounded-lg w-1/3 h-1/4"
                src="public/lifting-5.jpg"
                alt=""
              />
              <div className="flex-col">
                <p className="font-light pt-3 pb-2 text-white">Training</p>
                <h1 className="text-white font-semibold text-base">
                  Standard Best Practices For Rope Access Operations.
                </h1>
                <p className="text-white p-2">December 6, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
