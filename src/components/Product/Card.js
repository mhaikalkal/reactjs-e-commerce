import React from "react";

const Card = (props) => {
  const { name, img } = props;

  return (
    <div className="mx-auto max-w-20">
      <img src={img} alt={name} className="object-cover rounded-md hover:cursor-pointer" />
    </div>
  );
};

export default Card;
