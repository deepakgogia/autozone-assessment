import React from 'react';
import { Pagination as Pager } from "@mui/material";
import { PAGE_PER_ITEM } from '../../../constant';
import PropTypes from 'prop-types';
import './Pagination.scss';
/**
 * To Render pagination for user to change page to view more data
 * @param {*} props 
 * @returns 
 */
const Pagination = (props) => {
    const { count, page, onChange } = props;
    return (
        <div className="Pagination">
            <Pager
                count={Math.ceil(count / PAGE_PER_ITEM)}
                page={page}
                onChange={onChange}
            />
        </div>
    );
}

Pagination.propTypes = {
    /** Total count for Pagination */
    count: PropTypes.number,
    /** Pagination on-change handler function */
    onChange: PropTypes.func,
    /** Page number for pagination */
    page: PropTypes.number
};
export default Pagination;