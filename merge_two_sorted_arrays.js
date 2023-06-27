// brute force way
// just contact the array and run a bubble sort
// 0(N squared)
let count = 0
const recursiveSort = (array) => {
    count++
    const sortedArray = array
    let sorted = true
    for (let i = 0; i < array.length; i++) {
        const currArrItem = array[i]
        const nextArrItem = array[i + 1]
        if (currArrItem > nextArrItem) {
            sorted = false
            sortedArray[i] = nextArrItem
            sortedArray[i + 1] = currArrItem
        }
    }
    if (sorted) {
        return sortedArray
    } else {
        return recursiveSort(sortedArray)
    }
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 20, 28, 30]
const array2 = [5, 6, 7, 8, 9, 10, 11, 80, 90, 100]
// const sorted = recursiveSort(array1.concat(array2));

const pointerMerge = (array1, array2) => {
    const sortedArray = []
    // index of array1
    let i = 0
    // index of array2
    let j = 0
    // index of sortedArray
    let k = 0

    const array1Len = array1.length
    const array2Len = array2.length

    while (i < array1Len && j < array2Len) {
        if (array1[i] > array2[j]) {
            sortedArray[k++] = array2[j++]
        } else {
            sortedArray[k++] = array1[i++]
        }
    }

    while (i < array1Len) {
        sortedArray[k++] = array1[i++]
    }

    while (j < array2Len) {
        sortedArray[k++] = array2[j++]
    }
    return sortedArray
}
//
const sorted = pointerMerge(array1, array2)
console.log(sorted)
