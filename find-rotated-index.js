function findRotatedIndex(arr, num) {
    for (i = 0; i < arr.length; i++){
        if (arr[i] === num){
            return i;
        }
    }
    return -1;
}

module.exports = findRotatedIndex