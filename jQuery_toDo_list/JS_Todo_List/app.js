const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function () {
    var para = document.createElement('p')
    para.classList.add('para-styling');
    para.innerText = inputField.value;
    toDoContainer.appendChild(para);
    inputField.value = "";

    para.addEventListener('click', function(){
        para.style.textDecoration = "line-through";
    })
    para.addEventListener('dblclick', function(){
        toDoContainer.removeChild(para);
    })

})