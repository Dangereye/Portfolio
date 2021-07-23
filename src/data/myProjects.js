const svg = "/img/portfolio/svg";
const myProjects = [
  {
    id: "1",
    type: "React",
    date: "2021",
    title: "Movies",
    description:
      "Search and explore millions of movies, television shows and related people. Check out upcoming releases, rediscover old favourites, learn who or what is popular - right now, watch trailers or read biographies. Maybe, you'll even find a few gems that you never knew existed. Disclaimer; can cause unexplained time loss.",
    preview_images: {
      desktop: "/img/projects/tmdb-movies/min/previews-desktop.jpg",
      tablet: "/img/projects/tmdb-movies/min/previews-tablet.jpg",
      mobile: "/img/projects/tmdb-movies/min/previews-mobile.jpg",
    },
    api: [
      {
        title: "TMDB",
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
        title: "YouTube",
        url: "https://www.youtube.com/",
      },
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
      "Check the forecast where you are or anywhere else in the world. Don't know where you are? Fear not, the geolocation has you covered. It's looking brighter already, eh? View conditions, precipitation and wind by the hour in a format that suits you. I've even thrown in some pretty pictures - courtesy of Unsplash that match (somewhat reliably) current weather conditions. You're welcome!",
    preview_images: {
      desktop: "/img/projects/the-weather/min/previews-desktop.jpg",
      tablet: "/img/projects/the-weather/min/previews-tablet.jpg",
      mobile: "/img/projects/the-weather/min/previews-mobile.jpg",
    },
    api: [
      {
        title: "Weather",
        url: "https://www.weatherapi.com/",
      },
      {
        title: "Unsplash",
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
      "A long time ago in a galaxy far, far away, some stuff (no spoilers) went down! A team of dedicated enthusiasts over at swapi.dev have scoured the internet to collect and compile data from this remarkable tale. Rest easy - no Bothans died to bring us this information! I've presented the data with several royalty-free stock images (credited) and icons to make it a little more readable and digestible. Explore movies, people, species, vehicles, planets, starships and their relative associations.",
    preview_images: {
      desktop: "/img/projects/star-wars/min/previews-desktop.jpg",
      tablet: "/img/projects/star-wars/min/previews-tablet.jpg",
      mobile: "/img/projects/star-wars/min/previews-mobile.jpg",
    },
    api: [
      {
        title: "SWAPI",
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
        url: "https://pux-star-wars.netlify.app",
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
      "Anyone can make bold claims but, do those claims hold up in reality? Let's See! Please, review my work. Navigation is easy! Skip to sections of interest at the click of your button. View projects - live, or time permitting - browse my code on Github. There are several Photoshop examples to inspect. I've even created you a carousel to make it quicker! You can also learn a little more about me. If you like what you see and would like to know more, let's talk!",
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
