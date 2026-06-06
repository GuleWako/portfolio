import React from 'react'
import {useScrollReveal} from '../../hooks/useScrollReveal';

const ScrollReveal = (childeren, animation = 'fadeUp', delay=0, duration=700 ) => {

    const {ref, isVisible} = useScrollReveal({threshold: 0.1});
    const animationClass = {
        fadeUp: 'opacity-0 translate-y-8',
        fadeIn: 'opacity-0',
        fadeLeft: 'opacity-0 -translate-x-12',
        fadeRight: 'opacity-0 translate-x-12',
        scaleIn: 'opacity-0 scale-90',
    }

    const visibleClass = "opacity-100 translate-y-0 translate-x-0 scale-100";

    return (
        <div
            ref={ref}
            className={`trasition-all ease-out ${isVisible ? visibleClass : animationClass[animation]}`}
            style={{
                transitionDelay:`${delay}ms`,
                animationDuration: `${duration}ms`,
                // animationFillMode: "both",
            }}
        >
            {childeren}
        </div>
    )
}


export default ScrollReveal