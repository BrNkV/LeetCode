/**
 * You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.

 

Example 1:

Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.
Example 2:

Input: s = "", t = "y"
Output: "y"
 

Constraints:

0 <= s.length <= 1000
t.length == s.length + 1
s and t consist of lowercase English letters.

"abcd"
"abcde"
""
"y"
[ 'a' ] [ 'a', 'a' ] - not complete
 */

//1 alert( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру
//Для того, чтобы проверить, входит ли одна строка в другую — используется встроенная функция includes

function findTheDifference(s: string, t: string): string {
    type strArr = string[];
    let sArr: strArr = s.split('');
    let tArr: strArr = t.split('');

    //сравнить длину и по большему пустить цикл
    // при -1 найден

    for (let i = 0; i < sArr.length; i++) {
        if(tArr.includes(sArr[i]) == false){
            return sArr[i]
        }
    }

    for (let i = 0; i < tArr.length; i++) {
        if(sArr.includes(tArr[i]) == false){
            return tArr[i]
        }
    }

    console.log(sArr, tArr);

};

// посчитать ВСЕ элементы, тот который будет 1 - вернуть , остальные должны быть по 2 !! также проверить на пустоту