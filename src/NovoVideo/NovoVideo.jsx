import React from "react";
import { useState, useEffect } from "react";
import Header from "../Componentes/Header";
export default function NovoVideo() {

    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || []
    const [lista, setLista] = useState(listaLocalStorage);
    const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
    const [nomeVideo, setNomeVideo] = useState(""); 
    const [url, setUrl] = useState("");
    const [famoso, setFamoso] = useState("");
    const [descricao, setDescricao] = useState("");
    const [produtos, setProdutos] = useState("");

    useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) }, [lista]);
    console.log(lista)

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

                <p>URL do Video:</p>
                <input type="text" placeholder="Url" aria-label="default input example" value={url}
                    onChange={(e) => setUrl(e.target.value)} />

                <p>Famoso:</p>
                <input type="text" placeholder="Famoso" aria-label="default input example" value={famoso}
                    onChange={(e) => setFamoso(e.target.value)} />

                <p>Descrição:</p>
                <input type="text" placeholder="Descicao" aria-label="default input example" value={descricao}
                    onChange={(e) => setDescricao(e.target.value)} />

                <p>Produtos usados:</p>
                <input type="text" placeholder="Produtos" aria-label="default input example" value={produtos}
                    onChange={(e) => setProdutos(e.target.value)} />

                <br />
                 
                <button class="btn btn-outline-dark">ADD</button>
            </form>

            <button class="btn btn-outline-dark" onClick={() => remover (ativ.id)}>Remover</button>
        </div>
    );
}