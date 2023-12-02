// products:
// variable
let items = []
// all products need to be saved in the admin page and it will be iterated to other pages
// DON'T USE THIS FUNCTION
let object1 = {
    // id: 1,
    name: 'Travis Scott',
    description: "Air Jordan 1 High",
    price: 3500,
    url: 'https://i.postimg.cc/Lhd8hK1M/Best-Travis-Scott-Nike-Sneakers-10.webp',
}

// MUST USE A contructor function to create the objects(use PascalCase)
function Constructor (id, name, description, price, url) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.url = url;
}

// creating the object
let item2 = new Constructor(2, "Travis Scott", "Air Jordan 1 Low", 4300, 'https://i.postimg.cc/FzLykv7r/R-2.jpg')

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
    <td>${index+1}</td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.description}</td>
    <td><image src='${item.url}'</td>
    <td><button>Edit</button></td>
    <td><button class="delete" value='${index}'>Delete</button></td>
</tr
`
})
table.innerHTML = products;

// how to style in JavaScript
// table.style.display = 'none';
// table.style.textAlign = 'center';
table.style.backgroundColor = 'grey';
table.style.textDecorationColor = 'white';

// 
let deleteButton = document.querySelector('.delete');
function remove(position){
    // alert('Button Clicked1')
    items.splice(position, 1);
};
table.addEventListener('click', function(){
    // using a conditional statement by declaring the button that is clicked
    if (event.target.classList.contains('delete')){
        // remove()
        // alert('event.targer.value)');
        remove(event.target.value)
    }
})