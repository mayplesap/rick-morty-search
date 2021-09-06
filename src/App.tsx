import React, {useState} from 'react';
import CardContainer from './CardContainer';
import SearchForm from './SearchForm';
import RickAndMortyApi from './api';

function App(): React.ReactElement {
  const [characters, setCharacters] = useState([]);
  const [location, setLocation] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function searchShow(searchTerm: string){
    console.log("IN SEARCHSHOW FUNCTION")
    setIsLoading(true);
    let resultFromAPI = await RickAndMortyApi.getAll(searchTerm);
    console.log("RESULTS FROM API", resultFromAPI);
    setCharacters(resultFromAPI.characters);
    setLocation(resultFromAPI.location);
    setEpisodes(resultFromAPI.episodes);
    setIsLoading(false);
  }

  if(isLoading) return <p>...</p>

  return (
    <div className="App">
      <SearchForm search={searchShow} />
      <CardContainer />
    </div>
  );
}

export default App;
