export const INCRESE = "COUNT/INCRESE";


const initalState = {
};

const patientInfoReducer = (state = initalState, action) => {
  switch (action.type) {
    case INCRESE:
      return {
        ...state,
        count: action.count
      };
    default:
      break;
  }
  return state;
};

export default patientInfoReducer;