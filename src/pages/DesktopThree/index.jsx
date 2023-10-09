import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";

const DesktopThreePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend gap-[49px] justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="md:h-[755px] h-[784px] md:px-5 relative w-full">
            <div className="absolute h-[755px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[755px] m-auto object-cover w-full"
                src="images/img_ellipse4.png"
                alt="ellipseFour"
              />
              <div className="absolute h-[702px] inset-x-[0] mx-auto top-[0] w-full">
                <Img
                  className="h-[702px] m-auto object-cover w-full"
                  src="images/img_ellipse3.png"
                  alt="ellipseThree"
                />
                <Text
                  className="absolute inset-x-[0] mx-auto md:text-5xl text-[90px] text-shadow-ts text-white-A700 top-1/4 w-max"
                  size="txtLexendBold90"
                >
                  CONALYSIS
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[38%] w-[19%]">
              <div className="bg-black-900 md:h-[218px] h-[438px] p-1.5 relative rounded-[7px] w-full">
                <div className="md:h-[218px] h-[419px] m-auto w-[92%]">
                  <div
                    className="absolute bg-cover bg-no-repeat md:h-[218px] h-[412px] inset-[0] justify-center m-auto py-0.5 w-full"
                    style={{ backgroundImage: "url('images/img_group15.svg')" }}
                  >
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[6%] w-full">
                      <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                        <Img
                          className="h-[133px] md:h-auto object-cover w-[77%]"
                          src="images/img_image1.png"
                          alt="imageOne"
                        />
                        <div className="bg-teal-700 h-12 rounded-[1px] w-full"></div>
                      </div>
                    </div>
                    <Line className="absolute bg-black-900 h-[46px] inset-x-[0] mx-auto top-[0] w-1" />
                  </div>
                  <Line className="absolute bg-black-900 bottom-[0] h-[175px] inset-x-[0] mx-auto w-1" />
                </div>
                <Line className="absolute bg-black-900 bottom-1/4 h-[175px] inset-x-[0] mx-auto w-1" />
              </div>
            </div>
            <Img
              className="absolute h-[125px] inset-x-[0] mx-auto object-cover top-[0] md:w-full"
              src="images/img_group1.png"
              alt="groupOne"
            />
          </div>
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[272px] w-full">
          <div className="flex relative w-[88%] md:w-full">
            <div className="flex flex-col items-center justify-start my-auto w-[54%]">
              <div
                className="common-pointer h-[193px] md:h-[47px] pb-[123px] md:pr-10 sm:pr-5 pr-[123px] relative w-full"
                onClick={() => navigate("/page")}
              >
                <div className="bg-teal-700 h-[47px] rounded-[24px] shadow-bs w-[71%]"></div>
                <Text
                  className="absolute left-[16%] sm:text-[21px] md:text-[23px] text-[25px] text-gray-100 top-[6%]"
                  size="txtLexendBold25"
                >
                  ตรวจสอบประตู
                </Text>
              </div>
            </div>
            <div className="md:h-12 h-[191px] ml-[-46px] my-auto pb-28 md:pr-10 pr-28 sm:pr-5 w-[53%] sm:w-full z-[1]">
              <Img
                className="h-12"
                src="images/img_group5.svg"
                alt="groupFive"
              />
              <Text
                className="absolute left-[13%] sm:text-[21px] md:text-[23px] text-[25px] text-gray-100 top-[0]"
                size="txtLexendBold25"
              >
                ตรวจสอบกระเบื้อง
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopThreePage;
