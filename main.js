function calcLetters(str, str1) {

    const result = {};

    for (let i = 0; i < str.length; i++) {
        const letter = str[i];

        if (result[letter]) {
            result[letter]++;
        } else {
            result[letter] = 1;
        }
    }

    for (let i = 0; i < str1.length; i++) {
        const letter = str1[i];

        if (result[letter]) {
            result[letter]--;
        } else {
            result[letter] = 1;
        }
    }

    for (const key in result) {
        if (result[key] !== 0) {
            return false;
        } 
    }
    return true;
}


function checkWords() {
    const userWord = prompt(`Проверка двух слов, являются ли они анаграммами
        (рекомендую для первой проверки слово "кабан")`).toLowerCase();
    if (typeof(userWord) !== "string" || userWord == "" || !isNaN(userWord)) {
        document.getElementById('resultUserAnagram').innerText = `Error input`;
        return; 
    }
    const userWord1 = prompt(`Ваше первое слово "${userWord}", впишите второе слово
        (рекомендую для первой проверки слово "банка")`).toLowerCase();
    if (typeof(userWord1) !== "string" || userWord1 == "" || !isNaN(userWord1)) {
        document.getElementById('resultUserAnagram').innerText = `Error input`;
        return; 
    }

    const isAnagram = calcLetters(userWord, userWord1);
    if (isAnagram == true) {
        document.getElementById('resultUserAnagram').innerText = `слово "${userWord}" и "${userWord1}" являются анаграммами`;
        return
    }
    document.getElementById('resultUserAnagram').innerText = `слово "${userWord}" и "${userWord1}" не являются анаграммами`;
}


function questionArray() {
    const userAnswer = +prompt("Введите количество чисел которое вы хотите внести в массив для сортировки");
    const userArray = [];
    if (isNaN(userAnswer)) {
        document.getElementById('resultUser').innerText = `Error input`;
        document.getElementById('resultUserSorted').innerText = ``;
        return;
    }
    for (i = 0; i < userAnswer; i++) {
        let userNumber = +prompt(`Введите ${i + 1} число`);
        if (isNaN(userNumber)) {
            document.getElementById('resultUser').innerText = `Error input`;
            document.getElementById('resultUserSorted').innerText = ``;
            return;
        }
        userArray.push(userNumber);
    }
    function sort(array) {
        let numbersCopy = [...userArray];
    
        for (q = 0; q < numbersCopy.length; q++) {
            for (i = 0; i < numbersCopy.length - 1; i++) {
                let a = numbersCopy[i];
                let b = numbersCopy[i + 1]
                if (a > b) {
                    let temp = a;
                    a = b;
                    b = temp
                }
                numbersCopy[i] = a;
                numbersCopy[i + 1] = b;
            }
        }
        return numbersCopy
    }
    const sortedNumbers = sort(userArray);

    document.getElementById('resultUser').innerText = `Значение которые вы ввели: [${userArray}]`;
    document.getElementById('resultUserSorted').innerText = `Отсортированные значение: [${sortedNumbers}]`;
}







