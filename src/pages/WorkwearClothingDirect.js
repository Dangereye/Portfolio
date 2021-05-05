import React, { useState } from "react";
import Slider from "../components/shared/Slider";
import myProjects from "../data/myProjects";

const WorkwearClothingDirect = ({ match }) => {
  const project = myProjects.find((x) => x.id === match.params.id);
  const [sliderIsOpen, setSliderIsOpen] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  const openSlider = (index) => {
    setSliderIndex(index);
    setSliderIsOpen(true);
  };

  return (
    <>
      <section className="project">
        <div className="container">
          <h1 className="project__title">
            {project.title} - {project.date}
          </h1>
          <p>{project.description}</p>
          <h3 className="subtitle">Services</h3>
          <ul className="list">
            <li>9 Hero slides.</li>
            <li>Banner + 3 SVG Icons, inc HTML, CSS template.</li>
            <li>12 Category images, inc HTML, CSS template. </li>
            <li>Installation, using Elementor for Wordpress.</li>
          </ul>

          <a href={project.links.live} target="_blank" rel="noreferrer">
            Visit Site
          </a>
          <h3 className="subtitle">Hero Slides</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            officia accusantium, est obcaecati sint veniam in quo, quas aliquam
            quis temporibus sed? Iure repudiandae pariatur labore illum
            corporis, rem architecto?
          </p>
          <div className="slides">
            {project.slides.map((slide, index) => (
              <div key={`gallery-item-${index}`} className="slide">
                <img
                  src={slide.image}
                  alt={slide.title}
                  onClick={() => openSlider(index)}
                />
                <div className="slide__title">{slide.title}</div>
              </div>
            ))}
          </div>
          <h3 className="subtitle">Banner</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            officia accusantium, est obcaecati sint veniam in quo, quas aliquam
            quis temporibus sed? Iure repudiandae pariatur labore illum
            corporis, rem architecto?
          </p>
          <div className="banner">
            <div className="banner__block">
              <img
                src="/img/min/projects/ps/workwear/banner/delivery.svg"
                alt="Delivery"
              />
              <div className="banner____content">
                <h3>Standard Delivery</h3>
                <p>
                  Order before <strong>4pm.</strong>
                  <br /> Spend <strong>£50+</strong> and it's{" "}
                  <strong>FREE!</strong>
                  <br /> *UK mainland only.
                </p>
              </div>
            </div>
            <div className="banner__block">
              <img
                src="/img/min/projects/ps/workwear/banner/30-days-returns.svg"
                alt="Returns"
              />
              <div className="banner____content">
                <h3>Free Returns</h3>
                <p>We offer 30-day returns at no extra charge.</p>
              </div>
            </div>
            <div className="banner__block">
              <img
                src="/img/min/projects/ps/workwear/banner/discounts.svg"
                alt="Discounts"
              />
              <div className="banner____content">
                <h3>Discounts</h3>
                <p>Discounts are available for larger orders.</p>
              </div>
            </div>
          </div>

          <h3 className="subtitle">Categories</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            reiciendis qui inventore sunt quos doloremque nostrum, in, eius,
            corporis accusamus quidem? Odit qui nihil et provident delectus
            tenetur voluptatum cumque!
          </p>
          <div className="categories">
            {project.categories.map((category, index) => (
              <div
                key={`category-${index}`}
                className="category"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <h2>{category.text}</h2>
                <button>Shop now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {sliderIsOpen && (
        <Slider
          images={project.slides}
          sliderIndex={sliderIndex}
          setSliderIsOpen={setSliderIsOpen}
        />
      )}
    </>
  );
};

export default WorkwearClothingDirect;
