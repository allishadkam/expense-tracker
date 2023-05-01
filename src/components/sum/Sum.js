import React from 'react'
import './Sum.css'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const Sum = (props) => {
    
    
    const temp =  props.items.map(exp=>{
        return parseFloat(exp.amount) 
    })
    const temp2 =  props.fy.map(exp=>{
        return parseFloat(exp.amount) 
    })

    const sum = temp.reduce((partialSum, a) => partialSum + a, 0);
    const sum2 = temp2.reduce((partialSum, a) => partialSum + a, 0);
console.log(props.fy)
console.log(props.items)
  return (
    <List className='main' sx={{ width: '250px', maxWidth: 360, bgcolor: 'background.paper' }}>
        
  {
    
    <>
    <ListItem
      disableGutters
      secondaryAction={
          <ListItemText primary={`${sum}`} />       
      }>
        
      <ListItemText primary={`total`} />
    </ListItem>
    <ListItem
    disableGutters
    secondaryAction={
        <ListItemText primary={`${sum2}`} />       
    }>
      
    <ListItemText primary={`yearly`} />
  </ListItem></>
  }
</List>
  )
}

export default Sum
