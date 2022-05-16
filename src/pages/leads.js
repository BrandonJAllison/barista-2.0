import Head from 'next/head';
import {useState, useEffect} from 'react'
import { Box, Container} from '@mui/material';
import { LeadListResults } from '../components/leads/leads-list-results';
import { LeadListToolbar } from '../components/leads/leads-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import db from '../firebase'


const Leads = () => {

  const [leads, setleads] = useState([]);

  useEffect(() => {
      
       onSnapshot(collection(db, 'leads'),(snapshot) => {
        setleads(snapshot.docs.map(doc => ({...doc.data(), id:doc.id})))  
      });

    }, [leads]);
return(
  <>
  <Head>
    <title>
      Leads | Barista CRM
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
      <LeadListToolbar/>
      <Box sx={{ mt: 3 }}>
        <LeadListResults leads={leads && leads} />
      </Box>
    </Container>
  </Box>
</>
);
  }
Leads.getLayout = (page) => (
<DashboardLayout>
  {page}
</DashboardLayout>
);

 

export default Leads;
