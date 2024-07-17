import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface Genre{
    id:number
    name:string
}

interface FetchGenresResponse{
    count:number;
    results:Genre[]
}
const useGenres=() =>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller=new AbortController();
      apiClient
        .get<FetchGenresResponse>("/genres")
        .then((res) => setGenres(res.data.results))
        .catch((err) => {
            if(err instanceof CanceledError) return 
            setError(err.message)});

        return ()=>controller.abort()
    },[]);
    return{genres,error}
}

export default useGenres;	