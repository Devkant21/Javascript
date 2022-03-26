function area(length) {
    return function (breadth) {
        return length * breadth;
    }
}
console.log(area(5) (10));
    