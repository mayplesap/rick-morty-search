import CharacterCard from "./CharacterCard";
import LocationCard from "./LocationCard";
import EpisodeCard from "./EpisodeCard";

interface Characters {
  name: string;
  id: number;
}
interface Locations {
  name: string;
  dimension: string;
  id: number;
}
interface Episodes {
  name: string;
  episode: string;
  id: number;
}

function CardContainer(props: {characters: Characters[], locations: Locations[], episodes: Episodes[]}): React.ReactElement{
  //at later time put in prop for what type of cards it uses.
  return (
    <div>
      <h2>Characters</h2>
      {props.characters.map(c => (
        <CharacterCard character={c} key={c.id}/>
      ))}
      <h2>Locations</h2> 
      {props.locations.map(l => (
        <LocationCard location={l} key={l.id}/>
      ))}
      <h2>Episodes</h2>
      {props.episodes.map(e => (
        <EpisodeCard ep={e} key={e.id}/>
      ))}
    </div>
  )
}

export default CardContainer;