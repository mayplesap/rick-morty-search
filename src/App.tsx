import React, {useState} from 'react';
import CardContainer from './CardContainer';
import SearchForm from './SearchForm';
import RickAndMortyApi from './api';
import "bootstrap/dist/css/bootstrap.css"

function App(): React.ReactElement {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function searchShow(searchTerm: string){
    console.log("IN SEARCHSHOW FUNCTION")
    setIsLoading(true);
    console.log("Search term", searchTerm)
    let resultFromAPI = await RickAndMortyApi.getAll(searchTerm);
    console.log("RESULTS FROM API", resultFromAPI);
    setCharacters(resultFromAPI.characters.results);
    setLocations(resultFromAPI.locations.results);
    setEpisodes(resultFromAPI.episodes.results);
    setIsLoading(false);
  }
  
  console.log("CHARCTESR", characters)
  if(isLoading) return <p>...</p>

  return (
    <div className="App">
      <SearchForm search={searchShow} />
      <CardContainer 
        characters={characters} 
        locations={locations}
        episodes={episodes}/>
    </div>
  );
}

export default App;
