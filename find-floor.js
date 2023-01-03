function findFloor(arr, num) {
    let lessThanValues = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i] <= num){
            lessThanValues.push(arr[i]);
        }
    }
    if (lessThanValues.length > 0){
        return lessThanValues[lessThanValues.length - 1];
    } else {
        return -1;
    }
}

module.exports = findFloor