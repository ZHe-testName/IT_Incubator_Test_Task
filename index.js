'use strict';

const textInput = document.querySelector('.text-input'),
    searchButton = document.querySelector('.search-button');

//task 5
const objectsArr = [
    {
        name: 'Zheka',
        age: 30,
    },

    {
        name: 'Toha',
        age: 23,
    },

    {
        name: 'Sashka',
        age: 17,
    },

    {
        name: 'Boris',
        age: 50,
    },
];

function pseudoSearchFunc(){
    let alertText = textInput.value;

    //task 4
    if (alertText.toLowerCase() === 'google'){
        alertText = 'Yandex круче. Но это не точно.)';
    };

    setTimeout(() => {
        //task 5
        console.log(objectsArr[0].name);

        alert(alertText);
    }, 3000);
};

//task 6
function superSum(numA, numB){
    numA = +numA;
    numB = +numB;

    if (numA !== numA || numB !== numB){
        alert('Вводите только числа, пожалуйста.');

        return;
    };

    alert(numA + numB);
};

//task 9
function findMax(arr){
    return arr.sort((a, b) => a - b)[arr.length - 1];
};

//task 3

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter'){
        pseudoSearchFunc();
    };
});

searchButton.addEventListener("click", () => {
    pseudoSearchFunc();
});

// superSum(2, '8');

//task 7
const numsArr = [4, 4, 9, 1, 21, 2, 5, 1089];

let min = 0,
    max = 0;

for(let i = 1; i < numsArr.length; i++){
    if (i === 1){
        if (numsArr[i - 1] > numsArr[i]){
            [max, min] = numsArr;

            continue;
        };

        [min, max] = numsArr;

        continue;
    };

    if (max < numsArr[i]){
        max = numsArr[i];
    };

    if (min > numsArr[i]){
        min = numsArr[i];
    };
};

console.log(max, min);

//task 8
let a = "XXX"; 
let b = "YYY";

[a, b] = [a, b].reverse();

console.log(a, b);

//task 9
console.log(findMax(numsArr));

