import React from 'react'
import { Link } from 'react-router-dom'
import { CgMenuGridR } from "react-icons/cg";
const Boardprofile = ({Hide}) => {
    console.log(Hide)
  return (
    <div className="grid p-2">
        <div className="col-span-3">
          <div className="flex">
            <img
              className="size-12"
              src="/img/login-img.png"
              alt=""
              srcset=""
            />
            <p className="mt-2 font-bold text-[18px] pl-2">
              HI, <span>{"Jone Doe"}</span>
            </p>
           
          <div className={` ${Hide? "":"hidden"}`}>
          <Link to="">
              {" "}
              <CgMenuGridR className={`absolute top-[94px] size-10 right-2`} />
            </Link>
          </div>
          </div>

          <p className="pl-14 mt-[-10px]">Lorem ipsum dolor sit amet .</p>
        </div>
      </div>
  )
}

export default Boardprofile