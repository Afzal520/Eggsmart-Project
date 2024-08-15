import React from "react";

import Flocklist from "../../component/flocklist/Flocklist";

import Mobilemenu from "../../component/mobilMenu/Mobilemenu";
import FlockHeader from "../../component/flocklist/FlockHeader";
import { Link } from "react-router-dom";
const Flocks = ({Hide}) => {
  return (
    <section>
     <FlockHeader/>
     <Link to=""><Flocklist Hide={Hide}/></Link>
    </section>
  );
};

export default Flocks;
