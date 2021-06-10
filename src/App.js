// import useState hook for adding state to function components
import { useState } from 'react'
//importing Header, List and AddToDo components
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"
// declaring the App functional component
function App() {
// initializing state with a useState hook set to an initial value of three to do items. 
  const [todos, setTodos] = useState([
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);
// defining a an event handler that adds a todo item to state by calling setTodos
  const addTodo = (todo) => {
    // a random id is generated
    const id = Math.ceil(Math.random()*100000)
    // todo is spread into an object and stored in newTodo alongside an id for it. 
    const newTodo = {id, ...todo}
    // previous todos are spread into an array, and the newTodo is pushed onto the end.
    setTodos([...todos, newTodo])
  }
// the App component contains a Header with a title prop, AddTodo with an onAdd event to which the addTodo event handler is passed down, and a List with todos prop passed down. 
  return (
    <div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos}/>
    </div>
  );
}
// App is made public
export default App;
