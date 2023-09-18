import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( {pokeArr} ) {
  
  const cardList = pokeArr.map((card) => (
    //console.log(card)
    <PokemonCard
      key={card.id}
      name={card.name}
      hp={card.hp}
      sprites={card.sprites}
    />
  ))

  return (

    <Card.Group itemsPerRow={6}>
      {cardList}
    </Card.Group>
  );
}

export default PokemonCollection;
