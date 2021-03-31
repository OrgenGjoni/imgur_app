import React from 'react';
import {Grid,IconButton,makeStyles} from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux';
import {setPage} from '../store/actions';


const newStyle = makeStyles(()=>({
  container : {
    minWidth : '100%',
    height : 100,
    padding : 10,
  },
  button : {
    color : '#b7e4c7',
    '&:hover': {
      color : '#1bb76e'
    }
  }
}))

const Navigation = ()=>{

  const state = useSelector((state  : any) => state);
  const dispatch = useDispatch();
  const style = newStyle();

  const loadMore = ()=>{
    dispatch(setPage(state.page + 1));
    window.scrollTo(0, document.body.scrollHeight / 2);
  }


  //IT works but loading so much mp4 videos and images the page becomes hell of heavy...


  return(
    <Grid container
      direction = 'row'
      justify = 'center'
      alignItems = 'center'
      className = {style.container}
    >


    <Grid item>
      <IconButton className = {style.button} onClick = {loadMore}>
        Load More...

      </IconButton>
    </Grid>

    </Grid>

  );
}

export default Navigation
