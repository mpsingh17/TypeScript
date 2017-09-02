/*
function showTodo(todo: {title: string, text: string}) {
  console.log(todo.title + ': ' + todo.text);
}
let myTodo = {title: 'trash', text: 'Throw trash out'};

showTodo(myTodo);
*/

interface Todo {
  title: string;
  text: string;
}

function showTodo(todo: Todo) {
  console.log(`${todo.title}: ${todo.text}`);
}

let myTodo = {title: 'trash', text: 'Take it outside'};
showTodo(myTodo);