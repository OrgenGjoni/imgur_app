import React,{useState} from 'react';
import {Button,Menu,MenuItem,makeStyles} from '@material-ui/core';
import {IoMdArrowDropdown} from 'react-icons/io';

const newStyle = makeStyles(()=>({
  button : {
    color : 'white',
    fontSize : '1.6em'
  },
  menuItem : {

    fontSize  : '1.6em',
    '&:hover': {
      color : '#1bb76e'
    }
  }
}))

interface iProps{
  changeSection(sect : string) : void,
  selected : string,
}

const SectionMenu = ({changeSection,selected} : iProps)=>{

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
        case 'hot':
          return 'Most Viral';
        case 'user':
          return 'User Submitted';
        case 'top':
          return 'Highest Scoring'
        default:
          return selected;
      }
    }


  return(
    <>
    <Button className = {style.button} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
         {showSelected(selected)} <IoMdArrowDropdown size = {'1.9em'} />
    </Button>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
    <MenuItem className = {style.menuItem} onClick={()=>{handleClose();changeSection('hot')}}>
      Most Viral
    </MenuItem>

    <MenuItem className = {style.menuItem} onClick={()=>{handleClose();changeSection('top')}}>
      Highest Scoring
    </MenuItem>


    <MenuItem className = {style.menuItem} onClick={()=>{handleClose();changeSection('user')}}>
      User Submitted
    </MenuItem>
    </Menu>
    </>
  )
}

export default SectionMenu;
