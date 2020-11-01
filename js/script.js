///// variable ////

//////////// toggle part end/////////////////////
/////// submit button alert/////////////////
// $('.button').click(function () {
//     swal({
//         title: "Are you sure?",
//         text: "Once You Submit, you will not be able to Edit This File!",
//         icon: "warning",
//         buttons: true,
//         dangerMode: true,
//     })
//         .then((willDelete) => {
//             if (willDelete) {
//                 swal("Good! Your Data  has been Submitted!", {
//                     icon: "success",
//                 });
//             } else {
//                 swal("Your Data file is safe!");
//             }
//         });
// })

////////////////////// form action ///////////////////
// with ajax req
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
        $('#checkboxOne').val("");
    }
});
$('#checkboxTwo').click(function () {
    if ($('#checkboxTwo').is(":checked") === true) {
        $('#checkboxTwo').val('CSS');
    } else {
        $('#checkboxTwo').val("");
    }
});
$('#checkboxThree').click(function () {
    if ($('#checkboxThree').is(":checked") === true) {
        $('#checkboxThree').val('JAVASCRIPT');
    } else {
        $('#checkboxThree').val("");
    }
});
$('#checkboxFour').click(function () {
    if ($('#checkboxFour').is(":checked") === true) {
        $('#checkboxFour').val('PHP');
    } else {
        $('#checkboxFour').val("");
    }
});
$('#checkboxFive').click(function () {
    if ($('#checkboxFive').is(":checked") === true) {
        $('#checkboxFive').val('LARAVEL');
    } else {
        $('#checkboxFive').val("");
    }
});
$('#checkboxSix').click(function () {
    if ($('#checkboxSix').is(":checked") === true) {
        $('#checkboxSix').val('BOOTSTRAP');
    } else {
        $('#checkboxSix').val("");
    }
});

// response part ///
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


