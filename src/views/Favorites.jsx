import React from "react";
import { Link } from "react-router-dom";
import { Home } from "./Home";

export function Favorites() {
    return(
        <>
        Hola denuevo, soy la sección de favoritos
        <Link to={"/"} className="BackToHome">Volver a Home</Link>
        </>
    )
}