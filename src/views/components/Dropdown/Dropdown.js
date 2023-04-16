import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react"
import './Dropdown.scss';
import PropTypes from 'prop-types';

/**
 * To Render DropDown for user to select an item from list
 * @param {*} props 
 * @returns 
 */
export const DropDown = (props) => {
    const { selectedItem, onChange, list } = props;

    return (
        <div className="Dropdown">
            <div className="Dropdown__select">
                <label className="Dropdown__select--header">{"Select any Planet"}</label>
                <FormControl sx={{ m: 1, minWidth: 120 }} >
                    <InputLabel id="select-helper-label">Planet</InputLabel>
                    <Select
                        labelId="select-helper-label"
                        id="select-helper"
                        value={selectedItem}
                        onChange={onChange}
                        displayEmpty
                        MenuProps={
                            {
                                PaperProps: {
                                    style: {
                                        maxHeight: 200
                                    }
                                }
                            }
                        }
                        label="Planet"
                    >
                        {list.sort().map((planet, index) =>
                            <MenuItem key={planet.name + index} value={planet.name} style={{ height: 50 }} >
                                {planet.name}
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

DropDown.propTypes = {
    /** Selected Item for dropdown */
    selectedItem: PropTypes.string,
    /** Dropdown on-change handler */
    onChange: PropTypes.func,
    /** Dropdown list */
    list: PropTypes.array
};