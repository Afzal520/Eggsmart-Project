import { Line, Bar } from "react-chartjs-2";

import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import React, { useState, useEffect } from "react";
import PopupForm from "./Popup";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Charts = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [scrollDisabled, setScrollDisabled] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setScrollDisabled(!scrollDisabled);
  };

  useEffect(() => {
    if (scrollDisabled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [scrollDisabled]);

  const options = {};

  const Linedata = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Tru", "fri", "Sat"],
    datasets: [
      {
        label: "standard",
        data: [3, 1, 6, 5, 9, 8],
        borderColor: "red",
      },
      {
        label: "Production",
        data: [1, 3, 4, 5, 6, 2, 9],
        borderColor: "rgb(75,192,192)",
      },
    ],
  };

  const Bardata = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Tru", "fri", "Sat"],
    datasets: [
      {
        label: "standard",
        data: [1, 3, 4, 5, 6, 2, 5],

        backgroundColor: ["red"],
        borderColor: ["rgb(75,192,192)"],
      },
      {
        label: "Production",
        data: [3, 1, 6, 5, 9, 8, 6],
        backgroundColor: ["rgb(75,192,192)"],
        borderColor: "red",
      },
    ],
  };
  return (
    <>
      <div className="grid ">
        <Line
          className="grid md:px-20 mt-4 md:mt-16"
          options={options}
          data={Linedata}
        />
        <p className="text-center  md:text-[25px] md:text-center font-bold mt-3 ml-7">
          Daily Task overview
        </p>

        <Bar
          className="mt-4 md:mt-10 md:px-20 "
          options={options}
          data={Bardata}
        />
        <p className="text-center mb-4  md:text-[25px] md:text-center font-bold">
          Project Avg{" "}
        </p>
      </div>

      <div className="mb-20 grid grid-cols-2 gap-6 text-white mt-5">
        <button
          className="bg-green-700 text-center p-2 rounded-lg hover:bg-blue-500 font-semibold"
          onClick={togglePopup}
        >
          Add Production
        </button>
        <button
          className="bg-green-700 text-center p-2 rounded-lg hover:bg-blue-500 font-semibold"
          onClick={togglePopup}
        >
          Mortality
        </button>
        {showPopup && <PopupForm onClose={togglePopup} />}
      </div>
    </>
  );
};

export default Charts;
