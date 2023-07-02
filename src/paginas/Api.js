import React from 'react';
import "../estilo.css";

class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: null,
            carregando: false,
            error: null,
            inputValue: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleInputChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    async handleButtonClick() {
        this.setState({ carregando: true });
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.inputValue}`);
            if (!response.ok) {
                throw new Error('Não foi possível localizar o Pokémon :/');
            }
            const data = await response.json();
            this.setState({ pokemon: data, carregando: false });
        } catch (error) {
            this.setState({ error: error.message, carregando: false });
        }
    }

    render() {
        const { pokemon, carregando, error, inputValue } = this.state;
        let content;
        if (error) {
            content = <p>{error}</p>;
        } else if (carregando) {
            content = <p>Carregando...</p>;
        } else if (pokemon) {
            content = (
                <div>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <p>Tipo: {pokemon.types.map(type => type.type.name).join(', ')}</p>
                </div>
            );
        } else {
            content =
            <span>
                <p>Entre com o nome ou ID do Pokémon para ver detalhes!</p>
                <p>Por exemplo: pikachu, charizard, psyduck, ou ID entre 1 a 1000</p>

            </span>;
        }
        return (
            <div className="pokemon-search">
                <h1>Você está na tela API!</h1>
                <label>
                    Nome ou ID:
                    <input type="text" value={inputValue} onChange={this.handleInputChange} />
                <button onClick={this.handleButtonClick}>Procurar</button>
                </label>
                {content}
            </div>
        );
    }
}

export default Api;