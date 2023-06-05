import { Select as MaterialSelect, MenuItem } from '@mui/material';
import { ReactComponent as SelectArrowIcon } from '../../../images/SelectArrowIcon.svg';

export const Select = ({ menuItems = [], defaultValue = '', selectedJobFilterId, setSelectedJobFilterId }) => {
    const handleChange = (event) => {
        setSelectedJobFilterId(event.target.value);
    };
    const renderMenuItems = () => {
        return menuItems.map(({ value, title }) => (
            <MenuItem value={value} key={value}>{title}</MenuItem>
        ))
    }

    return (
        <MaterialSelect
            value={selectedJobFilterId}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Without label' }}
            IconComponent={SelectArrowIcon}
        >
            {renderMenuItems()}
        </MaterialSelect>
    )
}