import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import  DragList  from '../components/tasks/drag-list';
import { TasksListToolbar } from '../components/tasks/task-list-toolbar';



const Tasks = () => {

  

return(
  <>
    <Head>
      <title>
        Tasks | Barista
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
      <TasksListToolbar/>
        <DragList />
      </Container>
    </Box>
  </>
)
  

};

Tasks.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Tasks;
