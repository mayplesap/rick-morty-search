interface Location {
  name: string;
  dimension: string;
  id: number;
}

function LocationCard(props: {location: Location}): React.ReactElement {
  //at later time put in prop for what type of cards it uses.
  return (
    <div>{props.location.name}</div>
  )
}

export default LocationCard;