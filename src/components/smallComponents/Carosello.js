import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slide1 from "../../images/carosello/carosello1.jpg";
import Slide2 from "../../images/carosello/carosello2.jpg";
import Slide3 from "../../images/carosello/carosello3.jpg";
import Slide4 from "../../images/carosello/carosello4.jpg";
import Slide5 from "../../images/carosello/carosello5.jpg";
import Slide6 from "../../images/carosello/carosello6.png";
import Slide7 from "../../images/carosello/carosello7.jpg";

export default function Carosello() {
  const ImgCarosello = (props) => {
    return (
      <img
        src={props.name}
        style={{
          display: "block",
          height: "100%",
          margin: "auto",
          width: "100%",
          border: "1px solid #000000",
        }}
        alt={"img"}
      />
    );
  };
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
          },
        }}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <ImgCarosello name={Slide1} />
        <ImgCarosello name={Slide2} />
        <ImgCarosello name={Slide3} />
        <ImgCarosello name={Slide4} />
        <ImgCarosello name={Slide5} />
        <ImgCarosello name={Slide6} />
        <ImgCarosello name={Slide7} />
      </Carousel>
    </>
  );
}
