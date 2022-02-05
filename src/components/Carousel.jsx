import React,{ useRef} from "react";
import Slider from "react-slick";

function Carousel({ songTitle }) {
  const sliderRef = useRef();
  const settings = {
    className: "center",
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    vertical: true,
    verticalSwiping: false,
    adaptiveHeight: true,
    swipeToSlide:true,
    beforeChange: function (current , next) {
      sliderRef.current.innerSlider.list.querySelector(`[data-index="${current}"]`).style.opacity=0;
      sliderRef.current.innerSlider.list.querySelector(`[data-index="${next}"]`).style.opacity=1;
    }
  };
 

  return (
    <Slider {...settings} ref={sliderRef}>
      {
        songTitle.map(song => {
          return (
            <div className="bgHolder">
              {song}
            </div>
          )
        })
      }
    </Slider>
  );
}



export default Carousel;
