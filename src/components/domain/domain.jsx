import React ,{useEffect} from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Domain} from "../../data/dmn";
import './domain.css'
import Aos from "aos";
import "aos/dist/aos.css"


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
  marginTop: '0',
  height: '400px',
  maxWidth: '100%',
}));



export default function ResponsiveGrid() {
  useEffect(()=>{
    Aos.init({duration : 2000})
  }, []);
  return (
    <section id="Domains">
    <div className="domain">
    <h1 className='dmnhead'>Domains</h1>
    <Box sx={{ flexGrow: 1 }} margin={{xs: 3,sm: 2,md: 6}}>
      
      <Grid container spacing={{ xs: 0, sm: 0, md: 2 }} columns={{ xs: 4, sm: 4, md: 12 }} >
        {Domain.map((Domain, index) => (
          <Grid item xs={12} sm={2} md={4} key={index}>
            <div className="flip-card-container" data-aos="fade-up">
              <div className="flip-card">
                <Item className="flip-card-front">
                  <img src={Domain.image} alt="img" width="90%"/>
                  <span className='dmnnm'>{Domain.name}<br/><br/></span>
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
