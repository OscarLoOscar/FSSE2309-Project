import { NestedDropdown } from 'mui-nested-menu';
import { menuItemsData } from "./ItemMenuData"

export default function MenuMenu() {
  return (
    <>
      <NestedDropdown
        menuItemsData={menuItemsData}
        MenuProps={{ elevation: 13, sx: { width: '100' /* your font color */ } }}
        ButtonProps={{ variant: 'outlined', sx: { fontSize: '18px', color: 'white'/* your font size */ } }}
        onClick={() => console.log('Clicked')}
      />
    </>
  );

}