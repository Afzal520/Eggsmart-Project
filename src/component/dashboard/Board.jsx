import React from "react";


import Charts from "../boardComponent/Chart";
import Boardprofile from "../boardComponent/Boardprofile";
import BoardBox from "../boardComponent/BoardBox";

const Board = () => {
  return (
    <section className="p-3">
      <Boardprofile />
      <BoardBox />
      <Charts />
    </section>
  );
};

export default Board;
