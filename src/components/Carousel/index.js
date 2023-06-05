import React, { useState } from "react";
import Carousel3D from "react-spring-3d-carousel";
import { cards } from "./config";
import { Wrapper } from "./styles";

export const Carousel = () => {

    const table = cards.map((element, index) => {
        return { ...element, onClick: () => setGoToSlide(index) };
    });

    const [goToSlide, setGoToSlide] = useState(null);
    const [slides] = useState(table);

    const [touchPosition, setTouchPosition] = useState(null)

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            setGoToSlide(goToSlide + 1)
        }

        if (diff < -5) {
            setGoToSlide(goToSlide - 1)
        }

        setTouchPosition(null)
    }

    return (
        <Wrapper
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <Carousel3D
                slides={slides}
                goToSlide={goToSlide}
                offsetRadius={200}
                showNavigation={false}
            />
        </Wrapper>
    );
}
