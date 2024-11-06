import { useState } from "react"
import { CharacterSearch } from "../types"
import axios from "axios"

export const useCharacter = () => {

  const [dataCharacter, setDataCharacter] = useState<CharacterSearch>({} as CharacterSearch)

  const fetchCharacter = async(searchId: number) => {
    try{
      const getUrl = `https://dragonball-api.com/api/characters/${searchId}`
      const {data} = await axios(getUrl)
      const result = CharacterSearch.safeParse(data)
      if(result.success){
        setDataCharacter(result.data)
      }
    }catch(e){
      console.log(e)
    }
  }


  return{
    fetchCharacter,
    dataCharacter
  }
}