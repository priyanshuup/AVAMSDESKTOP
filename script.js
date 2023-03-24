gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".belowpage",
        // markers:true,
        start: "top top",
        end: "bottom 80%",
        scrub: 5,
        pin:"#page1",
        ease:"SlowMo.ease",
        // duration:0.5
    },
})

tl.to(".imgboxestopleft", { width: "350", height: "395", x: 110, y: -27, display: "fixed" }, "-=1")  
tl.to(".abovepage #imgboxestopright", { width: "580", height: "450", y: 170, x: 60 }, "-=1")  
tl.to("#imgtopright", { height: "400", width: "500", x: 230, y: -160 }, "-=1")
tl.to(".imgboxestoplast", { height: "350", width: "300", x: -150, y: -135, }, "-=1")

tl.to("#imgtopleftbe", { height: "400", width: "600", x: -360, y: -90, }, "-=1")  
tl.to(".imgboxestopleft2", { width: "300", height: "400", x: -183, y: -70 }, "-=1")
tl.to("#imgtoprightbe", { height: "400", width: "600", x: -198, y: 87, }, "-=1")

tl.to(".imglightblueblur", { x: 600, y: -60 }, "-=1")
tl.to(".imgorangeblur", { y: -400 }, "-=1")
tl.to(".imgdarkblueblur", { x: -900 }, "-=1")

tl.to(".centerhead1", { transform: "scale(0.5,0.5)", opacity: 0, delay: 0, ease: "SlowMo.ease" }, "-=1")
tl.to(".centerhead h5", { transform: "scale(0,0)", opacity: 0, delay: 0, ease: "SlowMo.ease" }, "-=1")
tl.from(".texttop1", {
    y: 100, transform: "scale(0.2, 0)", opacity: 0, delay: 0, ease: "SlowMo.ease",
    onComplete: function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            $(".imgt1 img").css({
                dealay:1,
                width: (100 + scroll / 10) + "%"
            }) 
        })
    }
}, "-=1")

// gsap.registerPlugin(ScrollTrigger);
const t3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#maine",
        // markers:true,
        start: "top 70%",
        end: "bottom 10%",
        scrub: 5,
        // pin:"#maine",
        ease: "SlowMo.ease",
        duration: 10
    },
})

t3.to("#cont", { transform: "rotate(30deg)", transform: "rotate(15deg)", transform: "rotate(0deg)",y: 490 })
t3.to("#cont", {
    scrollTrigger: {
        // markers: true,
        trigger: "#crain",
        start: "top 5%",
        end: "bottom 10%",
        pin: "#crain",
        duration: 10
    }
})
t3.to("#cont", { y: 490, transform: "scale(4,4)",delay:0 })

// t3.to("#cont",{y:490,transform:"scale(4, 4)"})

t3.from("#maine h2", {
    y: 100, transform: "scale(0.2, 0)", opacity: 0,
    delay: 0,
    ease: "SlowMo.ease",delay:0.5
},"-=1")
t3.from("#maine h4", {
    y: 100, transform: "scale(0.2, 0)", opacity: 0,
    delay: 0,
    ease: "SlowMo.ease",delay:0.5
},"-=1")



const t4 = gsap.timeline({
    scrollTrigger: {
        trigger:".divright .arrowimgright",
        start:"top 95%",
        end:"top top",
        scrub:5,
        ease: "SlowMo.ease",
        duration: 20,
        markers: true
        }
})

t4.to(".divright h1",{x:80},"-=1")
t4.to(".arrowimgright",{x:100,width:"415"},"-=1")

t4.to(".divleft h1",{x:-45},"-=1")
t4.to(".arrowimgleft",{x:-45,width:"400"},"-=1")

t4.to(".divleft h2",{x:-40,delay:0.3},"-=1")
t4.to(".divright h2",{x:50,delay:0.3},"-=1")





// tl.from("#main h2",{
//     y:100,transform:"scale(0.2, 0)",opacity: 0,
//     delay : 0 ,
//     ease:"SlowMo.ease"
// })
// tl.from("#main h4",{
//     y:100,transform:"scale(0.2, 0)",opacity: 0,
//     delay : 0,
//     ease:"SlowMo.ease"
// })
