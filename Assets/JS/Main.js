// const About_Me__Floating_Block = document.getElementById("About-Me__Floating-Block");
// document.addEventListener("mousemove", (e) => {
//     const rect = About_Me__Floating_Block.getBoundingClientRect().y;
//     About_Me__Floating_Block.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`
//     console.log()
// })



document.addEventListener("DOMContentLoaded", (e) => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const About_Me__Para_1 = document.getElementById("About-Me__Para-1")
    const About_Me__Para_2 = document.getElementById("About-Me__Para-2")
    const About_Me__Para_3 = document.getElementById("About-Me__Para-3")
    // let about_me_split = SplitText.create(".About-Me__Para", {
    //     type: "chars",
    // });
    let About_Me__Para_1_split = SplitText.create(About_Me__Para_1, {
        type: "chars, words",
    });

    let About_Me__Para_2_split = SplitText.create(About_Me__Para_2, {
        type: "chars, words",
    });

    let About_Me__Para_3_split = SplitText.create(About_Me__Para_3, {
        type: "chars, words",
    });

    const About_me = document.getElementById("About_me");
    let about_me_animation = gsap.timeline({
        scrollTrigger: {
            trigger: About_me,
            pin: true,
            start: "top top",
            scrub: 1,
            end: 'bottom center'
        }
    });
    
    // about_me_animation.from(about_me_split.chars, {duration: 5, 
    //     filter: "blur(10px)",
    //     autoAlpha: 0,
    //     scale:2,
    //     stagger: 0.05})

    about_me_animation.from(About_Me__Para_2_split.chars, {duration: 5, 
        filter: "blur(10px)",
        autoAlpha: 0,
        scale: 2,
        stagger: 0.05})
    
    about_me_animation.to(About_Me__Para_2_split.chars,{
        duration: 2,
        delay:10,
        filter: "blur(10px)",
        autoAlpha: 0,
        scale: 2,
        stagger: 0.05
    })

    about_me_animation.from(About_Me__Para_1_split.chars, {duration: 5, 
        filter: "blur(10px)",
        autoAlpha: 0,
        scale:2,
        stagger: 0.05})

    about_me_animation.to(About_Me__Para_1_split.chars,{
        duration: 2,
        delay:10,
        filter: "blur(10px)",
        autoAlpha: 0,
        scale: 2,
        stagger: 0.05
    })

    about_me_animation.from(About_Me__Para_3_split.chars, {duration: 5, 
        filter: "blur(10px)",
        autoAlpha: 0,
        scale:2,
        stagger: 0.05})
})
