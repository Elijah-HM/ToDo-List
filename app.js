// Steps (write down steps of what you want to do) 
// 1. user adds task in textbox then click on button
// 2. We capture the text in th input(textbox)
// 3. display that text on the screen 
  // create the new li element
  // add the usertext to the element
  // add the element as a child to the ul
// 4. when delete is clicked, delete the item 
  // add a delete button
  // delete button on click should remove the item
    // add event listener for delete button
    // delete the parent
// 5. after item is added clear the textfield
// 6. auto focus after we add a item. 
// 7. enable enter-to-submit. (when ever we hit enter the whole page refresh. we dont want that)

document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelector('form.add');
  const addButton = document.querySelector('#addButton');
  const itemToAdd = document.querySelector('#itemToAdd');
  const ul = document.querySelector('.todo');

  form.addEventListener('submit', function(event){
    event.preventDefault();
    if(itemToAdd.value){
      const newItem = createItem(itemToAdd.value)
      ul.appendChild(newItem);
      itemToAdd.value = '';
      itemToAdd.focus();
    }
  })

  function createItem(val){
    const item = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button')

    span.textContent = val;
    delBtn.textContent = 'Delete';

    item.appendChild(span)
    item.appendChild(delBtn)
    delBtn.classList.add('btn-link')

    delBtn.addEventListener('click', function(){
        item.parentNode.removeChild(item);
    })

    return item;
  }
})

