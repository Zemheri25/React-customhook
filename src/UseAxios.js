import { useEffect, useState } from "react"
import axios from "axios";

function useAxios (url) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error1, setError] = useState("");

    const getApi = async () => {
        setLoading(true)
        try {
            const response = await axios(url);
            console.log(response.data)
            setData(response?.data)
            setLoading(false)
            
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(error.message)
        }
        
    }


    useEffect(() => {
        getApi();
    }, [])

    return {data, loading, error1}

}

export default useAxios;