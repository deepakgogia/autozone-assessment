import React from 'react';
import { Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import { StyledTableCell, StyledTableRow } from './TableView.style';
import { PAGE_PER_ITEM } from '../../../constant';
import PropTypes from 'prop-types';

/**
 * To render Table view to display all the data
 * @param {*} props 
 * @returns 
 */
const TableView = (props) => {
    const { list, currentIndex, page } = props;

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="list of table data">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Sr No</StyledTableCell>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Gender</StyledTableCell>
                        <StyledTableCell>Birth Year</StyledTableCell>
                        <StyledTableCell>Eyes Color</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.slice(currentIndex, PAGE_PER_ITEM * page).map((item, index) => (
                        <StyledTableRow key={item.name}>
                            <StyledTableCell>{currentIndex + index + 1}</StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {item.name}
                            </StyledTableCell>
                            <StyledTableCell>{item.gender.slice(0, 1).toUpperCase() + item.gender.slice(1)}</StyledTableCell>
                            <StyledTableCell>{item.birth_year}</StyledTableCell>
                            <StyledTableCell>{item.eye_color.slice(0, 1).toUpperCase() + item.eye_color.slice(1)}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

TableView.propTypes = {
    /** List of items to render */
    list: PropTypes.array,
    /** current index to start render item  */
    currentIndex: PropTypes.number,
    /** Page number for pagination */
    page: PropTypes.number
};
export default TableView;