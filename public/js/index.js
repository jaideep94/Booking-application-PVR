$(document).ready(function() {
    bind('.square', function() {
        $('.nameScreen').addClass('slider');
        $('.billScreen').addClass('sliderLeft');
    })




    console.log("aa");
    bind('.greystar', function() {
        var idd = $(this).attr('id');
        console.log(idd);

        var c;
        for (var i = 1; i <= idd; i++) {
            func(i);

        }


        function func(i) {
            setTimeout(function() {
                $("#" + i).attr("src", "../images/yellowStar.png");
            }, 100 * i);

            setTimeout(function() {
                $('.billScreen').addClass('billSlide');
            }, 1000);
        }
        setTimeout(function(){
        $('.feedbackScreen').addClass('slider');
    },1000)
    })





    bind('.circle', function() {

        var idd = $(this).attr('id');
        var data = $(this).attr('data-id');

        console.log(idd);
        var i;
        if (data == 1) {
            for (i = 6; i <= idd; i++) {
                func(i);
            }
        }
        if (data == 2) {
            for (i = 11; i <= idd; i++) {
                func(i);
            }
        }
        if (data == 3) {
            for (i = 16; i <= idd; i++) {
                func(i);
            }
        }
        if (data == 4) {
            for (i = 21; i <= idd; i++) {
                func(i);
            }
        }


        function func(i) {
            setTimeout(function() {
                $("#" + i).attr("src", "../images/blackDot.png");
            }, 50 * i);

        }






    })



});
