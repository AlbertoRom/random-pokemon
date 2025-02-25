import { useEffect, useState } from "react";
import { PokemonCry } from './components/PokemonCry'
import './App.css'

export function App(){
    const [index, setIndex] = useState()
    const [pokemon, setPokemon] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [cry, setCry] = useState()

    const getRandomPokemon = async() => {
        const pokemon_id = Math.floor(Math.random() * 151) + 1;
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}`)
            .then(res => res.json())
            .then(data => {
                setIndex('#' + pokemon_id)
                setPokemon(data.forms[0].name[0].toUpperCase() + data.forms[0].name.slice(1))
                setImageUrl(data.sprites.front_default)
                setCry(data.cries.latest)
            })
    }
    
    useEffect(() => {
        getRandomPokemon()
    },[])

    return (
        <main>
            <h1>Random Pokémon</h1>
            <section>
                {index && <p>{index}</p>}
                {imageUrl && <img src={imageUrl} alt={`Front image of ${pokemon}`} />}
                {pokemon && <p>{pokemon}</p>}
                {cry && <PokemonCry cry={cry} />}
            </section>
            <button onClick={getRandomPokemon}>Get another Pokémon</button>
        </main>
    )
}
