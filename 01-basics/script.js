let tl = gsap.timeline()

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:0.5
})

tl.from("h4",{
    y:-30,
    opacity:0,
    duration:0.5,
    stagger:0.3
})


gsap.set("#box1",{x:-200,y:150});
gsap.set("#box2",{x:innerWidth+200,y:100});
gsap.set("#box3",{x:-250,y:innerHeight-220});
gsap.set("#box4",{x:innerWidth+250,y:innerHeight-150});



tl.to("#box1",{
    x:innerWidth+250,
    y:innerHeight - 150,
    duration:2.5,
    ease:"power2.inOut",
    rotation:360
},"start")

tl.to("#box2",{
    x:-250,
    y:innerHeight - 220,
    duration:2.5,
    ease:"power2.inOut",
    rotation:-360
},"start")

tl.to("#box3",{
    x: innerWidth + 200,
    y: 100,
    duration:2.5,
    ease:"power2.inOut",
    rotation:360
},"start")

tl.to("#box4",{
    x:-200,
    y:150,
    duration:2.5,
    ease:"power2.inOut",
    rotation:-360
},"start");



tl.to(".circle",{
    x:window.innerWidth/2-60,
    y:window.innerHeight/2-60,
    scale:0.2,
    opacity:0,
    duration:1,
    ease:"power4.inOut",
    stagger:0.08
});



tl.fromTo("h1",
{
    scale:0.5,
    y:80,
    opacity:0,
    filter:"blur(20px)"
},
{
    scale:1,
    y:0,
    opacity:1,
    filter:"blur(0px)",
    duration:1.2,
    ease:"expo.out"
});