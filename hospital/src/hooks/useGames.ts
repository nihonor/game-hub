import useData from './useData';
import { Genre } from './useGenres';

export interface Platform{
  id:number;
  name:string;
  slug:string;

}
export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform }[]
    metacritic:number;
    rating_top:number;
  
  }
 

const useGames = (selectedGenre:Genre|null,selectedPlatform:Platform|null) => useData<Game>('/games',{params:{genres:selectedGenre?.id,platfroms:selectedPlatform?.id}},[selectedGenre?.id,selectedPlatform?.id])
export default useGames
