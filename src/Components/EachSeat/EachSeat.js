import React from "react";

const EachSeat = ({obj}) => {
  console.log(obj.number);
  return (
    <div>
    
      <span>{obj.id}</span>
    </div>
  );
};

export default EachSeat;
