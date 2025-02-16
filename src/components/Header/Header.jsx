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

          <div className="item">
            <img src="images/gallery/img1.jpg" className="blur-sm" />
            <div className="content">
              <div className="topic">SAFETY</div>
              {/* <div className="author">SAFETY </div> */}
              <div className="title">Safety in Working Environment</div>
              <div className="des">
                TorqTech invest in full-time safety coordinator to make certain
                our HSE department is always up to date on customer safety
                requirements and OSHA regulations.
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                {/* <button>SUBSCRIBE</button> */}
              </div>
            </div>
          </div>
          <div className="item">
            <img src="images/gallery/img2.jpg" className="blur-sm" />
            <div className="content">
              <div className="topic">HEALTH</div>
              {/* <div className="author">HEALTH</div> */}
              <div className="title">
                OCCUPATIONAL HEALTH & INDUSTRIAL HYGIENE
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
          <div className="item">
            <img src="images/gallery/img3.jpg" className="blur-md" />
            <div className="content">
              <div className="topic">TECHNOLOGY</div>
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
        <div className="thumbnail" ref={thumbnailBorderRef}>
          {/* Add your thumbnail items here */}

          <div className="item">
            <img src="images/gallery/img1.jpg" />
            <div className="content">
              <div className="title">SAFETY</div>
              <div className="description"></div>
            </div>
          </div>
          <div className="item">
            <img src="images/gallery/img2.jpg" />
            <div className="content">
              <div className="title">HEALTH</div>
              <div className="description"></div>
            </div>
          </div>
          <div className="item">
            <img src="images/gallery/img3.jpg" />
            <div className="content">
              <div className="title">TECHNOLOGY</div>
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
