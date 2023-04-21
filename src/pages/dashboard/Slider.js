import { Slider } from "../../component/common/slider/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import thumb1 from "../../assets/images/nft/v4-slider-img.png";
import thumb2 from "../../assets/images/nft/v4-slider-img2.png";
import thumb3 from "../../assets/images/nft/v4-slider-img3.png";
import thumb4 from "../../assets/images/nft/v4-slider-img4.png";
import thumb5 from "../../assets/images/nft/v4-slider-img5.png";
import thumb6 from "../../assets/images/nft/v4-slider-img6.png";
import thumb7 from "../../assets/images/nft/v4-slider-img7.png";
import thumb8 from "../../assets/images/nft/v4-slider-img8.png";

export default function SliderNFT() {
  const slideImages = [
    thumb1,
    thumb2,
    thumb3,
    thumb4,
    thumb5,
    thumb6,
    thumb7,
    thumb8,
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 300,
    fade: true,
  };

  return (
    <div className="mt-3 w-full">
      <div className="lg:w-[400px] w-[350px] md:w-[500px] p-2">
        <p className="text-[2rem] text-white text-center mt-10">
          The Beasty Bits Presents Beasty Phoenix
        </p>
        <div className="p-2">
          <Slider {...settings} className="mx-3 my-2" cssEase="ease-in-out">
            {slideImages.map((data, index) => (
              <img
                src={data}
                key={index}
                className="w-full object-cover"
                alt="sliderImg"
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
