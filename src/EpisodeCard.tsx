import { Episode } from "./interfaces";

interface EpisodeProps{
  ep: Episode;
}

function EpisodeCard({ep}: EpisodeProps): React.ReactElement {
  //at later time put in prop for what type of cards it uses.
  return (
    <div>
      {ep.episode}: {ep.name}
    </div>
  )
}

export default EpisodeCard;