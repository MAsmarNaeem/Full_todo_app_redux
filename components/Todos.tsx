import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useSelector } from "react-redux";
import mytodo from "../hooks/usetodos";
import { useDispatch } from 'react-redux'

const Todos = () => {
  const data = useSelector((store: any) => store.myTodo.Todo);
  console.log("my data", data);
  // if (Array.isArray(data)) {
  //   const result = data.map((item) => {
  //     // perform some action on each item
  //     return item.someProperty;
  //   });
  //   console.log(result);
  // } else {
  //   console.error('Data is not an array.');
  // }
  const todos = data.todos;

  const {
    input,
    setinput,
    edit,
    edittodoinput,
    setedit,
    setvalue,
    setSelectedItemId,
    updatevalue,
    addval,
    deletehandler,
    toggle,
    selectedItemId,
    settoggle,
    updatehandler,
  } = mytodo();
  const dispatch=useDispatch()

  return (
    <div className="container-fluid">
      <div className="row mt-5 justify-content-center">
        <div className="col-md-10">
          <h3>Todos App</h3>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter Todos"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={input}
              onChange={setvalue}
              // onChange={(e) => setinput(e.target.value)}
            />
            <Button
              onClick={addval}
              variant="outline-secondary"
              id="button-addon2"
            >
              Add
            </Button>
          </InputGroup>
        </div>
        {/* check */}
        <div className="text-center">
          {console.log("length", todos.length)}

          <h2>{todos.length == 0 ? "Add somevalues" : "Todos are"}</h2>
          <h2>id : Name</h2>
          {/* display todos */}
          {todos.map((item: any, index: any) => {
            return (
              <div key={index}>
                <h2>
                  {item.id}
                  {" : "}
                  {item.text} {/* For buttons */}
                  <Button
                    onClick={() => deletehandler(item)}
                    variant="outline-secondary"
                    id="button-addon2"
                  >
                    Delete
                  </Button>
                </h2>
                {/* For Second Button */}
                {/* For buttons */}
                <Button
                  onClick={() => updatehandler(item)}
                  variant="outline-secondary"
                  id="button-addon2"
                >
                  Update
                </Button>

                {/* toggle */}
                {selectedItemId === item.id && toggle && (

                  <div className="popup">
                    <h3>Edit task:</h3>
                    <div className="popup-body">
                      <p className="popup-info"></p>
                      <input
                        type="text"
                        className="popup-input"
                        placeholder="Edit your task"
                        value={edit.text}
                        onChange={(e: any) => setedit({...edit,text:e.target.value})}
                      />
                      <button
                        className="popup-btn accept"

                        onClick={() => {edittodoinput(edit);settoggle(false)}}
                      // onClick={() => {
                      //   dispatch(updatevalue(edit));
                      //  // toast.success("Update Todo");
                      //   settoggle(false);
                      // }}
                        //   dispatch(updateTodo(editInput));
                        // //  toast.success("Update Todo");
                        //  settoggle(false);
                      >
                        
                        Submit
                      </button>
                      <button
                        className="popup-btn cancel"
                        onClick={() => {
                          settoggle(false);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  )}
                {/* {toggle ? (
                ) : null} */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todos;
