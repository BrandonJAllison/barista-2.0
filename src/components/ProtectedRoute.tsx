<<<<<<< HEAD
import React, {useEffect} from 'react'
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

const ProtectedRoute = ({children} : {children: React.ReactNode}) => {
  
  const {user} = useAuth()
  const router = useRouter();

  useEffect(() => { 

    if(!user){
      router.push('/login')
    }
  }
    , [router, user])

    return <>
    
    {user ? children : null}
    
    </>
}

=======
import React, {useEffect} from 'react'
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

const ProtectedRoute = ({children} : {children: React.ReactNode}) => {
  
  const {user} = useAuth()
  const router = useRouter();

  useEffect(() => { 

    if(!user){
      router.push('/login')
    }
  }
    , [router, user])

    return <>
    
    {user ? children : null}
    
    </>
}

>>>>>>> 5916853dcfb47c3699343b26ef5debfe06a3fc8e
export default ProtectedRoute