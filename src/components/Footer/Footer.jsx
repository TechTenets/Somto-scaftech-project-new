import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className=" bg-[#0b1b2bcc] m-0">
      <div className="footer text-white bg-[#0b1b2bcc] " data-script="footer">
        <div className="font-sans font-bold p-4 text-sm text-center">
          <h1>Follow Us On Social Media</h1>

          <div className="p-2 gap-4">
            <InstagramIcon />

            <XIcon />

            <FacebookIcon />

            <YouTubeIcon />

            <LinkedInIcon />
          </div>
        </div>
        {/* <section className="footer--top">
          <article className="container" aria-label="Social">
            <div className="footer--links">
              <ul className="footer--list">
                <li className="footer--listItem">
                  <a
                    href="careers.html"
                    target=""
                    className="footer--link text-small"
                    >Careers</a>
                </li>
                <li className="footer--listItem">
                  <a href="news.html" target="" className="footer--link text-small"
                    >News</a >
                </li>
                <li className="footer--listItem">
                  <a
                    href="https://investor.Torqtech.com/"
                    target="_blank"
                    className="footer--link text-small"
                    >Investors</a   >
                </li>
                <li className="footer--listItem">
                  <a
                    href="who-we-are/contact-us.html"
                    target=""
                    className="footer--link text-small"
                    >Contact us</a >
                </li>
                <li className="footer--listItem">
                  <a
                    href="news/subscribe.html#Subscribe"
                    target=""
                    className="footer--link text-small"
                    >Subscribe</a  >
                </li>
              </ul>
            </div>
            <div className="footer--socialMedia">
              <ul className="no-list-style">
                <li className="footer--socialLink">
                  <a
                    href="https://www.facebook.com/Torqtech/"
                    target="_blank"
                    className="footer--socialIcon"
                    aria-label="Facebook"
                  >
                    <img
                      src="-/media/global/icons/footer/social/fb-gray.svg"
                      alt="Facebook"
                      className="base-icon"
                    />
                    <img
                      src="-/media/global/icons/footer/social/fb-white.svg"
                      alt="Facebook"
                      className="hover-icon"
                    />
                    <span className="visibility-hidden">Facebook</span>
                  </a>
                </li>
                <li className="footer--socialLink">
                  <a
                    href="https://twitter.com/Torqtech"
                    target="_blank"
                    className="footer--socialIcon"
                    aria-label="Twitter"
                  >
                    <img
                      src="-/media/global/icons/footer/social/tw-gray.svg"
                      alt="Twitter"
                      className="base-icon"
                    />
                    <img
                      src="-/media/global/icons/footer/social/tw-white.svg"
                      alt="Twitter"
                      className="hover-icon"
                    />
                    <span className="visibility-hidden">Twitter</span>
                  </a>
                </li>
                <li className="footer--socialLink">
                  <a
                    href="https://www.linkedin.com/company/Torqtech/"
                    target="_blank"
                    className="footer--socialIcon"
                    aria-label="LinkedIn"
                  >
                    <img
                      src="-/media/global/icons/footer/social/in-gray.svg"
                      alt="LinkedIn"
                      className="base-icon"
                    />
                    <img
                      src="-/media/global/icons/footer/social/in-white.svg"
                      alt="LinkedIn"
                      className="hover-icon"
                    />
                    <span className="visibility-hidden">LinkedIn</span>
                  </a>
                </li>
                <li className="footer--socialLink">
                  <a
                    href="https://www.instagram.com/Torqtech/"
                    target="_blank"
                    className="footer--socialIcon"
                    aria-label="Instagram"
                  >
                    <img
                      src="-/media/global/icons/footer/social/ig-gray.svg"
                      alt="Instagram"
                      className="base-icon"
                    />
                    <img
                      src="-/media/global/icons/footer/social/ig-white.svg"
                      alt="Instagram"
                      className="hover-icon"
                    />
                    <span className="visibility-hidden">Instagram</span>
                  </a>
                </li>
                <li className="footer--socialLink">
                  <a
                    href="http://www.youtube.com/user/Torqtech"
                    target="_blank"
                    className="footer--socialIcon"
                    aria-label="YouTube"
                  >
                    <img
                      src="-/media/global/icons/footer/social/yt-gray.svg"
                      alt="YouTube"
                      className="base-icon"
                    />
                    <img
                      src="-/media/global/icons/footer/social/yt-white.svg"
                      alt="YouTube"
                      className="hover-icon"
                    />
                    <span className="visibility-hidden">YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </section> */}
        <section className="footer--bottom  text-black">
          <article className="container " aria-label="Brands">
            <div className="footer--brands">
              <a
                href="/"
                target=""
                className="footer--brandLink main"
                aria-label="Scarftech logo"
              >
                <img
                 src="/images/Scarftech-logo.webp"
                 alt="Scarftech logo"
                  className="max-w-[300px] pb-4 " />
                {/* <img
                  src=
                  "/LOGO int.png"
                  alt="JC int"
                  className="hover-icon"
                /> */}
                {/* <span className="visibility-hidden">JC int Logo</span> */}
              </a>

              {/* <a
                href="https://www.mobil.com/"
                target="_blank"
                className="footer--brandLink"
                aria-label="Mobil"
              >
                <img
                  src="-/media/global/icons/footer/sites/mobil-gray.svg"
                  alt="Mobil"
                  className="base-icon"
                />
                <img
                  src="-/media/global/icons/footer/sites/mobil-white.svg"
                  alt="Mobil"
                  className="hover-icon"
                />
                <span className="visibility-hidden">Mobil</span>
              </a>
              <a
                href="https://www.esso.com/"
                target="_blank"
                className="footer--brandLink"
                aria-label="Esso"
              >
                <img
                  src="-/media/global/icons/footer/sites/esso-gray.svg"
                  alt="Esso"
                  className="base-icon"
                />
                <img
                  src="-/media/global/icons/footer/sites/esso-white.svg"
                  alt="Esso"
                  className="hover-icon"
                />
                <span className="visibility-hidden">Esso</span>
              </a>
              <a
                href="https://xtoenergy.com/"
                target="_blank"
                className="footer--brandLink"
                aria-label="XTO"
              >
                <img
                  src="-/media/global/icons/footer/sites/xto-gray.svg"
                  alt="XTO"
                  className="base-icon"
                />
                <img
                  src="-/media/global/icons/footer/sites/xto-white.svg"
                  alt="XTO"
                  className="hover-icon"
                />
                <span className="visibility-hidden">XTO</span>
              </a> */}
            </div>

            <section className="flex justify-around gap-4 p-4">
              <div className="flex-col text-amber-50 p-4">
                <div className="font-sans font-medium text-2xl">
                  <h1>ABOUT</h1>
                </div>
                <div className="font-sans P-6 font-medium text-sm">
                  <ul>
                    <li className="pt-2 pb-1">
                      <a href="">. About</a>
                    </li>

                    <li className="pt-2 pb-1">
                      <a href="">. Accreditations</a>
                    </li>

                    <li className="pt-2 pb-1">
                      <a href="">. Find a Course</a>
                    </li>

                    <li className="pt-2 pb-1">
                      <a href="">. Blog</a>
                    </li>

                    <li className="pt-2 pb-1">
                      <a href="">Home</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex-col text-amber-50 p-4">
                <div className="font-sans font-medium text-2xl">
                  <h1> OUR FACULTIES</h1>
                </div>
                <div className="font-sans P-6 font-medium text-sm">
                  <ul>
                    <li className="pt-2 pb-1">
                      <a href="">. Health & Safety</a>
                    </li>

                    <li className="pt-2 pb-1">
                      <a href="">. ASNT NDT INSPECTION</a>
                    </li>

                    <li className="pt-2 pb-1">
                      <a href="">. Lifting Operations</a>
                    </li>

                    <li className="pt-2 pb-1">
                      <a href="">. IWCF Drilling Courses</a>
                    </li>

                    <li className="pt-2 pb-1">
                      <a href="">. Rope Access</a>
                    </li>

                    <li className="pt-2 pb-1">
                      <a href="">. Employability Skills</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex-col text-amber-50 p-4">
                <div className="font-sans font-medium text-2xl">
                  <h1>FIND US</h1>
                </div>
                <div className="font-sans P-6 font-medium text-sm">
                  <ul>
                    <li className="pt-2 pb-1">
                      <a href="">Lagos</a>
                    </li>

                    <li className="pt-2 pb-1">
                      <a href="">Port Harcourt</a>
                    </li>

                    <li className="pt-2 pb-1">
                      <a href="">Uganda</a>
                    </li>

                    <li className="pt-2 pb-1">
                      <a href="">Tanzania</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex-col text-amber-50 p-4">
                <div className="font-sans font-medium text-2xl">
                  <h1>SUPPORT</h1>
                </div>
                <div className="font-sans font-medium  text-sm">
                  <ul>
                    <li className="pt-2 pb-1">
                      <a href="">. Help</a>
                    </li>

                    <li className="pt-2 pb-1">
                      <a href="">. Term Conditions</a>
                    </li>

                    <li className="pt-2 pb-1">
                      <a href="">. Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="footer--privacy flex justify-between text-amber-50">
              <div>
                <p
                  className="footer--copyright text-extra-small p-2"
                  tabIndex={0}
                  aria-label="copyright"
                >
                  &copy; © 2025 Scaftech Training. All Rights Reserved.
                </p>
              </div>

              <div className="flex gap-5">
                <p className="text-extra-small footer--policyWrapper">
                  <a
                    className="footer--policy optanon-toggle-display"
                    tabIndex={0}
                  >
                    Help
                  </a>
                </p>
                <p className="text-extra-small footer--policyWrapper">
                  <a href="#" target="|Custom" className="footer--policy">
                    Privacy Policy
                  </a>
                </p>
                <p className="text-extra-small footer--policyWrapper">
                  <a href="#" target="|Custom" className="footer--policy">
                    Terms Conditions
                  </a>
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
