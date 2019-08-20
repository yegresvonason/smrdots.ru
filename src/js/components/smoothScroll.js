function initSmoothScroll() {

    console.log('smoothScroll.js');

    let html = document.documentElement,
        body = document.body,
        scroller = {
            target: document.querySelector('.wrapper-scroll'),
            ease: .05,
            endY: 0,
            y: 0,
            resizeRequest: 1,
            scrollRequest: 0
        },
        requestId = null;

    TweenLite.set(scroller.target, {
        rotation: .01,
        force3D: true
    });

    updateScroller();
    window.focus();
    window.addEventListener('resize', onResize);
    document.addEventListener('scroll', onScroll);

    function updateScroller() {
        let resized = scroller.resizeRequest > 0;

        if (resized) {
            let height = scroller.target.clientHeight;
            body.style.height = height + 'px';
            scroller.resizeRequest = 0;
        }

        let scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0; // something strange here

        scroller.endY = scrollY;
        scroller.y += (scrollY - scroller.y) * scroller.ease;

        if (Math.abs(scrollY - scroller.y) < .05 || resized) {
            scroller.y = scrollY;
            scroller.scrollRequest = 0;
        }

        TweenLite.set(scroller.target, {
            y: -scroller.y
        });

        requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
    }

    function onScroll() {
        scroller.scrollRequest++;
        if (!requestId) requestId = requestAnimationFrame(updateScroller);
    }

    function onResize() {
        scroller.resizeRequest++;
        if (!requestId) requestId = requestAnimationFrame(updateScroller);
    }
}

export default initSmoothScroll;