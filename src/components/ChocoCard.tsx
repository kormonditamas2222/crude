import { useState, type SetStateAction } from "react";
import type { Csokolade } from "../type/Csokolade";

interface cardProps {
    csoki: Csokolade;
    oldal: string;
    csokik: Csokolade[];
    setCsokik: React.Dispatch<SetStateAction<Csokolade[]>>;
}

export function ChocoCard(props: cardProps) {
    const [valami, setValami] = useState(props.csoki.haszontalan);
    function torles() {
        props.setCsokik(jelenlegi => jelenlegi.filter(item => item !== props.csoki))
    }
    return (
        <div className="col-sm-4">
            <section className="card" style={{ width: "100%" }}>
                <div className="card-body">
                    <h4 className="card-title">{props.csoki.nev}</h4>
                    <p className="card-subtitle fg-3">Megjelenés éve: {props.csoki.megjelent}</p>
                    <p className="card-text">{props.csoki.leiras}</p>
                    <p className="card-text">Van: {valami ? "✅" : "❌"}</p>
                    {props.oldal == "moderátor" ? <button className="btn btn-warning" onClick={() => setValami(!valami)}>{valami ? "Ne legyen" : "Legyen"}</button> : <></>}
                    {props.oldal == "admin" ? <button className="btn btn-primary">Módosítás</button> : <></>}
                    {props.oldal == "admin" ? <button className="btn btn-danger" onClick={torles}>Törlés</button> : <></>}
                </div>
            </section>
        </div>
    )
} 