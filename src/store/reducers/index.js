import { combineReducers } from "redux";
import patientInfoReducer from "./patientInfoReducer";

const rootReducer = combineReducers({
  patientInfoReducer
});

export default rootReducer;