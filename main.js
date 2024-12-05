function calcLetters(str, str1) {
    if (typeof(str) == "string") {
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
    } else {
        console.log("Error input");
    }
}

const userWord = prompt(`Провверку двух слов, являются ли они анаграммами
(рекомендую для первой проверки слово "кабан")`).toLowerCase();
const userWord1 = prompt(`Ваше первое слово ${userWord}, впишите второе слово
(рекомендую для первой проверки слово "банка")`).toLowerCase();

function checkWords() {
    const isAnagram = calcLetters(userWord, userWord1);
    if (isAnagram == true) {
        console.log(`слово "${userWord}" и "${userWord1}" являются анаграммами`);
        return
    }
    console.log(`слово "${userWord}" и "${userWord1}" не являются анаграммами`);
}

checkWords()

