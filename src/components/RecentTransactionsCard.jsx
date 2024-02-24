import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Transactions from './Transactions';
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
        <span style={{color: "purple", fontSize: "14px", fontWeight: "bold", float: left}}>82js83</span>
        <span style={{fontSize: "12px", float: right, fontWeight: "bold", color: "green"}}>$726</span><br/>
        <span style={{fontSize: "12px", float: left}}>John Lamin</span>
        <span style={{fontSize: "12px", float: right}}>03-08-2023</span>
      </Typography><br/><br/>
      <Divider />
      <Typography variant="h5" component="div">
        <span style={{color: "purple", fontSize: "14px", fontWeight: "bold", float: left}}>738B2L</span>
        <span style={{fontSize: "12px", float: right, fontWeight: "bold", color: "green"}}>$7.46</span><br/>
        <span style={{fontSize: "12px", float: left}}>Aminata Kawa</span>
        <span style={{fontSize: "12px", float: right}}>04-02-2024</span>
      </Typography><br/><br/>
      <Divider />
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