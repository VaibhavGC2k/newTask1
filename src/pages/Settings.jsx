import React from 'react';
import { Box, Typography, Tooltip, Button, Divider, Container } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AddLinkIcon from '@mui/icons-material/AddLink';
const Settings = () => {
  return (
    <>

      <Container sx={{ display: "flex" }}>
        <Box>

          <Box sx={{ backgroundColor: 'rgb(102, 132, 222)', padding: '10px' }}>
            <Typography variant="h4" color="white" gutterBottom>
              Settings
            </Typography>
            <Divider />
          </Box>
          <Box component="section" sx={{ p: 2, backgroundColor: 'rgba(237, 239, 245,0.4)' }}>
            <Box component="section" sx={{ p: 2 }}>
              <Tooltip title="Update your personal information.">
                <Button endIcon={<EditIcon />} fullWidth variant='contained'>Edit Profile</Button>
              </Tooltip>
            </Box>
            <Box component="section" sx={{ p: 2 }}>
              <Tooltip title=" Search for and connect with others.">
                <Button endIcon={<PersonSearchIcon />} fullWidth color='primary' variant='contained'>Find People</Button>
              </Tooltip>
            </Box>
            <Box component="section" sx={{ p: 2 }}>
              <Tooltip title=" Connect your accounts for easier access.">
                <Button endIcon={<AddLinkIcon />} fullWidth color='primary' variant='contained'>Link Accounts</Button>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Container>

    </>

  );
};

export default Settings;
