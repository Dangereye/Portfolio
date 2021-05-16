const svg = "/img/portfolio/svg";
const mySkills = [
  {
    title: "Environment",
    skills: [
      { svg: `${svg}/win64.svg`, title: "Windows" },
      { svg: `${svg}/vscode.svg`, title: "VS Code" },
      { svg: `${svg}/github.svg`, title: "Github" },
      { svg: `${svg}/npm.svg`, title: "NPM" },
    ],
  },
  {
    title: "Front-end",
    skills: [
      { svg: `${svg}/html5.svg`, title: "HTML5" },
      { svg: `${svg}/css3.svg`, title: "CSS3" },
      { svg: `${svg}/sass.svg`, title: "SCSS" },
      { svg: `${svg}/js.svg`, title: "Javascript" },
      { svg: `${svg}/react.svg`, title: "React" },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { svg: `${svg}/nodejs.svg`, title: "NodeJS - basic" },
      { svg: `${svg}/expressjs.svg`, title: "Express - basic" },
      { svg: `${svg}/mongoose.svg`, title: "Mongoose - basic" },
      { svg: `${svg}/mongodb.svg`, title: "MongoDB - basic" },
    ],
  },
  {
    title: "Design Tools",
    skills: [
      { svg: `${svg}/ps.svg`, title: "Photoshop" },
      { svg: `${svg}/ai.svg`, title: "Illustrator" },
      { svg: `${svg}/xd.svg`, title: "Experience Design" },
    ],
  },
];

export default mySkills;
