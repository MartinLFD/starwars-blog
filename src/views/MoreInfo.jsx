import React from "react";
import { Link } from "react-router-dom";


export function MoreInfoData() {
    return(
        <>
        Hola a todos , esta es la vista de información detallada 
        <Link to={"/"}> Volver a Home</Link>
        </>
    )
}