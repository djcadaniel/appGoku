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
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-3 md:gap-5">
        <div className="w-full mt-10 md:mt-20 md:m-0">
          <h1 className="text-3xl md:text-[3.5rem] text-white text-right lg:text-left title_character">{name}</h1>
          <h2 className="text-xl md:text-[2rem] mt-2 lg:mt-8 text-white race_character text-right lg:text-left">{race}</h2>
        </div>
        <p className="text-slate-100 mt-10 lg:mt-7 description_character text-justify">
          {description}
        </p>
        <div className="flex justify-center lg:justify-start w-full text-white gap-10 mt-5 md:mt-10">
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
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end xl:justify-center items-center z-40">
        <img src={image} alt="" className='w-[40%] md:w-[80%] max-h-[800px] max-w-[350px] character__image'/>
      </div>
    </div>
  )
}