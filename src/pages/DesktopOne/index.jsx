import React from "react";

import { Img, Text } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 font-lexend h-[1024px] mx-auto p-[297px] md:px-10 sm:px-5 relative w-full">
        <div className="absolute h-[308px] inset-[0] justify-center m-auto w-[31%] sm:w-full">
          <div className="absolute bg-teal-700 h-40 inset-y-[0] left-[0] my-auto rounded-[87px] w-2/5"></div>
          <Img
            className="absolute h-[308px] inset-y-[0] my-auto right-[0]"
            src="images/img_tran.svg"
            alt="tran"
          />
        </div>
        <Text
          className="absolute bottom-[40%] right-[29%] md:text-5xl text-[65px] text-shadow-ts text-white-A700 w-[43%] sm:w-full"
          size="txtLexendBold65"
        >
          CONALYSIS
        </Text>
        <div className="absolute bg-red-600 h-[119px] left-[38%] md:px-5 rounded-[63px] top-[34%] w-[9%]"></div>
      </div>
    </>
  );
};

export default DesktopOnePage;
