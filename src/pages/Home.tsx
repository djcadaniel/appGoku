import { useEffect, useState } from "react";
import { useGoku } from "../hooks/useGoku";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Spinner } from "../components/Spinner";
import { Details } from "../components/Details";
import logo from '/logo.png'

export const Home = () => {

  const {fetchGooku, data, isLoading} = useGoku();
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(()=>{
    fetchGooku()
  },[])

  console.log(data.length)

  const filterPersonajes = () =>{
    return data.slice(currentPage,currentPage + 1)
  }

  const nextPage = () => {
    if(currentPage < data.length - 1){
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if(currentPage > 0){
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="flex relative h-full w-full">
      <div className='w-full min-h-[100vh] absolute bottom-0 left-0 top-0 right-0 z-0 bg-[rgba(25,43,66,0.4)]'>
      </div>
      <img src={logo} alt="" className='absolute top-8 lg:top-5 left-[30%] lg:left-[40%] h-[6rem] lg:h-[7rem]'/>
      <button className='absolute top-[15%] md:top-[45%] left-5 text-4xl text-white z-50' onClick={prevPage}>
        <FaArrowAltCircleLeft />
      </button>
      <button className='absolute top-[15%] md:top-[45%] right-5 text-white text-4xl z-50' onClick={nextPage}>
      <FaArrowAltCircleRight />
      </button>
      <div className="relative w-full h-[100vh] flex px-6 lg:px-24 gap-3">
        {isLoading && (
          <div className='absolute left-0 top-80 w-full'>
            <Spinner />
          </div>
        )}
        {
          filterPersonajes().map(item => (
            <Details 
              key={item.name}
              name={item.name} 
              ki={item.ki} 
              maxKi={item.maxKi} 
              race={item.race} 
              gender={item.gender} 
              description={item.description}
              image={item.image}
            />
          ))
        }
      </div>
    </div>
  )
}