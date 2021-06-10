// Todo component is imported
import Todo from './Todo'
// List component takes a todos prop and returns a list of Todo components with todo props and unique key props.
const List = ({ todos }) => {
    return (
        <div>
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}
// List is made public
export default List

