import React, { createContext, useContext, useEffect } from "react";
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from 'firebase/auth'
import { auth } from "../firebase";


const AuthContext = createContext({})

export const useAuth = () => useContext<any>(AuthContext)

export const AuthContextProvider = ({
    children,
} : {
    children:React.ReactNode
}) => {

    const [user, setUser] = React.useState<any>(null)
    const [loading,setLoading] = React.useState(true)
    console.log(user)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                })
            }
            else{
                    setUser(null)
            }
            setLoading(false)

      
        })
        return () => unsubscribe()
    } , [])

    const signup = (email:string, password:string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
        setUser(null)
        await signOut(auth)
    }
    return <AuthContext.Provider value={{user, logout, login}}>
        {loading ? null : children}
        </AuthContext.Provider>

}

