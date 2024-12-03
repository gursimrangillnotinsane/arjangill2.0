document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger)
    // Initialize Lenis
    const lenis = new Lenis({
        autoRaf: true,
    });


    const lottieContainers = document.querySelectorAll('.animation');

    lottieContainers.forEach((container) => {
        LootieScrollTrigger({
            trigger: container,
            start: "top center",
            endTrigger: "body",
            end: `bottom center`,
            renderer: "svg",
            target: container,
            path: "./hero2.json",
            scrub: 3, // Increased scrub for smoother transition

        });
    });





});




function LootieScrollTrigger(vars) {
    let playhead = { frame: 0 },
        target = gsap.utils.toArray(vars.target)[0],
        speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
        st = {
            trigger: vars.trigger || ".trigger",
            end: speeds[vars.speed] || vars.end || "+=1000",
            scrub: vars.scrub || 3, // Smooth interaction
            markers: vars.markers || false,
        },
        ctx = gsap.context && gsap.context(),
        animation = lottie.loadAnimation({
            container: target,
            renderer: vars.renderer || "svg",
            loop: false,
            autoplay: false,
            path: vars.path,
            rendererSettings: vars.rendererSettings || {
                preserveAspectRatio: "xMidYMid slice",
            },
        });

    animation.setSubframe(false); // Optimize frame rendering

    for (let p in vars) {
        st[p] = vars[p];
    }

    animation.addEventListener("DOMLoaded", function () {
        const createTween = function () {
            animation.frameTween = gsap.to(playhead, {
                frame: animation.totalFrames - 1,
                ease: "power2.out", // Smooth easing for frame transitions
                onUpdate: () =>
                    animation.goToAndStop(Math.round(playhead.frame), true),
                scrollTrigger: st,
            });
            return () => animation.destroy && animation.destroy();
        };
        ctx && ctx.add ? ctx.add(createTween) : createTween();
    });

    animation.addEventListener("DOMLoaded", function () {
        console.log("DOMLoaded");
        gsap.to("svg", {
            scrollTrigger: {
                trigger: ".content", // Element that triggers the animation
                // pin: true,         // Pin the element during animation
                start: "top bottom",  // Start when the top of `.image` hits the top of the viewport
                end: "bottom center",
                markers: true,
                // End after scrolling 1000px
                scrub: true,          // Smooth scrubbing, uses 1 second of "slow" scrub
                // toggleActions: "play pause reverse none"

            },
            height: '20%',
            width: '20%'               // Animate x-position by 500px
            // rotate: 180
        });
    });
    return animation;

}

