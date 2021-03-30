import React from 'react';
import {IconButton,Grid,Card,CardMedia,CardActions,CardActionArea,CardContent,makeStyles} from '@material-ui/core';
import {BiCommentDetail} from 'react-icons/bi'
import {ImArrowUp,ImArrowDown,ImEye} from 'react-icons/im'
import {AiOutlinePlayCircle} from 'react-icons/ai'


interface iProps{
  content : any,
  openModal(data : any) : void
}

const newStyle = makeStyles(()=>({
  card : {
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'strech',
    justify : 'felx-end',
    color : 'white',
    width : '20%',
    minWidth : 250,
    padding : 0,
    margin : 20
  },
  image : {
    width : '100%',
    height : 250
  },
  video : {
    width : '100%',
    height : 250
  },
  cardContent : {
    height : '100%',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'strech',
    justify : 'space-between',
    backgroundColor : '#474a51',
    paddingBottom : 2,
    cursor : 'pointer',
    '&:hover': {
      color : '#90e0ef'
    }
  },
  cardItem : {
    width : '25%'
  },
  playIcon : {
     position : 'absolute',
     zIndex : 100,
     minHeight : '100%',
     color : '#b7e4c7',
     '&:hover': {
       color : '#1bb76e'
     }
  }
}))


const GridElement = ({content,openModal} : iProps)=>{

  const style = newStyle();

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
          //return 'img'
    }
  }

  const calculateDate = (date : string)=>{
      const dat = new Date(parseInt(date) * 1000);
      const fullDate = dat.getDate() + '/' + (dat.getMonth() + 1 ) + '/' + dat.getFullYear()
      return fullDate;

  }

  //Round numbers to K or M
  const roundNumbers = (nr : number) : string=>{
    if(nr > 1000000){

        return Math.round(nr/1000000) + 'M'
      }else{
        return Math.round(nr/1000) + 'K'
      }

  }

  const showMedia = ()=>{
    if(findMediaType(content) === 'img'){
      return <img className = {style.image} src = {content?.images ? content.images[0].link : content.link } />
    }else{
      return (
          <>
          <Grid container
            justify = 'center'
            alignItems = 'center'
            className = {style.playIcon}>
          <AiOutlinePlayCircle   size = {70}   />
          </Grid>
          <video className = {style.video} src = {content.images !== undefined ? content.images[0].link : content.mp4}/>
          </>
        )
    }
  }



  return(

    <Card className = {style.card} >

  <CardActionArea onClick = {()=>openModal(content)}>
    {showMedia()}
</CardActionArea>



  <CardContent className = {style.cardContent} onClick = {()=>openModal(content)}>
    <h4>{content.title}</h4>
    <small style = {{fontSize : '0.8em'}}>{calculateDate(content.datetime)}</small>
    <Grid container
      direction = 'column'
      justify = 'flex-end'
      alignItems = 'center'
      style = {{height : '100%'}}
    >

        <Grid container
          direction = 'row'
          justify = 'space-between'
          alignItems = 'center'

        >

          <Grid container direction="row" alignItems="center" justify = 'space-around' className = {style.cardItem}>
            <Grid item>
              <p>{content.comment_count}</p>
            </Grid>
            <Grid item>
              <BiCommentDetail color = {'#8e9094'} size = {'1.2em'}/>
            </Grid>
          </Grid>

          <Grid container direction="row" alignItems="center" justify = 'space-around' className = {style.cardItem}>
            <Grid item>
              <p>{content.ups > 1000 ? roundNumbers(content.ups) : content.ups}</p>
            </Grid>
            <Grid item>
              <ImArrowUp color = {'#8e9094'} size = {'1.2em'}/>
            </Grid>
          </Grid>

          <Grid container direction="row" alignItems="center" justify = 'space-around' className = {style.cardItem}>
            <Grid item>
            <p>{content.views > 1000 ? roundNumbers(content.views) : content.views}</p>

            </Grid>
            <Grid item>
              <ImEye color = {'#8e9094'} size = {'1.2em'}/>
            </Grid>
          </Grid>



        </Grid>


      </Grid>


  </CardContent>

</Card>

  );
}

export default GridElement;
