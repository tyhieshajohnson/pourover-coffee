let main = document.querySelector('main');
let items = JSON.parse(localStorage.getItem('items'));
let purchased = []; // Initialize the purchased array

main.innerHTML = items.map(function(item, index) {
    return `
        <div>
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p>${item.price}</p>
            <button value='${index}' data-add>Add To Cart</button>
        </div>
        `
}).join('');
// function add(index) {
//     purchased.push(items[index]);
//     localStorage.setItem('items', JSON.stringify(purchased));
// }
// main.addEventListener('click', function(event) {
//     if (event.target.hasAttribute('data-add')) {
//         add(event.target.value);
//     }
// });
