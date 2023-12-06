import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none'}}
      onClick={onClick}
    />
  );
}

function Carousel(props) {
  let {slider, slider1, slider2} = props
  const [nav, setNav] = useState({nav1: null, nav2: null})

  useEffect(() => {
    setNav({
      nav1: slider1,
      nav2: slider2
    })
  }, [])

  const settings = {
    loop:true,
    dots: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

 
  const next = () =>  {
    slider1.slickNext();
  }
  const previous = () => {
    slider2.slickPrev();
  }

  return (
    <section id="carousel">
      <div className="carousel">
        <div className="carousel-left">
          <div className="carousel-left-slide">
            <Slider asNavFor={nav.nav2}
                    ref={slider => (slider1 = slider)} 
                    {...settings} >
              {/* <div key={1}>
                <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/loa-691-301-max.png"></img>
              </div> */}
              <div key={1}>
                <img src="https://github.com/ThiBinhChanh/logo/blob/main/da4.png?raw=true"></img>
              </div>
              <div key={2} className="k2">
                <img src="https://github.com/ThiBinhChanh/logo/blob/main/da.png?raw=true"></img>
              </div>
              <div key={3}>
                <img src="https://github.com/ThiBinhChanh/logo/blob/main/da8.png?raw=true"></img>
              </div>
              <div key={4}>
                <img src="https://github.com/ThiBinhChanh/logo/blob/main/da3.png?raw=true"></img>
              </div>
              <div key={4}>
                <img src="https://github.com/ThiBinhChanh/logo/blob/main/da7.png?raw=true"></img>
              </div>
            </Slider>
            <div className='carousel-left-move' onClick={() => previous()}>
                <div className="prev">
                    <LeftOutlined></LeftOutlined>
                </div>
                <div className="next" onClick={() => next()}>
                    <RightOutlined></RightOutlined>
                </div>
            </div>
          </div>
          <div className="carousel-left-bottom">
            <Slider asNavFor={nav.nav1}
                    ref={slider => (slider2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                     >
              
              <div className="mono">
                Lãi suất trả góp <br></br> chỉ 0%
              </div>
              <div className="mono">
                12.12 SALE NGÀY VÀNG  <br></br>  ƯU ĐÃI NGẬP TRÀN
              </div>
              <div className="mono">
              DURA DAISON <br></br> SIÊU NÉT
              </div>
              <div className="mono">
              THU CŨ GIÁ CAO <br></br>LÊN ĐỜI SIÊU PHẨM
              </div>
              <div className="mono">
              THÁNG SIÊU SALE   <br></br> XỊN 100% CÓ QUÀ
              </div>

            </Slider>
          </div>
        </div>
       
          <div className="carousel-right">
          <div className="carousel-right-item">
            <img src="https://cdn.cellphones.com.vn/media/wysiwyg/690x300_uu-dai_VIB.png"></img>
          </div>
          <div className="carousel-right-item">
            <img src="http://file.hstatic.net/1000329106/article/thu_doi_web_8be3c8b64b124aed956f1c69362d884c_ffc1879efc384d40b322c7dfb324fc93_1024x1024.jpg"></img>
          </div>
          <div className="carousel-right-item">
            <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2021/02/lich-nghi-Tet-face.png"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
