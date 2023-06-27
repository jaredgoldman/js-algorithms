const array = Array.from({ length: 1000 }, (_, index) => index + 1)

const binarySearch = (arr, target) => {
    // establish middle of the array
    let mean = Math.round(arr.length / 2)
    // if the original number is higher than the target.
    let newArray = []
    if (target === arr[mean - 1]) {
        return target
    } else if (target < arr[mean - 1]) {
        newArray = arr.slice(0, mean)
    } else {
        newArray = arr.slice(mean, array.length)
    }
    return binarySearch(newArray, target)
}

console.log(binarySearch(array, 329))
