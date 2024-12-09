// Select the form, input, list, and buttons
const form = document.getElementById('Add Item');
const input = document.getElementById('Item name');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear-btn');

// Prepopulate the list with some example items
const Items = [];

// Add example items to the list
Items.forEach((item, index) => {
  const listItem = document.createElement('li');
  listItem.textContent = item;

  // Mark 'Bread' and 'Eggs' as purchased by default
  if (index === 1 || index === 2) {
    listItem.classList.add('purchased');
  }

  // Add click event to toggle purchased state
  listItem.addEventListener('click', () => {
    listItem.classList.toggle('purchased');
  });

  // Append to the list
  itemList.appendChild(listItem);
});

// Add an event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const newItem = input.value.trim();

  if (newItem !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = newItem;

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


