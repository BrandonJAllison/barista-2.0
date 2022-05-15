import Head from 'next/head';
import {useState, useEffect} from 'react'
import { Box, Container} from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import db from '../firebase'




const Customers = () => {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
      
       onSnapshot(collection(db, 'customers'),(snapshot) => {
        setCustomers(snapshot.docs.map(doc => ({...doc.data(), id:doc.id})))  
      });

    }, [customers]);
return(
  <>
  <Head>
    <title>
      Customers | Barista CRM
    </title>
  </Head>
  <Box
    component="main"
    sx={{
      flexGrow: 1,
      py: 8
    }}
  >
    <Container maxWidth={false}>
      <CustomerListToolbar/>
      <Box sx={{ mt: 3 }}>
        <CustomerListResults customers={customers && customers} />
      </Box>
    </Container>
  </Box>
</>
);
  }
Customers.getLayout = (page) => (
<DashboardLayout>
  {page}
</DashboardLayout>
);

 

export default Customers;
