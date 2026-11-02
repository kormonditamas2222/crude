import type { SetStateAction } from "react";

interface headerProps {
    setOldal: React.Dispatch<SetStateAction<string>>
}

export function Header(props: headerProps) {
    return (
        <header className="mb-3">
            <h1>Csokoládék</h1>
            <div className="row">
                <div className="col-sm-4">
                    <button className="btn btn-primary" style={{width: "100%"}} onClick={() => props.setOldal("kezdőlap")}>Kezdőlap</button>
                </div>
                <div className="col-sm-4">
                    <button className="btn btn-primary" style={{width: "100%"}} onClick={() => props.setOldal("admin")}>Admin</button>
                </div>
                <div className="col-sm-4">
                    <button className="btn btn-primary" style={{width: "100%"}} onClick={() => props.setOldal("moderátor")}>Moderátor</button>
                </div>
            </div>
        </header>
    )
}