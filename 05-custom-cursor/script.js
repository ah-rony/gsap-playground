let cursor = document.querySelector('#cursor');
let main = document.querySelector('#main');
let img = document.querySelector('#image')

main.addEventListener('mousemove', function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.6,
        ease:"back.out(2)"
    })
})


img.addEventListener('mouseenter',function(){
    cursor.innerHTML = "view more"
    gsap.to(cursor,{
        scale:3,
        backgroundColor:"#ffffff83",
    })
    
})

img.addEventListener('mouseleave', function(){
    cursor.innerHTML= ""
    gsap.to(cursor,{
        scale:1,
        "backgroundColor":"#ffffff"
    })
})