import { GET_RELATED_SYMPTOM, SAVE_BASIC_INFO, CHAT, GET_RESULT } from "../actions/actionTypes";

const initalState = {
  relatedSymptom: [],
  basicInfo: {},
  chatHistory: [],
  result: {},
};

const patientInfoReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_RELATED_SYMPTOM:
      return {
        ...state,
        relatedSymptom: action.data
      };
    case SAVE_BASIC_INFO:
      console.log(JSON.stringify(state.basicInfo))
      return {
        ...state,
        basicInfo: action.data
      };
    case CHAT:
      return {
        ...state,
        chatHistory: [ ...state.chatHistory, ...action.data ]
      };
    case GET_RESULT:
      return {
        ...state,
        result: action.data
      };
    default:
      break;
  }
  return state;
};

export default patientInfoReducer;