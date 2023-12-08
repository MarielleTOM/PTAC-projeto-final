import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Componentes/Header";
import Card from "../Componentes/Card"
export default function EmDestaque() {
  const destaques = JSON.parse(localStorage.getItem("Lista"));
  const aparecerDestaque = destaques.slice(-3)
console.log(aparecerDestaque)
  return (
    <div>
      <Header />
      <Card lista={aparecerDestaque} />

    </div>
  );
}