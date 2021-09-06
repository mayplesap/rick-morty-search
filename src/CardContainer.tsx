import CharacterCard from "./CharacterCard";
import LocationCard from "./LocationCard";
import EpisodeCard from "./EpisodeCard";
import {Episode, Character, Location} from "./interfaces";

interface CharacterProps{
  characters: Character[], 
  locations: Location[], 
  episodes: Episode[]
}

function CardContainer(props: CharacterProps): React.ReactElement{
  //at later time put in prop for what type of cards it uses.
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          <h2>Characters</h2>
          {props.characters
          ?
          props.characters.map(c => (
            <CharacterCard character={c} key={c.id}/>
          ))
          :
          null
          }
        </div>
        <div className="col-4">
          <h2>Locations</h2> 
          {props.locations
          ?
          props.locations.map(l => (
            <LocationCard location={l} key={l.id}/>
          ))
          :
          null
          }
        </div>
        <div className="col-4">
          <h2>Episodes</h2>
          {props.episodes
          ?
          props.episodes.map(e => (
            <EpisodeCard ep={e} key={e.id}/>
          ))
          :
          null
          }
        </div>
      </div>
    </div>
  )
}

export default CardContainer;