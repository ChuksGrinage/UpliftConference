
import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';

import img3 from 'assets/images/photo2.jpg';

interface CarouselCtnrProps {
}



const CarouselCtnr: React.FC<CarouselCtnrProps> = () => {
    return (
        <AwesomeSlider transitionDelay={5} startup organicArrows={false} cssModule={AwesomeSliderStyles}>
            <div data-src={img3} />
            <div data-src={img3} />
            <div data-src={img3} />
            <div data-src={img3} />
            <div data-src={img3} />
            <div data-src={img3} />
            <div data-src={img3} />
            <div data-src={img3} />
            <div data-src={img3} />
        </AwesomeSlider>
    );
}
export default CarouselCtnr;