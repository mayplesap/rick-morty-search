interface Episode {
  name: string;
  episode: string;
  id: number;
}

function EpisodeCard(props: {ep: Episode}): React.ReactElement {
  //at later time put in prop for what type of cards it uses.
  return (
    <div>
      {props.ep.episode}: {props.ep.name}
    </div>
  )
}

export default EpisodeCard;