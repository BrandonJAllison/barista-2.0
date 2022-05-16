import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';
import { doc, deleteDoc } from "firebase/firestore";
import db from '../../firebase';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const LeadListResults = ({ leads, ...rest }) => {

  const [SelectedLeadsId, setSelectedLeadsId] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedLeadsId = [];

    if (event.target.checked) {
      newSelectedLeadsId = leads.map((lead) => lead.id);
    } else {
      newSelectedLeadsId = [];
    }

    setSelectedLeadsId(newSelectedLeadsId);
    console.log(SelectedLeadsId)
    
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = SelectedLeadsId.indexOf(id);

    console.log(SelectedLeadsId);
    let newSelectedLeadsId = [];

    if (selectedIndex === -1) {
      newSelectedLeadsId = newSelectedLeadsId.concat(SelectedLeadsId, id);
    } else if (selectedIndex === 0) {
      newSelectedLeadsId = newSelectedLeadsId.concat(SelectedLeadsId.slice(1));
    } else if (selectedIndex === SelectedLeadsId.length - 1) {
      newSelectedLeadsId = newSelectedLeadsId.concat(SelectedLeadsId.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedLeadsId = newSelectedLeadsId.concat(
        SelectedLeadsId.slice(0, selectedIndex),
        SelectedLeadsId.slice(selectedIndex + 1)
      );
    }

    setSelectedLeadsId(newSelectedLeadsId);
  
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const deleteSelected = (SelectedLeadsId) => {
    SelectedLeadsId && SelectedLeadsId.forEach(id => {
      const docRef = doc(db, 'leads', {id});
      deleteDoc(docRef);
    });
  }

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={SelectedLeadsId.length === leads.length}
                    color="primary"
                    indeterminate={
                      SelectedLeadsId.length > 0
                      && SelectedLeadsId.length < leads.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                 Lead Manager
                </TableCell>
                <TableCell>
                
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leads && leads.map((lead) => (
                <TableRow
                  hover
                  key={lead.id}
                  selected={SelectedLeadsId.indexOf(lead.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={SelectedLeadsId.indexOf(lead.id) !== -1}
                      onChange={(event) => handleSelectOne(event, lead.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={lead.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(lead.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {lead.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {lead.email}
                  </TableCell>
                  <TableCell>
                    {lead.location}
                  </TableCell>
                  <TableCell>
                    {lead.phone}
                  </TableCell>
                  <TableCell>
                    {lead.project_manager}
                  </TableCell>

                  {SelectedLeadsId.includes(lead.id) ? (
                      
                      <DeleteForeverIcon fontSize="small" onClick={() => deleteSelected()}/>
                      
                       
                    ) : (
                       null
                      )}
                </TableRow>

                
                

              ))}

            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={leads.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

LeadListResults.propTypes = {
  leads: PropTypes.array.isRequired
};