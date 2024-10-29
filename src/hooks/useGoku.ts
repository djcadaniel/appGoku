import axios from 'axios'
import { useState } from 'react'

export const useGoku = () => {

  const [data, setData] = useState([])

  const fetchGooku = async() => {
    
    try{
      const getUrl = `https://dragonball-api.com/api/characters?limit=58`
      const {data} = await axios(getUrl)
      const {items} = data 
      
      setData(items)
    }catch(error){
      console.log(error)
    }
  }

  return {
    fetchGooku,
    data
  }
}