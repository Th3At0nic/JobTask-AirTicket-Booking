import React from "react";
import EachSeat from "../EachSeat/EachSeat";

const PickSeat = () => {
  const rows = [
    [
      { id: 1, number: 1, isSelected: true /*tooltip: "Reserved by you" */ },
      { id: 2, number: 2 /*tooltip: "Cost: 15$"*/ },
    //   null,
      {
        id: 3,
        number: 3,
        // isReserved: true,
        orientation: "east",
        // tooltip: "Reserved by Rogger",
      },
      { id: 4, number: "4", orientation: "west" },
    //   null,
      { id: 5, number: 5 },
      { id: 6, number: 6 },
    ],
    [
      {
        id: 7,
        number: 1,
        isReserved: true,
        tooltip: "Reserved by Someone",
      },
      { id: 8, number: 2 /*isReserved: true*/ },
    //   null,
      { id: 9, number: "3", isReserved: true, orientation: "east" },
      { id: 10, number: "4", orientation: "west" },
    //   null,
      { id: 11, number: 5 },
      { id: 12, number: 6 },
    ],
    [
      { id: 13, number: 1 },
      { id: 14, number: 2 },
    //   null,
      { id: 15, number: 3, /*isReserved: true,*/ orientation: "east" },
      { id: 16, number: "4", orientation: "west" },
    //   null,
      { id: 17, number: 5 },
      { id: 18, number: 6 },
    ],
    [
      { id: 19, number: 1 /*tooltip: "Cost: 25$"*/ },
      { id: 20, number: 2 },
    //   null,
      { id: 21, number: 3, orientation: "east" },
      { id: 22, number: "4", orientation: "west" },
    //   null,
      { id: 23, number: 5 },
      { id: 24, number: 6 },
    ],
    [
      { id: 25, number: 1, isReserved: true },
      { id: 26, number: 2, orientation: "east" },
    //   null,
      { id: 27, number: "3" /*isReserved: true*/ },
      { id: 28, number: "4", orientation: "west" },
    //   null,
      { id: 29, number: 5 /*tooltip: "Cost: 11$"*/ },
      { id: 30, number: 6 /*isReserved: true*/ },
    ],
  ];
  return (
    <div>
      {rows.map((arrays) =>
        arrays.map((obj) => <EachSeat obj={obj}></EachSeat>)
      )}
    </div>
  );
};

export default PickSeat;
