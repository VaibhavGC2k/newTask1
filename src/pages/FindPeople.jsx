import React from 'react';
import { Box, Typography, Tooltip, Button, Divider, Container } from '@mui/material';
import PeopleList from '../components/PeopleList';

const FindPeople = () => {
  return (
    <>
        <Box>
          People You May Know..
        </Box>
        <Box>
          <PeopleList/>
        </Box>
    </>

  );
};

export default FindPeople;
