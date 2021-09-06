import { Location } from "./interfaces";

interface LocationProps{
  location: Location;
}

function LocationCard({location}: LocationProps): React.ReactElement {
  //at later time put in prop for what type of cards it uses.
  return (
    <div>{location.name}</div>
  )
}

export default LocationCard;