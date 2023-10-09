import React from "react";

import { Img } from "components";

const DesktopSixColumnrectangleseventeen = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-black-900 md:h-[493px] h-[526px] pb-2 px-2 relative rounded-[7px] w-[99%] sm:w-full">
          <div className="absolute md:h-[493px] h-[503px] inset-[0] justify-center m-auto w-[92%] sm:w-full">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto py-[30px] w-full"
              style={{ backgroundImage: "url('images/img_group15.svg')" }}
            >
              <div className="flex flex-col gap-11 items-center justify-start mb-[171px] w-full">
                <Img
                  className="h-40 md:h-auto object-cover w-[77%]"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
                <div className="bg-teal-700 h-[58px] rounded-[1px] w-full"></div>
              </div>
            </div>
            <div className="absolute bg-black-900 bottom-[0] h-[210px] inset-x-[0] mx-auto w-[2%]"></div>
          </div>
          <div className="absolute bg-black-900 h-[55px] inset-x-[0] mx-auto top-[0] w-[2%]"></div>
          <div className="absolute bg-black-900 bottom-1/4 h-[188px] inset-x-[0] mx-auto w-[2%]"></div>
        </div>
      </div>
    </>
  );
};

DesktopSixColumnrectangleseventeen.defaultProps = {};

export default DesktopSixColumnrectangleseventeen;
