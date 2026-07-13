let initialPath = "M 10 100 Q 250 100 950 100"

let finalPath = "M 10 100 Q 250 100 950 100"

let string = document.querySelector("#string")

string.addEventListener("mousemove", function (dets) {
    initialPath = `M 10 100 Q ${dets.x} ${dets.y} 950 100`

    gsap.to("svg path",{
        attr:{ d: initialPath },
        duration:0.1,
        ease:"power3.inOut"

    })
}) 

console.log(document.querySelector("svg path"));

string.addEventListener("mouseleave", function (dets){
    gsap.to("svg path",{
        attr:{d: finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })

})