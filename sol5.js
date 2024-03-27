function printTableOf3() {
    for (let i = 1; i <= 10; i++) {
        let result = "3";
        let sum = 3;
        for (let j = 2; j <= i; j++) {
            result += "+" + "3";
            sum += 3;
        }
        console.log(`3*${i}=${result}=${sum}`);
    }
}

printTableOf3();
