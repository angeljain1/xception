import React from "react";
import { motion } from "framer-motion";

import Footer from "../footer/Footer";

import "./gallery.css";
import img1 from "./assets/DSC_0010-min.jpg";
import img2 from "./assets/_DSC0336-min.jpg";
import img7 from "./assets/_DSC0337-min.jpg";
import img14 from "./assets/_DSC0527-min.jpg";
import img5 from "./assets/chat_bot1.jpg";
import img6 from "./assets/chat_bot2.jpg";
import img13 from "./assets/chat_bot3.jpg";
import img8 from "./assets/child_educaion.jpg";
import img9 from "./assets/child_labour.jpg";
import img10 from "./assets/DSC_0347-min.jpg";
import img11 from "./assets/DSC_0551-min.jpg";
import img12 from "./assets/DSC_0674-min.jpg";
import img3 from "./assets/DSC_0720-min.jpg";
import img4 from "./assets/DSC_0729-min.jpg";
import img15 from "./assets/DSC_0741-min (1)-min.jpg";
import img16 from "./assets/DSC_0999-min-min.jpg";
import img17 from "./assets/gully_cricket.jpg";
import img18 from "./assets/IMG_7323-min.jpg";
import img19 from "./assets/IMG_7944-min.jpg";
import img20 from "./assets/IMG_7972-min.jpg";
import img21 from "./assets/magic.jpg";
import img22 from "./assets/magic1.jpg";
import img23 from "./assets/magic2-min.png";
import img24 from "./assets/pubg_back.jpg";
import img25 from "./assets/pubg.jpg";
import img26 from "./assets/stage.jpg";
import img27 from "./assets/team.jpg";
import img28 from "./assets/DSC_0682-min.jpg";
import img29 from "./assets/DSC_1000-min.jpg";
import img30 from "./assets/IMG_7393-min.jpg";
import img31 from "./assets/IMG_7423-min.jpg";

