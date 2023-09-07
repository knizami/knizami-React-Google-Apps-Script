import React, { useEffect } from 'react';
import { Typography } from '@mui/material';

// This is a wrapper for google.script.run that lets us use promises.
// import { serverFunctions } from '../../utils/serverFunctions';

const Welcome = () => {

  useEffect(() => {
    // serverFunctions.doGet().then(setData).catch(error);
  }, []);

  return (
    <div style={{ padding: '3px', overflowX: 'hidden' }}>
      <Typography variant="h4" gutterBottom>
        ☀️ MUI demo! ☀️
      </Typography>

      <Typography variant="body1" gutterBottom sx={{ marginBottom: '30px' }}>
        This is a sample app that uses the <code>mui</code> library
      </Typography>
    </div>
  );
};

export default Welcome;
