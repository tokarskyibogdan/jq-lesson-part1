jQuery(function ($) {
    $('.add-class').on('click', function () {
        $(this).addClass('bg-red');
    });
    $('.remove-class').on('click', function () {
        $(this).removeClass('bg-red');
    });
    $('.toggle-class').on('click', function () {
        $(this).toggleClass('bg-red');
    });
    $('.get-attr').on('click', function () {
        console.log(this.value)
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
        console.log($(this).closest())
    });

    $('.each-btn-text').on('click', function () {
        $("li").each(function(index) {
            console.log(index + ": " + $(this).text());
        });
    });
    $('.find-me').on('click', function () {
        var a = $('body').find(this)[0];
        console.log(a)
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
        var h = $(this).height(),
            w = $(this).width(),
            position = $(this).offset(),
            attrs = this.attributes,
            parent = $(this).parent();
        console.log("height ",h,"width ",w,"position of ",position,"parent:",parent, attrs)
    })
});
