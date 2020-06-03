import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Body = props => {

    const { dados, field } = props;

    return (
        <TableBody>
            {dados.map((item) => (
                <TableRow key={item.id}>
                    <TableCell align="center">
                        {item[field]}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}

const TabelaSimples = props => {

    const { titulo, field, dados } = props;

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">
                            {titulo}
                        </TableCell>
                    </TableRow>
                </TableHead>
                <Body dados={dados} field={field} />
            </Table>
        </TableContainer>
    )
};

export default TabelaSimples;