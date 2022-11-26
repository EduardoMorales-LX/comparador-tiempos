import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

function App() {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    let date = new Date();
    let options1 = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "America/Mexico_City",
        timeZoneName: "long",
    };
    let options2 = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "Asia/Qatar",
        timeZoneName: "long",
    };

    const element = (
        <div className="App">
            <header className="App-header">
                <h1>Hora</h1>
                <h2>
                    Son las{" "}
                    {new Intl.DateTimeFormat("es-mx", options1).format(date)} en
                    CDMX
                </h2>
                <h2>
                    Son las{" "}
                    {new Intl.DateTimeFormat("es-mx", options2).format(date)} en
                    QATAR
                </h2>
            </header>
        </div>
    );

    root.render(element);
}

export default App;
