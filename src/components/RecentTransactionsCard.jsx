import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Transactions from './Transactions';
import { mockTransactions } from '../data/mockData';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const recentTransactions = mockTransactions.map(item => {
    
        return (
            <Transactions txId={item.txId} user={item.user} date={item.date} cost={item.cost} />
        )
    })

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <span style={{color: "maroon", fontWeight: "bold"}}>Recent Transactions</span>
      </Typography>
      <Divider />
    
    </CardContent>
  </React.Fragment>
);

export default function RecentTransactionsCard() {
  return (
    
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
      <div style={{height: 300, overflowY: "scroll"}}>
      <span>{recentTransactions}</span>
      </div>
    </Box>
  );
}