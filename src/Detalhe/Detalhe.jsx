import { useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import Header from "../Componentes/Header";

export default function Detalhe() {
    const { id } = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"));

    const videoMakeUp = lista.filter((objeto) => {
        if (objeto.id == id) {
            return objeto;
        }
        return null;
    });

    return (


        videoMakeUp.map((video) =>
            <div key={video.id}>
                <Header />
                <iframe src={"https://www.youtube.com/embed/" + video.url.slice(17)}
                    frameborder="0">
                </iframe>
                <p>{video.nomeVideo}</p>
                <p>{video.famoso}</p>
                <p>{video.descricao}</p>
                <p>{video.produtos}</p>
            </div>
        )
    )
}