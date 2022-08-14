<script type="text/javascript" src="js/jquery.carouFredSel-6.2.1-packed.js"></script>
<script>
    $(function () {
        $(".slide").carouFredSel({
            circular: true,
            direction: "left",
            scroll: {
                duration: 1000,
                fx: "fade",
                easing: "linear",
                items: 1
            },
            auto: {
                play: true,
                timeoutDuration: 5000,
                // pauseOnHover:"false"
            },
            items: {
                visible: 1,
                start: 0,


            },
            responsive: true,
        });
    });
</script>

<script src="js/bubbly-bg.js"></script>
<script>bubbly();</script>
<script>
    //     bubbly({
    //     colorStart: "#fff",
    //     colorStop: "#fff",
    //     blur: 1,
    //     bubbles: 220,
    //     compose: "source-over",
    //     shadowColor: "#5DB09B",
    //     radiusFunc: () => Math.random() * 15,
    //     bubbleFunc: () => `hsla(0, 0%, 80%, ${Math.random() * 0.25})`,
    // });


    bubbly({
        colorStart: "#fff", // default is blue-ish
        colorStop: "#fff",// default is blue-ish
        // animate: false, // default is true
        blur: 8, // default is 4
        bubbleFunc: () => `hsla(${Math.random() * 360}, 100%, 50%, ${Math.random() * 0.25})`, // default is () => `hsla(0, 0%, 100%, ${r() * 0.1})`)
        bubbles: 100, // default is Math.floor((canvas.width + canvas.height) * 0.02);
        canvas: document.querySelector("#background"), // default is created and attached
        compose: "source-over", // default is "lighter"
        shadowColor: "#0ff", // default is #fff
        // angleFunc: () => Math.random() * Math.PI * 2, // default is this
        angleFunc: () => -Math.PI / 2,
        velocityFunc: () => 0.1 + Math.random() * 0.5, // default is this
        radiusFunc: () => 4 + Math.random() * 20 // default is 4 + Math.random() * width / 25
    });
</script>

<script type="text/javascript" src="js/jquery.smoothscroll.js"></script>
<script>
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $(".pagetop").fadeIn();
        } else {
            $(".pagetop").fadeOut();
        }
    });
</script>