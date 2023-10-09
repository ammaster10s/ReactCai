import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Page3 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Img
            className="h-[125px] sm:h-auto object-cover md:w-full"
            src="images/img_group1.png"
            alt="groupOne"
          />
          <div className="flex flex-row items-center justify-between md:ml-[0] ml-[477px] mt-[296px] md:px-5 w-[34%] md:w-full">
            <div className="h-[181px] relative w-[37%]">
              <div
                className="common-pointer bg-yellow-900 h-[181px] m-auto rounded-[90px] w-full"
                onClick={() => navigate("/one")}
              ></div>
              <Img
                className="absolute h-[118px] inset-[0] justify-center m-auto object-cover rounded-[58px] w-[117px]"
                src="images/img_image29353601280.png"
                alt="image2935360128"
              />
            </div>
            <div className="h-[182px] relative w-[37%]">
              <div
                className="common-pointer bg-yellow-900 h-[182px] m-auto rounded-[91px] w-full"
                onClick={() => navigate("/page4")}
              ></div>
              <Img
                className="absolute h-[121px] inset-[0] justify-center m-auto rounded-[50%] w-[122px]"
                src="images/img_instagram38140551280.png"
                alt="instagram381405"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-between md:ml-[0] ml-[455px] mt-[19px] md:px-5 w-[33%] md:w-full">
            <div className="flex flex-col items-center justify-start mt-[5px]">
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-teal-700"
                size="txtLexendBold25Teal700"
              >
                เลือกรูปจากคลังรูปภาพ
              </Text>
            </div>
            <Text
              className="mb-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-teal-700"
              size="txtLexendBold25Teal700"
            >
              ถ่ายภาพ
            </Text>
          </div>
          <div className="h-[135px] mt-[228px] md:px-5 relative w-full">
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
              src="images/img_rectangle24_1.png"
              alt="rectangleTwentyFour"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
