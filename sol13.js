function getUniqueNumbers(numbers) {
    const uniqueNumbers = numbers.reduce((unique, num) => {
        if (!unique.includes(num)) {
            unique.push(num);
        }
        return unique;
    }, []);

    return uniqueNumbers;
}

const numbersArray = [1, 2, 3, 4, 2, 3, 5, 6, 7, 5, 8, 9, 1, 10];

const uniqueNumbers = getUniqueNumbers(numbersArray);

console.log("Unique numbers:", uniqueNumbers);
