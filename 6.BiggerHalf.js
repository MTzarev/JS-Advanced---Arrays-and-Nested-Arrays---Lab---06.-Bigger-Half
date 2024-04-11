function biggerHalf(array) {
    let newArr = [];

    let sortedArr = array.sort((a, b) => a - b);
    if (sortedArr.length % 2 == 0) {
        for (let i = sortedArr.length / 2; i < sortedArr.length; i++) {
            let el = sortedArr[i];
            newArr.push(el);
        }

    } else {
        for (let i = Math.floor(sortedArr.length / 2); i < sortedArr.length; i++) {
            let el = sortedArr[i];
            newArr.push(el);
        }
    }
    return newArr;


}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));