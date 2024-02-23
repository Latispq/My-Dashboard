import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GroupIcon from '@mui/icons-material/Group';
import { Divider } from '@mui/material';
import { green, purple } from '@mui/material/colors';
import { left, right } from '@popperjs/core';


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
        <p style={{color: "maroon", fontWeight: "bold"}}>Recent Transactions</p>
      </Typography>
      <Divider />
      <Typography variant="h5" component="div">
        <span style={{color: purple, fontSize: "14px", fontWeight: "bold", float: left, color: "purple"}}>9fh372</span>
        <span style={{fontSize: "12px", float: right, fontWeight: "bold", color: "green"}}>$218</span><br/>
        <span style={{fontSize: "12px", float: left}}>John Doe</span>
        <span style={{fontSize: "12px", float: right}}>2023-02-04</span>
      </Typography><br/><br/>
      <Divider />
      <Typography variant="h5" component="div">
        <span style={{color: purple, fontSize: "14px", fontWeight: "bold", float: left, color: "purple"}}>289k3b</span>
        <span style={{fontSize: "12px", float: right, fontWeight: "bold", color: "green"}}>$2,018</span><br/>
        <span style={{fontSize: "12px", float: left}}>Mary Lamboi</span>
        <span style={{fontSize: "12px", float: right}}>2024-01-10</span>
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function RecentTransactionsCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}