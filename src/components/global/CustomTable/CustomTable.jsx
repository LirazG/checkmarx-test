import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTable = ({ data }) => {

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });

    const classes = useStyles();

    const dataIsValid = (data) => data && data.length > 0;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {dataIsValid(data) && Object.keys(data[0]).map(item =>
                            <TableCell style={{ fontSize: '1.2rem', fontWeight: 'bold', opacity: 0.8 }} component="th" scope="row">{item}</TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataIsValid(data) && data.map((row) => (
                        <TableRow key={row.name}>
                            {Object.keys(row).map(item =>
                                <TableCell style={{ fontSize: '1rem' }} component="th" scope="row">{row[item]}</TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CustomTable;
