import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T>{
    count:number;
    results:T[]
}
const useData=<T>(endpoint:string) =>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller=new AbortController();
      apiClient
        .get<FetchResponse<T>>(endpoint)
        .then((res) => setData(res.data.results))
        .catch((err) => {
            if(err instanceof CanceledError) return 
            setError(err.message)});

        return ()=>controller.abort()
    },[]);
    return{data,error}
}

export default useData;	