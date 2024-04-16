import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/todo";

describe("Testing todos", () => {
    test("it should add todo to list", () => {
    
    //Assign 
    const todoText: string = "Spela Minecraft";
    const theList: Todo[] = [];
    const lengthTodoText = todoText.length;

    //Act 
    addTodo(todoText, theList);

    //Assert
    expect(theList.length).toBeGreaterThan(0);
    expect(lengthTodoText).toBeGreaterThan(2);
    });

test("it should be marked as done correctly", () => {
    //Assign 
    const todo: Todo = {text: "Spela Tekken 8", done: false };
    //Act 
    changeTodo(todo)
    //Assert
    expect(todo.done).toBeTruthy();
    });
    test("it should remove all todos from the list", () => {
        //Assign 
        const todosCount = 5;
        const todos: Todo[] = [];
    
        for (let i = 1; i <= todosCount; i++) {
            todos.push({ text: `Todo ${i}`, done: i % 2 === 0 });
        }
    
        //Act
        removeAllTodos(todos);
    
        //Assert 
        expect(todos.length).toBe(0);
    });
});

