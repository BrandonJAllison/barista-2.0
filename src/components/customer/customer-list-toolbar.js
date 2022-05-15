import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon, 
  Typography,
  Backdrop,
  Modal, 
  Fade,
} from '@mui/material';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import { Download as DownloadIcon } from '../../icons/download';
import {useState} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addDoc, collection } from "firebase/firestore";
import db from '../../firebase'

const modal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const CustomerListToolbar = (props) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => { setOpen(true) };
  const handleClose = () => setOpen(false);
  const colRef = collection(db, 'customers');

  const formik = useFormik({
    initialValues: {
      email: '',
      businessName: '',
      phone: '',
      location: '',
      projectManager:''
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
      businessName: Yup
        .string()
        .max(255)
        .required(
          'Business Name is required'),
      phone: Yup
        .string()
        .max(255)
        .required(
          'Phone is required'),
      location: Yup
        .string()
        .max(255)
        .required(
          'Location is required'),
      projectManager: Yup
          .string()
          .max(255)
          .required(
            'Project Manager is required'),
      
    }),

    onSubmit: (e) => {
      addDoc(colRef, {
        email: formik.values.email,
        name: formik.values.businessName,
        phone: formik.values.phone,
        location: formik.values.location,
        project_manager: formik.values.projectManager
      });
    }
  });

 
  return(
  <Box {...props}>

    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
    >
        <Fade in={open}>
          <Box sx={modal}>
          <form onSubmit={formik.handleSubmit}>
          <TextField
              error={Boolean(formik.touched.businessName && formik.errors.businessName)}
              fullWidth
              helperText={formik.touched.firstName && formik.errors.firstName}
              label="Business Name"
              margin="normal"
              name="businessName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.businessName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.phone && formik.errors.phone)}
              fullWidth
              helperText={formik.touched.phone && formik.errors.phone}
              label="Phone"
              margin="normal"
              name="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.location && formik.errors.location)}
              fullWidth
              helperText={formik.touched.location && formik.errors.location}
              label="Location"
              margin="normal"
              name="location"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.location}
              variant="outlined"
            />
             <TextField
              error={Boolean(formik.touched.projectManager && formik.errors.projectManager)}
              fullWidth
              helperText={formik.touched.projectManager && formik.errors.projectManager}
              label="Project Manager"
              margin="normal"
              name="projectManager"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.projectManager}
              variant="outlined"
            />
              <Box sx={{ py: 2 }}>
             
            </Box>
            <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Create Customer Account
              </Button>
              </form>
          </Box>
        </Fade>
    </Modal>

    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        Customers
      </Typography>
      <Box sx={{ m: 1 }}>
        <Button
          startIcon={(<UploadIcon fontSize="small" />)}
          sx={{ mr: 1 }}
        >
          Import
        </Button>
        <Button
          startIcon={(<DownloadIcon fontSize="small" />)}
          sx={{ mr: 1 }}
        >
          Export
        </Button>
        <Button
          onClick={handleOpen}
          color="primary"
          variant="contained"
        >
          Add Customers
        </Button>
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search customer"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
  )};
