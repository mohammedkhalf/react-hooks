import {useEffect , useState} from 'react'
import axios from 'axios'

export function useAxiosGet (url)
{
    const [Request , setRequest] = useState({
        loading : false,
        data:null,
        error:false
    })

    useEffect( ()=> {
        setRequest({
            loading : true,
            data:null,
            error:false
        })
        axios.get(url)
                .then(response=>{
                    setRequest({
                        loading : false,
                        data:response.data,
                        error:false,            

                    })
                }) //then
            .catch( ()=> {
                setRequest({
                    loading:false,
                    data:null,
                    error:false
                })

            }) //catch

    },[url]) //use Effect

    return Request

}