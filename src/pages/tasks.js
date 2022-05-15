import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
// import { products } from '../__mocks__/products';
// import { ProductListToolbar } from '../components/product/product-list-toolbar';
// import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';


const Tasks = () => {
  
  <>
    <Head>
      <title>
        Tasks | Material Kit
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
    

      </Container>
    </Box>
  </>
};

Tasks.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Tasks;
