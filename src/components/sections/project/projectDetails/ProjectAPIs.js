import React from "react";
import ListAnchor from "../../../shared/listGroup/ListAnchor";
import ListGroup from "../../../shared/listGroup/ListGroup";

const ProjectAPIs = ({ list }) => {
  return (
    <div className="project__details__extra__api">
      <ListGroup title="APIs" cn="project-item">
        {list.map((item, index) => (
          <ListAnchor
            key={`${item.title}-${index}`}
            href={item.url}
            name={item.title}
            target="_blank"
            rel="noreferrer"
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default ProjectAPIs;
