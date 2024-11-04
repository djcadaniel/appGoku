import axios from 'axios'
import { useState } from 'react'
import { z } from 'zod'

const Character = z.array(
  z.object({
    name: z.string(),
    race: z.string(),
    description: z.string(),
    ki: z.string(),
    maxKi: z.string(),
    gender: z.string(),
    image: z.string()
  })
)

type Character = z.infer<typeof Character>

export const useGoku = () => {

  const [data, setData] = useState<Character>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchGooku = async() => {

    setIsLoading(true)
    
      try{
        const getUrl = `https://dragonball-api.com/api/characters?limit=58`
        const {data} = await axios(getUrl)
        const {items} = data
        const result = Character.safeParse(items)
        if(result.success){
          // console.log(result)
          setData(result.data)
        }
      }catch(error){
        console.log(error)
      }finally{
        setIsLoading(false)
      }
  }

  return {
    fetchGooku,
    data,
    isLoading
  }
}