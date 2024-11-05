const todoClassName = 'todo-list_item';



function todoMarkup( value ){
    let todoListItem = document.createElement('li');
    todoListItem.classList.add( todoClassName );
    todoListItem.innerHTML = `
        <span>
          <span class="complete"><i class="fa-solid fa-check"></i></span>
          <span class="todo-title">${value}</span>
        </span>
        <span class="delete"><i class="fa-solid fa-xmark"></i></span>`

    return todoListItem;
}

function addTask() {
    const inputRef = document.querySelector('.data-input');
    const list = document.querySelector('.todo-list')
    const value = inputRef.value;
    
    inputRef.value = "";

    if (value == "" || value == null) {
        alert("Enter Your Task")
        return;
    }


    list.appendChild( todoMarkup( value ) )
};

document.addEventListener('click', function (event) {
    console.dir( event.target )

    if (event.target.matches('.get-data_button')) {
        addTask();
        return;
    };

    if (event.target.closest('.delete')) {
        console.log('delete')

        event.target.closest( todoClassName ).remove();

        return;
    };

    if (event.target.matches( todoClassName ) || event.target.closest(todoClassName)) {
        console.log('complete')
    };
});



// <li class="todo-list_item">
// <span>
//     <span class="complete"><i class="fa-solid fa-check"></i></span>
//     <span class="todo-title">hello world 1</span>
// </span>
// <span class="dlate"><i class="fa-solid fa-xmark"></i></span>
// </li>
// <li class="todo-list_item complete-bg">
// <span>
//     <span class="complete active"><i class="fa-solid fa-check"></i></span>
//     <span class="todo-title crose">hello world 2</span>
// </span>
// <span class="dlate"><i class="fa-solid fa-xmark"></i></span>
// </li>
// <li class="todo-list_item">
// <span>
//     <span class="complete"><i class="fa-solid fa-check"></i></span>
//     <span class="todo-title">hello world 3</span>
// </span>
// <span class="dlate"><i class="fa-solid fa-xmark"></i></span>
// </li>