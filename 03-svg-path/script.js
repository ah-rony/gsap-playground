let initialPath = "M 10 250 Q 500 250 1890 250"

let string = document.querySelector("#string")
let svg = document.querySelector("svg");

string.addEventListener("mousemove", function (dets) {
    initialPath = `M 10 250 Q ${dets.x} ${dets.y} ${svg.clientWidth - 10} 250`

    gsap.to("svg path",{
        attr:{ d: initialPath },
        duration:0.1,
        ease:"power3.inOut"

    })
}) 

console.log(document.querySelector("svg path"));

string.addEventListener("mouseleave", function (dets){
    gsap.to("svg path",{
        attr:{
            d: `M 10 250 Q 250 250 ${svg.clientWidth - 10} 250`
        },
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })

})