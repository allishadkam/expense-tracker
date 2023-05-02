import React from 'react'
import './Sum.css'


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Sum = (props) => {
    
    
    const temp =  props.items.map(exp=>{
        return parseFloat(exp.amount) 
    })
    const temp2 =  props.fy.map(exp=>{
        return parseFloat(exp.amount) 
    })
    //temp.splice(0, 1)
    const sum = temp.reduce((partialSum, a) => partialSum + a, 0);
    const sum2 = temp2.reduce((partialSum, a) => partialSum + a, 0);
    console.log(props.items)
    console.log(temp)
console.log(props.fy)
//console.log(props.items)
  return (
    <Box sx={{ flexGrow: 1,width : 800,marginLeft:45 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Item>TOTAL : </Item>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item>{sum}</Item>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item>YEARLY : </Item>
        </Grid>
        <Grid item xs={6} md={6}>
          <Item>{sum2}</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Sum
