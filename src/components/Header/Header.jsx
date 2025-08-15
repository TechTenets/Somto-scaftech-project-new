import "./style.css";

// import "./config.js"
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isNext, setIsNext] = useState(false);
  const [isPrev, setIsPrev] = useState(false);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 7000;
  useEffect(() => {
    const thumbnailItems =
      thumbnailBorderRef.current?.querySelectorAll(".item");
    thumbnailBorderRef.current?.appendChild(thumbnailItems[0]);

    const runNextAuto = setInterval(() => {
      nextRef.current?.click();
    }, timeAutoNext);

    return () => clearInterval(runNextAuto);
  }, []);

  const showSlider = (type) => {
    const sliderItems = sliderRef.current.querySelectorAll(".item");
    const thumbnailItems = thumbnailBorderRef.current.querySelectorAll(".item");

    if (type === "next") {
      sliderRef.current?.appendChild(sliderItems[0]);
      thumbnailBorderRef.current?.appendChild(thumbnailItems[0]);
      setIsNext(true);
      setIsPrev(false);
    } else {
      sliderRef.current?.prepend(sliderItems[sliderItems.length - 1]);
      thumbnailBorderRef.current?.prepend(
        thumbnailItems[thumbnailItems?.length - 1]
      );
      setIsNext(false);
      setIsPrev(true);
    }

    setTimeout(() => {
      setIsNext(false);
      setIsPrev(false);
    }, timeRunning);
  };

  return (
    <>
      <div
        className={`carousel ${isNext ? "next" : ""} ${isPrev ? "prev" : ""}`}
        ref={carouselRef}
      >
        <div className="list" ref={sliderRef}>
          {/* Add your slider items here */}
          <div className="item bg-linear-to-r from-[#0b1b2bcc] to-[#0b1b2bcc] text-xs md:text-xs">
            <img src="/ndt-3.jpg" className="blur-sm w-full" />
            <div className="content pt-5">
              <div className="topic ">
                <h1>Master Engineering Excellence</h1>
              </div>
              <div className="title">Profession and Authoritative</div>
              <div className="des mt-3">
                Advance your career with cutting-edge engineering education from{" "}
                <br /> industry experts. Join Scaftech Engineering Services
                Academy and <br /> transform your technical expertise into
                professional success.
              </div>
              <a href="/NDT">
                <div className="buttons cursor-pointer">
                  <button>SEE MORE</button>
                </div>
              </a>
            </div>
          </div>
          <div className="item bg-linear-to-r from-[#0b1b2bcc] to-[#0b1b2bcc] text-xs md:text-xs">
            <img src="/roof-3.jpg" className="blur-sm w-full" />
            <div className="content pt-5">
              <div className="topic">
                <h1>Industry-Leading Training</h1>
              </div>
              <div className="title">Credibility and Trust</div>
              <div className="des mt-3">
                Learn from certified professionals with decades of <br />{" "}
                experience. Our comprehensive curriculum covers the latest
                industry <br /> standards and cutting-edge technologies in
                scaffolding and structural <br /> engineering.
              </div>

              <a href="/lifthing&basicrigger">
                <div className="buttons cursor-pointer">
                  <button>SEE MORE</button>
                </div>
              </a>
            </div>
          </div>
          <div className="item bg-linear-to-r from-[#0b1b2bcc] to-[#0b1b2bcc] text-xs md:text-xs">
            <img src="/roof-1.jpg" className="blur-md w-full" />
            <div className="content pt-5">
              <div className="topic">
                <h1>Your Engineering Future Starts Here</h1>
              </div>
              <div className="title">Engineering Capabilities</div>
              <div className="des mt-3">
                Join over 500 successful graduates who have advanced their
                careers <br /> through our academy. With 98% placement success
                rate and <br /> strong industry partnerships, your future is
                secure.
              </div>

              <a href="/work&height">
                <div className="buttons cursor-pointer">
                  <button>SEE MORE</button>
                </div>
              </a>
            </div>
          </div>
          {/* <div className="item bg-linear-to-r from-[#0b1b2bcc] to-[#0b1b2bcc] text-xs md:text-xs">
      <img src="/scaftek-fold-4.jpg" className="blur-md w-full" />
      <div className="content">
        <div className="topic">VISUAL APPEAL</div>
        <div className="title">Visual Appealing</div>
        <div className="des">Use high-quality, relevant images and videos.</div>
        <div className="buttons">
          <button>SEE MORE</button>
        </div>
      </div>
    </div> */}
        </div>

        <div
          className="thumbnail flex justify-between space-x-4 xl:space-x-8 xl:w-full"
          ref={thumbnailBorderRef}
        >
          {/* Add your thumbnail items here */}
          <div className="item xl:block hidden">
            <img src="/ndt-3.jpg" className="w-32 xl:w-48" />
            <div className="content">
              <div className="title">PROFESSIONAL AUTHORITATIVE</div>
              <div className="description"></div>
            </div>
          </div>
          <div className="item xl:block hidden">
            <img src="/roof-3.jpg" className="w-32 xl:w-48" />
            <div className="content">
              <div className="title">CREDIBILITY & TRUST</div>
              <div className="description"></div>
            </div>
          </div>
          <div className="item xl:block hidden">
            <img src="/roof-1.jpg" className="w-32 xl:w-48" />
            <div className="content">
              <div className="title">CLEAR CALL TO ACTION</div>
              <div className="description"></div>
            </div>
          </div>
          {/* <div className="item xl:block hidden">
      <img src="/scaftek-fold-4.jpg" className="w-32 xl:w-48" />
      <div className="content">
        <div className="title">VISUAL APPEAL</div>
        <div className="description"></div>
      </div>
    </div> */}
        </div>

        <div className="time">{/* Add your time element here if needed */}</div>
        <button
          id="prev"
          ref={prevRef}
          onClick={() => showSlider("prev")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Prev
        </button>
        <button
          id="next"
          ref={nextRef}
          onClick={() => showSlider("next")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Header;
