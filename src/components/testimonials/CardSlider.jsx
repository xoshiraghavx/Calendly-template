import React from "react"
import quotes from "../../images/pattern-quotes.svg"
import leftArrow from "../../images/icon-prev.svg"
import rightArrow from "../../images/icon-next.svg"

const CardSlider = ({ text, name, job, img, nextSlide, backSlide }) => {
  return (
    <>
    <div className="mb-12 relative grid place-items-center tabletlg:col-start-2 tabletlg:col-end-3 tabletlg:mb-0 ">
      <img
        src={img}
        alt={`photo of ${name}`}
        className="w-3/4 shadow-[5px_15px_40px_rgba(0,0,0,0.15)] tabletsm:w-2/3 tabletmd:w-1/2 tabletlg:w-3/4 laptopmd:w-full"
      />
      <div className="absolute bottom-0 translate-y-1/2 drop-shadow-lg laptopmd:left-1/4 laptopmd:-translate-x-3/4">
        <button
          onClick={backSlide}
          className=" px-3.5 py-2.5 rounded-l-3xl bg-white cursor-pointer laptop:px-5 laptop:py-4"
          aria-label="Back"
        >
          <img
            src={leftArrow}
            alt="left arrow"
            className="object-cover w-full"
          />
        </button>
        <button
          onClick={nextSlide}
          className=" p-3.5 py-2.5 rounded-r-3xl bg-white cursor-pointer laptop:px-5 laptop:py-4"
          aria-label="Next"
        >
          <img
            src={rightArrow}
            alt="right arrow"
            className="object-cover w-full"
          />
        </button>
      </div>
    </div>
    <div className="flex flex-col justify-center text-center items-center gap-6 tabletlg:col-start-1 tabletlg:col-end-2 tabletlg:row-start-1 laptop:text-left laptop:gap-7 laptopmd:min-w-[115%] ">
      <blockquote className="text-md relative text-colorDarkBlue text-2xl md:text-[1.5rem] laptop:leading-tight">
        <img
          src={quotes}
          alt="quotes"
          aria-hidden="true"
          className="absolute -top-5 left-1/2 -translate-x-1/2 w-1/6 sm:w-1/12 lg:w-1/6 laptop:-top-10 laptop:left-1/4 md:-top-14"
        />
        <p> &ldquo; {text} &rdquo;</p>
      </blockquote>
      <div className="flex flex-col tabletmd:text-lg tabletlg:text-base laptop:flex-row laptop:gap-2 laptop:self-start laptop:text-xl">
        <p className="text-colorDarkBlue font-bold ">{name}</p>
        <p className="text-colorGrayBlue">{job}</p>
      </div>
    </div>
  </>
  )
}

export default CardSlider
