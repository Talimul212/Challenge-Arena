// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./FilterSlider.css";

// import required modules
// import { Autoplay } from "swiper/modules";
const GFilterSilder = () => {
  return (
    <div className="mt-1 mb-4">
      {" "}
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          modules={[]}
          className="mySwiper"
        >
          <SwiperSlide>
            <kbd className="  hover:bg-[#00bf63] hover:text-white w-full kbd kbd-sm bg-white rounded text-[#00bf63]">
              Tours
            </kbd>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <kbd className=" hover:bg-[#00bf63] hover:text-white w-full kbd kbd-sm bg-white rounded text-[#00bf63]">
              Partys
            </kbd>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <kbd className=" hover:bg-[#00bf63] hover:text-white w-full kbd kbd-sm bg-white rounded text-[#00bf63]">
              Contest
            </kbd>
          </SwiperSlide>
          <SwiperSlide>
            <kbd className=" hover:bg-[#00bf63] hover:text-white w-full kbd kbd-sm bg-white rounded text-[#00bf63]">
              BU day
            </kbd>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <kbd className=" hover:bg-[#00bf63] hover:text-white w-full kbd kbd-sm bg-white rounded s text-[#00bf63]">
              {" "}
              Seminer
            </kbd>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <kbd className=" hover:bg-[#00bf63] hover:text-white w-full kbd kbd-sm bg-white rounded text-[#00bf63]">
              {" "}
              Exhibition
            </kbd>
          </SwiperSlide>
          <SwiperSlide>
            <kbd className=" hover:bg-[#00bf63] hover:text-white w-full kbd kbd-sm bg-white rounded text-[#00bf63]">
              {" "}
              Others
            </kbd>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default GFilterSilder;
