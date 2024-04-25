/*
Reduce pollyfill method
()=>{}   - Callback
Syntax = arr.reduce(()=>{},initialvalue)
arr.reduce((acc,current,index,arr)=>{},initialValue)
*/

Array.prototype.customReduce = function (cb, initialValue) {
    var accumulator = initialValue;
    /* Initial value is important to declare after the callback ends
    if Initail value provides executes this condition "cb(accumulator, this[i], i, this)" rather than executes this one "this[i]"
    */
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
    }

    return accumulator
}

// Example of reduce() method

const arr = [123, 76, 54, 987, 84];

// Normal Reduce() example

const normalReduceExample = arr.reduce((acc, current) => {
    return acc + current
}, 0)

console.log(normalReduceExample)

// Custom Reduce() example

const customReduceExample = arr.customReduce((acc, current) => {
    return acc + current
}, 0)

console.log(customReduceExample);

