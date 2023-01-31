var t1=gsap.timeline();
t1
.from("#left",{
    width:0,
    duration:1.2,
    ease:Expo.easeInOut,
})
.from("#right",{
    height:0,
    duration:1.2,
    ease:Expo.easeInOut,
},"-=0.8")
.from("#left-strip",{
    height:0,
    bottom:0,
    duration:1,
    ease:Expo.easeInOut,
})
.from("#right-strip",{
    height:0,
    top:0,
    duration:1,
    ease:Expo.easeInOut,
},"-=1")
.from("#color-logo",{
    width:400,
    height:100,
    top:"50%",
    ease:Expo.easeInOut,
    duration:2,
    opacity:0,
})
.to("#color-logo",{
    position:"absolute",
    // width:"110px",
    opacity:0.8,
    duration:0.3,
})
.from("#logo,#menu,#categories,#search,#bag",{
    stagger:{
        each:0.2,
        from:"top",
    },
    height:0,
    top:-50,
    dispaly:"none",
    duration:1.5,
    ease:"bounce",

})
.from("#dots",{
    right:-80,
    duration:2,
    ease:"elastic",
    stagger:{
        each:0.2,
        from:"edges",
    },
},"-=2.2")
.from("#media",{
    left:-200,
    duration:2,
    ease:Expo.easeInOut,
},"-=2")
.from("#product-img",{
    opacity:"0",
    width:0,
    height:0,
    ease:Expo.easeOut,
    duration:0.5,
})

.from("#bottomnav",{
    width:0,
    opacity:0,
    duration:1,
})
.from("#arrows li",{
    width:0,
    opacity:0,
    duration:0.5,
})
.from("#size",{
    opacity:0,
    duration:0.5,
    ease:Expo.easeOut,
},"-=0.5")
.from("#size ul li",{
    stagger:{
        each:0.15,
        from:"edges",
    },
    opacity:0,
    top:-50,
    dispaly:"none",
    duration:0.8,
    ease:"bounce.in",

},"-=1")

.from("#product-title",{
    opacity:0,
    onUpdate:function(){$('#product-title').textillate({ in: { effect: 'rotateInDownLeft' } });}
})
.from("#product-subtitle",{
    opacity:0,
    onUpdate:function(){$('#product-title').textillate({ in: { effect: 'fadeInUp' } });}
},"+=0.3")






