import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const DesktopFivePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Img
            className="h-[125px] sm:h-auto object-cover md:w-full"
            src="images/img_group1.png"
            alt="groupOne"
          />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1254px] mt-[107px] mx-auto md:px-5 w-full">
            <Img
              className="h-[414px] md:h-auto md:mt-0 mt-[73px] object-cover"
              src="images/img_image12714541280.png"
              alt="image1271454128"
            />
            <div className="bg-gray-50 flex flex-col items-center justify-start p-[34px] sm:px-5 rounded-[91px] shadow-bs1">
              <div className="flex flex-col gap-[18px] justify-start mb-[79px] w-[83%] md:w-full">
                <div className="flex flex-row gap-5 items-center justify-end md:ml-[0] ml-[337px] w-[26%] md:w-full">
                  <div className="bg-orange-A200 h-6 rounded-[13px] w-[23%]"></div>
                  <div className="bg-teal-700 h-6 rounded-[13px] w-[23%]"></div>
                  <div className="bg-red-600 h-6 rounded-[13px] w-[23%]"></div>
                </div>
                <div className="flex flex-col items-start justify-start mr-[59px]">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-teal-700"
                    size="txtLexendBold30"
                  >
                    ประเภทของวัตถุ
                  </Text>
                  <Text
                    className="mt-[121px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtLexendBold30Black900"
                  >
                    ท่านควรติดต่อ
                  </Text>
                  <Text
                    className="mt-[165px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtLexendBold30Black900"
                  >
                    เบอร์ติดต่อหน่วยงานที่เกี่ยวข้อง
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[135px] mt-[67px] md:px-5 relative w-full">
            <div className="md:h-11 h-[87px] mb-[-43px] mx-auto w-[7%] z-[1]">
              <div className="bg-white-A700 h-[87px] m-auto rounded-[50px] w-full"></div>
              <Img
                className="common-pointer absolute h-[60px] inset-[0] justify-center m-auto object-cover w-[57%]"
                src="images/img_home1.png"
                alt="homeOne"
                onClick={() => navigate("/desktopthree")}
              />
            </div>
            <Img
              className="h-[91px] mt-auto mx-auto object-cover w-full"
              src="images/img_rectangle24_91x1440.png"
              alt="rectangleTwentyFour"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFivePage;
