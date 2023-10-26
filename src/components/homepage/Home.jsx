import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


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

    console.log(auth.currentUser);
  return (
    <>
    <div>Homepage</div>

    <h1>Welcome {user?.email}</h1>

    <button onClick={handleSignOut}>Logout</button>
    </>
    
  )
}

export default Home;