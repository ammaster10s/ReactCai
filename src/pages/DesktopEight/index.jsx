import React from "react";

import { Img } from "components";
import DesktopSixColumnrectangleseventeen from "components/DesktopSixColumnrectangleseventeen";

const DesktopEightPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col sm:gap-10 md:gap-10 gap-[74px] items-center justify-start mx-auto pb-[111px] w-full">
        <Img
          className="h-[125px] sm:h-auto object-cover md:w-full"
          src="images/img_group1.png"
          alt="groupOne"
        />
        <DesktopSixColumnrectangleseventeen className="flex flex-col items-center justify-start px-3 md:px-5 w-[35%] md:w-full" />
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[114px] items-start justify-start md:px-5 w-[37%] md:w-full"
          style={{ backgroundImage: "url('images/img_component6.svg')" }}
        >
          <div className="bg-teal-700 h-[114px] rounded-[57px] w-[45%]"></div>
        </div>
      </div>
    </>
  );
};

export default DesktopEightPage;
