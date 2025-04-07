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
      <img src="/jci-9-27.jpg" className="blur-sm w-full" />
      <div className="content">
        <div className="topic">PROFESSIONAL & AUTHORITATIVE</div>
        <div className="title">Profession and Authoritative</div>
        <div className="des">
          Position your company as a leader in industrial efficiency.
        </div>
        <div className="buttons">
          <button>SEE MORE</button>
        </div>
      </div>
    </div>
    <div className="item bg-linear-to-r from-[#0b1b2bcc] to-[#0b1b2bcc] text-xs md:text-xs">
      <img src="/images/PRA7572-scaled.jpg" className="blur-sm w-full" />
      <div className="content">
        <div className="topic">CREDIBILITY & TRUST</div>
        <div className="title">Credibility and Trust</div>
        <div className="des">
          Highlight certification and adherence to recognized standards.
        </div>
        <div className="buttons">
          <button>SEE MORE</button>
        </div>
      </div>
    </div>
    <div className="item bg-linear-to-r from-[#0b1b2bcc] to-[#0b1b2bcc] text-xs md:text-xs">
      <img src="/Rope-access.png" className="blur-md w-full" />
      <div className="content">
        <div className="topic">CLEAR CALL TO ACTION</div>
        <div className="title">Engineering Capabilities</div>
        <div className="des">
          Encourage visitors to inquire, register, or download resources.
        </div>
        <div className="buttons">
          <button>SEE MORE</button>
        </div>
      </div>
    </div>
    <div className="item bg-linear-to-r from-[#0b1b2bcc] to-[#0b1b2bcc] text-xs md:text-xs">
      <img src="/arc-welding-steel.jpg" className="blur-md w-full" />
      <div className="content">
        <div className="topic">VISUAL APPEAL</div>
        <div className="title">Visual Appealing</div>
        <div className="des">Use high-quality, relevant images and videos.</div>
        <div className="buttons">
          <button>SEE MORE</button>
        </div>
      </div>
    </div>
  </div>

  <div className="thumbnail flex justify-between space-x-4 xl:space-x-8 xl:w-full" ref={thumbnailBorderRef}>
    {/* Add your thumbnail items here */}
    <div className="item xl:block hidden">
      <img src="/jci-9-27.jpg" className="w-32 xl:w-48" />
      <div className="content">
        <div className="title">PROFESSIONAL AUTHORITATIVE</div>
        <div className="description"></div>
      </div>
    </div>
    <div className="item xl:block hidden">
      <img src="/images/PRA7572-scaled.jpg" className="w-32 xl:w-48" />
      <div className="content">
        <div className="title">CREDIBILITY & TRUST</div>
        <div className="description"></div>
      </div>
    </div>
    <div className="item xl:block hidden">
      <img src="/Rope-access.png" className="w-32 xl:w-48" />
      <div className="content">
        <div className="title">CLEAR CALL TO ACTION</div>
        <div className="description"></div>
      </div>
    </div>
    <div className="item xl:block hidden">
      <img src="/arc-welding-steel.jpg" className="w-32 xl:w-48" />
      <div className="content">
        <div className="title">VISUAL APPEAL</div>
        <div className="description"></div>
      </div>
    </div>
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
