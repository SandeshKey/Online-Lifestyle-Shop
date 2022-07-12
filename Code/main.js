// $(document).ready (function() {
//     $(".fa-user").click(function () {
//         $("form.login-form").toggle(1000);
//     })

//     $(".fa-xmark").click(function () {
//         $("form.login-form").hide(1000);
//     })

//     $(".login-to-register").click(function () {
//         $("form.login-form").hide(1000);
//     })

//     $(".login-to-register").click(function () {
//         $("form.signup-form").show(1000);
//     })

//     $("already-have-account").click(function () {
//         $("form.login-form").show(1000);
//     })

//     // $(".fa-xmark").click(function () {
//     //     $("form.signup-form").hide(1000);
//     // })

// })

$(window).on('load', function() {
    $(".fa-user").click(function () {
        $("form.login-form").toggle(1000);
    })

    $(".fa-xmark").click(function () {
        $("form.login-form").hide(1000);
    })

    $(".login-to-register").click(function () {
        $("form.login-form").hide(100);
    })


    $(".fa-xmark").click(function () {
        $("form.signup-form").hide(1000);
    })

    $(".login-to-register").click(function () {
        $("form.signup-form").show(1000);
    })

    $(".already-have-account").click(function () {
        $("form.signup-form").hide(100);
    })

    $(".already-have-account").click(function () {
        $("form.login-form").show(1000);
    })

    $(".form-control-quantity").click(function(){
        $(".form-control-quantity").css("background-color", "white", "color", "black");
    });

    $(".fa-circle-minus").click(function () {
        $(".table-body-row").hide(1000);
    })
});