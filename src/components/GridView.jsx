import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import SalesObtainedCard from './SalesObtainedCard';
import BarChartOverview from './BarChartOverview';
import NewClientsCard from './NewClientsCard';
import TrafficReceivedCard from './TrafficReceivedCard';
import RecentTransactionsCard from './RecentTransactionsCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
    <p style={{float: "left", fontSize: "20px", fontWeight: "bold", color: "maroon"}}>Welcome to your Dashboard</p>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Item><SalesObtainedCard /></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><NewClientsCard /></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><TrafficReceivedCard /></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><BarChartOverview /></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><RecentTransactionsCard /></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
