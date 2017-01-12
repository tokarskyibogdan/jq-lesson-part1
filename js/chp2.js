jQuery(function ($) {
    $('.detach').on('click', function () {
        $(this).detach();
    });
    $('.eq').on('click', function () {
        $('li').eq(1).css("background-color", "red");
    });
    $('.has-class').on('click', function () {
        var a = $(this).hasClass("has-class"),
            b = $(this).hasClass("no-class");
        console.log("If it has class:",a,";","If it no class:",b)
    });
    $('.html').on('click', function () {
        var a = $(this).html();
        console.log("inside this li:",a)
    });
    $('.off').on('mouseover', function () {
        $(this).off('mouseover');
        alert("You hover on 'OFF' button. Now here is no 'on-mouseover' function")
    });
    $('.on').on('mouseover dblclick', function () {
        $(this).off('mouseover');
        alert("You hovered 'ON' button. Now here is no 'on-mouseover' function. If u want see this massage again you can use 'double-click' on the same button.")
    });
    $('.prop').on('click', function () {
        var a = $('#check1').prop('checked');
        console.log("are u cheked button? - ",a)
    });
    $('.remove').on('click', function () {
        $(this).remove()
    });
    $('.remove-attr').on('click', function () {
        $('#check2').removeAttr('disabled')
    });
    $(window).resize(function () {
        $(".resize").text("window width " + $(window).width() + " px")
    });
    $('.for-scroll').scroll(function () {
        $(".scroll").text("stop scrolling")
    });
    $('.scroll-top').on('click', function () {
        var a = $('.for-scroll').scrollTop();
        $('.scroll-top').text("scroll top is: " + a)
    });
    $('.slide-up').on('click', function () {
        $(this).slideUp(500)
    });
    $('.slide-down').on('click', function () {
        $('.slide-up').slideDown('500')
    });
    $('.slide-toggle').on('click', function () {
        $('.slide-up').slideToggle('500')
    });
});
