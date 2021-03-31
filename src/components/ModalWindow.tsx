import React from 'react';
import {Grid,Modal,Paper,CardContent,makeStyles} from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux';
import {setModal} from '../store/actions';

const newStyle = makeStyles(()=>({
  container : {
    margin : 'auto',
    maxWidth : '40%',
    minWidth : 350,
    minHeight : 500,
    marginTop : 20


  },
  paper : {
    width : '100%',
    height : '100%',


  },
  image : {
    width : '100%',
    height : '50%',
    maxHeight : 400,
    minWidth : 350,
  },
  video : {
      width : '100%',
      maxHeight : 350,
      minWidth : 350,
    },
  cardItem : {
    width : '15%'
  },
  cardContent : {
    height : '100%',
    display : 'flex',
    color : 'white',
    flexDirection : 'column',
    alignItems : 'strech',
    justify : 'space-between',
    backgroundColor : '#474a51',
    paddingBottom : 2
  },
  userLink : {
    textDecoration : 'none',
    color : '#0096c7'
  }
}))



const ModalWindow = ()=>{

  const state = useSelector((state  : any) => state);
  const dispatch = useDispatch();
  const style = newStyle();
  const content = state.modal;

  const closeModal = ()=>{
    dispatch(setModal(false));
  }


  const findMediaType = (data : any) : string =>{
    if(data.images !== undefined){
      if(content.images[0].type === "video/mp4"){
        return "video"
      }else{
        return "img"
      }
    }else{

      if(data.animated !== undefined && data.animated === true){

           return "video"
        }else{
          return "img"
        }
    }
  }

  const calculateDate = (date : string)=>{
      const dat = new Date(parseInt(date) * 1000);
      const fullDate = dat.getDate() + '/' + dat.getMonth() + '/' + dat.getFullYear()
      return fullDate;

  }


  const showMedia = ()=>{
    if(findMediaType(content) === 'img'){
      return <img alt = {content.title} className = {style.image} src = {content?.images ? content.images[0].link : content.link } />
    }else{
      return <video className = {style.video} src = {content.images !== undefined ? content.images[0].link : content.mp4} controls />
    }
  }



  return(

    <Modal
      open={state.modal}
      onClose={closeModal}
    >
      <Grid container
      alignItems = 'flex-start'
      justify = 'center'
      className = {style.container}>
        <Paper className = {style.paper}>

            {showMedia()}

          <CardContent className = {style.cardContent}>
              <h4>{content.title}</h4>
              <a className = {style.userLink} href = { 'https://imgur.com/user/' + content.account_url}><h3>{'@' + content.account_url}</h3></a>
              {content?.description && <h5>{content.description}</h5>}
              <small style = {{fontSize : '0.8em'}}>{calculateDate(content.datetime)}</small>


          </CardContent>

        </Paper>
      </Grid>
</Modal>

  );
}

export default ModalWindow
