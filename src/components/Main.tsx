import React,{useEffect} from 'react';
import { Container,CssBaseline,makeStyles} from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import TopBar from './TopBar';
import CardGrid from './CardGrid';
import {loadData,setLoading} from '../store/actions';
import LoadingComponent from './LoadingComponent';
import ErrorTab from './ErrorTab';

const newStyle = makeStyles(()=>({
  container : {
    minWidth : '99.1vw',
    minHeight : '100vh',
    backgroundColor : '#2e3035',
    padding : 0,
    overflowY: 'hidden',
    scrollbarWidth : 'none',
  }
}))



  const Main = ()=>{

    const dispatch : any = useDispatch();
    const state = useSelector((state  : any) => state);

    const style : any = newStyle();


    const checkParam = (p : string | null) : string =>{
      if(p === null){
        return '';
      }else{
        return '/' + p
      }
    }

    const checkViral = (p : boolean)=>{
      if(p){
        return '?showViral=true'
      }else{
        return '?showViral=false'
      }
    }

    const checkPage = (p : number | null)=>{
      if(p === null){
        return '';
      }else{
        return '/' + p;
      }
    }

    //Probably using more than one useEffect looks ugly but in the circumstance that it doesn't allow me to ad more than one depency
    // to fire it I've chosen this way to implement it

    useEffect(()=>{
      const url : string = checkParam(state.section) + checkParam(state.sort) + checkParam(state.window) + checkPage(state.page) + checkViral(state.viral);
      dispatch(loadData(url));
      dispatch(setLoading(true));
    },[state.section,state.viral])

      useEffect(()=>{
        const url : string = checkParam(state.section) + checkParam(state.sort) + checkParam(state.window) + checkPage(state.page) + checkViral(state.viral);
        dispatch(loadData(url));
        dispatch(setLoading(true));
      },[state.sort,state.window])

      useEffect(()=>{
        const url : string = checkParam(state.section) + checkParam(state.sort) + checkParam(state.window) + checkPage(state.page) + checkViral(state.viral);
        dispatch(loadData(url));
        dispatch(setLoading(true));
      },[state.page])

    return(
      <>
        <CssBaseline />
        <Container component = {'main'}  className = {style.container}>
          <TopBar />
          {state.data === null && <LoadingComponent />}
          {state.data !== null && <CardGrid />}
          <ErrorTab />
        </Container>
      </>
    )
  }

  export default Main;
