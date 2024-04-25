/* Map Polyfill Interview Purpose */

// Example of Map Array.map((item)=>{ }) callback consider as item

Array.prototype.customMap = function (callback) {
    let temp = [];

    // Iterating the each element or  item
    for (let i = 0; i < this.length; i++) {
        temp.push(callback(this[i], i, this))
    }

    return temp;
}


// Example Check for map 

const arr = [10, 24, 40, 12];

const result = arr.customMap(item => item * 12);

console.log(result);