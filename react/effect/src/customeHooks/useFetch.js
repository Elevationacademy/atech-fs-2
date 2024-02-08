import { useEffect, useState } from "react"

function useFetch(url){
    const [data,setData] = useState(null)
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch(url).then((result)=>{
            result.json().then(result => {          
              setTimeout(()=>{
                  setData(result)
                  setIsLoading(false)
                },5000)
              
            })
          })
    }, [])
    

    return {data, isLoading}
}

export default useFetch