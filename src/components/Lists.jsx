import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import shortid from "shortid";
import Listitem from "./Listitem";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const width = window.innerWidth;
let num = 1;
if (width > 480) {
  num = 3;
}
const Lists = (props) => {
  const { name_lists } = props;
  const result = name_lists.map((item, i) => (
    <SwiperSlide key={shortid.generate()}>
      <Listitem
        key={shortid.generate()}
        imageUrl={item.images[1]}
        name={item.name}
        artist_url={item.external_urls ? item.external_urls.spotify : ""}
      />
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={num}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {result}
      </Swiper>
    </>
  );
};

export default Lists;
