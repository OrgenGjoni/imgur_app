import React,{useState} from 'react';
import {AppBar,Button,Menu,MenuItem, makeStyles} from '@material-ui/core';
import {AiFillFire,AiFillTrophy,AiOutlineRise} from 'react-icons/ai';
import {FaUser} from 'react-icons/fa';
import {IoMdArrowDropdown} from 'react-icons/io';
import {GiSandsOfTime} from 'react-icons/gi';
const newStyle = makeStyles(()=>({
  button : {
    color : 'white',
    fontSize : '1.6em'
  },
  menuItem : {
    fontSize  : '1.5em'
  }
}))

interface iProps{
  changeWindow(sect : string) : void,
  selected : string,
}

const WindowMenu = ({changeWindow,selected} : iProps)=>{

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
        case 'day':
          return 'Today';
        case 'all':
          return 'All Time';
        default:
          return selected;
      }
    }


  return(
    <>
    <Button className = {style.button} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
         {selected === null ? 'Time Window' : showSelected(selected)} <IoMdArrowDropdown size = {'1.9em'} />
    </Button>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
    <MenuItem className = {style.menuItem} onClick={()=>{handleClose();changeWindow('day')}}>Today</MenuItem>
    <MenuItem className = {style.menuItem} onClick={()=>{handleClose();changeWindow('week')}}>Week</MenuItem>
    <MenuItem className = {style.menuItem} onClick={()=>{handleClose();changeWindow('month')}}>Month</MenuItem>
    <MenuItem className = {style.menuItem} onClick={()=>{handleClose();changeWindow('year')}}>Year</MenuItem>
    <MenuItem className = {style.menuItem} onClick={()=>{handleClose();changeWindow('all')}}>All Time</MenuItem>

    </Menu>
    </>
  )
}

export default WindowMenu;
