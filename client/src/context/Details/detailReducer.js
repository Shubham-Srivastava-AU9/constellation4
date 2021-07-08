import {GET_DETAILS} from '../types';


export default (state, action) => {
    switch (action.type) {
      case GET_DETAILS:
        return {
          ...state,
          details: action.payload
        };
        default:
            return state;
    }
}