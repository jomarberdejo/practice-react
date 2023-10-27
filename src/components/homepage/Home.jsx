import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import Tasks from "./Tasks";

const Home = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const handleSignOut = async () =>{
        try{
            await signOut(auth);
            navigate('/');
        }
        catch(error){
            console.error(error.message);

        }
        
    }

    onAuthStateChanged(auth, (currUser) =>{
        setUser(currUser);
    })

    // console.log(auth.currentUser);
  return (
    <>
    <div>Homepage</div>

    <h1>Welcome {user?.email}</h1>
    
    <h2 
    className="text-center"
    > Your Tasks</h2>
    <Tasks />
    


    <button
    className="border border-blue-400 p-2 bg-slate-400 rounded"
    onClick={handleSignOut}>Logout</button>
    </>
    
  )
}

export default Home;