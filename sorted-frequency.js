function sortedFrequency(arr, num) {
    let numCount = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i]=== num){
            numCount += 1;
        }
    }
    if (numCount === 0){
        numCount = -1;
    }
    return numCount;
}

module.exports = sortedFrequency