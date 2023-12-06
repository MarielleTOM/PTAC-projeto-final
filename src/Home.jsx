import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Componentes/Header"
import Card from "./Componentes/Card";
export default function Home(){

  const lista = JSON.parse(localStorage.getItem("Lista"))

    return(
    
        <div>
          <Header/>
          <Card lista={lista}/>
        </div>
     );
}