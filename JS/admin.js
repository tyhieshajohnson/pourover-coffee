// products:
// variable
let items = []
// all products need to be saved in the admin page and it will be iterated to other pages
let object1 = {
    id: 1,
    name: 'Nike Sneaker',
    description: "Airforce 1",
    price: 100,
    url: 'https://i.postimg.cc/65Kg26W8/sneakers.png',
}

// contructor function
function constructor (id, name, description, price, url) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.url = url;
}

// creating the object
let item2 = new constructor(2, "Airforce 1", 200, 'https://i.postimg.cc/65Kg26W8/sneakers.png')

// pushing intems into an array storing
items.push(object1, item2); 

// items is the 'key' and the name of the array here
// how to store in local storage:
localStorage.setItem('items',JSON.stringify(items));

// the reason for this is to add or reload the object in the localStorage

// sets the array from local storage to to array (item) in code
items = JSON.parse(localStorage.getItem('items'));

// use queryselector to display the information
let table = document.querySelector('table');
// looping through every object in the array (.map)
// returning items and the index of the object
let products = items.map(function(item, index) {
    console.log(item);
    console.log(index);
    return `
    <tr>
    <td>${item.name}</td>
</tr
`
})
table.innerHTML = products;