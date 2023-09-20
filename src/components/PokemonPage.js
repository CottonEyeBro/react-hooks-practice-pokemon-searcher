import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokeArr, setPokeArr] = useState([])

  const [searchPoke, setSearchPoke] = useState("")
  //console.log(pokeArr)
   
  useEffect(() => {
    fetch("http://localhost:3000/pokemon")
      .then((response) => response.json())
      .then((data) => setPokeArr(data))
  }, [])

  const filteredPokeArr = pokeArr.filter((card) => (
    card.name.toLowerCase().includes(searchPoke.toLowerCase()) || card.hp.toString().includes(searchPoke) // Adds an "or" conditional to both search for card.name as well as card.hp
  ))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setPokeArr={setPokeArr} />
      <br />
      <Search setSearchPoke={setSearchPoke} />
      <br />
      <PokemonCollection pokeArr={filteredPokeArr}/>
    </Container>
  );
}

export default PokemonPage;
