gsap.from("#page1 #box",{
    scale:0,
    duration:2,
    delay:1,
    rotate:360
})


gsap.from("#page2 #box",{
    scale:0,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 40%"
    }
})


gsap.from("#page3 h1",{
    opacity:0,
    x:500,
    duration:2,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        start:"top 50%",
        markers:true
    }
})


gsap.from("#page3 h2",{
    opacity:0,
    x:-500,
    duration:1.5,
    scrollTrigger:{
        trigger:"#page3 h2",
        scroller:"body",
        start:"top 50%",
        markers:true
    }
})


gsap.from("#page4 #box",{
    scale:0,
    rotate:720,
    scrollTrigger:{
        trigger:"#page4 #box",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:true
    }
})