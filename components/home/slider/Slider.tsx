'use client'
import { GoChevronLeft } from "react-icons/go";
import { useEffect } from "react";


const Slider = () => {
    let slideId: number = 0
    let slider: HTMLElement
    let allSlides: any

    const sliderData: { img: string, link: string }[] = [{
        img: "https://m.media-amazon.com/images/I/71CTkwWUOHL._SX3000_.jpg",
        link: ""
    },
    {
        img: "https://m.media-amazon.com/images/I/619PyjouyvL._SX3000_.jpg",
        link: ""
    },
    ]

    useEffect(() => {
        slider = document.querySelector<HTMLElement>('.slider')!
        allSlides = slider.querySelectorAll<HTMLElement>('img')
        slideId = allSlides.length - 1
        allSlides[slideId].style.zIndex = 1
        console.log(allSlides)
    })

    const changeSlide = (action: string) => {
        console.log("slideId", slideId)
        allSlides[slideId].style.zIndex = 0
        switch (action) {
            case "nextSlide":
                allSlides[slideId].style.animation = "nextSlideTo 0.3s forwards"
                slideId < allSlides.length - 1 ? slideId++ : slideId = 0;
                allSlides[slideId].style.animation = "nextSlideFrom 0.3s forwards"
                break;
            case "prevSlide":
                allSlides[slideId].style.animation = "prevSlideTo 0.3s forwards"
                slideId > 0 ? slideId-- : slideId = allSlides.length - 1;
                allSlides[slideId].style.animation = "prevSlideFrom 0.3s forwards"
                break;
        }
        allSlides[slideId].style.zIndex = 1
    }

    return (
        <>
            <div className='arrows flex justify-between'>
                <div className='arrow-left'>
                    <button className='arrow-btn' onClick={() => changeSlide("prevSlide")}><GoChevronLeft size="60" color='white' /></button>
                </div>
                <div className='arrow-right'>
                    <button className='arrow-btn' onClick={() => changeSlide("nextSlide")}><GoChevronLeft size="60" color='white' /></button>
                </div>
            </div>
            <div className="slider">
                <div className="slides">
                    <img src="https://m.media-amazon.com/images/I/71CTkwWUOHL._SX3000_.jpg" />
                    <img src="https://m.media-amazon.com/images/I/619PyjouyvL._SX3000_.jpg" />
                    <img src="https://m.media-amazon.com/images/I/71dt-t0-LBL._SX3000_.jpg" />
                </div>
            </div>
        </>
    )
};

export default Slider
