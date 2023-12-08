import { Link } from "react-router-dom";

export default function Card({ lista }) {
  console.log(lista)
  return (


    lista.map((video) =>
      <div class="cardMarizinha">
        <Link to= {`./Detalhe/${video.id}`}>
        <iframe src={"https://www.youtube.com/embed/" + video.url.slice(17)}
          frameborder="0">
        </iframe>
        <p>{video.nomeVideo}</p>
        </Link>
      </div>

    )



  );
}