import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Domain} from "../../data/dmn";
import './domain.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#051522',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: '#ffff',
  fontSize: '1.7rem',
  margin: '10px',
  borderRadius: '10px',
  fontFamily: 'Montserrat',
  height: '60vh',
  minHeight: 'fit-content',
}));



export default function ResponsiveGrid() {
  return (
    <section id="Domains">
    <div className="domain">
    <h1 className='dmnhead'>Domains</h1>
    <Box sx={{ flexGrow: 1 }} margin={{xs: 3,sm: 2,md: 6}}>
      
      <Grid container spacing={{ xs: 0, sm: 0, md: 2 }} columns={{ xs: 4, sm: 4, md: 12 }} >
        {Domain.map((Domain, index) => (
          <Grid item xs={12} sm={2} md={4} key={index}>
            <div className="flip-card-container">
              <div className="flip-card">
                <Item className="flip-card-front">
                  <img src={Domain.image} alt="img" width="90%"/>
                  {Domain.name}
                </Item>
                <Item className="flip-card-back">
                  <p> {Domain.content} </p>
                </Item>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>  
    </section>    
  );
}
