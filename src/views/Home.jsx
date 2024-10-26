import React from "react";
import { Navbar } from "../components/Navbar";
import { Characters } from "../components/character/Characters";
import { Planets } from "../components/planet/Planets";
import { Starships } from "../components/starship/Starships";
import { Vehicles } from "../components/vehicle/Vehicles";


export function Home() {
    return (
        <>
            < Navbar />

            <div className="container">
                <h1 className="m-5">Characters</h1>
                < Characters />
                <h1 className="m-5">Planets</h1>

                < Planets />
                <h1 className="m-5">Vehicles</h1>
                < Vehicles />
                <h1 className="m-5">Starships</h1> 
                < Starships />
            </div>
        </>
    )
}