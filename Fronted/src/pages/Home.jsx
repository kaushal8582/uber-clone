import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="bg-black h-screen w-full">
        <img className="w-full h-screen object-cover" src="https://images.unsplash.com/photo-1594306280489-ddaaf2439841?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className="absolute top-3 left-5 text-white font-bold " >Uber</h1>

        <div className="bg-white p-4 w-full absolute bottom-0 left-0 h-[17%]" >
            <h1 className="text-center text-[25px] font-semibold  ">Get Started with Uber</h1>
            <Link to={"/user-login"} className="w-full flex items-center justify-center text-white font-bold h-10 bg-black"  >Continue</Link>
        </div>
    </div>
  )
}

export default Home