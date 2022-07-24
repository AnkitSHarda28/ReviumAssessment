import React from "react";
import Carousel from "../Components/Carousel";
import { Images } from "../Components/Images";

//Component for rendering Home page
function Home() {
  return (
    <div>
      <Carousel slides={Images} />
    </div>
  );
}

export default Home;
