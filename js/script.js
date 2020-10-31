///// variable ////
const one = $('.one')
const two = $('.two')
const three = $('.three')
const four = $('.four')
const five = $('.five')
const six = $('.six')
const sub = $('#sub')

// toggle part start/////
one.click(function () {
    $(".chk1").fadeToggle();
    one.toggleClass('clr-bg');


})
two.click(function () {
    $(".chk2").fadeToggle();
    two.toggleClass('clr-bg');

})
three.click(function () {
    $(".chk3").fadeToggle();
    three.toggleClass('clr-bg');
})
four.click(function () {
    $(".chk4").fadeToggle();
    four.toggleClass('clr-bg');
})
five.click(function () {
    $(".chk5").fadeToggle();
    five.toggleClass('clr-bg');
})
six.click(function () {
    $(".chk6").fadeToggle();
    six.toggleClass('clr-bg');
})
//////////// toggle part end/////////////////////
/////// submit button alert/////////////////
$('.button').click(function () {
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
////////////////////// form action ///////////////////

// sub.submit(function () {
//     $.ajax({
//         url: sub.attr('action'),
//         type: 'POST',
//         data: sub.serialize(),
//         success: function () {
//             console.log('form submitted.');
//         }
//     });
//     return false;
// });
// Declare a global object to store view data.
$('#checkboxOne').click(function () {
    if ($('#checkboxOne').is(":checked") === true) {
        $('#checkboxOne').val('HTML');
    } else {
        $('#checkboxOne').val(' ');
    }
});
$('#checkboxTwo').click(function () {
    if ($('#checkboxTwo').is(":checked") === true) {
        $('#checkboxTwo').val('CSS');
    } else {
        $('#checkboxTwo').val(' ');
    }
});
$('#checkboxThree').click(function () {
    if ($('#checkboxThree').is(":checked") === true) {
        $('#checkboxThree').val('JAVASCRIPT');
    } else {
        $('#checkboxThree').val(' ');
    }
});
$('#checkboxFour').click(function () {
    if ($('#checkboxFour').is(":checked") === true) {
        $('#checkboxFour').val('PHP');
    } else {
        $('#checkboxFour').val(' ');
    }
});
$('#checkboxFive').click(function () {
    if ($('#checkboxFive').is(":checked") === true) {
        $('#checkboxFive').val('LARAVEL');
    } else {
        $('#checkboxFive').val(' ');
    }
});
$('#checkboxSix').click(function () {
    if ($('#checkboxSix').is(":checked") === true) {
        $('#checkboxSix').val('BOOTSTRAP');
    } else {
        $('#checkboxSix').val(' ');
    }
});

function handleSubmit() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const password = document.getElementById('password').value;
    const birth = document.getElementById('birth').value;
    const checkboxOne = document.getElementById('checkboxOne').value;
    const checkboxTwo = document.getElementById('checkboxTwo').value;
    const checkboxThree = document.getElementById('checkboxThree').value;
    const checkboxFour = document.getElementById('checkboxFour').value;
    const checkboxFive = document.getElementById('checkboxFive').value;
    const checkboxSix = document.getElementById('checkboxSix').value;


    // to set into local storage
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("EMAIL", email);
    sessionStorage.setItem("NUMBER", number);
    sessionStorage.setItem("PASSWORD", password);
    sessionStorage.setItem("CHECKBOXONE", checkboxOne);
    sessionStorage.setItem("CHECKBOXTWO", checkboxTwo);
    sessionStorage.setItem("CHECKBOXTHREE", checkboxThree);
    sessionStorage.setItem("CHECKBOXFOUR", checkboxFour);
    sessionStorage.setItem("CHECKBOXFIVE", checkboxFive);
    sessionStorage.setItem("CHECKBOXSIX", checkboxSix);
    sessionStorage.setItem("BIRTH", birth);


}
