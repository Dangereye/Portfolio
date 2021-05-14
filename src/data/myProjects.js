const svg = "/img/portfolio/svg";
const myProjects = [
  {
    id: "1",
    type: "React",
    date: "2021",
    title: "TMDB Movies",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veritatis voluptatem, voluptatibus dolore officia atque recusandae, autem ipsum, iste sunt perferendis velit modi blanditiis aliquid saepe totam nihil. Nostrum, possimus.",
    portfolio_image: "/img/projects/tmdb-movies/min/capture-square-min.jpg",
    preview_image: "/img/projects/tmdb-movies/raw/display.jpg",
    api: [
      {
        title: "themoviedb.org",
        url: "https://www.themoviedb.org",
      },
    ],
    tech: [
      { image: `${svg}/html5.svg`, alt: "HTML5" },
      { image: `${svg}/css3.svg`, alt: "CSS3" },
      { image: `${svg}/sass.svg`, alt: "SCSS" },
      { image: `${svg}/js.svg`, alt: "Javascript" },
      { image: `${svg}/react.svg`, alt: "React" },
    ],
    third_party: [
      {
        title: "React Icons",
        url: "https://react-icons.github.io/react-icons/",
      },
      {
        title: "React Router",
        url: "https://reactrouter.com/web/guides/quick-start",
      },
      { title: "React Query", url: "https://react-query.tanstack.com/" },
    ],
    links: { live: "/", code: "https://github.com/Dangereye/Movies" },
  },
  {
    id: "2",
    type: "React",
    date: "2021",
    title: "The Weather",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veritatis voluptatem, voluptatibus dolore officia atque recusandae, autem ipsum, iste sunt perferendis velit modi blanditiis aliquid saepe totam nihil. Nostrum, possimus.",
    portfolio_image: "/img/projects/the-weather/min/capture-square-min.jpg",
    preview_image: "/img/projects/the-weather/raw/display.jpg",
    api: [
      {
        title: "weatherapi.com",
        url: "https://www.weatherapi.com/",
      },
      {
        title: "unsplash.com",
        url: "https://unsplash.com/developers",
      },
    ],
    tech: [
      { image: `${svg}/html5.svg`, alt: "HTML5" },
      { image: `${svg}/css3.svg`, alt: "CSS3" },
      { image: `${svg}/sass.svg`, alt: "SCSS" },
      { image: `${svg}/js.svg`, alt: "Javascript" },
      { image: `${svg}/react.svg`, alt: "React" },
    ],
    third_party: [
      {
        title: "React Icons",
        url: "https://react-icons.github.io/react-icons/",
      },
      {
        title: "React Router",
        url: "https://reactrouter.com/web/guides/quick-start",
      },
    ],
    links: { live: "/", code: "https://github.com/Dangereye/the-weather" },
  },
  {
    id: "3",
    type: "React",
    date: "2021",
    title: "Starwars",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veritatis voluptatem, voluptatibus dolore officia atque recusandae, autem ipsum, iste sunt perferendis velit modi blanditiis aliquid saepe totam nihil. Nostrum, possimus.",
    portfolio_image: "/img/projects/starwars/min/capture-square-min.jpg",
    preview_image: "/img/projects/starwars/raw/display.jpg",
    api: [
      {
        title: "swapi.dev",
        url: "https://swapi.dev/",
      },
    ],
    tech: [
      { image: `${svg}/html5.svg`, alt: "HTML5" },
      { image: `${svg}/css3.svg`, alt: "CSS3" },
      { image: `${svg}/sass.svg`, alt: "SCSS" },
      { image: `${svg}/js.svg`, alt: "Javascript" },
      { image: `${svg}/react.svg`, alt: "React" },
      { image: `${svg}/ps.svg`, alt: "Photoshop" },
    ],
    third_party: [
      {
        title: "React Icons",
        url: "https://react-icons.github.io/react-icons/",
      },
      {
        title: "React Router",
        url: "https://reactrouter.com/web/guides/quick-start",
      },
    ],
    links: { live: "/", code: "https://github.com/Dangereye/starwars" },
  },
  {
    id: "4",
    page: "workwearclothingdirect",
    type: "PS",
    date: "2020",
    title: "Workwear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veritatis voluptatem, voluptatibus dolore officia atque recusandae, autem ipsum, iste sunt perferendis velit modi blanditiis aliquid saepe totam nihil. Nostrum, possimus.",
    portfolio_image: "/img/projects/workwear/min/capture-square-min.jpg",
    preview_image: "/img/projects/workwear/raw/display.jpg",
    tech: [
      { image: `${svg}/html5.svg`, alt: "HTML5" },
      { image: `${svg}/css3.svg`, alt: "CSS3" },
      { image: `${svg}/ps.svg`, alt: "Adobe Photoshop" },
      { image: `${svg}/ai.svg`, alt: "Adobe Illustrator" },
      { image: `${svg}/xd.svg`, alt: "Experience Design" },
    ],
    third_party: [
      {
        title: "WordPress",
        url: "https://wordpress.org/",
      },
      {
        title: "Elementor",
        url: "https://elementor.com/",
      },
    ],
    deliverables: [
      "9 Hero slides",
      "Banner + 3 SVG icons",
      "12 category images",
      "10 Top brand images",
      "Installation",
    ],
    slides: [
      {
        title: "AXQ Face Cover",
        image: "/img/projects/workwear/min/slides/axq-min.jpg",
        color: "#fe6a00",
      },
      {
        title: "B&C Corporate Shirts",
        image: "/img/projects/workwear/min/slides/bandc-min.jpg",
        color: "#c79a63",
      },
      {
        title: "Beechfield Trawler Beanie",
        image: "/img/projects/workwear/min/slides/beechfield-beanie-min.jpg",
        color: "#dcad21",
      },
      {
        title: "Beechfield Original Morf",
        image: "/img/projects/workwear/min/slides/beechfield-morf-min.jpg",
        color: "#0693c9",
      },
      {
        title: "Fruit Of The Loom T-Shirt",
        image: "/img/projects/workwear/min/slides/fruit-of-the-loom-min.jpg",
        color: "#b2356f",
      },
      {
        title: "Portwest Hi-Vis",
        image: "/img/projects/workwear/min/slides/portwest-min.jpg",
        color: "#fffe54",
      },
      {
        title: "Premier Poplin Shirts",
        image: "/img/projects/workwear/min/slides/premier-min.jpg",
        color: "#d58665",
      },
      {
        title: "Workguard Saftey Boots",
        image: "/img/projects/workwear/min/slides/workguard-min.jpg",
        color: "#73a301",
      },
      {
        title: "Yoko Hi-Vis",
        image: "/img/projects/workwear/min/slides/yoko-min.jpg",
        color: "#ff6e01",
      },
    ],
    categories: [
      {
        title: "hi-vis",
        image: "/img/projects/workwear/min/categories/hi-vis-min.jpg",
      },
      {
        title: "coats & jackets",
        image:
          "/img/projects/workwear/min/categories/coats-and-jackets-min.jpg",
      },
      {
        title: "footwear",
        image: "/img/projects/workwear/min/categories/footwear-min.jpg",
      },
      {
        title: "workwear",
        image: "/img/projects/workwear/min/categories/workwear-min.jpg",
      },
      {
        title: "hoodies",
        image: "/img/projects/workwear/min/categories/hoodies-min.jpg",
      },
      {
        title: "sweatshirts",
        image: "/img/projects/workwear/min/categories/sweatshirts-min.jpg",
      },
      {
        title: "hospitality",
        image: "/img/projects/workwear/min/categories/hospitality-min.jpg",
      },
      {
        title: "healthcare",
        image: "/img/projects/workwear/min/categories/healthcare-min.jpg",
      },
      {
        title: "chefwear",
        image: "/img/projects/workwear/min/categories/chefwear-min.jpg",
      },
      {
        title: "corporate",
        image: "/img/projects/workwear/min/categories/corporate-min.jpg",
      },
      {
        title: "knitwear",
        image: "/img/projects/workwear/min/categories/knitwear-min.jpg",
      },
      {
        title: "suits & jackets",
        image:
          "/img/projects/workwear/min/categories/suits-and-jackets-min.jpg",
      },
    ],
    top_brands: [
      {
        title: "B&C",
        image: "/img/projects/workwear/min/brands/bandc-min.jpg",
      },
      {
        title: "Dickies",
        image: "/img/projects/workwear/min/brands/dickies-min.jpg",
      },
      {
        title: "Kustom Kit",
        image: "/img/projects/workwear/min/brands/kustom-kit-min.jpg",
      },
      {
        title: "Portwest",
        image: "/img/projects/workwear/min/brands/portwest-min.jpg",
      },
      {
        title: "Premier",
        image: "/img/projects/workwear/min/brands/premier-min.jpg",
      },
      {
        title: "Result",
        image: "/img/projects/workwear/min/brands/result-min.jpg",
      },
      {
        title: "RTX",
        image: "/img/projects/workwear/min/brands/rtx-min.jpg",
      },
      {
        title: "Russell",
        image: "/img/projects/workwear/min/brands/russell-min.jpg",
      },
      {
        title: "Sols",
        image: "/img/projects/workwear/min/brands/sols-min.jpg",
      },
      {
        title: "Yoko",
        image: "/img/projects/workwear/min/brands/yoko-min.jpg",
      },
    ],
    links: { live: "https://www.workwearclothingdirect.com/" },
  },
];

export default myProjects;
