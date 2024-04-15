import { addTodo } from "../ts/functions";
import { Todo } from "../ts/models/todo";

describe("Testing todos", () => {
    test("it should add todo to list", () => {
    
        //Assign 
    const todoText = "Spela Minecraft";
    const theList: Todo[] = [];
    const lengthTodoText = todoText.length;

//Act 
addTodo(todoText, theList);

//Assert
expect(theList.length).toBeGreaterThan(0);
expect(lengthTodoText).toBeGreaterThan(2);
});
});




// addTodo
// Ska ha en text 
// Längre än i 2 
// Vad händer om det inte funkar 




