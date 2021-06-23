const svg = "/img/portfolio/svg";
const myProjects = [
  {
    id: "1",
    type: "React",
    date: "2021",
    title: "Movies",
    description:
      "Movies is a React application to search and explore movies, television and related cast/crew members. The TMDB API provides vast, expansive and ever-evolving data, prompting experimentation with React Query for this project because of its ability to easily cache fetched data.",
    preview_images:{
      desktop:"/img/projects/tmdb-movies/min/previews-desktop.jpg",
      tablet:"/img/projects/tmdb-movies/min/previews-tablet.jpg",
      mobile:"/img/projects/tmdb-movies/min/previews-mobile.jpg"},
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
    buttons: {
      primary: {
        type: "anchor",
        url: "https://pux-movies.netlify.app",
        styles: "primary large",
        text: "Launch Site",
      },
      secondary: {
        type: "anchor",
        url: "https://github.com/Dangereye/Movies",
        styles: "secondary dark large",
        text: "View Code",
      },
    },
  },
  {
    id: "2",
    type: "React",
    date: "2021",
    title: "The Weather",
    description:
      "The weather is a React application utilising the Context API to achieve its global state. Header images provided by Unsplash update (somewhat reliably) using keywords from current weather conditions. Additional functionality includes geolocation, location search (saved to local storage), current conditions, hourly conditions, precipitation, wind, astronomy and multiple settings.",
    preview_images:{
      desktop:"/img/projects/the-weather/min/previews-desktop.jpg",
      tablet:"/img/projects/the-weather/min/previews-tablet.jpg",
      mobile:"/img/projects/the-weather/min/previews-mobile.jpg"},
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
    buttons: {
      primary: {
        type: "anchor",
        url: "https://pux-the-weather.netlify.app",
        styles: "primary large",
        text: "Launch Site",
      },
      secondary: {
        type: "anchor",
        url: "https://github.com/Dangereye/the-weather",
        styles: "secondary dark large",
        text: "View Code",
      },
    },
  },
  {
    id: "3",
    type: "React",
    date: "2021",
    title: "Star Wars",
    description:
      "Star Wars is a React application utilising the SWAPI API. Users can explore information about Star Wars movies, people, species, vehicles, and starships. I used movie posters and several images from various sources (credited) but decided to use icons primarily to avoid any nasty copyright issues.",
    preview_images:{
      desktop:"/img/projects/starwars/min/previews-desktop.jpg",
      tablet:"/img/projects/starwars/min/previews-tablet.jpg",
      mobile:"/img/projects/starwars/min/previews-mobile.jpg",},
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
    buttons: {
      primary: {
        type: "anchor",
        url: "https://pux-starwars.netlify.app",
        styles: "primary large",
        text: "Launch Site",
      },
      secondary: {
        type: "anchor",
        url: "https://github.com/Dangereye/starwars",
        styles: "secondary dark large",
        text: "View Code",
      },
    },
  },
  {
    id: "4",
    page: "workwearclothingdirect",
    type: "Photoshop",
    date: "2020",
    title: "Workwear",
    description:
      "Workwear was a freelance project primarily image-focused, with a small amount of HTML and CSS included with certain pieces. Operating both eBay and WordPress versions of their store, requirements were different for each.",
    preview_images:{
      desktop:"/img/projects/workwear/min/previews-desktop.jpg",
      tablet:"/img/projects/workwear/min/previews-tablet.jpg",
      mobile:"/img/projects/workwear/min/previews-mobile.jpg"},
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
      {
        title: "Carousel images",
        url: "/project/4/workwearclothingdirect/#carousel",
      },
      {
        title: "Banner + SVG icons",
        url: "/project/4/workwearclothingdirect/#banner",
      },
      {
        title: "Category images",
        url: "/project/4/workwearclothingdirect/#categories",
      },
      {
        title: "Top brand images",
        url: "/project/4/workwearclothingdirect/#brands",
      },
    ],
    slides: [
      {
        title: "AXQ Face Cover",
        images:{
          desktop:"/img/projects/workwear/min/slides/axq-desktop.jpg",
          tablet:"/img/projects/workwear/min/slides/axq-tablet.jpg",
          mobile:"/img/projects/workwear/min/slides/axq-mobile.jpg"
        },
        color: "#fe6a00",
      },
      {
        title: "B&C Corporate Shirts",
        images:{
          desktop:"/img/projects/workwear/min/slides/bandc-desktop.jpg",
          tablet:"/img/projects/workwear/min/slides/bandc-tablet.jpg",
          mobile:"/img/projects/workwear/min/slides/bandc-mobile.jpg"
        },
        color: "#c79a63",
      },
      {
        title: "Beechfield Trawler Beanie",
        images:{
          desktop:"/img/projects/workwear/min/slides/beechfield-beanie-desktop.jpg",
          tablet:"/img/projects/workwear/min/slides/beechfield-beanie-tablet.jpg",
          mobile:"/img/projects/workwear/min/slides/beechfield-beanie-mobile.jpg"
        },
        color: "#dcad21",
      },
      {
        title: "Beechfield Original Morf",
        images:{
          desktop:"/img/projects/workwear/min/slides/beechfield-morf-desktop.jpg",
          tablet:"/img/projects/workwear/min/slides/beechfield-morf-tablet.jpg",
          mobile:"/img/projects/workwear/min/slides/beechfield-morf-mobile.jpg"
        },
        color: "#0693c9",
      },
      {
        title: "Fruit Of The Loom T-Shirt",
        images:{
          desktop:"/img/projects/workwear/min/slides/fruit-of-the-loom-desktop.jpg",
          tablet:"/img/projects/workwear/min/slides/fruit-of-the-loom-tablet.jpg",
          mobile:"/img/projects/workwear/min/slides/fruit-of-the-loom-mobile.jpg"
        },
        color: "#b2356f",
      },
      {
        title: "Portwest Hi-Vis",
        images:{
          desktop:"/img/projects/workwear/min/slides/portwest-desktop.jpg",
          tablet:"/img/projects/workwear/min/slides/portwest-tablet.jpg",
          mobile:"/img/projects/workwear/min/slides/portwest-mobile.jpg"
        },
        
        color: "#fffe54",
      },
      {
        title: "Premier Poplin Shirts",
        images:{
          desktop:"/img/projects/workwear/min/slides/premier-desktop.jpg",
          tablet:"/img/projects/workwear/min/slides/premier-tablet.jpg",
          mobile:"/img/projects/workwear/min/slides/premier-mobile.jpg"
        },
        color: "#d58665",
      },
      {
        title: "Workguard Saftey Boots",
        images:{
          desktop:"/img/projects/workwear/min/slides/workguard-desktop.jpg",
          tablet:"/img/projects/workwear/min/slides/workguard-tablet.jpg",
          mobile:"/img/projects/workwear/min/slides/workguard-mobile.jpg"
        },
        color: "#73a301",
      },
      {
        title: "Yoko Hi-Vis",
        images:{
          desktop:"/img/projects/workwear/min/slides/yoko-desktop.jpg",
          tablet:"/img/projects/workwear/min/slides/yoko-tablet.jpg",
          mobile:"/img/projects/workwear/min/slides/yoko-mobile.jpg"
        },
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
    buttons: {
      primary: {
        type: "button",
        url: "/project/4/workwearclothingdirect/#carousel",
        styles: "primary large",
        text: "Carousel Images",
      },
      secondary: {
        type: "anchor",
        url: "https://www.workwearclothingdirect.com/",
        styles: "secondary dark large",
        text: "View Code",
      },
    },
  },
  {
    id: "5",
    type: "React",
    date: "2021",
    title: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veritatis voluptatem, voluptatibus dolore officia atque recusandae, autem ipsum, iste sunt perferendis velit modi blanditiis aliquid saepe totam nihil. Nostrum, possimus.",
    preview_images:{
      desktop:"/img/projects/portfolio/min/previews-desktop.jpg",
      tablet:"/img/projects/portfolio/min/previews-tablet.jpg",
      mobile:"/img/projects/portfolio/min/previews-mobile.jpg",}, 
    tech: [
      { image: `${svg}/html5.svg`, alt: "HTML5" },
      { image: `${svg}/css3.svg`, alt: "CSS3" },
      { image: `${svg}/sass.svg`, alt: "SCSS" },
      { image: `${svg}/js.svg`, alt: "Javascript" },
      { image: `${svg}/react.svg`, alt: "React" },
      { image: `${svg}/ps.svg`, alt: "Photoshop" },
      { image: `${svg}/ai.svg`, alt: "Illustrator" },
      { image: `${svg}/xd.svg`, alt: "Experience Design" },
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
      {
        title: "Node Sass",
        url: "https://www.npmjs.com/package/node-sass",
      },
      {
        title: "GSAP",
        url: "https://greensock.com/gsap",
      },
    ],
    buttons: {
      secondary: {
        type: "anchor",
        url: "https://github.com/Dangereye/Portfolio",
        styles: "secondary dark large",
        text: "View Code",
      },
    },
  },
];

export default myProjects;
