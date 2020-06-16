import React from "react";

import Listitem from "./Listitem";

const Lists = (props) => {
  const { name_lists } = props;

  return (
    <>
      {name_lists.map((item, i) => (
        <Listitem
          key={i.toString()}
          imageUrl={item.images[2]}
          name={item.name}
        />
      ))}
    </>
  );
};

export default Lists;
