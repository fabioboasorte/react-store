import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

const TabelaHome = props => {

  const { autores, removeAutor, editaAutor } = props;

  // const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Autores</TableCell>
            <TableCell>Livros</TableCell>
            <TableCell align="center">Preços</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {autores.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.nome}</TableCell>
              <TableCell>{item.livro}</TableCell>
              <TableCell align="center">{item.preco}</TableCell>
              <TableCell align="center">
                <IconButton 
                  color="primary" 
                  aria-label="edit" 
                  component="span" 
                  onClick={() => { editaAutor(item.id) }}>
                    <CreateIcon />
                </IconButton>
                <IconButton 
                  color="secondary" 
                  aria-label="delete" 
                  component="span" 
                  onClick={() => { removeAutor(item.id) }}>
                    <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TabelaHome;