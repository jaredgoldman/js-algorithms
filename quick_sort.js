const array = Array.from({ length: 1000 }, () =>
    Math.floor(Math.random() * 100)
)
const smallArray = [10, 80, 30, 90, 40, 100, 25, 60, 15]

const partition = (arr, start, end) => {
    let j = start
    // MUST BE THE ARRAY VALUE
    const pivot = arr[end]
    for (let i = start; i < end - 1; i++) {
        if (arr[i] < pivot) {
            ;[arr[j], arr[i]] = [arr[i], arr[j]]
            j++
        }
    }
    ;[arr[j], arr[end]] = [arr[end], arr[j]]
    return j
}

const quickSort = (arr, start, end) => {
    if (start < end) {
        const pi = partition(arr, start, end)
        quickSort(arr, start, pi - 1)
        quickSort(arr, pi + 1, end)
    }
}

quickSort(array, 0, array.length - 1)
console.log(array)
