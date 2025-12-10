import React from "react";
import "./css/Reviews.css";
import picture from "../components/assets/asygurme.png";
import ultra from "../components/assets/Ultra.png";
import textureReview from "../components/assets/texture.png";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Reviews() {
  return (
    <>
      <img className="textureReview" src={textureReview} alt="texture"/>
      <h1 className="client-title">Clients & Reviews</h1>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="clients">
            <div className="review-profile">
              <div className="review-image">
                <img src={picture} alt="picture"/>
                <h1 className="review-name">ASYA GURME</h1>
                <p className="review-note">Shop</p>
                <p className="review-block">
                  I enjoy work with the him and he works fast. He make the
                  process
                  <br />
                  fun and interesting. Good luck !
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="clients">
            <div className="review-profile">
              <div className="review-image">
                <img src={ultra} alt="ultra"/>
                <h1 className="review-name">Ultra Orgin Beton</h1>
                <p className="review-note">Construction Company</p>
                <p className="review-block">
                  It was great working with him. The work is very fast and
                  reliable. <br/> The work done is of good quality
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
