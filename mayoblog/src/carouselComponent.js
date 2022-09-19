import Carousel from "react-bootstrap/Carousel";
import slider1 from './images/zeek.png'
import Slider2 from './images/slide2.png'
import Slider3 from "./images/Slider3.png"

const CarouselComponent = () => {
    return (
      <Carousel className="sliderHeight">
        <Carousel.Item className="sliderHeight">
          
        <img className="d-block w-100" src={slider1} alt="First slide" />
          
          
          <Carousel.Caption>
            <h3 className="sliderText">THE FACE OF OUR COMPANY!!!</h3>
            <p className="sliderText">ALL IS WELL</p>
          
          </Carousel.Caption>



        </Carousel.Item>
        <Carousel.Item className="sliderHeight">
          <img className="d-block w-100" src={Slider2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="sliderText">We are reliable</h3>
          </Carousel.Caption>
        </Carousel.Item>



        <Carousel.Item className="sliderHeight">
          <img className="d-block w-100" src={Slider3} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="sliderText">WE ARE AWESOME</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}
 
export default CarouselComponent;