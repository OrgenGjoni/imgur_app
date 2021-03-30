import React,{useState} from 'react';
import {AppBar,Button,Menu,MenuItem, makeStyles} from '@material-ui/core';

import {IoMdArrowDropdown} from 'react-icons/io';

const newStyle = makeStyles(()=>({
  button : {
    color : 'white',
    fontSize : '1.5em'
  },
  menuItem : {
    fontSize  : '1.5em',
    '&:hover': {
      color : '#1bb76e'
    }
  }
}))

interface iProps{
  changeSort(sect : string) : void,
  selected : string,
}

const SortMenu = ({changeSort,selected} : iProps)=>{

    const style = newStyle();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const showSelected = (selected  :string) : string=>{

      switch (selected) {
        case 'top':
          return 'Popular';
        case 'time':
          return 'Newest';
        case 'rising':
          return 'Rising'
        default:
          return selected;
      }
    }


  return(
    <>
    <Button className = {style.button} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
         {selected === null ? 'SORT' : showSelected(selected)} <IoMdArrowDropdown size = {'1.9em'} />
    </Button>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}

    >
    <MenuItem className = {style.menuItem} onClick={()=>{handleClose();changeSort('top')}}>Popular</MenuItem>
    <MenuItem className = {style.menuItem} onClick={()=>{handleClose();changeSort('time')}}>Newest</MenuItem>
    <MenuItem className = {style.menuItem} onClick={()=>{handleClose();changeSort('rising')}}>Rising</MenuItem>

    </Menu>
    </>
  )
}

export default SortMenu;
