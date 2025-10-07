import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const recipeNavigate = () =>{
    navigate("/recipes")
  }

  return (
    <div className="flex flex-col md:flex-row  md:px-10 px-6 h-screen w-full">
     
      <div className="left md:w-1/2  text-center gap-2 flex flex-col  md:items-center">
        <h1 className=" font-bold  md:mt-35 mt-10 md:text-7xl text-3xl">Taste the Best That</h1>
         <h1 className="font-bold text-yellow-400 px-2  md:text-7xl text-3xl">Surprise You</h1>
         <button onClick={recipeNavigate} className="mt-7 text-xl sm:text-2xl text-[#E9A319] border-2 border-[#E9A319] rounded-4xl px-3 py-1  md:px-6 md:py-3 hover:bg-[#E9A319] hover:text-zinc-900 transition-all">See Recipe's</button>
      </div>

      <div className="right mt-8 md:mt-15 md:w-1/2 flex justify-center">
        <div className="bg-red-400 w-64 h-64 md:w-120 md:h-120 md:rounded-full rounded-3xl  overflow-hidden shadow-lg flex items-center justify-center">'
            <img className="w-full h-full object-cover " src="https://www.sheknows.com/wp-content/uploads/2018/08/ti8wzfbbvdspxo8dg1ci.jpeg?resize=300"/>
        </div>
      </div>

    </div>
  )
}

export default Home
