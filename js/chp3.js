jQuery(function ($) {
    $('#name').change(function () {
        var a = $(this).val();
        console.log('Name is ' + a)
    });
    $('#sname').change(function () {
        var a = $(this).val();
        console.log('Surname is ' + a)
    });
    $('#fname').change(function () {
        var a = $(this).val();
        console.log("Father's name is " + a)
    });
    $('.gender').change(function () {
        var a = $(this).val();
        console.log("Gender is " + a)
    });
    $('input[name="phone"]').change(function () {
        var a = this.checked ? 'Contact me by phone' : "Don't contact me by phone";
        console.log(a)
    });
    $('input[name="email"]').change(function () {
        var a = this.checked ? 'Contact me by email' : "Don't contact me by email";
        console.log(a)
    });
    $("select").change(function () {
        console.log("Fruit is " + $(this).val())
    });
    $("#same").change(function() {
        var x = $('#name').val(),
            y = $('#sname').val(),
            z = $('#fname').val();
        if(this.checked) {
            $('#twin-name').val(x);
            $('#twin-sname').val(y);
            $('#twin-fname').val(z)
        }
        else {
            $('#twin-name').val("");
            $('#twin-sname').val("");
            $('#twin-fname').val("")
        }
    });
    $('form').submit(function () {
        var a = $('#name').val(),
            b = $('#sname').val(),
            c = $('#fname').val(),
            d = $('.gender').val(),
            e = $('select').val();
        console.log("name: " + a, "surname: " + b, "father's name: " + c, "gender is: " + d, "fruit is: " + e);
        return false;
    });
    $('#twin-name').keypress(function () {
        alert("Введи ФИО в начале формы и воспользуйтесь функцией создать блинзнеца!")
    });
    $('#twin-sname').keydown(function () {
        alert("Введи ФИО в начале формы и воспользуйтесь функцией создать блинзнеца!")
    });
    $('#twin-fname').keyup(function () {
        alert("Введи ФИО в начале формы и воспользуйтесь функцией создать блинзнеца!")
    });
});


