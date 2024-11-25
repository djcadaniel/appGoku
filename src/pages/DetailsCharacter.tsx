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
    if(currentPage > 0){
      setCurrentPage(currentPage - 1)
    }
  }

  const filterTransformations = () => {
    return dataCharacter?.transformations?.slice(currentPage, currentPage + 1)
  }
  console.log(dataCharacter?.originPlanet?.isDestroyed)
  return (
    <div className="grid grid-cols-1 px-5 py-5  relative -mt-[11.5rem]">
      <div className="container2 bg-[rgba(0,0,0,.2)] z-10 pt-[18rem]">
        <div className="flex">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <p className="text-white text-4xl mb-10 title_character">{dataCharacter.name}</p>
            <div className="w-full flex justify-center items-center">
              <img src={dataCharacter?.image} alt="" className="max-h-[500px]" />
            </div>
          </div>  
          <div className="w-[40%]  text-white flex flex-col items-center">
            <div className="">
              <p className="text-justify text-lg">{dataCharacter.description}</p>
            </div>
            <div className="flex w-full pt-12 justify-around">
              <p className="bg-[#FF6500] p-4 rounded-md">Raza: <br />{dataCharacter.race}</p>
              <p className="bg-[#FF6500] p-4 rounded-md">Género: <br /> {dataCharacter.gender}</p>
              <p className="bg-[#FF6500] p-4 rounded-md">KI: <br />{dataCharacter.ki}</p>
              <p className="bg-[#FF6500] p-4 rounded-md">Máximo KI: <br /> {dataCharacter.maxKi}</p>
            </div>
          </div>
        </div>
        <div className="flex p-10 ">
          <div className="w-[50%] text-white text-lg pl-16 flex flex-col gap-3">
            <p><span className="font-bold">Planeta:</span> {dataCharacter.originPlanet?.name}</p>
            <p>{dataCharacter.originPlanet?.description}</p>
            <p><span className="font-bold">Planeta Destruido: </span>
              {
                dataCharacter?.originPlanet?.isDestroyed ?
                  <span>SI</span> :
                  <span>NO</span>
              }
            </p>
          </div>
          <div className="w-[50%] flex justify-center">
            <img src={dataCharacter.originPlanet?.image} alt="" className="max-h-[300px] rounded-2xl"/>
          </div>
        </div>
        <div className="w-full  text-center">
          <h2 className="title_character text-2xl text-white pt-11">Transformaciones</h2>
          <button className='absolute bottom-[350px] md:bottom-[350px] left-5 text-4xl text-white z-50' onClick={prevPage}>
            <FaArrowAltCircleLeft />
          </button>
          <button className='absolute bottom-[350px] md:bottom-[350px] right-5 text-white text-4xl z-50' onClick={nexPage}>
            <FaArrowAltCircleRight />
          </button>
          {
            filterTransformations()?.map(item=>(
              <div key={item.id} className="flex flex-col justify-center items-center gap-7 mt-10">
                <div>
                  <img src={item.image} alt="" className="max-h-[500px]"/>
                </div>
                <div className="text-white text-xl">
                  <p>{item.name}</p>
                  <p>{item.ki}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
