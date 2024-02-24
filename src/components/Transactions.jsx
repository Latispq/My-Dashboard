import React from 'react'
import Typography from '@mui/material/Typography';
import { left, right } from '@popperjs/core';
import Divider from '@mui/material/Divider';

export default function Transactions({txId, user, date, cost}) {
  return (
    <>
    <Typography variant="h5" component="div">
        <span style={{color: "purple", fontSize: "14px", fontWeight: "bold", float: left}}>{txId}</span>
        <span style={{fontSize: "12px", float: right, fontWeight: "bold", color: "green"}}>${cost}</span><br/>
        <span style={{fontSize: "12px", float: left}}>{user}</span>
        <span style={{fontSize: "12px", float: right}}>{date}</span>
      </Typography><br/><br/>
      <Divider />
      </>
  )
}