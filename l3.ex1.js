console.log('ex 1.1.a')
function isPalindrome(word){
    word = word.replace(" ", "");
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    return word === reversedWord;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("nurse"));
console.log(isPalindrome("nurses run"));

console.log('ex 1.replace');
var str = "Welcome to the city." 
console.log(str.replace("the", ""));

console.log('ex 1.2.replace')
var str = "I love my 5 cats"
console.log(str.slice(0, 7));

console.log('ex 1.2.replace')
var str = "I love my 5 cats." 
console.log(str.replace("my 5 ", ""));

console.log('ex 1.reverse')
function reverseString(str) {

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
const result = reverseString('Great weekend!');
console.log(result);