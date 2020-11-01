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

window.addEventListener('load', () => {


    const name = sessionStorage.getItem('NAME');
    const email = sessionStorage.getItem('EMAIL');
    const number = sessionStorage.getItem('NUMBER');
    const password = sessionStorage.getItem('PASSWORD');
    const birth = sessionStorage.getItem('BIRTH');
    const checkboxOne = sessionStorage.getItem('CHECKBOXONE');
    const checkboxTwo = sessionStorage.getItem('CHECKBOXTWO');
    const checkboxThree = sessionStorage.getItem('CHECKBOXTHREE');
    const checkboxFour = sessionStorage.getItem('CHECKBOXFOUR');
    const checkboxFive = sessionStorage.getItem('CHECKBOXFIVE');
    const checkboxSix = sessionStorage.getItem('CHECKBOXSIX');

    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-email').innerHTML = email;
    document.getElementById('result-number').innerHTML = number;
    document.getElementById('result-password').innerHTML = password;
    document.getElementById('result-birth').innerHTML = birth;
    document.getElementById('result-one').innerHTML = checkboxOne;
    document.getElementById('result-two').innerHTML = checkboxTwo;
    document.getElementById('result-three').innerHTML = checkboxThree;
    document.getElementById('result-four').innerHTML = checkboxFour;
    document.getElementById('result-five').innerHTML = checkboxFive;
    document.getElementById('result-six').innerHTML = checkboxSix;

})
