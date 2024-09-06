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
import Mortalityform from "./MortalityPopup";

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
  const [showMortality ,setMortality ] = useState(false)
  const [scrollDisabled, setScrollDisabled] = useState(false);

  const togglePopup = () => {

    setShowPopup(!showPopup);
    setScrollDisabled(!scrollDisabled);
  };
  const toggleMortality = () => {
    setMortality(!showMortality)

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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
     
      tooltip: {
        callbacks: {
          label: (context) => {
            return `Value: ${context.raw}`;
          },
        },
      },
    },
    scales: {
     
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    labels: Array.from({ length: 100 }, (_, i) => `Label ${i + 1}`),
    datasets: [
      {
        label: 'Sample Data',
        data: Array.from({ length: 100 }, () => Math.random() * 10),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Sample Data',
        data: Array.from({ length: 100 }, () => Math.random() * 20),
        borderColor: "red",
        backgroundColor: 'red',
      }
    ],
  };

  // const Bardata = {
  //   labels: ["Sun", "Mon", "Tue", "Wed", "Tru", "fri", "Sat"],
  //   datasets: [
  //     {
  //       label: "standard",
  //       data: [1, 3, 4, 5, 6, 2, 5],

  //       backgroundColor: ["red"],
  //       borderColor: ["rgb(75,192,192)"],
  //     },
  //     {
  //       label: "Production",
  //       data: [3, 1, 6, 5, 9, 8, 6],
  //       backgroundColor: ["rgb(75,192,192)"],
  //       borderColor: "red",
  //     },
  //   ],
  // };
  return (
    <>
      <div className="">
      <p className="text-center mt-5 font-semibold text-[22px]">Production vs Standard </p>
      <div className=" overflow-x-auto w-full mt-5 md:px-10">
      <div className="min-w-[600px] md:min-w-[1200px] h-[330px] md:h-[600px]">
        <Line data={data} options={options} />
      </div>
    </div>

        {/* <Bar
          className="mt-4 md:mt-10 md:px-20 "
          options={options}
          data={Bardata}
        />
        <p className="text-center mb-4  md:text-[25px] md:text-center font-bold">
          Project Avg{" "}
        </p> */}
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
          onClick={toggleMortality}
        >
          Mortality
        </button>
        {showPopup && <PopupForm onClose={togglePopup} />}
        {showMortality && <Mortalityform onClose= {toggleMortality}/> }
      </div>
    </>
  );
};

export default Charts;
