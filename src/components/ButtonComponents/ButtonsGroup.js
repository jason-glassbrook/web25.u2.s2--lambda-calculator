import React from "react";

const ButtonsGroup = (props , children) => {
  const [specials , setSpecials] = React.useState (specialsData);
  //
  return (
    <div className={`buttons-group ${props.name}`}>
      {children}
    </div>
  );
};

export default ButtonsGroup;