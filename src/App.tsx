import React, { useState } from 'react';
import CardContainer from './CardContainer';
import SearchForm from './SearchForm';
import "bootstrap/dist/css/bootstrap.css";
import {
  useQuery,
  gql
} from "@apollo/client";

function App(): React.ReactElement {
  const[searchTerm, setSearchTerm] = useState("");

  const GET_ALL = gql`
    query {
      characters(filter: {name:"${searchTerm}"}){
        results {
          name
          id
        }
      }
      locations(filter: {name:"${searchTerm}"}){
        results {
          name
          dimension
          id
        }
      }
      episodes(filter: {name:"${searchTerm}"}) {
        results {
          name
          episode
          id
        }
      }
    }
  `;
  const { loading, data } = useQuery(GET_ALL)

  function SearchShow(searchTerm: string): void{
    setSearchTerm(searchTerm);
  }
  
  if (loading) return <p>...</p>

  return (
    <div className="App">
      <SearchForm search={SearchShow} />
      <CardContainer
        characters={data?.characters.results}
        locations={data?.locations.results}
        episodes={data?.episodes.results} />
    </div>
  );
}

export default App;
