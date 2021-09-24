export const CommentList = ({comments}) => {
   return (
       <>
          {comments.map((comment) => (
              <div key={comment.id}>
                 <h3>{comment.title}</h3>
                 <p>{comment.body}</p>
              </div>
          ))}
       </>
   )
}