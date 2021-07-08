import React, { useReducer } from 'react';
import axios from 'axios';
import DetailContext from './detailContext'
import detailReducer from './detailReducer';

import {GET_DETAILS} from '../types';

  const DetailState = props => {
    const initialState = {
      details :null
    };


const [state, dispatch] = useReducer(detailReducer, initialState);


const getDetails = async() => {
    try {
      const res = await axios.get('/api/details');
      

      dispatch({
        type: GET_DETAILS,
        payload: res.data
      });
    } catch (err) {
     
    }
  };

  return (
      <DetailContext.Provider
      value = {{
          details:state.details,
          getDetails
      }}
      >
        {props.children}
      </DetailContext.Provider>
  )
   
}
export default DetailState