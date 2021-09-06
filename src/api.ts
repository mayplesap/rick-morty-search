import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/graphql?query="

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */
//{character(id:1){name}}
class RickAndMortyApi {

  static async getAll(searchTerm: string){

    let query=`
      query {
        characters(filter: {name:"${searchTerm}"}){
          results {
                  name
          }
        }
        locations(filter: {name:"${searchTerm}"}){
          results {
                  name
            dimension
          }
        }
        episodes(filter: {name:"${searchTerm}"}) {
          results {
            name
            episode
          }
        }
      }
    `

    let res = await axios.get(`${BASE_URL}${query}`)
    return res.data;
  }

}

export default RickAndMortyApi;