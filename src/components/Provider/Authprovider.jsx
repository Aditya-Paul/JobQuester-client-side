import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true)

    // google sign in
    const googlesignIN = () => {
        setLoading(true)
        return signInWithPopup(auth, googleprovider)
    }

    // user signin
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Register
    const signup = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }  

    // user state 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const usermail = currentUser?.email || user?.email
            const loggedEmail = {email:usermail}
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
                axios.post('https://job-quester-server-side.vercel.app/jwt',loggedEmail,{withCredentials: true})
                .then(res=>{
                    console.log('get token',res.data)
                })
            }
            else(
                axios.post('https://job-quester-server-side.vercel.app/logout',loggedEmail,
                {withCredentials: true})
                .then(res=>{
                    console.log(res.data)
                })
            )
        })
        return () => {
            unsubscribe();
        }
    }, [])

    // user profile update
    const update = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // user logout
    const userlogout = () => {
        return signOut(auth)
    }

    const authinfo = {
        user,
        googlesignIN,
        signup,
        signin,
        update,
        userlogout,
        loading,
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default Authprovider;