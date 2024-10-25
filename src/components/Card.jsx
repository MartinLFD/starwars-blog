import React from "react";
import { Link } from "react-router-dom";

export function Card() {
    return (
        <>
            <div class="card">
                <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to={"/moreinfo"}> Ver info detallada</Link>
                    </div>
            </div>
        </>
    )
}