$(document).ready(() => {
    let width = parseInt($('#width').val());
    let growthAmount = parseInt($('#growth-amount').val());
    let growthRate = parseInt($('#growth-rate').val());
    let n = parseInt($('#number').val());

    let randomX;
    let randomY;

    $(document).on("change, mouseup, keyup mouseup", "#number,#width,#growth-amount,#growth-rate", function() {
        n = parseInt($('#number').val());
        width = parseInt($('#width').val());
        growthAmount = parseInt($('#growth-amount').val());
        growthRate = parseInt($('#growth-rate').val());
    });

    function getRandomPosition(element) {
        let x = document.body.offsetHeight - element.clientHeight;
        let y = document.body.offsetWidth - element.clientWidth;
        randomX = Math.floor(Math.random() * x);
        randomY = Math.floor(Math.random() * y);
        return [randomX, randomY];
    }
    $("#start").click(function() {
        if (n !== 0) {
            $(".circle").show();
            $(".circle").css({
                'width': width,
                'height': width,
                'top': randomX + 'px',
                'left': randomY + 'px'
            });

            // var circ = document.createElement('circ');
            // circ.setAttribute("style", "position:absolute");
            // circ.setAttribute("src")


            for (let i = 0; i < n - 1; i++) {
                let xy = getRandomPosition($(".circle"));
                $(".container").append("<div class='circle' style='top: xy[0] + 'px', left : xy[1] + 'px''></div>");
                console.log("TOP " + xy[0] + " LEFT : " + xy[1]);

            }
            let intervalId = setInterval(grow, growthRate);


            $(".circle").click(function() {
                $(this).remove();
                clearInterval(intervalId);
            });
        } else {
            alert("Choose 1 or more circle number! ");
        }
    })

    function grow() {
        const size = parseInt($(".circle").css('width')) + growthAmount + 'px';
        $(".circle").css({
            'width': size,
            'height': size
        });
    }
});