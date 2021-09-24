export const TodoList = ({todos}) => {
   return (
       <>
          {todos.map((todo) => (
              <div key={todo.id}>
                 <h3>{todo.title}</h3>
                 <p>{todo.body}</p>
              </div>
          ))}
       </>
   )
}