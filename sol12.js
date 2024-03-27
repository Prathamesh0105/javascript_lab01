function findIntersection(arr1, arr2) {
    const intersection = arr1.filter(num => arr2.includes(num));
    return intersection;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const intersectionArray = findIntersection(array1, array2);

console.log("Intersection of the two arrays:", intersectionArray);
