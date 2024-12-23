import { useState } from "react"

interface DetailsProps {
  name: string,
  ki: string,
  maxKi: string,
  race: string,
  gender: string,
  description: string,
  image: string
}

export const Details = ({name, ki, maxKi, race, gender, description, image}: DetailsProps) => {

  const [showFull, setShowFull] = useState(false)

  const textLength = description.length;
  const readMore = ()=>{
    setShowFull(!showFull)
  }

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 h-full pb-12">
      <div className=" row-start-1 lg:col-start-1 w-full mt-36 md:mt-[200px] md:m-0">
        <h1 className="text-3xl md:text-[3.5rem] text-white text-center lg:text-left title_character">{name}</h1>
        <h2 className="text-xl md:text-[2rem] mt-2 lg:mt-8 text-white race_character text-center lg:text-left">{race}</h2>
      </div>
      <div className=" row-start-3 lg:row-start-2 lg:col-start-1 w-full flex flex-col justify-start items-start gap-3 md:gap-5 ">
        
        <div className="text-slate-100 mt-0 description_character text-justify">
          {
            showFull ?
            <div className="relative pb-2">
              <p>{description}</p>
              <button onClick={readMore} className="text-white bg-orange-500 px-2 py-1 rounded-md absolute right-0 bottom-0">Ocultar</button>
            </div> :
              textLength <= 200  ?
              description.slice(0,200) :
              <div className="relative pb-2">
                <p className="mb-2">
                  {description.slice(0,200) + '...'}
                </p>
                <button onClick={readMore} className="text-white bg-orange-500 px-2 py-1 rounded-md absolute right-0 bottom-0">
                  Leer más
                </button>
              </div>
          }
        </div>
        
        <div className="flex justify-center lg:justify-start w-full text-white gap-4 md:gap-10 mt-5 md:mt-10">
          <div className="attri flex flex-col text-center p-2 lg:px-5 lg:py-3 rounded-lg">
            <span className="k1">KI</span>
            <span>{ki}</span>
          </div>
          <div className="attri flex flex-col text-center px-5 py-3 rounded-lg">
            <span className="k2">MÁXIMO KI</span>
            <span>{maxKi}</span>
          </div>
          <div className="attri flex flex-col text-center px-5 py-3 rounded-lg">
            <span className="gender">GÉNERO</span>
            <span>{gender}</span>
          </div>
        </div>
      </div>
      <div className="row-start-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 w-full h-[650px] md:h-auto flex justify-center lg:justify-end xl:justify-center items-center py-12 z-40 ">
        <img src={image} alt="" className='max-h-[400px] md:max-h-[600px] character__image'/>
      </div>
    </div>
  )
}