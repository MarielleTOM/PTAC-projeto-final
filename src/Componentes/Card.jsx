
export default function Card({lista}) {
  if(lista == null){
 return "Não tem nada cadastrado"
  }
  console.log(lista)
  return (
    
        
        lista.map((video) =>
      <div>
        <iframe src={"https://www.youtube.com/embed/" + video.url.slice(17)}
        frameborder="0">
        </iframe>
      </div>

      )

      
    
  );
}