class Gallery extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    (function () {
      function calculateImageTranslate(galleries) {
        galleries.forEach(async (gallery) => {
          const galleryTop = gallery.offsetTop,
            images = gallery.querySelectorAll("div");

          await new Promise((res, rej) => {
            images.forEach((img) => {
              const imgX =
                img.parentElement.parentElement.offsetLeft + img.offsetLeft; // offsetLeft of img = offset of parent + offset of img

              img.style.setProperty(
                "--img-left",
                "calc(" +
                (window.innerWidth * 0.3 +
                  Math.random() * window.innerWidth * 0.4) +
                "px - " +
                img.offsetLeft +
                "px - " +
                img.offsetWidth / 2 +
                "px)"
              );

              img.style.setProperty(
                "--img-top",
                gallery.offsetTop -
                img.offsetTop -
                img.offsetHeight / (2.75 + Math.random() * 2) +
                "px"
              );
            });

            res();
          });

          gallery.classList.add("activate");
        });
      }

      const galleries = document.querySelectorAll(".img-gallery .gallery");

      calculateImageTranslate(galleries);

      window.addEventListener("resize", function () {
        calculateImageTranslate(galleries);
      });

      window.addEventListener("scroll", function (e) {
        galleries.forEach((gallery) => {
          gallery.querySelectorAll("div").forEach((img) => {
            if (
              gallery.offsetTop <=
              window.scrollY + (window.innerHeight * 6) / 10
            ) {
              img.style.setProperty("transform", "translate(0,0)");
            } else {
              img.style.setProperty("transform", "var(--transform)");
            }
          });
        });
      });

      const slider = document.querySelector("#slider");
      var lastOpenedGallery = null;

      galleries.forEach((gallery) => {
        const galleryImg = Array.prototype.slice.call(gallery.children);

        gallery.addEventListener("click", function (e) {
          if (!e.target.matches("img")) return;

          window.history.pushState("openingSlider", "sliderIsOpened");

          lastOpenedGallery = gallery;

          slider.querySelector("img").src = e.target.src;
          slider.classList.add("active");

          slider.querySelector("img").dataset.imgIndex = galleryImg.indexOf(
            e.target.parentNode
          );

          const evt = new Event("updatecontrols");
          evt.gallery = gallery;
          slider.dispatchEvent(evt);
        });
      });

      slider.addEventListener("click", function (e) {
        if (!e.target.matches(".image *")) {
          slider.classList.remove("active");
          lastOpenedGallery = null;
          return;
        } else if (e.target.matches(".prev:not(.disabled)")) {
          slider.querySelector("img").dataset.imgIndex--;
        } else if (e.target.matches(".next:not(.disabled)")) {
          slider.querySelector("img").dataset.imgIndex++;
        }

        if (lastOpenedGallery == null) return;

        const img =
          lastOpenedGallery.querySelectorAll("img")[
          slider.querySelector("img").dataset.imgIndex
          ];
        slider.querySelector("img").src = img.src;

        const evt = new Event("updatecontrols");
        evt.gallery = lastOpenedGallery;

        slider.dispatchEvent(evt);
      });

      slider.addEventListener("updatecontrols", function (e) {
        if (slider.querySelector("img").dataset.imgIndex == 0) {
          slider.querySelector(".prev").classList.add("disabled");
        } else {
          slider.querySelector(".prev").classList.remove("disabled");
        }

        if (
          e.gallery.children.length - 1 ==
          slider.querySelector("img").dataset.imgIndex
        ) {
          slider.querySelector(".next").classList.add("disabled");
        } else {
          slider.querySelector(".next").classList.remove("disabled");
        }
      });

      window.addEventListener("popstate", (e) => {
        if (slider.classList.contains("active")) {
          slider.click();
          return;
        }
      });
    })();
  }

  render() {
    return (
      <>
        <div className="gallery-main-container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2 className="gallery-header">Gallery</h2>
            <section className="img-gallery">
              <div className="gallery">
                <div className="tall">
                  <img src={img1} alt="" />
                </div>

                <div className="">
                  <img src={img2} alt="" />
                </div>

                <div className="">
                  <img src={img3} alt="" />
                </div>

                <div className="wide">
                  <img src={img31} alt="" />
                </div>

                <div className="wide">
                  <img src={img4} alt="" />
                </div>

                <div className="">
                  <img src={img5} alt="" />
                </div>

                <div className="wide">
                  <img src={img6} alt="" />
                </div>

                <div className="">
                  <img src={img7} alt="" />
                </div>

                <div className="">
                  <img src={img8} alt="" />
                </div>

                <div className="">
                  <img src={img9} alt="" />
                </div>

                <div className="wide">
                  <img src={img10} alt="" />
                </div>

                <div className="">
                  <img src={img11} alt="" />
                </div>

                <div className="">
                  <img src={img12} alt="" />
                </div>

                <div className="">
                  <img src={img13} alt="" />
                </div>

                <div className="wide">
                  <img src={img14} alt="" />
                </div>

                <div className="">
                  <img src={img15} alt="" />
                </div>

                <div className="">
                  <img src={img16} alt="" />
                </div>

                <div className="">
                  <img src={img17} alt="" />
                </div>

                <div className="">
                  <img src={img18} alt="" />
                </div>

                <div className="">
                  <img src={img19} alt="" />
                </div>

                <div className="">
                  <img src={img20} alt="" />
                </div>

                <div className="">
                  <img src={img21} alt="" />
                </div>

                <div className="">
                  <img src={img22} alt="" />
                </div>

                <div className="wide">
                  <img src={img23} alt="" />
                </div>

                <div className="">
                  <img src={img24} alt="" />
                </div>

                <div className="wide">
                  <img src={img25} alt="" />
                </div>

                <div className="">
                  <img src={img26} alt="" />
                </div>

                <div className="wide">
                  <img src={img27} alt="" />
                </div>

                <div className="wide">
                  <img src={img28} alt="" />
                </div>

                <div className="">
                  <img src={img29} alt="" />
                </div>

                <div className="">
                  <img src={img30} alt="" />
                </div>
              </div>
            </section>

            <div id="slider">
              <div className="image">
                <img src="" alt="" />
                <div className="controls">
                  <div className="prev"></div>
                  <div className="next"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Gallery;
