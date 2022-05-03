const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, 
    {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000} 
]

const sorted = item.sort((a, b) => {
    return a.price - b.price
});

let lowPrice = sorted[0]
let highPrice = sorted[item.length - 1]


const total = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].price;    
    }

    return total;
}

const totalExcept = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price >= 10) {
            total += arr[i].price; 
        }   
    }

    return total;
}

console.log("1.the cheapest product in the array: " + lowPrice.name + ", with the price of: " + lowPrice.price + " dollars");
console.log("2.the expensive product in the array: " + highPrice.name + ", with the price of: " + highPrice.price + " dollars");
console.log("3.Total price of all products combined: " + total(item) + " dollars");
console.log("4. Total price of all products combined, except products under 10 dollar: " + totalExcept(item) + " dollars");
