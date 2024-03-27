function findLongestString(strings) {
    let longestString = "";
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > longestString.length) {
            longestString = strings[i];
        }
    }
    return longestString;
}

const stringsArray = ["apple", "banana", "orange", "grape", "strawberry", "kiwi", "pineapple", "melon", "watermelon", "peach"];

const longestString = findLongestString(stringsArray);

// Print the longest string
console.log("Longest string:", longestString);
