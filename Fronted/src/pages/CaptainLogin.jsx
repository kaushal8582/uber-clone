import { useState } from "react";
import { Link } from "react-router-dom";


const CaptainLogin = () => {
  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [captainData,setCaptainData] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault();


    setCaptainData({
      email:email,
      password:password
    })

    console.log(captainData);
    

    setEmail('');
    setPassword('');
    
  }

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
    <div>
      <img
        className="w-16 mb-10"
        src="https://imgs.search.brave.com/ZMRpQ8g_KoB6Hk5mKemNfdIvK6beon4KJ6AYcNvdHTA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2MTQy/NXViZXItZHJpdmVy/LWxvZ28tcG5nLnBu/Zw"
        alt=""
      />
      <form onSubmit={(e)=>submitHandler(e)}>
        <h3 className="text-lg font-medium mb-2">What&apos; s your email</h3>
        <input
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email"
          placeholder="email@example.com"
        />

        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
          required
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <button className="bg-[#111]  text-[#fff] font-semibold mb-7  px-4 py-2 border w-full text-lg placeholder:text-base ">
          Login
        </button>
        <p className="text-center" >Join a fleet ? <Link to={"/captain-signup"} className="text-blue-600">Rejister as a Captain</Link></p>
      </form>
    </div>
    <div>
      <Link to={"/user-login"}  className="bg-[#d5622d] mb-5 flex items-center justify-center  text-[#fff] font-semibold   px-4 py-2 border w-full text-lg placeholder:text-base ">
      Sign in as User
      </Link>
    </div>
  </div>
  )
}

export default CaptainLogin