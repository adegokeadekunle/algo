

function mergeElement() {
    let array1 = [1, 2, 4, 5, 10, 6, 3];
    let array2 = [0, 8, 19, 90, 11, 16, 13];

    const mergeArr = array1.concat(array2)
        .sort(function (a, b) { return a - b });

    console.log(mergeArr);
}
mergeElement();
