export const PhotoList = ({photos}) => {
   return (
       <>
          {photos.map((photo) => (
              <div key={photo.id}>
                 <h3>{photo.title}</h3>
                 <p>{photo.url}</p>
              </div>
          ))}
       </>
   )
}
