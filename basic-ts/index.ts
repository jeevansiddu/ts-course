import axios from 'axios';

const url ="https://jsonplaceholder.typicode.com/todos/2";

interface Todo{
    id: number;
    title: string;
    completed: boolean;
}
//process is async so will return a promise
axios.get(url).then((res)=>{
    const todo = res.data as Todo;
    const id = todo.id;
    const title=todo.title;
    const completed = todo.completed;
    printTodo(id,title,completed)
  
});

function printTodo(id: number,detail: string,completed: boolean){
 console.log(`
    The Id is ${id}
    The title is ${detail}
    Iscompleted ${completed}
   `)
}