const array = Array.from({ length: 1000 }, () =>
    Math.floor(Math.random() * 100)
)

const mergeSort = (arr) => {
    // don't sort if we've recursively split the array to the individual nums
    if (arr.length <= 1) return arr

    let i = 0
    let j = 0
    let k = 0

    const sortedArr = []

    const arrLeft = mergeSort(arr.slice(0, Math.round(arr.length / 2)))
    const arrRight = mergeSort(arr.slice(Math.round(arr.length / 2)))

    while (i < arrLeft.length && j < arrRight.length) {
        if (arrLeft[i] <= arrRight[j]) {
            sortedArr[k++] = arrLeft[i++]
        } else {
            sortedArr[k++] = arrRight[j++]
        }
    }

    while (i < arrLeft.length) {
        sortedArr[k++] = arrLeft[i++]
    }

    while (j < arrRight.length) {
        sortedArr[k++] = arrRight[j++]
    }
    return sortedArr
}

console.log(mergeSort(array))
