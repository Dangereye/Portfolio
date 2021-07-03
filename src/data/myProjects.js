const svg = "/img/portfolio/svg";
const myProjects = [
  {
    id: "1",
    type: "React",
    date: "2021",
    title: "Movies",
    description:
      "A fully responsive, React application using functional components and hooks. Search and explore millions of movies, television shows, cast and crew members. The TMDB API provides vast, expansive and ever-evolving data, prompting experimentation with React Query for this project because of its ability to easily cache fetched data.",
    preview_images: {
      desktop: "/img/projects/tmdb-movies/min/previews-desktop.jpg",
      tablet: "/img/projects/tmdb-movies/min/previews-tablet.jpg",
      mobile: "/img/projects/tmdb-movies/min/previews-mobile.jpg",
    },
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
      "A fully responsive, React application with functional components and hooks, utilising the Context API to achieve its global state. Header images provided by the Unsplash API, update (somewhat reliably) using keywords from current weather conditions. Functionality includes geolocation, location search (saved to local storage), current conditions, hourly conditions, precipitation, wind, astronomy and multiple settings.",
    preview_images: {
      desktop: "/img/projects/the-weather/min/previews-desktop.jpg",
      tablet: "/img/projects/the-weather/min/previews-tablet.jpg",
      mobile: "/img/projects/the-weather/min/previews-mobile.jpg",
    },
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
      "A fully responsive, React application using functional components, hooks and the SWAPI API. Explore information about movies, characters, species, vehicles, starships and the associations between them. I collected movie posters and several royalty-free stock images (credited) for illustration purposes. However, primarily icons have been used to avoid any nasty copyright issues.",
    preview_images: {
      desktop: "/img/projects/starwars/min/previews-desktop.jpg",
      tablet: "/img/projects/starwars/min/previews-tablet.jpg",
      mobile: "/img/projects/starwars/min/previews-mobile.jpg",
    },
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
    type: "React",
    date: "2021",
    title: "Portfolio",
    description:
      "A fully responsive, React application using functional components and hooks to showcase recent projects, current knowledge, skills, and little about me. I wanted to experiment with GSAP on this project. I created timeline and scroll trigger animations for visually interesting transitions between pages and sections. While I've only scratched the surface of GSAPs potential here, I will be using it within future projects without a doubt.",
    preview_images: {
      desktop: "/img/projects/portfolio/min/previews-desktop.jpg",
      tablet: "/img/projects/portfolio/min/previews-tablet.jpg",
      mobile: "/img/projects/portfolio/min/previews-mobile.jpg",
    },
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
