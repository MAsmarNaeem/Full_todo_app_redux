import Todos from "@/components/Todos";
import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

interface Todotype {
  id: number;
  text: string;
}
// interface todostate
// {
//   todos:Todo[]
// }

// const initialState:todostate={
//   todos:[]
// }

const Todo = createSlice({
  name: "Todo",
  initialState: { todos: [] },

  reducers: {
    addvalue: (state: any, action): any =>
      //console.log(state);

      {
        console.log("state is :", state, "action is :" + action.payload);
        let newstate = {
          id: state.todos.length + 1,
          text: action.payload,
        };
        state.todos.push(newstate);
        //  return newstate

        // return newstate;
        // setTodos([newTodo, ...todos]);
        //  let newstate =
        //     {
        //      ...state,
        //     // Todo: [action.payload,...state.Todo],
        //     id: state.todos.length + 1,
        //     text:action.payload

        //     }
        //      state.todos.push(newstate)

        // return newstate;
      },
    // For delete Todo
    // deletevalue:(state:any,action:any)=>
    // {
    //   console.log(state.todos)
    //   console.log(action.payload)
    //   // const item=action.payload
    //   // const mytodos=state.todos
    //   //   return mytodos.filter((todoss:any)=>{todoss.id!=item.id})
    // }

    deletevalue: (state, action) => {
      const item = action.payload;
      const mytodos: any = state.todos.filter(
        (todoss: any) => todoss.id !== item.id
      );
      return { ...state, todos: mytodos };
    },
    // updatevalue: (state: any, action): any => {
    //   console.log("action.payload", action.payload);
    //   console.log("action.payload", state.todos);

    //   // return state.map((todo: any): any => {
    //   //   console.log("action.payload", action.payload);
    //   //   if (todo.id === action.payload.id) {
    //   //     return {
    //   //       ...todo,
    //   //       text: {
    //   //         ...todo.text,
    //   //         value: action.payload.text,
    //   //       },
    //   //     };
    //   //   }
    //   //   return todo;
    //   // });
    //   //   let arraylist=state.todos.map((state:any,action:any)=>
    //   //   {
    //   //     console.log("state is :",state.text);
    //   //       //     if (index === action.payload) {
    //   // //       return {
    //   // //         ...todo,
    //   // //         text: action.payload.text
    //   // //       };
    //   // //     }
    //   // //     return todo;
    //   // //   });
    //   // //   return updateArray;

    //   //   }

    //   //   )
    // },
    updatevalue: (state: any, action): any => {
      let updatedItem = {
        text: action.payload.text,
      };
      let updatedTodos = state.todos.map((todo: any) => {
        if (action.payload.id == todo.id) {
          return updatedItem;
        } else {
          return todo;
        }
      });
      let newState = {
        ...state,
        todos: updatedTodos,
      };

      return newState;
    },
  },
});

export const { addvalue, deletevalue, updatevalue } = Todo.actions;
//export default Todo.reducer;
export default combineReducers({
  Todo: Todo.reducer,
});
