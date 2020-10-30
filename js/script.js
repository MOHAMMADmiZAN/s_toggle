$(".one").click(function () {
    $(".chk1").fadeToggle();
    $('.one').toggleClass('clr-bg');


})


$(".two").click(function () {
    $(".chk2").fadeToggle();
    $('.two').toggleClass('clr-bg');

})
$(".three").click(function () {
    $(".chk3").fadeToggle();
    $('.three').toggleClass('clr-bg');
})
$(".four").click(function () {
    $(".chk4").fadeToggle();
    $('.four').toggleClass('clr-bg');
})
$(".five").click(function () {
    $(".chk5").fadeToggle();
    $('.five').toggleClass('clr-bg');
})
$(".six").click(function () {
    $(".chk6").fadeToggle();
    $('.six').toggleClass('clr-bg');
})

$('.button').click(function (){
    swal({
        title: "Are you sure?",
        text: "Once You Submit, you will not be able to Edit This File!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Good! Your Data  has been Submitted!", {
                    icon: "success",
                });
            } else {
                swal("Your Data file is safe!");
            }
        });
})
const sub = $('#sub')


sub.submit(function () {
    $.ajax({
        url: sub.attr('action'),
        type: 'POST',
        data: sub.serialize(),
        success: function () {
            console.log('form submitted.');
        }
    });
    return false;
});
