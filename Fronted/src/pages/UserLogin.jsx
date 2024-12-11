import { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [userData,setUserData] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault();


    setUserData({
      email:email,
      password:password
    })

    console.log(userData);
    

    setEmail('');
    setPassword('');
    
  }


  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-10"
          src="https://imgs.search.brave.com/4ATIxs0SwT-DsZ4ajF7jlixEaXFqw5Ys2I5OFQa8JEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"
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
          <p className="text-center" >New here ? <Link to={"/user-signup"} className="text-blue-600">Create new Account</Link></p>
        </form>
      </div>
      <div>
        <Link to={"/captain-login"}  className="bg-[#10b461] mb-5 flex items-center justify-center  text-[#fff] font-semibold   px-4 py-2 border w-full text-lg placeholder:text-base ">
        Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
