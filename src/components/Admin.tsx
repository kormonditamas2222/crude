import type { FormEvent, SetStateAction, SubmitEventHandler } from "react";
import type { Csokolade } from "../type/Csokolade";
import { Header } from "./Header";
import { ChocoCard } from "./ChocoCard";
import { Footer } from "./Footer";

interface adminProps {
    csokik: Csokolade[];
    setCsokik: React.Dispatch<SetStateAction<Csokolade[]>>;
    oldal: string;
    setOldal: React.Dispatch<SetStateAction<string>>;
}

export function Admin(props: adminProps) {
    function ujCsoki(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        props.setCsokik(current => [...current, {nev: data.get("nev")?.toString(), leiras: data.get("leiras")?.toString(), megjelent: parseInt(data.get("megjelent")?.toString()), haszontalan: true}])
        form.reset();
    }
    return (
        <div className="container">
            <Header setOldal={props.setOldal} />
            <div className="row">
                {props.csokik.map((item, index) => (
                    <ChocoCard key={index} oldal={props.oldal} csoki={item} csokik={props.csokik} setCsokik={props.setCsokik} />
                ))}
            </div>
            <form onSubmit={ujCsoki}>
                <label htmlFor="nev" className="form-label">Csokoládé neve</label>
                <input className="form-control" type="text" name="nev"/>
                <label htmlFor="leiras" className="form-label">Leírás</label>
                <textarea name="leiras" className="form-control"></textarea>
                <label htmlFor="megjelent" className="form-label">Első megjelenés éve</label>
                <input type="number" className="form-control" name="megjelent" min="1700"/>
                <button type="submit" className="btn btn-primary">Hozzáadás</button>
            </form> 
            <Footer/>
        </div>
    )
}