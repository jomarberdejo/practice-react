import {useState} from 'react';
import { auth } from "../../firebaseConfig/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  


  const handleChange = (e) =>{
   setFormData({...formData, [e.target.name]: e.target.value})
    
  }

  const handleSignIn = async (e) =>{
    e.preventDefault(e);
    try{
        const user = await signInWithEmailAndPassword(auth, formData.email, formData.password);
   
        user && navigate('/homepage');
    }
    catch(error){
        console.error(error.message);
       
    }
   
  }
  

  


  return (
    <>
      <form action="#" className="max-w-lg m-auto h-[calc(100svh-80px)]  flex items-center justify-center">
        <div className="max-w-[500px] w-full border border-gray-200 p-5 shadow-lg" > 
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name='email' className="input-layout" 
          required
          value={formData.email}
          onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name='password' className="input-layout"
          required
          value={formData.password}
          onChange={handleChange}
          />

        </div>

        <button type="submit" className="block border-hidden m-auto bg-blue-800 w-full p-2 text-white rounded mb-4"
          onClick={handleSignIn}
        >
          Sign In
        </button>

        <p className="font-medium">
          Don't have an account? <span className="underline underline-offset-2 text-blue-600 cursor-pointer"
          onClick={()=> navigate('/register')}
          >Register</span>
        </p>
        </div>

      </form>
    </>
  );
};

export default Login;
