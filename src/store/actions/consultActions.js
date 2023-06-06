import axios from 'axios';

import * as actionTypes from './actionTypes';

export const getRelatedSymptom_ = (
    data
) => ({
    type: actionTypes.GET_RELATED_SYMPTOM,
    data: data
});

export const getRelatedSymptom = (
    symptomList
) => {
    return async (dispatch) => {
        // const { data } = await axios.get(
        //   ``
        // );
        const data = ['s1', 's2', 's3' ];
        dispatch(getRelatedSymptom_(data));
    };
};

export const saveBasicInfo_ = (
    data
) => ({
    type: actionTypes.SAVE_BASIC_INFO,
    data: data
});

export const saveBasicInfo = (
    info
) => {
    return async (dispatch) => {
        // const { data } = await axios.get(
        //   ``
        // );
        const data = info;
        dispatch(saveBasicInfo_(data));
    };
};

export const chat_ = (
    data
) => ({
    type: actionTypes.CHAT,
    data: data
});

export const chat = (
    content
) => {
    return async (dispatch) => {
        // const { data } = await axios.get(
        //   ``
        // );
        const data = [
            { from: 'user', content: content },
            { from: 'ai', content: 'content' }
        ];
        dispatch(chat_(data));
    };
};

export const getResult_ = (
    data
) => ({
    type: actionTypes.GET_RESULT,
    data: data
});

export const getResult = (
) => {
    return async (dispatch) => {
        // const { data } = await axios.get(
        //   ``
        // );
        const data = { name: 'name_test', age: 'age_test' };
        dispatch(getResult_(data));
    };
};