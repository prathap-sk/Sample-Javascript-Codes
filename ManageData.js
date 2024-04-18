/* Often, this data is in the form of an array of objects
items had list of product items
*/

const items = [
    {
        id: 1,
        name: "T-shirt",
        description: "Comfortable cotton t-shirt",
        clothtype: "cotton",
        size: ["S", "M", "L", "XL", "XXL"],
        colors: ["Red", "Blue", "Navy", "Brown", "SkyBlue"],
        price: 550,
        stockavailable: 20,
        customers: [],

    },
    {
        id: 2,
        name: "Formal shirt",
        description: "Comfortable Formal Shirt",
        clothtype: "cotton",
        size: ["S", "M", "L", "XL", "XXL"],
        colors: ["SkyGreen", "Yellow", "Navy", "Brown", "SkyBlue", "White", "Black"],
        price: 499,
        stockavailable: 12,
        customers: [
            {
                id: "203",
                customername: "Ashok Selvan",
                productId: 2314,
                productname: "Formal shirt",
                quantity: 2,
                size: "XL",
                colr: ["Black", "Navy"]
            }
        ]
    },
    {
        id: 3,
        name: "Casual shirt",
        description: "Comfortable casual shirt",
        clothtype: "silk",
        size: ["S", "M", "L", "XL", "XXL"],
        colors: ["Red", "purple", "Navy", "Brown", "orange"],
        price: 645,
        stockavailable: 4,
        customers: [
            {
                id: "204",
                customername: "",
                productId: 2323,
                productname: "Casual shirt",
                quantity: 3,
                size: "M",
                colr: ["Red", "Blue", "purple"]
            }
        ]
    },
]

/* How many items are for sale */

const stockAvailable = (items) => {
    const checkStock = items.filter(item => item.stockavailable > 0);
    return checkStock
}

const stockAvailableItems = stockAvailable(items)
console.log("Stock Available on those items", stockAvailableItems)

/* Count items in the store */

const countItemsInStore = (items) => {
    return items.length;
}

console.log(`Count items in the store --> ${countItemsInStore(items)}`)

/* Which Items is made of cotton */

const findCottonItem = (items) => {
    const response = items.filter((item) => {
        return item.clothtype === "cotton"
    })
    return response
}
console.log("Cotton Items are here", findCottonItem(items))

/* Which items haven't been sold, Check customer list would be empty  */

const findUnsoldItems = (items) => {
    const response = items.filter(item => item.customers.length === 0)
    return response
}
console.log("Unsold Items", findUnsoldItems(items))

/* How much do the jeans cost */

const findJeansPrice = (items) => {
    const response = items.find(item => item.name === "Casual shirt");
    return response.price
}
console.log(`Find the jeans price --> ${findJeansPrice(items)}`)

/* What are the names of ll the items under 499  */

const getItemsUnderPrice = (items) => {
    const response = items.filter((item) => item.price <= 499).map(item => item.name)
    return response
}
console.log(getItemsUnderPrice(items))
console.log(`Get Items under 499 ---> ${getItemsUnderPrice(items)}`)

/* List the description of all items */

const listItemswithDescriptionList = (items) => {
    const response = items.map((item, index) => {
        const { name, description, clothtype, stockavailable } = item;
        return `${index + 1}) ${name}: ${description}, Cloth Type : ${clothtype}, Stock Count : ${stockavailable}`
    })
    console.log(response)
}

console.log(listItemswithDescriptionList(items));