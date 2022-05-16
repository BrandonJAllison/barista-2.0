import Head from 'next/head';
import {useState, useEffect} from 'react'
import { Box, Container} from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import db from '../firebase'

const Leads = () => {

    const [leads, setLeads] = useState([]);

    useEffect(() => {
      
        onSnapshot(collection(db, 'leads'),(snapshot) => {
         setLeads(snapshot.docs.map(doc => ({...doc.data(), id:doc.id})))  
       });
 
     }, [leads]);

    
    
    return (
    <>
    
    </>
     );  
    }

Leads.getLayout = (page) => (
<DashboardLayout>
{page}
</DashboardLayout>
);


export default Leads;