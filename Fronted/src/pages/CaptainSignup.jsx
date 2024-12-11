import { useState } from "react";
import { Link } from "react-router-dom";


const CaptainSignup = () => {


  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData,setUserData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();



    setUserData({
      username:{
        firstName:firstName,
        lastName:lastName
      },
      password:password,
      email:email
    })

    console.log(userData)

    setFirstName('')
    setLastName('')
    setpassword('')
    setemail("")
  };


  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
      <img
        className="w-16 mb-10"
        src="https://imgs.search.brave.com/ZMRpQ8g_KoB6Hk5mKemNfdIvK6beon4KJ6AYcNvdHTA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2MTQy/NXViZXItZHJpdmVy/LWxvZ28tcG5nLnBu/Zw"
        alt=""
      />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-base font-medium mb-2">What&apos;s Captain Name</h3>
          <div className="flex gap-4 mb-5 ">
            <input
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm "
              required
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
            <input
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm "
              
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last  name"
            />
          </div>

          <h3 className="text-base font-medium mb-2">What&apos;s Captain email</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm "
            required
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="email@example.com"
          />

          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm "
            required
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="password"
          />
          <button className="bg-[#111]  text-[#fff] font-semibold mb-7  px-4 py-2 border w-full text-lg placeholder:text-base ">
            Login
          </button>
          <p className="text-center">
            Already have a account ?{" "}
            <Link to={"/captain-login"} className="text-blue-600">
              Login in here
            </Link>
          </p>
        </form>
      </div>
      <div></div>
    </div>
  )
}

export default CaptainSignup