function func1(arr, skinColor) {
    return arr.some(elem => elem.skincolor === skinColor);
}

function func2(arr, arr2) {
    return arr.concat(arr2);
}

function func3(arr){
    return arr.sort( (el1, el2) => el1.mass - el2.mass);
}
