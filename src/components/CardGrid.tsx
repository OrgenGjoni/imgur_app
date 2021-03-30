import React,{useEffect} from 'react';
import {Grid,Card,CircularProgress,makeStyles} from '@material-ui/core';
import GridElement from './GridElement';
import {useSelector,useDispatch} from 'react-redux';
import {setModal} from '../store/actions';
import ModalWindow from './ModalWindow';
import Navigation from './Navigation';

const newStyle = makeStyles(()=>({
  container : {
    overflowY: 'hidden',
    scrollbarWidth : 'none',
    marginTop : 80,

  },
  loading : {
    minWidth : '100%',
    minHeight : '100%'
  }
}))
const CardGrid = ()=>{
  const state = useSelector((state  : any) => state);
  const dispatch = useDispatch();
  const style = newStyle();

  const openModal = (data :any)=>{
    dispatch(setModal(data));
  }


  const LoadingPage = ()=>(
    <Grid container
      justify = 'center'
      alignItems = 'center'
      className = {style.loading}
    >
        <CircularProgress size = {100}/>

    </Grid>
  )


  return(
    <Grid container
    justify = 'center'
    className = {style.container}>
      {state.loading && <LoadingPage />}
      {state.data.map((el : any)=>(<GridElement content = {el} openModal = {openModal}/>))}

      <ModalWindow />
      <Navigation />
    </Grid>
  );
}

export default CardGrid
