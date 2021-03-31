
import {SET_SECTION,SET_SORT,SET_WINDOW,SET_DATA,SET_OPEN_MODAL,SET_LOADING,SET_VIRAL,SET_PAGE,SET_ERROR} from './constants';

const initialState = {
  section : 'hot',
  viral : false,
  sort : null,
  window : null,
  page : null,
  data : null,
  modal : false,
  loading : false,
  error : false
}


const reducer = (state = initialState,action : any)=>{

    switch (action.type) {
      case SET_SECTION:

        return Object.assign({},state,{
          section : action.payload,
          sort : null,
          window : null,
          page : null,
        });

    case SET_SORT:
        return Object.assign({},state,{
          sort : action.payload,
          page : null
        });
    case SET_WINDOW :
        return Object.assign({},state,{
          window : action.payload,
          page : null
        });
    case SET_DATA :
        return Object.assign({},state,{data : action.payload});
    case SET_OPEN_MODAL :
        return Object.assign({},state,{modal : action.payload});
    case SET_LOADING :
        return Object.assign({},state,{loading : action.payload});
    case SET_VIRAL :
        return Object.assign({},state,{viral : action.payload});
    case SET_PAGE :
        return Object.assign({},state,{page : action.payload});
    case SET_ERROR :
        return Object.assign({},state,{error : action.payload});

      default:
        return state;
    }



};

export default reducer;
