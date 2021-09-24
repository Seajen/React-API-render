export const UserList = ({users}) => {
   return (
       <>
          {users.map((user) => (
              <div key={user.id}>
                 <h3>{user.name}</h3>
                 <p>{user.email}</p>
              </div>
          ))}
       </>
   )
}
