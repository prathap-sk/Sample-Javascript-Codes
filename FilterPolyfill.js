/* Filter Polyfill Interview Purpose */

// Example of Map Array.map((item)=>{ }) callback consider as item

Array.prototype.customFilter = function (callback) {
    let temp = [];

    // Iterating the each element or item
    // First they had to satisfy the condition and return the value 
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) temp.push(this[i])
    }

    return temp;
}


// Example Check for filter() method 

const arr = [10, 24, 40, 12];

const result = arr.customFilter(item => item >= 20);

console.log(result);