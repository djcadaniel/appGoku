import { useEffect, useState } from 'react';
import { Details } from './components/Details'
import { useGoku } from './hooks/useGoku'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import logo from '/logo.png'

function App() {

  const {fetchGooku, data} = useGoku();
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
    <div className="container flex relative">
      <div className='w-full absolute bottom-0 left-0 top-0 right-0 z-0 bg-[rgba(25,43,66,0.4)]'>
      </div>
      <img src={logo} alt="" className='absolute top-8 lg:top-5 left-[30%] lg:left-[40%] h-[6rem] lg:h-[7rem]'/>
      <button className='absolute top-[15%] md:top-[45%] left-5 text-4xl text-white z-50' onClick={prevPage}>
        <FaArrowAltCircleLeft />
      </button>
      <button className='absolute top-[15%] md:top-[45%] right-5 text-white text-4xl z-50' onClick={nextPage}>
      <FaArrowAltCircleRight />
      </button>
      <div className="w-full h-full flex px-6 lg:px-24 gap-3 z-5">
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

export default App