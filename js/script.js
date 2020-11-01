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


