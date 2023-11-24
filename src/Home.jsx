import React from "react";
import { Link } from "react-router-dom";
export default function Home(){

    return(
        <div>
        <h1>Vogue Beauty Secrets</h1>
        <div className="navbar">
             <Link to="/">Home</Link>
             <Link to="/EmDestaque">Em Destaques</Link>
             <Link to="/NovoVideo">Novo Video</Link>
        </div>
        </div>
     );
}