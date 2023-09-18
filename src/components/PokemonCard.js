import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( {name, hp, sprites} ) {

  const [isToggled, setIsToggled] = useState(false)

  let imageSrc = isToggled ? sprites.back : sprites.front

  function handleClick() {
    setIsToggled(!isToggled)
  }

  return (

    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={imageSrc} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
