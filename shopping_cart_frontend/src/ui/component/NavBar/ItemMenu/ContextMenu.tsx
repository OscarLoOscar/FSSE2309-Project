import { NestedDropdown } from 'mui-nested-menu';
import { menuItemsData } from "./ItemMenuData"
import { Box } from '@mui/material';

export default function MenuMenu() {
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
        <NestedDropdown
          menuItemsData={menuItemsData}
          MenuProps={{ elevation: 3, sx: { width: '200', flex: 'none' } }}
          ButtonProps={{ variant: 'outlined', sx: { fontSize: '18px', color: 'white'/* your font size */ } }}
          onClick={() => console.log('Clicked')}
        />
      </Box>
    </>
  );

}