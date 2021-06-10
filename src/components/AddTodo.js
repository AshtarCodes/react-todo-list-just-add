// import useState hook to initialize a stateful functional component
import { useState } from 'react'
// AddTodo receives the onAdd event handler method as a prop
const AddTodo = ({ onAdd }) => { 
    // item state is set to an initial value of "" to represent an empty input
    const [item, setItem] = useState('')
// onSubmit form event handler prevents submission, and instead passes the value of the input at the time of submission, to the onAdd event handler in the App component
    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({item})
        // the input field and item is reset to an empty string  
        setItem('')
    }
    // rendered is a form with the onSubmit event listener and event handler, an input with item as a value and an onChange event listener callback which sets the state of item on each keystroke. 
    return (
        <form onSubmit={onSubmit}>
            <label>Add Todo:</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                value={item}
                onChange={ (e) => setItem(e.target.value)}
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}
// AddTodo is made public
export default AddTodo
