import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '40px 16px',
    backgroundColor:"#121214",
    color: "#5f5f5f",
    textAlign: "center"
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">


        <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="#fff">
            2020 
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
          {/* <img width={150} src="/assets/courses-rocket.svg" alt=""/> */}
            <Typography>Bootcamp Gostack 11 - Rocketseat</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>


        <TimelineOppositeContent>
        <Typography variant="body2" color="#fff">
            2020 / Atual
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="inherit">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
          {/* <img width={150} src="/assets/courses-jstack.svg" alt=""/> */}
            <Typography>Bootcamp imersivo Plataforma JSTACK</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="#fff">
            2019 / atual
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
          {/* <img width={120} src="/assets/courses-origamid.svg" alt=""/> */}
            <Typography>Plataforma Origamid</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>

        
        <TimelineOppositeContent>
          <Typography variant="body2" color="#fff">
            2019 / 2020

          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
          {/* <img width={80} src="/assets/courses-b7web.svg" alt=""/> */}
            <Typography>Plataforma B7WEB</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

     

     

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="#fff">
            2015 / 2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <AccountBalanceIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
          {/* <img width={120} src="" alt=""/> */}
            <Typography>Faculdade Pitágoras de Uberlândia - Bacharel em Contabilidade</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="#fff">
            2011 / 2012
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <LaptopMacIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
              {/* <img width={80} src="" alt=""/> */}
            <Typography padding={10}>BitCompany - Técnico em Informática</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      

      
    </Timeline>
  );
}
