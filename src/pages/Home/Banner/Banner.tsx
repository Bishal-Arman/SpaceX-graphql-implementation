import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/images/img1.avif";
import img2 from "../../../assets/images/img2.avif";
import img3 from "../../../assets/images/img3.avif";
import "./Banner.css";
const Banner = () => {
  return (
    <Carousel>
      <div className="banner-slide">
        <img className="opacity-80" src={img1} />
        <div className="banner-text">
          <p>Welcome to Space-X</p>
          <p>The SpaceX Story</p>
        </div>
      </div>
      <div className="banner-slide">
        <img className="opacity-80" src={img2} />
        <div className="banner-text">
          <p>SpaceX's Ambitious Plans</p>
          <p>SpaceX's Breakthroughs</p>
        </div>
      </div>
      <div className="banner-slide">
        <img className="opacity-80" src={img3} />
        <div className="banner-text">
          <p>SpaceX's Evolution</p>
          <p>SpaceX's Impact on Space Industry</p>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
