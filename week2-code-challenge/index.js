// Select the form, input, list, and buttons
const form = document.getElementById('Add Item');
const input = document.getElementById('Item name');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear-btn');

// Array of the items
const Items = [];

// Add example items to the list
Items.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.textContent = item;

})
   

  // Add an event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const newItem = input.value.trim();

  if (newItem !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = newItem;

    // Add an event listener to the purchased items
    listItem.addEventListener('click', () => {
      listItem.classList.toggle('purchased');
    });

    itemList.appendChild(listItem);
    input.value = '';
  }
});

// Add an event listener to the "Clear List" button
clearButton.addEventListener('click', () => {
  itemList.innerHTML = '';
});
