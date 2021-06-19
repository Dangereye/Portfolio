import React from "react";
import ListGroup from "../../shared/listGroup/ListGroup";
import ListLink from "../../shared/listGroup/ListLink";

const ProjectDeliverables = ({ list }) => {
  return (
    <div className="project__details__extra__deliverables">
      <ListGroup title="Deliverables">
        {list.map((item, index) => (
          <ListLink
            key={`${item.title}-${index}`}
            to={item.url}
            name={item.title}
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default ProjectDeliverables;
