'use strict';

const textInput = document.querySelector('.text-input'),
    searchButton = document.querySelector('.search-button');

function pseudoSearchFunc(){
    let alertText = textInput.value.toLowerCase();

    if (alertText === 'google'){
        alertText = 'Yandex круче. Но это не точно.)';
    };

    alert(alertText);
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        pseudoSearchFunc();
    };
});

searchButton.addEventListener("click", () => {
    pseudoSearchFunc();
});
