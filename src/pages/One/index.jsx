import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const OnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexend items-center justify-start mx-auto pb-[214px] w-full">
        <div className="flex flex-col md:gap-10 gap-[172px] justify-start w-full">
          <Img
            className="h-[125px] sm:h-auto object-cover md:w-full"
            src="images/img_group1.png"
            alt="groupOne"
          />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[935px] mx-auto md:px-5 w-full">
            <Img
              className="h-[513px] md:h-auto object-cover"
              src="images/img_image12714541280.png"
              alt="image1271454128"
            />
            <div className="flex flex-col md:gap-10 gap-[68px] items-start justify-start md:mt-0 mt-[143px]">
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[146px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                onClick={() => navigate("/desktopeight")}
              >
                ยืนยัน
              </Button>
              <Text
                className="bg-yellow-900 h-[50px] justify-center pl-6 pr-[35px] sm:px-5 py-2 rounded-[25px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-[301px]"
                size="txtLexendBold25WhiteA700"
              >
                {" "}
                เลือกรูปภาพใหม่อีกครั้ง
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnePage;
