import React from 'react';
import {Dialog,DialogContent,makeStyles} from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux';
import {setError} from '../store/actions';
import {ImSad} from 'react-icons/im'

const  newStyle = makeStyles(()=>({
  container : {
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center'
  }
}))

const ErrorTab = ()=>{
  const state = useSelector((state  : any) => state);
  const dispatch = useDispatch();
  const style = newStyle();

  const handleClose = ()=>{
    dispatch(setError(false));
  }

  return(
    <Dialog
        open={state.error}
        onClose={handleClose}

      >

        <DialogContent className = {style.container}>

          <ImSad size = {70} color = {'#2a9d8f'}/>
          <h3>Sorry, something went wrong!</h3>
        </DialogContent>

      </Dialog>
  )
}

export default ErrorTab;
