import React from "react";

const ProjectList = ({ title, list }) => {
  return (
    <div className="project__api">
      <span>{title}</span>
      {list.map((item, index) => (
        <a
          key={`${title}-${index}`}
          href={item.url}
          target="_blank"
          rel="noreferrer"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};

export default ProjectList;
