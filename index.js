// Add your functions here
function map (array,string) {
    return array.map(string)
}

const reduce = (array,fn,startingP = 0) => {
    let result;
    if (startingP > 0) {
        result = array.reduce(fn, startingP);
    }
    else {
        result = array.reduce(fn);
    }return result;
}