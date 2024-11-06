import { useState } from "react"
import { CharacterSearch } from "../types"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"

interface DetailsCharacterProps {
  dataCharacter: CharacterSearch
}

export const DetailsCharacter = ({dataCharacter}: DetailsCharacterProps) => {

  const [currentPage, setCurrentPage] = useState(0)

  const nexPage = () => {
    if(currentPage < dataCharacter.transformations.length - 1){
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if(currentPage > 0 - 1){
      setCurrentPage(currentPage - 1)
    }
  }

  const filterTransformations = () => {
    return dataCharacter?.transformations?.slice(currentPage, currentPage + 1)
  }
  console.log(dataCharacter)
  return (
    <div className="grid grid-cols-1 px-5 py-5 bg-[rgba(0,0,0,.2)] relative z-50">
      <div>
        <p className="text-white">{dataCharacter.name}</p>
        <div className="w-full flex justify-center items-center">
          <img src={dataCharacter?.image} alt="" className="max-h-[350px]" />
        </div>
        <div className="bg-[rgba(0,0,0,.5)] text-white flex flex-col items-center">
          <div>
            <p className="bg-green-700">Raza: {dataCharacter.race}</p>
            <p className="bg-red-500">Género: {dataCharacter.gender}</p>
            <p className="bg-yellow-500">KI: {dataCharacter.ki}</p>
            <p>Máximo KI: {dataCharacter.maxKi}</p>
          </div>
          <div>
            <p className="text-justify">{dataCharacter.description}</p>
          </div>
        </div>
        <p>Planet: {dataCharacter.originPlanet?.name}</p>
        <p>Planet: {dataCharacter.originPlanet?.description}</p>
        <p>Planet: {dataCharacter.originPlanet?.isDestroyed}</p>
        <img src={dataCharacter.originPlanet?.image} alt="" />
      </div>
      <div>
        <button className='absolute top-[150px] md:top-[45%] left-5 text-4xl text-white z-50' onClick={prevPage}>
          <FaArrowAltCircleLeft />
        </button>
        <button className='absolute top-[150px] md:top-[45%] right-5 text-white text-4xl z-50' onClick={nexPage}>
          <FaArrowAltCircleRight />
        </button>
        {
          filterTransformations()?.map(item=>(
            <div key={item.id}>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.ki}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
