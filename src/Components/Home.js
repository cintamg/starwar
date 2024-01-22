import React, { useEffect, useState } from 'react'

export default function Home() {

    const [currSlide,setCurrSlide] = useState(0);

    const images = [
        "/HomeImg/img1.png",
        "/HomeImg/img2.png",
        "/HomeImg/img3.png",
        "/HomeImg/img4.png",
        "/HomeImg/img5.png"
    ];

    const totalSlides = images.length;

    const showSlides = (index) => {
      if(index >= totalSlides)
      setCurrSlide(0);
      else if(index < 0)
      setCurrSlide(totalSlides-1);
      else
      setCurrSlide(index);
    }

    const nextSlide = () => {
      showSlides(currSlide+1);
    }

    const prevSlide = () => {
      showSlides(currSlide-1);
    }

    useEffect( () => {
      const intervalId = setInterval(nextSlide,3000);
      return () => clearInterval(intervalId);
    },[currSlide])
    
  return (
    <div className="home">
      <h1 className="text-center">Star War</h1>
      <div className="slide-container">
        <div className="slides">
          <img src={images[currSlide]} alt="{`Slide ${currSlide+1}`}" />
        </div>
        <div className="arrow prev" onClick={prevSlide}>&#8249;</div>
        <div className="arrow next" onClick={nextSlide}>&#8250;</div>
      </div>
    </div>
  )
}
