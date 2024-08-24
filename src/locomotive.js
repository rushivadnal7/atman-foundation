function loco() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".home"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".home", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

        // follwoing line is not required to work pinning on touch screen

        /* pinType: document.querySelector(".home").style.transform
          ? "transform"
          : "fixed"*/
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

loco()

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});

function files(index) {
    var data = `
    https://zelt.app/wp-content/uploads/zelt.app-homepage-spring-24-badges-group1-1.png
https://zelt.app/wp-content/uploads/zelt.app-homepage-spring-24-badges-24-group-2-2.png
https://zelt.app/wp-content/uploads/zelt.app-homepage-onedome-1.svg
https://zelt.app/wp-content/uploads/zelt.app-homepage-mumsnet-logo-4.svg
https://zelt.app/wp-content/uploads/zelt.app-homepage-deblock-logo-1.svg
https://zelt.app/wp-content/uploads/zelt.app-homepage-yonder-logo.svg
https://zelt.app/wp-content/uploads/zelt.app-homepage-safi-logo-1.svg
https://zelt.app/wp-content/uploads/zelt.app-homepage-strapi-logo.webp
https://zelt.app/wp-content/uploads/zelt.app-homepage-patch-logo-1.svg
https://zelt.app/wp-content/uploads/zelt.app-homepage-pledge-logo-2.svg
https://zelt.app/wp-content/uploads/zelt.app-wondelogo.png
https://zelt.app/wp-content/uploads/zelt.app-homepage-vieve-logo.svg
https://zelt.app/wp-content/uploads/zelt.app-homepage-apron-logo-1.svg
https://zelt.app/wp-content/uploads/zelt.app-homepage-isometric-min.png
https://zelt.app/wp-content/uploads/zelt.app-homepage-eln-logo-removebg-preview.png
https://zelt.app/wp-content/uploads/zelt.app-homepage-tilt-logo.png
https://zelt.app/wp-content/uploads/zelt.app-homepage-trustedhousesitters-logo.webp
https://zelt.app/wp-content/uploads/2023/01/zelt.wp2.cubdev.com-1-2x.png
https://zelt.app/wp-content/uploads/2023/01/zelt.wp2.cubdev.com-2-2x.png
https://zelt.app/wp-content/uploads/2023/01/zelt.wp2.cubdev.com-3-2x.png
https://zelt.app/wp-content/uploads/2023/01/zelt.wp2.cubdev.com-4-2x.png
https://zelt.app/wp-content/uploads/2023/01/zelt.wp2.cubdev.com-5-2x.png
https://zelt.app/wp-content/uploads/2023/01/zelt.wp2.cubdev.com-6-2x.png
https://zelt.app/wp-content/uploads/2023/02/zelt.wp2.cubdev.com-homepage-1-2x.jpeg
https://zelt.app/wp-content/uploads/zelt.app-homepage-adriana-400px.webp
https://zelt.app/wp-content/uploads/zelt.app-private-equity-backed-one-dome-consolidates-hr-and-payroll-across-group-zara-baker.jpeg
https://zelt.app/wp-content/uploads/zelt.app-homepage-bhavin-1.jpg
https://zelt.app/wp-content/uploads/2023/01/zelt.wp2.cubdev.com-9-2x.jpeg
https://zelt.app/wp-content/uploads/2023/01/zelt.wp2.cubdev.com-5-2x.jpeg
https://zelt.app/wp-content/uploads/2023/02/zelt.wp2.cubdev.com-homepage-5-2x.jpeg
https://zelt.app/wp-content/uploads/zelt.app-landmark-games-masters-onboarding-with-zelt-dave-burpitt-1.jpeg
https://zelt.app/wp-content/uploads/zelt.app-how-the-european-leadership-network-found-an-all-in-one-platform-for-onboarding-and-device-management-in-zelt-charisse-fallaria-.jpeg
https://zelt.app/wp-content/uploads/2023/02/zelt.wp2.cubdev.com-homepage-1.svg
https://zelt.app/wp-content/uploads/2023/01/zelt.wp2.cubdev.com-2-1.svg
https://zelt.app/wp-content/uploads/2023/01/zelt.wp2.cubdev.com-3-1.svg
https://zelt.app/wp-content/uploads/zelt.app-homepage-business-insider.png
https://zelt.app/wp-content/uploads/zelt.app-homepage-cr-logo-2x-ezgif.com-effects.png
https://zelt.app/wp-content/uploads/2023/01/zelt.wp2.cubdev.com-6-1.svg
https://zelt.app/wp-content/uploads/2023/01/zelt.wp2.cubdev.com-1-2.svg
https://zelt.app/wp-content/uploads/2023/01/zelt.wp2.cubdev.com-2-2.svg
https://zelt.app/wp-content/uploads/2023/01/zelt.wp2.cubdev.com-3-2.svg
https://zelt.app/wp-content/themes/zelt/assets/img/logo-inverse.svg
https://zelt.app/wp-content/uploads/2023/02/zelt.wp

 `;
    return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
    frame: 1,
};

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
}

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: 0.15,
        trigger: `#page>canvas`,
        //   set start end according to preference
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
    },
    onUpdate: render,
});

images[1].onload = render;

function render() {
    scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
}
ScrollTrigger.create({

    trigger: "// object you want to pin it.",
    pin: true,
    // markers:true,
    scroller: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
});