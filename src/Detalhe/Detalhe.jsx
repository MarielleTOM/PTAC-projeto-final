import { useParams } from "react-router-dom";
import Card from "../Componentes/Card";

export default function Detalhe() {
    const { id } = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"));

    const atividade = lista.filter((objeto) => {
        if (objeto.id == id) {
            return objeto;
        }
        return null;
    });

    return (
    atividade.map((video) =>
    <div key= {video.id}>
        <p>{video.nomeVideo}</p>
        <p>{video.famoso}</p>
        <p>{video.descricao}</p>
        <p>{video.produtos}</p>
    </div>
    )
)
}