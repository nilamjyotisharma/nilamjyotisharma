import React from "react";
import { Timeline } from "./ui/timeline";
import { services } from "./data/services";

const MyServiceCard = () => {

  
  return (
    <div className="">
      <div className="w-full">
      <Timeline data={services} />
    </div>
    </div>
  );
};

export default MyServiceCard;
