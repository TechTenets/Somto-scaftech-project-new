import ContactForm from "../components/ContactForm";
import Header from "../components/Header/Header";
import SwiperComp from "../components/Swiper/SwiperComp";

const Home = () => {
  return (
    <div>
        
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
      >
      </main>
     
     <div className="flex p-5 justify-around  ">
        <div className="bg-gray-100 rounded-sm w-70 h-50 p-5 text-blue-900 m-4 ">
          <h1 className="font-bold text-lg font-serif">
            Full Course List</h1>
          <p className="pt-2 pb-1 font-medium ">Click to see a comprehensive list of all our
             Training Programmes.</p>
        </div>

        <div className="bg-gray-50 rounded-sm w-70 h-50 p-5 text-blue-900 m-4 ">
          <h1 className="font-bold font-serif text-lg">
            2025 Training Calender</h1>
          <p className="pt-2 pb-1 font-medium ">Click to view and
             download our training Schedule.</p>
        </div>

        <div className="bg-gray-50 rounded-sm w-70 h-50 p-5 text-blue-900 m-4 ">
          <h1 className="font-bold font-serif text-lg">
            Weekly Course Booking</h1>
          <p className="pt-2 pb-1 font-medium ">Click to view and register for any
             of our upcoming trainings.</p>
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
            <div className="text-blue-950 text-sm font-medium pt-5 " >
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
            <div className="text-blue-950 text-sm font-medium pt-5 " >
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
            <div className="text-blue-950 text-sm font-medium pt-5 " >
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
            <div className="text-blue-950 text-sm font-medium pt-5 " >
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
            <div className="text-blue-950 text-sm font-medium pt-5 " >
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
            <div className="text-blue-950 text-sm font-medium pt-15 pl-3 " >
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
                Click on any accreditation logo to find the course that best supports your
                   career ambitions and certification needs.
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

    </div>


  );
};

export default Home;
