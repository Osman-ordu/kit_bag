import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CSlider = ({children}) => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1
      };
  return (
    <Slider {...settings}>
        {children}
    </Slider>
  )
}

export default CSlider