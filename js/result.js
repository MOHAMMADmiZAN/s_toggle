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
