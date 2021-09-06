import { Character } from "./interfaces";

interface CharacterProps{
  character: Character;
}

function CharacterCard({character} : CharacterProps): React.ReactElement{
  //at later time put in prop for what type of cards it uses.
  return (
    <div>{character.name}</div>
  )
}

export default CharacterCard;