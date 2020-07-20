import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Listitem from "./Listitem";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Lists = (props) => {
  const { name_lists } = props;
  const result = name_lists.map((item, i) => (
    <SwiperSlide>
      <Listitem
        key={i.toString()}
        imageUrl={item.images[2]}
        name={item.name}
        artist_url={item.external_urls ? item.external_urls.spotify : ""}
      />
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {result}
      </Swiper>
    </>
  );
};

export default Lists;
