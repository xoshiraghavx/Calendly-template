import React, { useState } from "react"
import { data } from "../../data"
import CardSlider from "./CardSlider"
import curveBg from "../../images/pattern-curve.svg"

const Testimonials = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const nextSlide = () => {
    const newSlideIndex =
      currentSlideIndex === data.length - 1 ? 0 : currentSlideIndex + 1
    setCurrentSlideIndex(newSlideIndex)
  }

  const backSlide = () => {
    const newSlideIndex =
      currentSlideIndex === 0 ? data.length - 1 : currentSlideIndex - 1
    setCurrentSlideIndex(newSlideIndex)
  }

  return (
    <div className="max-w-full min-h-screen grid bg-[#f7faff] place-items-center ">
      <div className="mx-7 max-w-6xl flex flex-col gap-10 relative md:gap-16 md:px-5 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0">
        <CardSlider
          {...data[currentSlideIndex]}
          key={data[currentSlideIndex].id}
          nextSlide={nextSlide}
          backSlide={backSlide}
        />
      </div>
    </div>
  )
}

export default Testimonials
