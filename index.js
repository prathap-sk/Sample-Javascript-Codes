const str = "Web browsers communicate with web servers using the HyperText Transfer Protocol When you click a link on a web page, submit a form, or run a search, an HTTP request is sent from your browser to the target server"

const convertArr = str.split(" ");

const res = [...convertArr].reduce((acc, current) => {
    acc[current] = acc[current] ? acc[current] + 1 : 1
    return acc
},{})

console.log(res)

const word = "Prathap Tigo";

const space = word.replace(" ","").toLowerCase();

const splitting = space.split("");
console.log(splitting);

const result = [...splitting].reduce((acc, current) => {
    acc[current] = acc[current] ? acc[current] + 1 : 1
    return acc
},{})

console.log(result)