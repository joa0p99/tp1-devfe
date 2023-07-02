import React, { useState } from "react";
import "../estilo.css";

function Lista() {
    const [frutaSelecionada, setFrutaSelecionada] = useState("");
    const [frutas, setFrutas] = useState(["Banana", "Abacaxi", "Morango", "Laranja"]);
    const [novaFruta, setNovaFruta] = useState("");

    const handleSelect = (e) => {
        setFrutaSelecionada(e.target.value);
    };

    const handleAddFruit = () => {
        if (novaFruta !== "") {
            setFrutas([...frutas, novaFruta]);
            setNovaFruta("");
            alert('Fruta adicionada com sucesso!');
        }
    };

    return (
        <div >
            <h1>Você está na tela Lista!</h1>
            <div className="engloba">
            <select  className="select-frutas espaco-input" value={frutaSelecionada} onChange={handleSelect}>
                <option className="t">Selecione uma fruta</option>
                {frutas.map((fruta) => (
                    <option key={fruta} value={fruta}>
                        {fruta}
                    </option>
                ))}
            </select>
            <br></br>
            <button className="btn-exibir-fruta" onClick={() => alert(`A fruta selecionada foi: ${frutaSelecionada}`)}>
                Exibir fruta selecionada
            </button>
            <br></br>
            <input className="espaco-input"
                type="text"
                value={novaFruta}
                onChange={(e) => setNovaFruta(e.target.value)}
            />
            <br></br>
            <button className="btn-adicionar-fruta" onClick={handleAddFruit}>Adicionar fruta</button>
            </div>
        </div>
    );
}

export default Lista;
