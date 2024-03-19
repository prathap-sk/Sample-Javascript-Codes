/* Using In built methods */

const isPalindrome = (str) => {
    // Given string convert to lower case
    const convertLowercase = str.toLowerCase();
    // Palindrome condition
    const validation = str.split("").reverse().join("").toLowerCase();
    //  Optional rendering with normal str and reverse string
    return convertLowercase === validation ? "It's Palindrome" : "It's not Palindrome"

};

console.log(isPalindrome("RaceCar"))

/* Using without In built methods */

const palindrome = (stringValue) => {
    let len = stringValue.length;
    for (let i = 0; i < len / 2; i++) {
        if (stringValue[i] !== stringValue[len - 1 - i]) {
            alert(`Given String "${stringValue}" It's not an Palindrome`);
            console.log(`Given String "${stringValue}" It's not an Palindrome`);
            return;
        }
    }
    alert(`Given String "${stringValue}" It's Palindrome`);
    console.log(`Given String "${stringValue}" It's Palindrome`);
}

palindrome("racecar")
