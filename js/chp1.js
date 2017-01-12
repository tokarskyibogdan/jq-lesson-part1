jQuery(function ($) {
    $('.add-class').on('click', function () {
        $('.add-class').addClass('bg-red');
    });
    $('.remove-class').on('click', function () {
        $(this).removeClass('bg-red');
    });
    $('.toggle-class').on('click', function () {
        $(this).toggleClass('bg-red');
    });
    $('.get-attr').on('click', function () {
        console.log($(this).attr('value'))
    });
    $('.set-attr').on('click', function () {
        $(this).attr('disabled', 'disabled');
    });
    $('.alert').on('click', function () {
        alert('This is alert on click');
    });
    $('.trigger-alert').on('click', function () {
        $( ".alert" ).trigger( "click" );
    });
    $('.clone').on('click', function () {
        var atr = $(this).attr('value');
        $(this).clone().attr('value', atr + ' - cloned').addClass('margin-top').insertAfter(this)
    });
    $('.closest').on('click', function () {
        console.log($(this).parent())
    });

    // $('.each-btn-text').on('click', function () {
    //     var allAtrr = $('input').prop(map);
    //     console.log(allAtrr)
    // });

    $('.find-me').on('click', function () {
        console.log($(this).parents())
    });
    $('.fade-in-text-btn').click(function () {
        $('.fade-in-text').fadeIn(1000)
    });
    $('.fade-out-text-btn').click(function () {
        $('.fade-out-text').fadeOut(1000)
    });
    $('.hide').click(function () {
        $('.hide-text').hide()
    });
    $('.show').click(function () {
        $('.show-text').show()
    });
    $('.data').on('click', function () {
        var h = $(this).height();
        var w = $(this).width();
        var position = $(this).offset();
        var btnTxt = $(this).attr('value');
        var btnType = $(this).attr('type');
        var btnClass = $(this).attr('class');
        var parent = $(this).parent();
        // var next = $(this).next().next();
        // var prev = $(this).prev().prev();
        console.log("height",h,",","width",w,",","position of",position,",","class:",btnClass,",","type:",btnType,",","parent:",parent,",","text:",btnTxt)
    });
});
