import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PaidIcon from '@mui/icons-material/Paid';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <PaidIcon />
      </Typography>
      <Typography variant="h5" component="div">
        $4,000
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Sales Obtained
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function SalesObtainedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}