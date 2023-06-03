import axios from 'axios';
import { ThunkAction } from 'redux-thunk';

import { User, UserProfile, UserStatistics } from '../reducers/userReducer';
import { AppDispatch, RootState } from '../store';
import * as actionTypes from './actionTypes';

export const increseCount_ = () => ({ type: actionTypes.TEST });

export const increseCount = () => { 
    return (dispatch) => {
        return axios
          .post('/api/signin/', request)
          .then((res) => dispatch(signInSuccess(res.data)))
          .catch((error) => dispatch(signInFail(null)));
    };
};