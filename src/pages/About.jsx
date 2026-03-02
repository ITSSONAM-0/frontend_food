import React from "react";
import img1 from "../images/aboutPage/front.jpeg"; // replace with your about image
import img2 from "../images/aboutPage/img2.avif";
import img3 from "../images/aboutPage/img3.avif";
import img4 from "../images/aboutPage/img4.avif";
import img5 from "../images/aboutPage/img5.webp";
import img6 from "../images/aboutPage/img6.jpg";
import img7 from "../images/aboutPage/img7.jpeg";
import img8 from "../images/aboutPage/img8.jpeg";
import img9 from "../images/aboutPage/img9.png";
import img10 from "../images/aboutPage/img10.png";
import img11 from "../images/aboutPage/img11.png";
import img12 from "../images/aboutPage/img12.png";
import "../pages/pages.css";
import Footer from "../components/Footer";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];
const About = () => {
  return (
    <>
      <div
        className="about-section py-5 my-5"
        style={{ backgroundColor: "#111" }}
      >
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-lg-row">
            {/* Text Section */}
            <div className="col-lg-6 text-light mt-4 mt-lg-0">
              <h2 className="fw-bold mb-3" style={{ color: "#ffcc00" }}>
                About Us
              </h2>
              <p className="mb-3" style={{ lineHeight: "1.7" }}>
                Welcome to our café. We serve joy in every flavor and warmth in
                every bite. Our chefs carefully craft each dish with premium
                ingredients and authentic tastes.
              </p>
              <p className="mb-4" style={{ lineHeight: "1.7" }}>
                Whether you're here to enjoy a quiet evening, celebrate with
                friends, or simply indulge in something sweet—our doors are
                always open.
              </p>

              <a href="/menu">
                <button className="btn btn-warning rounded-pill fw-semibold px-4 py-2">
                  Eat & Enjoy <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </a>
            </div>

            {/* Image Section */}
            <div className="col-lg-6 text-center">
              <div
                id="aboutCarousel"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >
                <div className="carousel-inner rounded-4 shadow-lg">
                  <div className="carousel-item active">
                    <img
                      src={img1}
                      className="d-block w-100"
                      alt="..."
                      style={{ height: "420px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img2}
                      className="d-block w-100"
                      alt="..."
                      style={{ height: "420px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img3}
                      className="d-block w-100"
                      alt="..."
                      style={{ height: "420px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img4}
                      className="d-block w-100"
                      alt="..."
                      style={{ height: "420px", objectFit: "cover" }}
                    />
                  </div>
                </div>

                {/* Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#aboutCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#aboutCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cafe gallery */}
      <div className="gallery-section ">
        <div className="container">
          <h2
            className="text-center mb-4"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "3rem",
              color: "#362d09ff",
            }}
          >
            Café Gallery
          </h2>

          <div className="gallery-grid">
            {images.map((img, index) => (
              <div className="gallery-item" key={2}>
                <img src={img} alt="Cafe" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* footer */}
      <section className="footer-section mt-5">
        <div className="container">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default About;