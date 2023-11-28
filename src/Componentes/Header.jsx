import { useState } from "react";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Vogue Beauty Secrets</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                            <a class="nav-link" href="EmDestaque">Em Destaque</a>
                            <a class="nav-link" href="NovoVideo">Novo Video</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}