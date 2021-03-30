import React from 'react';
import {Grid,Card,CircularProgress,makeStyles} from '@material-ui/core';


const newStyle = makeStyles(()=>({

  loading : {
    minWidth : '100vw',
    minHeight : '100vh'
  }
}))




const LoadingComponent = ()=>{

    const style = newStyle();

  return(  <Grid container
      justify = 'center'
      alignItems = 'center'
      className = {style.loading}
    >
        <CircularProgress size = {100}/>

    </Grid>
  );
}

export default LoadingComponent;
