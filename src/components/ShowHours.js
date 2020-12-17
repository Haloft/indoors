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
        minWidth: 650,
    },
});

export default function ShowHours() {
    const classes = useStyles();
    const projects = useSelector(state => state);


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
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            {row.rows.map((r) => (
                                <TableCell key={r.name} align="right">{r.hours}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
