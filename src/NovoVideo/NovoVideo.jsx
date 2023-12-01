import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Componentes/Header";
export default function NovoVideo() {

    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [lista, setLista] = useState(listaLocalStorage || []);
    const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
    const [nomeVideo, setNomeVideo] = useState("");
    const [url, setUrl] = useState("");
    const [famoso, setFamoso] = useState("");
    const [descricao, setDescricao] = useState("");
    const [produtos, setProdutos] = useState("");

    useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) }, [lista]);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            id: id, nomeVideo: nomeVideo, url: url, famoso: famoso, descricao: descricao, produtos: produtos
        }]);
        setId(id + 1);
        setNomeVideo("");
        setUrl("");
        setFamoso("");
        setDescricao("");
        setProdutos("");

    }

    return (
        <div>
            <Header />

            <form onSubmit={salvar}>
                <p>Nome do Video:</p>
                <input type="text" placeholder="NomeVideo" aria-label="default input example" value={nomeVideo}
                    onChange={(e) => setNomeVideo(e.target.value)} />

                <p>Famoso:</p>
                <input type="text" placeholder="Famoso" aria-label="default input example" value={famoso}
                    onChange={(e) => setFamoso(e.target.value)} />

                <p>Descrição:</p>
                <input type="text" placeholder="Descicao" aria-label="default input example" value={descricao}
                    onChange={(e) => setDescicao(e.target.value)} />

                <p>Prosutos usados:</p>
                <input type="text" placeholder="Produtos" aria-label="default input example" value={produtos}
                    onChange={(e) => setProdutos(e.target.value)} />

                <br />

                <button class="btn btn-outline-dark">ADD</button>
            </form>

            {lista.map((ativ) =>
                <div key={ativ.id}>
                    <Link to={'/detalhe/${ativ.id}'}>
                        <p>{ativ.nomeVideo}</p>
                    </Link>
                    <div>
                        <p> Famoso: {ativ.famoso}, Descrição: {ativ.descricao}, Produtos usados: {ativ.produtos} </p>
                        <br />
                    </div>
                </div>
            )}

        </div>
    );
}