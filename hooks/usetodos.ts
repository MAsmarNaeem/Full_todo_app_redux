


import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {addvalue,deletevalue, updatevalue} from "../store/todoslice"

const App = () => {
         const [toggle, settoggle] = useState(false)
         const [input, setinput] = useState<any>('')
         const[edit,setedit]=useState<any>({})
         const [selectedItemId, setSelectedItemId] = useState(null);
         const dispatch=useDispatch()
         console.log("input:",input);
         
         const setvalue=(e:any)=>
         {
            setinput(e.target.value)
         }
         const addval=()=>
         {
           dispatch(addvalue(input))
           setinput("")

         }
         const deletehandler=(item:any)=>
         {
          dispatch(deletevalue(item))
         }
         const updatehandler=(item:any)=>
         {
          setSelectedItemId(item.id);
          settoggle(!toggle)
          setedit(item)
         }
         const edittodoinput=(item:any)=>
         {
               dispatch(updatevalue(item))
               console.log("log :",item);
               
         }
         
  return (
  
    {
        input,
        setinput,
        selectedItemId,
        setvalue,
        updatevalue,
        setSelectedItemId,
        addval,
        deletehandler,
        toggle,
        settoggle,
        updatehandler,
        edit,
        setedit,
        edittodoinput,

    }

  )
}

export default App