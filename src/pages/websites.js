import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { websites } from '../__mocks__/websites';
import { WebsiteListToolbar } from '../components/website/website-list-toolbar';
import { WebsiteCard } from '../components/website/website-card';
import { DashboardLayout } from '../components/dashboard-layout';

const Websites = () => (
  <>
    <Head>
      <title>
        Websites | Barista
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
        <WebsiteListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {websites.map((website) => (
              <Grid
                item
                key={website.id}
                lg={4}
                md={6}
                xs={12}
              >
                <WebsiteCard website={website} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

Websites.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Websites;