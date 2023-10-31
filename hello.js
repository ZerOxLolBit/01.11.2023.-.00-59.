function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5];
const target = 0;
const resultLinear = linearSearch(arr, target);

if (resultLinear !== -1) {
    console.log(`Елемент ${target} знайден в індексі ${resultLinear}`);
} else {
    console.log(`Елемент ${target} не знайдено в массиві`);
}

//---------------------------------------------------

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Елемент не знайдено
}
const arrBinary = [1, 2, 3, 4, 5];
const targetBinary = 0;
const resultBinary  = binarySearch(arrBinary, targetBinary);

if (resultBinary !== -1) {
    console.log(`Елемент ${targetBinary} знайден в індексі ${resultBinary}`);
} else {
    console.log(`Елемент ${targetBinary} не знайдено в массиві`);
}