function findProduct(arr) {
    const arrSum = (arrays) => {
        let product = 1;
        for (const number of arrays) {
            product = product * number;

        }
        return product
    }
    let result = [];
    for (const number of arr) {
        let computeArr = arr.filter(a => a !== number);

        result.push(arrSum(computeArr));
    }
    return result;
}
console.log(findProduct([1, 2, 3, 4, 5]))

