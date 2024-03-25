function tri(numb, order) {
    if (order === "asc") {
        return numb.sort((a, b) => a - b);
    } else if (order === "desc") {
        return numb.sort((a, b) => b - a);
    } else {
        return numb;
    }
}

//let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
//console.log("arr", arr);
//console.log("asc", tri([...arr], "asc"));
//console.log("desc", tri([...arr], "desc"));
