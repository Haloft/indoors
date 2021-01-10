import React from 'react';
import { useSelector } from 'react-redux'
import Title from './Title'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      
        
    },
});

export default function ShowHours() {
    const classes = useStyles();
    const projects = useSelector(state => state.projects)

    
    
  
    
    if (projects !== undefined) {

        return (
            <TableContainer component={Paper}>
                <Title>Projektien Tunnit</Title>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell style={{ fontWeight: 'bold' }} >Projekti</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }} align="right">Alkoi</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }} align="right">Tunnit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projects.map((row) => (
                            <TableRow key={row.attributes.name}>
                                <TableCell component="th" scope="row">
                                    {row.attributes.name}
                                </TableCell>
                                <TableCell align="right">{row.attributes.date}</TableCell>
                                <TableCell align="right">{row.attributes.sum_hours}</TableCell>                      
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
        








    } else {

        return (
            <TableContainer component={Paper}>
                <Title>Projektien Tunnit</Title>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell style={{ fontWeight: 'bold' }} >Projekti</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }} align="right">Alkoi</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }} align="right">Tunnit</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        );
        
    }
   
}
