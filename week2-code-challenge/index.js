// Select the form, input, list, and clear button elements
const form = document.getElementById('Add Item');
const input = document.getElementById('Item name');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear-btn');

// Add an event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the input field
  const newItem = input.value.trim();

  // Check if the input is not empty
  if (newItem !== '') {
    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = newItem;

    // Add a click event to mark the item as purchased
    listItem.addEventListener('click', () => {
      listItem.classList.toggle('purchased');
    });

    // Append the new item to the list
    itemList.appendChild(listItem);

    // Clear the input field
    input.value = '';
  }
});

// Add an event listener to the "Clear List" button
clearButton.addEventListener('click', () => {
  // Remove all items from the list
  itemList.innerHTML = '';
});




