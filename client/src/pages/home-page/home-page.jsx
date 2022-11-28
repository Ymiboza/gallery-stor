import React from 'react'
import Header from '../../components/header/header'
import Arts from '../../components/arts/arts'
import Wrapper from '../../components/wrapper/wrapper'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "../../libs/gsap/ScrollSmoother.min.js";


const HomePage = () => {
    const wrapper = document.querySelector('.main__header')
    window.addEventListener("scroll", (e) => {
        document.documentElement.style.setProperty(
            "--scrollTop",
            `${window.scrollY}px`,
        );
    });
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollSmoother.create({
        wrapper: ".wrapper",
        content: ".content",
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
    });



    return (
        <React.Fragment>
            <Header />
            <Arts />
        </React.Fragment>
    )
}



export default HomePage