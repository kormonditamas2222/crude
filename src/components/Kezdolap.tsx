import type { SetStateAction } from "react";
import { Header } from "./Header";
import type { Csokolade } from "../type/Csokolade";
import { ChocoCard } from "./ChocoCard";
import { Footer } from "./Footer";

interface kezdolapProps {
    oldal: string;
    changeOldal: React.Dispatch<SetStateAction<string>>;
    csokik: Csokolade[];
    setCsokik: React.Dispatch<SetStateAction<Csokolade[]>>;
}

export function KezdolapEsModerator(props: kezdolapProps) {
    return (
        <div className="container">
            <Header setOldal={props.changeOldal}/>
            <div className="row">
                {props.csokik.map((item, index) => (
                    <ChocoCard key={index} oldal={props.oldal} csoki={item} csokik={props.csokik} setCsokik={props.setCsokik}/> 
                ))}
            </div>
            <Footer/>
        </div>
    )
}