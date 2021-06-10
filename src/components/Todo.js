// Todo component takes a todo prop and renders the item that was passed down. 
const Todo = ({ todo }) => {
    return (
        <div>
            <h2>{todo.item}</h2>
        </div>
    )
}
// Todo is made public
export default Todo

