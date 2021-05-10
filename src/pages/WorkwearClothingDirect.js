import React, { useState, useEffect } from "react";
import Slider from "../components/shared/Slider";
import myProjects from "../data/myProjects";

const WorkwearClothingDirect = ({ match, location, history }) => {
  const project = myProjects.find((x) => x.id === match.params.id);
  const [sliderIsOpen, setSliderIsOpen] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  const openSlider = (index) => {
    setSliderIndex(index);
    setSliderIsOpen(true);
  };

  useEffect(() => {
    const element = document.getElementById(location.hash.replace("#", ""));
    window.scrollTo({
      behavior: element ? "smooth" : "auto",
      top: element ? element.offsetTop - 100 : 0,
    });
  });

  return (
    <>
      <section className="project workwear">
        <div className="container">
          <h4 className="project__type">{project.type}</h4>
          <h1 className="project__title">{project.title}.</h1>
          <div className="project__date">Created: {project.date}</div>
          <p className="project__description">{project.description}</p>
          <h3 className="subtitle">Deliverables</h3>
          <ul>
            <li>9 Hero slides.</li>
            <li>Banner + 3 SVG Icons.</li>
            <li>12 Category images.</li>
            <li>Installation.</li>
          </ul>
          <button
            className="btn primary large"
            onClick={() => history.push(`${location.pathname}#slides`)}
          >
            View Details
          </button>
          <a
            className="btn secondary large"
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
          >
            Visit Website
          </a>

          <div className="preview">
            <img src={project.preview_image} alt={project.title} />
          </div>
        </div>
      </section>
      <section id="slides" className="project workwear">
        <div className="container">
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
        </div>
      </section>
      <section className="workwear">
        <div className="container">
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
                src="/img/projects/workwear/min/banner/delivery.svg"
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
                src="/img/projects/workwear/min/banner/30-days-returns.svg"
                alt="Returns"
              />
              <div className="banner____content">
                <h3>Free Returns</h3>
                <p>We offer 30-day returns at no extra charge.</p>
              </div>
            </div>
            <div className="banner__block">
              <img
                src="/img/projects/workwear/min/banner/discounts.svg"
                alt="Discounts"
              />
              <div className="banner____content">
                <h3>Discounts</h3>
                <p>Discounts are available for larger orders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="workwear">
        <div className="container">
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
                <h2>{category.title}</h2>
                <button>Shop now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="workwear">
        <div className="container">
          <h3 className="subtitle">Top brands</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            reiciendis qui inventore sunt quos doloremque nostrum, in, eius,
            corporis accusamus quidem? Odit qui nihil et provident delectus
            tenetur voluptatum cumque!
          </p>
          <div className="top-brands">
            {project.top_brands.map((brand, index) => (
              <div key={`top-brand-${index}`} className="brand">
                <img
                  src={brand.image}
                  alt={brand.title}
                  onClick={() => openSlider(index)}
                />
                <div className="slide__title">{brand.title}</div>
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
