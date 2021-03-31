import {SET_SECTION,SET_SORT,SET_WINDOW,SET_DATA,SET_OPEN_MODAL,SET_LOADING,SET_VIRAL,SET_PAGE,SET_ERROR} from './constants';
import axios from 'axios';
const CLIENT_ID : string = (process.env.REACT_APP_CLIENT_ID as any) as string;


export const setSection = (payload : string)=>{
  return {type : SET_SECTION,payload}
};

export const setSort = (payload : string | null)=>{
  return {type : SET_SORT,payload}
};

export const setWindow = (payload : string | null)=>{
  return {type : SET_WINDOW,payload}
};

export const setData = (payload : any)=>{
  return {type : SET_DATA,payload}
};

export const setModal = (payload : any)=>{
  return {type : SET_OPEN_MODAL,payload}
};

export const setLoading = (payload : boolean)=>{
  return {type : SET_LOADING,payload}
};

export const setViral = (payload : boolean)=>{
  return {type : SET_VIRAL,payload}
};

export const setPage = (payload : number | null)=>{
  return {type : SET_PAGE,payload}
};

export const setError = (payload : boolean)=>{
  return {type : SET_ERROR,payload}
};

export const loadData = (param : string)=>{
  return (dispatch : any)=>{
    const CID : string = 'Client-ID ' + CLIENT_ID;
    axios.get('https://api.imgur.com/3/gallery' + param ,{headers : {'Authorization' : CID  }})
    .then((res)=>{
      dispatch(setData(res.data.data));
      dispatch(setLoading(false));
    })
    .catch((err)=>{
      console.log(err);
      dispatch(setLoading(false));
      dispatch(setError(true));
    })
  }
}
