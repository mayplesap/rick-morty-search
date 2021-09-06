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
    setIsLoading(true);
    let resultFromAPI = await RickAndMortyApi.getAll(searchTerm);
    setCharacters(resultFromAPI.characters?.results);
    setLocations(resultFromAPI.locations?.results);
    setEpisodes(resultFromAPI.episodes?.results);
    setIsLoading(false);
  }
  
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
