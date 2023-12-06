import React from 'react';
import { Menu, MenuItem } from '@mui/material';

type SubItems = Record<string, string>;

type Data = {
  [category: string]: SubItems;
};

const data: Data = {
  "商品分類": {
    "手機": {
      "全部手機": "All Phones",
      "iPhone512": "iPhone 512",
      // ... other items
    },
    "平板電腦電子書閱讀器": {
      "全部平板電腦電子書閱讀器": "All Tablets and E-readers",
      "AppleiPad182": "Apple iPad 182",
      // ... other items
    },
    // ... other categories
    // ... other main categories
  }
};

const createMenuItems = (items: SubItems) => {
  return Object.keys(items).map((itemName) => {
    const subItem = items[itemName];

    if (typeof subItem === 'object' && Object.keys(subItem).length > 0) {
      return (
        <Menu key={itemName} sx={{ display: 'inline-block' }} open={false}>
          {createMenuItems(subItem)}
        </Menu>
      );
    } else {
      // Wrap the string in an object
      return <MenuItem key={itemName}>{subItem}</MenuItem>;
    }
  });
};

const NaviWrapper = () => {
  return (
    <div>
      {Object.keys(data["商品分類"]).map((category) => (
        <Menu key={category} sx={{ display: 'inline-block' }} open={false}>
          {createMenuItems(data["商品分類"][category])}
        </Menu>
      ))}
    </div>
  );
};

export default NaviWrapper;
