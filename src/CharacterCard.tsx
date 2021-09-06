interface Character {
  name: string;
  id: number;
}

function CharacterCard(props: {character: Character}): React.ReactElement{
  //at later time put in prop for what type of cards it uses.
  return (
    <div>{props.character.name}</div>
  )
}

export default CharacterCard;