import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useGoku } from "../hooks/useGoku"
import { useCharacter } from "../hooks/useCharacter"
import { DetailsCharacter } from "./DetailsCharacter"
// import { DetailsCharacter } from "./DetailsCharacter"

export const Characters = () => {

  const {fetchGooku,data} = useGoku()
  const {fetchCharacter,dataCharacter } = useCharacter()

  useEffect(() => {
    fetchGooku()
  }, [])

  console.log(dataCharacter)

  const [search, setSearch] = useState<{character: number}>({
    character: 0
  })
  
  const handleChange = (e: ChangeEvent<HTMLSelectElement>)=>{
    setSearch({
      ...search,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchCharacter(search.character)
  }

  return (
    <div className="relative bg-orange-400 h-[100vh] z-10">
      <div className="absolute w-full h-full bg-[rgba(0,0,0,.5)] z-0"></div>
      <form action="" onSubmit={handleSubmit} className="relative z-50 pt-[150px] px-10 flex gap-5 w-full justify-center">
        <div className="flex">
          <select 
            id="character"
            name="character" 
            value={search.character}
            onChange={handleChange}
            className="rounded-md"
          >
            <option value="">Seleccione: </option>
            {
              data.map(character => (
                <option
                  key={character.id}
                  value={character.id}
                >
                  {character.name}
                </option>
              ))
            }
          </select>
        </div>
        <input type="submit" value='Buscar' className="bg-slate-700 text-white px-2 py-1 rounded-md"/>
      </form>
      <div className="w-full">
        <DetailsCharacter dataCharacter={dataCharacter}/>
      </div>
    </div>
  )
}