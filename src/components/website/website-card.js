import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export const WebsiteCard = ({ website, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <Avatar
          alt="website"
          src={website.media}
          variant="square"
          width={300}
        />
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {website.title}
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        {website.description}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <ClockIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Updated 2hr ago
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <ArrowCircleUpIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {website.totalDownloads}
            {' '}
            View Website
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

WebsiteCard.propTypes = {
  website: PropTypes.object.isRequired
};
