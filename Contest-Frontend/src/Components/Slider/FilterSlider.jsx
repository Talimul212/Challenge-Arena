// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./FilterSlider.css";

// import required modules
// import { Autoplay } from "swiper/modules";
const FilterSlider = () => {
  return (
    <div className=" mx-auto  w-[94%] mt-1">
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
              Books
            </kbd>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <kbd className=" hover:bg-[#00bf63] hover:text-white w-full kbd kbd-sm bg-white rounded text-[#00bf63]">
              Phones
            </kbd>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <kbd className=" hover:bg-[#00bf63] hover:text-white w-full kbd kbd-sm bg-white rounded text-[#00bf63]">
              Education
            </kbd>
          </SwiperSlide>
          <SwiperSlide>
            <kbd className=" hover:bg-[#00bf63] hover:text-white w-full kbd kbd-sm bg-white rounded text-[#00bf63]">
              Electiones
            </kbd>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <kbd className=" hover:bg-[#00bf63] hover:text-white w-full kbd kbd-sm bg-white rounded s text-[#00bf63]">
              {" "}
              Apartment
            </kbd>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
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

export default FilterSlider;
