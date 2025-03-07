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
            <img src="/NPORS-1.png" className="blur-sm" />
            <div className="content">
              <div className="topic">LIFTING OPERATIONS</div>
              {/* <div className="author">SAFETY </div> */}
              <div className="title">
                {" "}
                Lifting operation traning Environment
              </div>
              <div className="des">
                Our Lifting Operations Programs are designed to equip personnel
                with the skills required to lift or move loads in accordance
                with the code of practice for safe use of lifting
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                {/* <button>SUBSCRIBE</button> */}
              </div>
            </div>
          </div>
          <div className="item bg-linear-to-r from-[#0b1b2bcc] to-[#0b1b2bcc] text-xs md:text-xs">
            <img src="/images/PRA7572-scaled.jpg" className="blur-sm" />
            <div className="content">
              <div className="topic">HEALTH & SAFETY</div>
              {/* <div className="author">HEALTH</div> */}
              <div className="title">
                OCCUPATIONAL HEALTH & SAFETY INDUSTRIAL HYGIENE
              </div>
              <div className="des">
                A robust and clearly defined occupational health and industrial
                hygiene program is critical for the effectiveness of any
                business and we support our clients in the evaluation and
                control of potential health hazards.
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
          <div className="item bg-linear-to-r from-[#0b1b2bcc] to-[#0b1b2bcc] text-xs md:text-xs">
            <img src="/Rope-access.png" className="blur-md" />
            <div className="content">
              <div className="topic">ROPE ACCESS/ SCAFFOLDING</div>
              {/* <div className="author">LUNDEV</div> */}
              <div className="title">Engineering Capabilities</div>
              <div className="des">
                Being a whole system supplier also offers leading capabilities
                in engineering, standard and special fasteners and wide-range
                bolting tool services.
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="thumbnail " ref={thumbnailBorderRef}>
          {/* Add your thumbnail items here */}

          <div className="item xl:block hidden">
            <img src="/NPORS-1.png" />
            <div className="content">
              <div className="title">LIFTING OPERATIONS</div>
              <div className="description"></div>
            </div>
          </div>
          <div className="item xl:block hidden">
            <img src="/images/PRA7572-scaled.jpg" />
            <div className="content">
              <div className="title">HEALTH & SAFETY</div>
              <div className="description"></div>
            </div>
          </div>
          <div className="item xl:block hidden">
            <img src="/Rope-access.png" />
            <div className="content">
              <div className="title">ROPE ACCESS/ SCAFFOLDING</div>
              <div className="description"></div>
            </div>
          </div>
        </div>
        <div className="time">{/* Add your time element here if needed */}</div>
        <button id="prev" ref={prevRef} onClick={() => showSlider("prev")}>
          Prev
        </button>
        <button id="next" ref={nextRef} onClick={() => showSlider("next")}>
          Next
        </button>
      </div>
    </>
  );
};

export default Header;
