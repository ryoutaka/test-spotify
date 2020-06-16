import React from "react";

const Listitem = (props) => {
  return (
    <>
      <div>
        {props.name}
        <img src={props.imageUrl} alt="" />
      </div>
    </>
  );
};

export default Listitem;
