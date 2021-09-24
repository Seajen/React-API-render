export const AlbumList = ({albums}) => {
   return (
       <>
          {albums.map((album) => (
              <div key={album.id}>
                 <h3>{album.title}</h3>
                 <p>{album.body}</p>
              </div>
          ))}
       </>
   )
}